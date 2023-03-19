import React, {useEffect, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../Styles/signIn.css'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase-config'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function SignIn(){
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
    const navigate = useNavigate()
    useEffect(()=> {
        if(isAuth) navigate('/')
    }, [])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    

    async function signIn(e){
        e.preventDefault();
        try{
        await signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            cookies.set('auth-token', res.user.refreshToken)
            localStorage.setItem('name',res.user.displayName)
            localStorage.setItem('isAuth', true)
            localStorage.setItem('userID', res.user.uid)
            window.location.reload()
            
    })}catch(err){
        switch(err.code){
            case 'auth/user-not-found':
                setError("Email does not exist")
                break;
            case 'auth/invalid-email':
                setError('Invalid Email!')
                break;
            case'auth/wrong-password':
                 setError('Incorrect Password');
                 break;
            case 'auth/internal-error':
                setError("There was an internal error")
                break;
        }
    }
    }
    return (
        <div className="sign-in-wrapper">
            <h2>Welcome Back!</h2>
            <form className='sign-in-form' onSubmit={e => signIn(e)}>
                <input type="email" placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' rqeuired value={password} onChange={e => setPassword(e.target.value)}/>
                <p className='error'>{error}</p>
                <button className='sign-in-btn'>Sign in</button>
                <label>Don't have an account? <Link to="/signUp">Sign Up</Link></label>
            </form>
        </div>
    )
}