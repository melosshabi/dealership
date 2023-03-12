import React, {useState} from 'react'
import {db} from '../firebase-config'
import {collection, addDoc} from 'firebase/firestore'
import '../Styles/Contact.css'
export default function Contact() {

    const [usersName, setUsersName] = useState('')
    const [usersEmail, setUsersEmail] = useState('')
    const [usersMessage, setUsersMessage] = useState('')

    async function sendMessage(e){
        e.preventDefault();
        const collectionRef = collection(db, 'userMessages')
        await addDoc(collectionRef, {usersName:usersName, usersEmail:usersEmail, usersMessage:usersMessage})
        .then(() => window.location.reload())
    }
    return (
        <div className="contact-div">
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={e => sendMessage(e)}>
                <input type="text" placeholder='Your Name' value={usersName} onChange={e => setUsersName(e.target.value)}/>
                <input type="email" placeholder='Your Email' value={usersEmail} onChange={e => setUsersEmail(e.target.value)}/>
                <textarea placeholder='Your Message' value={usersMessage} onChange={e => setUsersMessage(e.target.value)}/>
                <button className="send-btn">Send</button>
            </form>
        </div>
    )
}