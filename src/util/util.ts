import { PARAM_VALUE_MULTIPLIER, MIDI_VALUE_MULTIPLIER, MODEL_IDS } from "../api/constants";

export const textDecoder = new TextDecoder('utf-8');

export function getObjKeyByValue(val: any, obj: any): string {
    for (let key in obj) {
        if(obj[key] === val) {
            return key;
        }
    }
    return null;
}

export function intTo2Byte(val: number): Uint8Array {
    const byte1 = val & 0x7F;
    const byte2 = val >> 7;
    return Uint8Array.from([byte1, byte2]);
}

export function bytes2ToInt(bytes: Uint8Array): number {
    return (bytes[0] & 0x7F) | ((bytes[1] & 0x7F)<<7);
}

export function parameterValueBytesToInt(byteArray): number {
    return (byteArray[0] & 0x7F) | ((byteArray[1] & 0x7F)<<7) | ((byteArray[2] & 0x7F)<<14);
}

export function parameterValueIntToBytes(value: number): Uint8Array {
    const byte1 = value & 0x7F;
    const byte2 = (value >> 7) & 0x7F;
    const byte3 = (value >> 14) & 0x7F;
    return Uint8Array.from([byte1, byte2, byte3]);
}

export function convertToRange(value: number, toRange: [number, number], fromRange: [number, number] = [0, 10]): number {
    const percent = (value - fromRange[0]) / (fromRange[1] - fromRange[0]);
    return percent * (toRange[1] - toRange[0]) + toRange[0];
}

export function clampValue(val: number, range: [number, number], step: number): number {
    let value = Math.min(Math.max(range[0], val), range[1]);
    if (step && value % step > 0) {
        value = value - value % step;
    }
    return value;
}

export function toFixedNumber(value: number, precision: number = 2): number {
    const pow = Math.pow(10, precision);
    return +( Math.round(value * pow) / pow );
  }

export function midiValueToAxeFx(value: number): number {
    return (value / MIDI_VALUE_MULTIPLIER) * PARAM_VALUE_MULTIPLIER;
}

export function axeFxValueToMIDI(value: number): number {
    return (value / PARAM_VALUE_MULTIPLIER) * MIDI_VALUE_MULTIPLIER;
}

export function axeFxValueToFloat(value: number): number {
    return value / PARAM_VALUE_MULTIPLIER;
}

export function floatValueToAxeFx(value: number): number {
    return value * PARAM_VALUE_MULTIPLIER;
}

export function bytesToPresetNumber(data: Uint8Array, axeFxModelId) {
    if (axeFxModelId === MODEL_IDS['AX8']) {
        return (data[0] & 0x7F) | ((data[1] & 0x7F) << 7);
    } else {
        return   (data[0] & 0x7F) << 7 | data[1];
    }
}

export function isElectron(): boolean {
    return navigator.userAgent.toLowerCase().indexOf(' electron/') > -1;
}

export function numRange(start: number, end: number) {
    return Array.from(Array(end - start + 1), (_, i) => start + i);
}

export function generateId() {
    const randomValue = <Uint8Array>window.crypto.getRandomValues(new Uint8Array(3));
    return Array.from(randomValue).join('');
}

export function reorder(list: Array<any>, from: number, to: number): Array<any> {
    const result = Array.from(list);
    const [removed] = result.splice(from, 1);
    result.splice(to, 0, removed);
    return result;
};

export function getIndexInParent (el) {
    return Array.from(el.parentNode.children).indexOf(el);
}

export function resolveRelativeValue(input: number, current: number, step: number = 1, range: [number, number] = [0, 10]): number {
    return clampValue(current + (input - 64) * step, range, null);
}

export function handleSubmit(callback) {
    return (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObj = {};
        for (const [key, value] of formData.entries()) {
            formObj[key] = value;
        }
        callback(formObj);
        return false;
    }
}

export function debounce(func, wait: number, immediate: boolean = false) {
	let timeout;
	return function() {
        const context = this;
        const args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
