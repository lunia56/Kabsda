import React, {useState} from 'react';
import Select from './Select';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Select ',
    component: Select
}

const items = [
    {title: 'minsk', value: 1},
    {title: 'Moskow', value: 2},
    {title: 'Kiev', value: 3},
    {title: 'Piter', value: 4}]

export const BaseExample = () => {
    const [value,setValue]=useState("2");
    return (
        <>
            <Select value={value}
                    onChange={setValue}
                    items={items}/>

        </>
    )
}


export const BaseExampleNotValue = () => {
    const [value,setValue]=useState("null");

    return (
        <>
            <Select
                value={value}
                onChange={setValue}
                items={items}/>
        </>
    )

}

