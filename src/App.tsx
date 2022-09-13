import React, {useState} from 'react';
import './index.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingPropsType, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import Select from './components/Select/Select';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(false)

    const items = [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Victor', value: 4}]
    return (
        <>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       onClick={() => {
                       }}
                       items={items}/>
            <OnOff on={on} setOn={setOn}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

        </>
    );
}


function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}


export default App;
//
// function chain(input:number, fs:any) {
//
//     return fs.reduce((acc:any,el:any)=>el(acc),input)
// // implement the "chain" function
// }
//
// console.log(chain(10,))
const sum =(a:number,b:number)=>{
    return a+b
}
sum(10,15)///?
console.log(sum(10,15))
