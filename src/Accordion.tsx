import React from 'react';

type AccordionPropsType ={
    titleValue: string
}
function Accordion(props: AccordionPropsType) {

    return (
        <div>
        <AccordionTitle title={props.titleValue} />
        <AccordionBody />
        </div>
    );
}

type AccordionTitlePropsType ={
    title:string
}
function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitleRender")
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionTitleBody")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )


}

export default Accordion