import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>
            <div>
                <img className={style.messageImg} src={props.avatar} alt="avater"/>
            </div>
            <div className={style.infoMessage}>
                <div>{props.name}</div>
                <span>{props.message}</span>
                <span>{props.time}</span>
            </div>
        </div>

    )
}

export default Message
