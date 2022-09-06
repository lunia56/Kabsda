import {StateType} from './Accordion';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

test("reducer should be true",()=>{
    const  state:StateType={
        collapsed:false
    }
    const newState = reducer(state,{type:TOGGLE_COLLAPSED})
expect(newState.collapsed).toBe(true)
})

test("reducer should be false",()=>{
    const  state:StateType={
        collapsed:true
    }
    const newState = reducer(state,{type:TOGGLE_COLLAPSED})
    expect(newState.collapsed).toBe(false)
})

test("Reduce should throw error because action type is incorrect",()=>{
    const  state:StateType={
        collapsed:true
    }
    expect(()=>{
        reducer(state,{type:"abvgd"})
    }).toThrowError();
})