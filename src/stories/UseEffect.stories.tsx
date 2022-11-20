import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}


export const SimpleExample1 = () => {

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    //useEffect срабатывает после отрисовки jsx то есть появляется вначале картинка
    useEffect(() => {
        console.log("useEffect first render and counter change")
        document.title = counter.toString()
        //    said effects:
        //    запрос на сервер api.get.Users()then("")
        //    setInterval
        //     indexDB (обращение к локальной базе данных)
        //     document.getElementById()
        //     document.title="User "
    }, [counter])

    //если массив зависимостей-useEffect ,будет вызываться каждый раз. Если передали пустой массив, то будет запускаться при первом рендере. либо же в зависимости от чего-то, что передано как зависимость.
    useEffect(() => {
        console.log("useEffect only first render")

    }, [])
    useEffect(() => {
        console.log("useEffect every render")

    })
    return (
        <>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            <button onClick={() => setFake(fake + 1)}>{fake}</button>

        </>
    )
}

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)
    console.log("SetTimeoutExample")


    useEffect(() => {

        // setTimeout(()=>{
        //     document.title=counter.toString()
        //     console.log("setTimeout")
        // },1000)


        const changer = () => counter + 1
        //в чем проблема: сет таймают берет counter из замыкания( то есть из сохраненного значения counter который всегда равен -0
        // для решения этой проблемы передадим в сеткоунтер функцию изменитель, которая будет менять сама значения.
        setInterval(() => {
            // setCounter(counter +1)
            setCounter((state) => state + 1)
            console.log("setInterval" + counter)
        }, 1000)
    }, [])

    return (
        <>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            <button onClick={() => setFake(fake + 1)}>{fake}</button>

        </>
    )
}

export const GetDateDZ = () => {

    const getTime = (): string => {
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        return `${hours}:${minutes}:${seconds}`
    }
    // console.log(hours + ":" + minutes + ":" + seconds)
    // const initialTime = [hours, minutes, seconds]
    // let initialState = `${initialTime[0]}:${initialTime[1]}:${initialTime[2]}`
    // console.log(initialState)

    const [time, setTime] = useState(getTime)
    console.log(time)

    useEffect(() => {
        setInterval(() => {
            setTime(getTime)
        }, 1000)
        document.title = time
    }, [getTime()])


    return (
        <>
            <button onClick={() => {

            }}>{time}</button>
        </>
    )
}
//title страницы - это текущее время.