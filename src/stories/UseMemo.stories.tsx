import React, {useMemo, useState} from 'react';

export default {
    title: 'UseMemo demo'
}
// const NewMessageCounter = (props: any) => {
//     return <div>{props.count}</div>
// }
// const UsersSecret = (props: { users: Array<string> }) => {
//     console.log("USERS RENDER")
//     return <div>{props.users.map((el,i) => <div key={i}>{el}</div>)}</div>
// }
export const Example1 = () => {
    let [a, setA] = useState(0)
    let [b, setB] = useState(0)

    let resultA = 1
    let resultB = 1
    resultA = useMemo(()=>{
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    },[a])

    for (let i = 1; i <= b; i++) {

        resultB *= i
    }
    return (
        <>
            <input type="text" value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
            <hr/>
            <div>result for a: {resultA}</div>
            <div>result for b: {resultB}</div>
        </>
    )
}
export const Example2 = () => {
    let [a, setA] = useState(0)
    let [b, setB] = useState(0)

    let resultA = 1
    let resultB = 1
    resultA = useMemo(()=>{
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    },[a])

    for (let i = 1; i <= b; i++) {

        resultB *= i
    }
    return (
        <>
            <input type="text" value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
            <hr/>
            <div>result for a: {resultA}</div>
            <div>result for b: {resultB}</div>
        </>
    )
}