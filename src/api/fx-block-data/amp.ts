import { PARAM_TYPE } from './fx-param-common';
import { ampType } from './fx-param-select';

const amp = [
    { id: 0, label: 'Type', type: PARAM_TYPE.Select, values: ampType },
    { id: 1, label: 'Input drive', type: PARAM_TYPE.Knob },
    { id: 74, label: 'Overdrive', type: PARAM_TYPE.Knob },
    { id: 2, label: 'Bass', type: PARAM_TYPE.Knob },
    { id: 3, label: 'Middle', type: PARAM_TYPE.Knob },
    { id: 4, label: 'Treble', type: PARAM_TYPE.Knob },
    { id: 20, label: 'Presence', type: PARAM_TYPE.Knob },
    { id: 5, label: 'Master volume', type: PARAM_TYPE.Knob },
    { id: 21, label: 'Level', type: PARAM_TYPE.Knob, range: [-80, 20], precision: 1 },
    { id: 22, label: 'Balance', type: PARAM_TYPE.Knob, range: [-100, 100], precision: 1 },
    { id: 16, label: 'Depth', type: PARAM_TYPE.Knob },
    { id: 6, label: 'Preamp low cut', type: PARAM_TYPE.Knob },
    { id: 7, label: 'High cut freq', type: PARAM_TYPE.Knob },
    { id: 8, label: 'Tone freq', type: PARAM_TYPE.Knob },
    { id: 9, label: 'X-former grind', type: PARAM_TYPE.Knob },
    { id: 10, label: 'Bright cap', type: PARAM_TYPE.Knob },
    { id: 12, label: 'X-former low freq', type: PARAM_TYPE.Knob },
    { id: 13, label: 'X-former hi freq', type: PARAM_TYPE.Knob },
    { id: 14, label: 'Tone location', type: PARAM_TYPE.Select },
    { id: 15, label: 'Input select', type: PARAM_TYPE.Select },
    { id: 19, label: 'Supply sag', type: PARAM_TYPE.Knob },
    { id: 23, label: 'Bypass mode', type: PARAM_TYPE.Select },
    { id: 24, label: 'Negative feedback', type: PARAM_TYPE.Knob },
    { id: 25, label: 'Presence freq', type: PARAM_TYPE.Knob },
    { id: 26, label: 'Low res freq', type: PARAM_TYPE.Knob },
    { id: 27, label: 'Low res', type: PARAM_TYPE.Knob },
    { id: 29, label: 'Depth freq', type: PARAM_TYPE.Knob },
    { id: 31, label: 'MV cap', type: PARAM_TYPE.Knob },
    { id: 33, label: 'Harmonics', type: PARAM_TYPE.Knob },
    { id: 34, label: 'Tone stack', type: PARAM_TYPE.Select },
    { id: 35, label: 'B+ time const', type: PARAM_TYPE.Knob },
    { id: 36, label: 'Tube grid bias', type: PARAM_TYPE.Knob },
    { id: 39, label: 'Bright switch', type: PARAM_TYPE.Switch },
    { id: 40, label: 'Boost', type: PARAM_TYPE.Switch },
    { id: 41, label: 'Low res Q', type: PARAM_TYPE.Knob },
    { id: 42, label: 'Preamp bias', type: PARAM_TYPE.Knob },
    { id: 43, label: 'Hi freq', type: PARAM_TYPE.Knob },
    { id: 44, label: 'Hi resonance', type: PARAM_TYPE.Knob },
    { id: 45, label: 'Cut', type: PARAM_TYPE.Switch },
    { id: 46, label: 'X-former drive', type: PARAM_TYPE.Knob },
    { id: 47, label: 'Input trim', type: PARAM_TYPE.Knob },
    { id: 48, label: 'Preamp hardness', type: PARAM_TYPE.Knob },
    { id: 49, label: 'Mv location', type: PARAM_TYPE.Select },
    { id: 50, label: 'Speaker drive', type: PARAM_TYPE.Knob },
    { id: 51, label: 'X-former match', type: PARAM_TYPE.Knob },
    { id: 54, label: 'Sat switch', type: PARAM_TYPE.Select },
    { id: 55, label: 'GraphicEQ band 1', type: PARAM_TYPE.Knob },
    { id: 56, label: 'GraphicEQ band 2', type: PARAM_TYPE.Knob },
    { id: 57, label: 'GraphicEQ band 3', type: PARAM_TYPE.Knob },
    { id: 58, label: 'GraphicEQ band 4', type: PARAM_TYPE.Knob },
    { id: 59, label: 'GraphicEQ band 5', type: PARAM_TYPE.Knob },
    { id: 60, label: 'GraphicEQ band 6', type: PARAM_TYPE.Knob },
    { id: 61, label: 'GraphicEQ band 7', type: PARAM_TYPE.Knob },
    { id: 62, label: 'GraphicEQ band 8', type: PARAM_TYPE.Knob },
    { id: 63, label: 'Bias excursion', type: PARAM_TYPE.Knob },
    { id: 66, label: 'Triode 2 plate freq', type: PARAM_TYPE.Knob },
    { id: 67, label: 'Triode 1 plate freq', type: PARAM_TYPE.Knob },
    { id: 68, label: 'Poweramp tube', type: PARAM_TYPE.Select },
    { id: 69, label: 'Preamp tubes', type: PARAM_TYPE.Select },
    { id: 70, label: 'Out comp clarity', type: PARAM_TYPE.Knob },
    { id: 71, label: 'Character Q', type: PARAM_TYPE.Knob },
    { id: 72, label: 'Character freq', type: PARAM_TYPE.Knob },
    { id: 73, label: 'Character amount', type: PARAM_TYPE.Knob },
    { id: 75, label: 'Out comp amount', type: PARAM_TYPE.Knob },
    { id: 76, label: 'Out comp threshold', type: PARAM_TYPE.Knob },
    { id: 77, label: 'Master trim', type: PARAM_TYPE.Knob },
    { id: 78, label: 'Fat', type: PARAM_TYPE.Switch },
    { id: 79, label: 'Definition', type: PARAM_TYPE.Knob },
    { id: 80, label: 'Preamp CF compress', type: PARAM_TYPE.Knob },
    { id: 81, label: 'Preamp CF time', type: PARAM_TYPE.Knob },
    { id: 84, label: 'Dynamic presence', type: PARAM_TYPE.Knob },
    { id: 85, label: 'Dynamic depth', type: PARAM_TYPE.Knob },
    { id: 86, label: 'Power type', type: PARAM_TYPE.Select },
    { id: 87, label: 'AC line freq', type: PARAM_TYPE.Knob },
    { id: 88, label: 'Poweramp hardness', type: PARAM_TYPE.Knob },
    { id: 91, label: 'Preamp CF ratio', type: PARAM_TYPE.Knob },
    { id: 92, label: 'EQ type', type: PARAM_TYPE.Select },
    { id: 93, label: 'Cathode resist', type: PARAM_TYPE.Knob },
    { id: 96, label: 'Preamp sag', type: PARAM_TYPE.Switch },
    { id: 97, label: 'Bright', type: PARAM_TYPE.Knob },
    { id: 98, label: 'Poweramp bias', type: PARAM_TYPE.Knob },
    { id: 99, label: 'Preamp dynamics', type: PARAM_TYPE.Knob },
    { id: 100, label: 'Hi freq slope', type: PARAM_TYPE.Knob },
    { id: 101, label: 'Variac', type: PARAM_TYPE.Knob },
    { id: 102, label: 'Char type', type: PARAM_TYPE.Select },
    { id: 104, label: 'Presence shift', type: PARAM_TYPE.Switch },
    { id: 105, label: 'Saturation drive', type: PARAM_TYPE.Knob },
    { id: 106, label: 'Crunch', type: PARAM_TYPE.Knob },
    { id: 109, label: 'Out comp type', type: PARAM_TYPE.Select },
    { id: 110, label: 'EQ location', type: PARAM_TYPE.Select },
    { id: 111, label: 'CF comp type', type: PARAM_TYPE.Select },
    { id: 113, label: 'Preamp CF hardness', type: PARAM_TYPE.Knob },
    { id: 114, label: 'PI bias shift', type: PARAM_TYPE.Knob },
    { id: 115, label: 'Motor drive', type: PARAM_TYPE.Knob },
    { id: 116, label: 'Motor time const', type: PARAM_TYPE.Knob },
];

export default amp;