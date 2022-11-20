import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}


const generateData = () =>{ // допустим есть функция которая проводит сложные вычисления и генерирует число
    return 13739273984798
}

export const Example1 = () => {
   const  initialState = useMemo(generateData,[]) // мемоизируем данные для того что бы при перерендере не производить заново вычисления!
    const [counter,setCounter]=useState(initialState) // но useState сам умеет оптимизироваться. Можно передать функцию как начальное значение
    const [counter2,setCounter2]=useState(generateData) //в этом случае useState  запомнит начальное значение как результат вызова функции

    //так же можно создать функцию-изменитель которая будет менять данные для setCounter
    const changer = (state:number)=> state+1
    return (
        <>
            <button onClick={()=>setCounter(counter+1)}>{counter}</button>
            <button onClick={()=>setCounter2(counter2+1)}>{counter2}</button>
            <button onClick={()=>setCounter2(changer)}>{counter2}</button>  //добавляем функцию изменитель
            <button onClick={()=>setCounter2(state=>state+1)}>{counter2}</button>  //рефакторим и уменьшаем код
        </>
    )
}