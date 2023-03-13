import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Styles/orderPage.css'
import {Canvas} from '@react-three/fiber'
import {useGLTF, Stage, PresentationControls} from '@react-three/drei'
import {db} from '../firebase-config'
import { addDoc, collection } from 'firebase/firestore'

export default function OrderPage(){
    const navigate = useNavigate()
    const location = useLocation();
    let {brand, model, color, rimColor, price} = location.state

    // Funksioni qe e renderon modelin 3D
    function Model(props){
        const {scene} = useGLTF(`/3d-models/${brand}/${model}/${color}${model}${rimColor}Rims.glb`)
        return <primitive object={scene} {...props}/>
    }
    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    async function placeOrder(e){
        e.preventDefault()
        
        const ordersCollectionRef = collection(db, 'orders')
        await addDoc(ordersCollectionRef, {fullName:fullName, email:email, phoneNumber:phoneNumber,
                     country:country, city:city, zipCode:zipCode, address1:address1, address2:address2,
                     carDetails:{carBrand:brand, carModel:model, carColor:color, rimColor:rimColor, price:price}})
        .then(() => {
            alert("Thank you for your purchase")
            navigate('/')
        })
    }
    return (
       <div className="order-page-wrapper">
            
            <h3 className='selected-car-h3'>Selected Car:</h3>

            <div className="selected-car-wrapper">
                
            <Canvas id="car-canvas" dpr={[1, 2]} camera={{fov:15}} style={{'width':'50%', 'height':'40vh', 'margin':'auto', 'marginTop':'10vh'}}>
             <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={null}>
                    <Model scale={0.01}/>
                </Stage>
             </PresentationControls>
            </Canvas>
            </div>

            <div className="selected-car-details">
                <h2>{brand.toUpperCase() + ' ' + model}</h2>
            </div>
            <form className="order-form" onSubmit={e => placeOrder(e)}>
                <h3>Please enter your information below</h3>
                <input type="text" placeholder='Full Name' required value={fullName} onChange={e => setFullName(e.target.value)}/> 
                <input type="email" placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="number" placeholder='Phone Number' required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                <select id="countries" onChange={e => setCountry(e.target.value)} required>
                    <option>--Select Country--</option>
                    <option>Albania</option>
                    <option>Kosovo</option>
                </select>
                <input type="text" placeholder='City' required value={city} onChange={e => setCity(e.target.value)}/>
                <input type="number" placeholder='Zip Code' value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                <input type="select" placeholder='Street Address 1' required value={address1} onChange={e => setAddress1(e.target.value)}/> 
                <input type="select" placeholder='Street Address 2' required value={address2} onChange={e => setAddress2(e.target.value)}/> 
                <button className='place-order-btn'>Place Order</button>
            </form>
       </div>
    )
}