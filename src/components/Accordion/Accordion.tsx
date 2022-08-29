import React, {MouseEvent} from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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
        <h3 onClick={(event) => props.onChange()}>{props.title}</h3>
    )
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}
type ItemType = {
    title: string
    value: any
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map((el, index) => {
                const onClickHandler = () => {
                    props.onClick(el.value)
                }
                return (
                    <li key={index} onClick={onClickHandler}>{el.title}</li>
                )
            })}
        </ul>

    )


}

export default Accordion