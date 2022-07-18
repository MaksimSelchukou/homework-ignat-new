import React, {MouseEvent, MouseEventHandler} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => {
        return (
            <Affair // should work
                key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                affair={a}
                deleteAffairCallback={props.deleteAffairCallback}
            />
        )
    })

    // const setAll = () => {
    //     props.setFilter('all')
    // } // need to fix
    // const setHigh = () => {
    //     props.setFilter('high')
    // }
    // const setMiddle = () => {
    //     props.setFilter('middle')
    // }
    // const setLow = () => {
    //     props.setFilter('low')
    // }

    const setValue = (e: MouseEvent<HTMLButtonElement>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    const allBtn = style.btn + ' ' + (props.filter === "all" ? style.activeBtn : "")
    console.log(allBtn)
    const highBtn = style.btn + ' ' + (props.filter === "high" ? style.activeBtn : "")
    const middleBtn = style.btn + ' ' + (props.filter === "middle" ? style.activeBtn : "")
    const lowBtn = style.btn + ' ' + (props.filter === "low" ? style.activeBtn : "")

    // console.log(mappedAffairs)
    return (
        <div>
            {mappedAffairs}
            <button className={allBtn} value={'all'} onClick={setValue}>All</button>
            <button className={highBtn} value={'high'} onClick={setValue}>High</button>
            <button className={middleBtn} value={'middle'} onClick={setValue}>Middle</button>
            <button className={lowBtn} value={'low'} onClick={setValue}>Low</button>
        </div>
    )
}

export default Affairs
