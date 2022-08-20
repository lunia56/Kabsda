import React, {useState} from 'react';
import Accordion from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion  stories',
    component: Accordion
}
const callback =action("Accordion mode change event fired")
export const CollapsedMode = ()=> <Accordion titleValue={" свернутый аккордион "} collapsed={true} onChange={callback}/>
export const UnCollapsedMode = ()=> <Accordion titleValue={" развернутый аккордион "} collapsed={false} onChange={callback}/>
export const ChangedMode = ()=> {
    let [collapsed,setCollapsed] = useState(true)
    return <Accordion titleValue={" изменяемый аккордион "} collapsed={collapsed} onChange={()=>setCollapsed(!collapsed)}/>
}




