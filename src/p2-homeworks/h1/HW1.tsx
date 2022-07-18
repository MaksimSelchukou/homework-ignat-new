import React, {ChangeEvent, useState} from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    const [actMessage, setActualActMessage] = useState('some text')
    const [message, setMessage] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setActualActMessage(e.currentTarget.value)
    }
    console.log(actMessage)
    return (
        <div>
            <input value={actMessage} type="text" onChange={onChange}/>
            <button onClick={(e) => {
                setMessage(actMessage)
                setActualActMessage('')
            }}>send
            </button>

            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={message}
                time={messageData.time}
            />


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
