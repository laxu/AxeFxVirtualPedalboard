import { FxBlock, FxParam } from "./fx-block";

export enum ControlType {
    Control = 'control',
    Switch = 'switch'
}

export interface ControlObject {
    id: string;
    blockId: number,
    paramId: number;
    paramValue: number;
    rawValue: number,
    controlType: ControlType;
    isRelative?: boolean;
    cc: number;
    groupId: string;
}
