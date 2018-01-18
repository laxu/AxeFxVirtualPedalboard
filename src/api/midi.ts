import { SYSEX_ENABLED } from './constants';
import { AxeFx } from './axefx';
import { GenericMIDIController } from './generic-midi-controller';
import { generateId } from '../util/util';
const WebMidi = require('webmidi');

let axeFxInstance, controllerInstance;

export interface MIDIInput {
    name: string;
    addListener: (type: string, channel: number | 'all', listener: any) => MIDIInput;
    removeListener: (type?: string, channel?: number | 'all', listener?: any) => MIDIInput;
}

export interface MIDIOutput {
    name: string;
    sendControlChange: (controlChange: number, value?: number, channel?: number | 'all', options?: any) => MIDIOutput;
    sendSysex: (header: number[], message: number[], options?: any) => MIDIOutput;
}

export enum MIDIControllerType {
    AxeFx = 'Axe-Fx',
    Controller = 'MIDI controller'
}

export enum MIDIListenerType {
    CC = 'controlchange',
    SysEx = 'sysex'
}

export interface MIDIController {
    id?: number | string;
    type?: MIDIControllerType;
    input: MIDIInput;
    output: MIDIOutput;
    channel?: number | 'all';
}

export interface MIDIDeviceData {
    id: string;
    type: MIDIControllerType;
    inputName: string;
    outputName: string;
    channel?: number | 'all';
}

export enum MIDIDeviceStateChange {
    Connected = 'connected',
    Disconnected = 'disconnected'
}

export enum MIDIDeviceType {
    Input = 'input',
    Output = 'output'
}

export class WebMidiWrapper {
    static webMidi = WebMidi;

    static init(callback: any) {
        this.webMidi.enable((err: any) => {
            if (err) {
                console.log('WebMidi could not be enabled.', err);
            } else {
                console.log('WebMidi enabled!');
                console.log('inputs', this.webMidi.inputs);
                console.log('outputs', this.webMidi.outputs);
            }
            this.webMidi.addListener(MIDIDeviceStateChange.Connected, event => {
                console.log('connected device', event);
            });
            this.webMidi.addListener(MIDIDeviceStateChange.Disconnected, event => {
                console.log('disconnected device', event);
                const device = event.port;
                const axeFx = getAxeFxInstance();
                const controller = getControllerInstance();
                if (device.type === MIDIDeviceType.Input) {
                    if (axeFx.input.name === device.name) {
                        axeFx.disconnect();
                    } else if (controller.input.name === device.name) {
                        controller.disconnect();
                    }
                }
            });
            callback();
        }, SYSEX_ENABLED);
    }
}

export function isAxeFx(device: MIDIInput | MIDIOutput) {
    return device.name.indexOf('AXE-FX') !== -1 || device.name.indexOf('AX8') !== -1;
}

export function updateDevices(devices: MIDIDeviceData[], dispatch: any): void {
    return devices.forEach(device => {
        if (device.type === MIDIControllerType.AxeFx) {
            if (axeFxInstance) {
                // Update existing
                axeFxInstance.updateSettings({
                    input: WebMidiWrapper.webMidi.getInputByName(device.inputName),
                    output: WebMidiWrapper.webMidi.getOutputByName(device.outputName),
                    channel: device.channel
                });
            } else {
                axeFxInstance = new AxeFx({
                    input: WebMidiWrapper.webMidi.getInputByName(device.inputName),
                    output: WebMidiWrapper.webMidi.getOutputByName(device.outputName),
                    channel: device.channel,
                }, dispatch);
            }
        } else {
            if (controllerInstance) {
                controllerInstance.updateSettings({
                    input: WebMidiWrapper.webMidi.getInputByName(device.inputName),
                    output: WebMidiWrapper.webMidi.getOutputByName(device.outputName),
                    channel: device.channel
                });
            } else {
                controllerInstance = new GenericMIDIController({
                    id: generateId(),
                    input: WebMidiWrapper.webMidi.getInputByName(device.inputName),
                    output: WebMidiWrapper.webMidi.getOutputByName(device.outputName),
                    channel: device.channel
                }, dispatch);
            }
           
        }
    });
}

export function getAxeFxInstance(): AxeFx {
    return axeFxInstance;
}

export function getControllerInstance(): GenericMIDIController {
    return controllerInstance;
}