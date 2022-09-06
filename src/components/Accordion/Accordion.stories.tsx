import React, {useReducer, useState} from 'react';
import Accordion from './Accordion';
import {action} from '@storybook/addon-actions';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

export default {
    title: 'Accordion  stories',
    component: Accordion
}
const callback = action('Accordion mode change event fired')
const OnClickCallback = action('some item was clicked')
export const CollapsedMode = () => <Accordion titleValue={' свернутый аккордион '} collapsed={true} onChange={callback}
                                              items={[]} onClick={OnClickCallback}/>
export const UnCollapsedMode = () => <Accordion titleValue={' развернутый аккордион '} collapsed={false}
                                                onChange={callback} onClick={OnClickCallback}
                                                items={[{title: 'Dimych', value: 1}, {
                                                    title: 'Valera',
                                                    value: 2
                                                }, {title: 'Artem', value: 3}, {title: 'Victor', value: 4}]}/>
export const ChangedMode = () => {
    let [collapsed, setCollapsed] = useState(true)
    return <Accordion titleValue={' изменяемый аккордион '} collapsed={collapsed}
                      onChange={() => setCollapsed(!collapsed)} onClick={OnClickCallback}
                      items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {
                          title: 'Artem',
                          value: 3
                      }, {title: 'Victor', value: 4}]}/>
}


export const UseReducerLearn = () => {
    const [state,dispatch] = useReducer(reducer,{collapsed:false})

    return <Accordion titleValue={' изменяемый аккордион '} collapsed={state.collapsed}
                      onChange={()=>dispatch({type:TOGGLE_COLLAPSED})} onClick={OnClickCallback}
                      items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {
                          title: 'Artem',
                          value: 3
                      }, {title: 'Victor', value: 4}]}/>
}





