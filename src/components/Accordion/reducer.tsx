import {StateType} from './Accordion';

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
type ToggleCollapsedActionType = {
    type: string
}
export const reducer = (state: StateType, action: ToggleCollapsedActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error('Bad Action type')
    }
    return state

}