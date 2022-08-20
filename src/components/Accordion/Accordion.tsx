import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

    type AccordionTitlePropsType = {
        title: string
        onChange: () => void
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        console.log('AccordionTitleRender')
        return (
            <h3 onClick={(event)=>props.onChange()}>{props.title}</h3>
        )
    }

    function AccordionBody() {
        console.log('AccordionTitleBody')
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

        )


    }

    export default Accordion