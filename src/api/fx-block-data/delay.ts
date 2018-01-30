import { PARAM_TYPE } from "./fx-param-common";
import { tempo, bypassMode, lfoType, filterSlope, phaseReverse, lfoTarget, lfoDepthRange } from "./fx-param-select";

export const delayType = [
    'DIGITAL MONO',
    'DIGITAL STEREO',
    'ANALOG MONO',
    'ANALOG STEREO',
    'MONO TAPE',
    'STEREO TAPE',
    'PING-PONG',
    'DUAL DELAY',
    'REVERSE DELAY',
    'SWEEP DELAY',
    'DUCKING DELAY',
    'VINTAGE DIGITAL',
    '2290 W/ MOD',
    'AMBIENT STEREO',
    'DELUXE MIND GUY',
    'MONO BBD',
    'STEREO BBD',
    'LO-FI TAPE'
];

export const delayConfig = [
    'MONO',
    'STEREO',
    'PING-PONG',
    'DUAL',
    'REVERSE',
    'SWEEP',
    'TAPE'
];

const delay = [
    { id: 0, label: 'Type', type: PARAM_TYPE.Select, values: delayType, range: [0, delayType.length - 1], step: 1, labelGroup: 'Basic' },
    { id: 1, label: 'Config', type: PARAM_TYPE.Select, values: delayConfig },
    { id: 2, label: 'Time', type: PARAM_TYPE.Knob, step: 0.001, range: [1, 8000], precision: 0, unit: 'ms' },
    { id: 3, label: 'Ratio', type: PARAM_TYPE.Knob },
    { id: 4, label: 'Feedback', type: PARAM_TYPE.Knob },
    { id: 6, label: 'Feedback R', type: PARAM_TYPE.Knob },
    { id: 7, label: 'Echo pan', type: PARAM_TYPE.Knob },
    { id: 8, label: 'Spread', type: PARAM_TYPE.Knob },
    { id: 9, label: 'Tempo', type: PARAM_TYPE.Select, values: tempo },
    { id: 10, label: 'Low cut', type: PARAM_TYPE.Knob },
    { id: 11, label: 'High cut', type: PARAM_TYPE.Knob },
    { id: 12, label: 'LFO 1 rate', type: PARAM_TYPE.Knob },
    { id: 13, label: 'LFO 2 rate', type: PARAM_TYPE.Knob },
    { id: 14, label: 'LFO 1 depth', type: PARAM_TYPE.Knob },
    { id: 15, label: 'LFO 2 depth', type: PARAM_TYPE.Knob },
    { id: 16, label: 'Drive', type: PARAM_TYPE.Knob },
    { id: 17, label: 'Mix', type: PARAM_TYPE.Knob, range: [0, 100], step: 1, unit: '%' },
    { id: 18, label: 'Level', type: PARAM_TYPE.Knob },
    { id: 19, label: 'Balance', type: PARAM_TYPE.Knob },
    { id: 20, label: 'Bypass mode', type: PARAM_TYPE.Select, values: bypassMode },
    { id: 21, label: 'Global', type: PARAM_TYPE.Switch },
    { id: 23, label: 'Input gain', type: PARAM_TYPE.Knob },
    { id: 24, label: 'LFO 1 type', type: PARAM_TYPE.Select, values: lfoType },
    { id: 25, label: 'LFO 2 type', type: PARAM_TYPE.Select, values: lfoType },
    { id: 26, label: 'Time R', type: PARAM_TYPE.Knob },
    { id: 27, label: 'Repeat hold', type: PARAM_TYPE.Switch },
    { id: 28, label: 'Master feedback', type: PARAM_TYPE.Knob },
    { id: 29, label: 'Tempo R', type: PARAM_TYPE.Select, values: tempo },
    { id: 30, label: 'Feedback L>R', type: PARAM_TYPE.Knob },
    { id: 31, label: 'Feedback R>L', type: PARAM_TYPE.Knob },
    { id: 32, label: 'Level 1', type: PARAM_TYPE.Knob },
    { id: 33, label: 'Level 2', type: PARAM_TYPE.Knob },
    { id: 34, label: 'Pan 1', type: PARAM_TYPE.Knob },
    { id: 35, label: 'Pan 2', type: PARAM_TYPE.Knob },
    { id: 36, label: 'LFO 1 phase', type: PARAM_TYPE.Knob },
    { id: 37, label: 'LFO 2 phase', type: PARAM_TYPE.Knob },
    { id: 38, label: 'X fade time', type: PARAM_TYPE.Knob },
    { id: 39, label: 'Run', type: PARAM_TYPE.Switch },
    { id: 40, label: 'Trigger restart', type: PARAM_TYPE.Switch },
    { id: 41, label: 'Filter slope', type: PARAM_TYPE.Select, values: filterSlope },
    { id: 42, label: 'Duck attenuation', type: PARAM_TYPE.Knob },
    { id: 43, label: 'Duck threshold', type: PARAM_TYPE.Knob },
    { id: 44, label: 'Duck release', type: PARAM_TYPE.Knob },
    { id: 45, label: 'Diffusion', type: PARAM_TYPE.Knob },
    { id: 46, label: 'Diff time', type: PARAM_TYPE.Knob },
    { id: 47, label: 'Phase reverse', type: PARAM_TYPE.Select, values: phaseReverse },
    { id: 48, label: 'LFO 1 target', type: PARAM_TYPE.Select, values: lfoTarget },
    { id: 49, label: 'LFO 2 target', type: PARAM_TYPE.Select, values: lfoTarget },
    { id: 50, label: 'LFO 1 tempo', type: PARAM_TYPE.Select, values: tempo },
    { id: 51, label: 'LFO 2 tempo', type: PARAM_TYPE.Select, values: tempo },
    { id: 52, label: 'Sweep rate', type: PARAM_TYPE.Knob },
    { id: 53, label: 'Sweep type', type: PARAM_TYPE.Select, values: lfoType },
    { id: 54, label: 'Sweep phase', type: PARAM_TYPE.Knob },
    { id: 55, label: 'Sweep tempo', type: PARAM_TYPE.Select, values: tempo },
    { id: 56, label: 'Start freq', type: PARAM_TYPE.Knob },
    { id: 57, label: 'Stop freq', type: PARAM_TYPE.Knob },
    { id: 58, label: 'Resonance', type: PARAM_TYPE.Knob },
    { id: 59, label: 'Q', type: PARAM_TYPE.Knob },
    { id: 60, label: 'Bit reduction', type: PARAM_TYPE.Knob, range: [0, 24], step: 1, precision: 1 },
    { id: 61, label: 'Freq 1', type: PARAM_TYPE.Knob },
    { id: 62, label: 'Freq 2', type: PARAM_TYPE.Knob },
    { id: 63, label: 'Q 1', type: PARAM_TYPE.Knob },
    { id: 64, label: 'Q 2', type: PARAM_TYPE.Knob },
    { id: 65, label: 'Gain 1', type: PARAM_TYPE.Knob },
    { id: 66, label: 'Gain 2', type: PARAM_TYPE.Knob },
    { id: 67, label: 'LFO 1 depth range', type: PARAM_TYPE.Select, values: lfoDepthRange },
    { id: 68, label: 'Motor speed', type: PARAM_TYPE.Knob },
    { id: 69, label: 'Right post delay', type: PARAM_TYPE.Knob },
];

export default delay;