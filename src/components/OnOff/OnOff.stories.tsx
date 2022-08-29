import React, {useState} from 'react';
import OnOff from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOff  stories',
    component: OnOff
}

const callback = action("on or off clicked")
export const OnMode = ()=> <OnOff on={true} setOn={callback}/>
export const OffMode= ()=> <OnOff on={false} setOn={callback}/>
export const ChangeMode= ()=>{
    let [ value,setValue] = useState(false)
    return <OnOff on={value} setOn={setValue}/>
}

export const ModeAction = ()=> <OnOff on={true} setOn={action("on or off clicked")}/>



