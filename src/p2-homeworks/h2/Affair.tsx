import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const spanPrior = style.spanPrior + ' ' + style[props.affair.priority]

    return (
        <div className={style.affair}>
            <div className={ style.spanPrior + ' ' + style.spanName }>{props.affair.name}</div>
            <div className={spanPrior}> {props.affair.priority}</div>
            <button className={style.delBtn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
