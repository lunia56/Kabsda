import React, {useState} from 'react';
import OnOff from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOff  stories',
    component: OnOff
}

export const OnMode = ()=> <OnOff on={true} setOn={x=>x}/>
export const OffMode= ()=> <OnOff on={false} setOn={x=>x}/>
export const ChangeMode= ()=>{
    let [ value,setValue] = useState(false)
    return <OnOff on={value} setOn={setValue}/>
}

export const ModeAction = ()=> <OnOff on={true} setOn={action("on or off clicked")}/>



