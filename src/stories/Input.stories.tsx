import React, {useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
title: "input"
}

/**
 * Primary UI component for user interaction
 */
export const UncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }


    return (
        <>
            <input ref={inputRef}/>
            <button onClick={onClickHandler}>save </button>

            Actual value: {value}
        </>
    )
}
export const ControlledInput = ()=>{
const [parentValue,setParentValue] = useState("")
    return (
        <>
            <input type="text" value={parentValue} onChange={(e)=>{setParentValue(e.currentTarget.value)}}/>
        </>
    )
}
