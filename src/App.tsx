import React, {useState} from 'react';
import './index.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingPropsType, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on,setOn] = useState<boolean>(false)


    return (
        <>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)
            }}/>
            <OnOff on={on} setOn={setOn}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </>
    );
}


function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}


export default App;
