import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../firebase-config'
import '../Styles/userMessagesReader.css'
import {getDocs, collection, getDoc} from 'firebase/firestore'
import {db} from '../firebase-config'

export default function UsersMessagesReader(){
    const navigate = useNavigate()
    
    auth.onAuthStateChanged(()=>{
        if(auth.currentUser.uid === null || !auth.currentUser.uid === 'HA3XPxDZG8Y5YKZt1VTmgU6bf4a2') navigate('/')
    }) 

    const [messages, setMessages] = useState([])
    useEffect(()=>{
        async function fetchMessages(){
            let tempArr = []
            const messagesRef = collection(db, 'userMessages')
            await getDocs(messagesRef)
            .then(res => res.docs.forEach(doc =>{
                tempArr.push({...doc.data(), docID:doc.id})
            }))
            setMessages(tempArr)
        }
        fetchMessages()
        return () => fetchMessages()
    },[])
    return(
        <div className='users-messages-reader-wrapper'>
            <h2>Users' Messages</h2>
            <div className="messages-wrapper">

                {messages.map((message, index) => {
                    return (
                        <div className="messages" key={index}>
                            <div className="user-info">
                                <h3>{message.usersName}</h3>
                                <p>{message.usersEmail}</p>
                            </div>
                            <div className="message">{message.usersMessage}</div>
                            <p>Reply to: <a href={`mailto:${message.usersEmail}`}>{message.usersEmail}</a></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}