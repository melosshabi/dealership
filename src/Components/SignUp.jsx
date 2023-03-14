import  React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import {auth} from '../firebase-config'
import Cookies from 'universal-cookie'
import '../Styles/signUp.css'

export default function SignUp(){
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();

    async function signUp(e){
        e.preventDefault();

        try{
        await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {displayName:fullName})
        .then(()=> {
            localStorage.setItem('name', fullName)
            alert("Account Created Succesfully")
            navigate('/')
        })
        }catch(err){
            switch(err.code){
                case 'auth/invalid-email':
                    setError('Invalid Email')
                    break
                case 'auth/email-already-in-use':
                    setError('Email Already In Use')
                    break
                case 'auth/weak-password':
                    setError('Password must be at least 6 characters long')
                    break
            }
        }
    }
    return (
        <div className="sign-up-wrapper">
            <h2>Welcome!</h2>
            <form className="sign-up-form" onSubmit={e => signUp(e)}>
                <input type="text" placeholder='Full Name' required value={fullName} onChange={e => setFullName(e.target.value)}/>
                <input type="email" placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' rqeuired value={password} onChange={e => setPassword(e.target.value)}/>
                <p className='error'>{error}</p>
                <button className='sign-up-btn'>Sign up</button>
                <label>Already have an account? <Link to="/signIn">Sign in</Link></label>
            </form>
        </div>
    )
}