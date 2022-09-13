import React, {useState,useMemo} from 'react';
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
    const [value, setValue] = useState('2');
    return (
        <>
            <Select value={value}
                    onChange={setValue}
                    items={items}/>

        </>
    )
}


export const BaseExampleNotValue = () => {
    const [value, setValue] = useState('null');

    return (
        <>
            <Select
                value={value}
                onChange={setValue}
                items={items}/>
        </>
    )

}
export const TrainingUseMemo = () => {
    const [state, setState] = useState([
            {country: 'russia', city: 'Saint-Petersburg', standardOfLiving: 78}, {
                country: 'belarus',
                city: 'Minsk',
                standardOfLiving: 55
            }, {country: 'ukraine', city: 'Kiev', standardOfLiving: 63}, {
                country: 'russia',
                city: 'Moscow',
                standardOfLiving: 87
            }, {country: 'ukraine', city: 'Harkiv', standardOfLiving: 47}
        ]
    );
    const [count,setCount]=useState(0)
    const OptionsRussia = useMemo(()=>{
        console.log("Hello UseMemo")
        return state.filter(el => el.country === 'russia').map(el => <option value="g">{el.city}{count}</option>)},[state])
    const OptionsCityHaveA = state.filter(el => el.city.indexOf("a")>-1).map(el => <option value="g">{el.city}{count}</option>)
    const OptionsStandardOfLiving = state.filter(el => el.standardOfLiving > 50).map(el => <option
        value="g">{el.city}{count}</option>)
    return (
        <>

            <button onClick={()=>setCount(count+1)}>{count}</button>
            <select>
                {OptionsRussia}
            </select>
            <select>
                {OptionsCityHaveA}
            </select>
            <select>
                {OptionsStandardOfLiving}
            </select>
            <button onClick={()=>setState([...state, {country: 'russia', city: 'Orenburg', standardOfLiving: 100}])}>добавить город</button>

        </>
    )

}

