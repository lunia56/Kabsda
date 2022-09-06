import React, {useState} from 'react';
import s from './OnOff.module.css'

export type PropsType = {
    on: boolean
    setOn: (props: boolean) => void
}


const OnOffMemo = (props: PropsType) => {

    const onHandler = () => {
       props.setOn(true)
    }
    const offHandler = () => {
        props.setOn(false)

    }
    let classNameOnn = `${s.onStyle} ${props.on ? s.bgColorGreen : ''}`
    let classNameOff = `${s.offStyle} ${props.on ? '' : s.bgColorRed}`
    let classNameInd = `${s.indicator} ${props.on ? s.bgColorGreen : s.bgColorRed} `
    return (
        <div>
            <div className={classNameOnn} onClick={onHandler}>On</div>
            <div className={classNameOff} onClick={offHandler}>Off</div>
            <div className={classNameInd}></div>
        </div>
    );
};

const OnOff = React.memo(OnOffMemo)
export default OnOff;