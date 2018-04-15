import { connect } from 'react-redux';
import { ControlType, ControlObject } from '../api/control-object';
import ControlEditorComponent from '../components/control-editor/control-editor';
import { getAxeFxInstance } from '../api/midi';

const mapStateToProps = state => ({
    board: state.app.board.currentBoard
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    saveChanges(formData) {
        const { board } = stateProps;
        const { id, controlType, blockId, paramId, cc, isRelative, groupId } = formData;
        const controlIdx = board.controls.findIndex(ctrl => ctrl.id === id);
        if (controlIdx === -1) throw new Error(`Could not find control for ID "${id}"`);
        const updatedControl: ControlObject = {
            id: id,
            blockId,
            paramId,
            paramValue: null,
            rawValue: null,
            controlType,
            isRelative: !!isRelative,
            cc,
            groupId
        };
        board.controls.splice(controlIdx, 1, updatedControl);
        const axeFx = getAxeFxInstance();
        if (blockId && paramId >= 0 && axeFx) {
            axeFx.getBlockParamValue(blockId, paramId);
        }
    },
});

export default connect(mapStateToProps, null, mergeProps)(ControlEditorComponent);
