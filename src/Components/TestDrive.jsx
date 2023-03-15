import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Styles/testDrive.css'
import {Canvas} from '@react-three/fiber'
import {useGLTF, Stage, PresentationControls} from '@react-three/drei'
import {db} from '../firebase-config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default function TestDrive(){
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
    const [purchasePeriod, setPurchasePeriod] = useState('Select')
    const [preferredDealership, setPreferredDealership] = useState('Select')

    async function placeOrder(e){
        e.preventDefault()
        if(purchasePeriod === 'Select' || preferredDealership === 'Select') alert("Please Fill Out The Form");
        const placingOrderDiv = document.querySelector('.placing-order-div')
        const placingOrderh1 = document.querySelector('.placing-order-div h1')
        placingOrderDiv.style.display = "flex";
        
        const testDriveRequests = collection(db, 'testDriveRequests')
        await addDoc(testDriveRequests, {fullName:fullName, email:email, phoneNumber:phoneNumber, purchasePeriod:purchasePeriod, selectedDealership:preferredDealership, timeRequestWasMade:serverTimestamp(),
                     carDetails:{carBrand:brand, carModel:model, carColor:color, rimColor:rimColor, price:price}
                     })
                     .then(() => {
                        placingOrderh1.innerText = "Your request was made successfully. Thank you"
                        setTimeout(()=>{
                            navigate('/')
                        }, 1500)
                     })
    }
    return (
       <div className="order-page-wrapper">
            <div className="placing-order-div">
                <h1>Placing Order...</h1>
            </div>
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

                <div className="purchase-period-wrapper">
                    <label>When do you plan to buy a car?</label>
                    <select onChange={e => {console.log(e.target.value); setPurchasePeriod(e.target.value)}}>
                        <option>Select</option>
                        <option>1 month</option>
                        <option>3 months</option>
                        <option>6 months</option>
                        <option>12 months</option>
                        <option>No Plan</option>
                    </select>
                </div>

                <div className="select-dealership-wrapper">
                <label>Select Dealership</label>
                <select onChange={e => {console.log(e.target.value); setPreferredDealership(e.target.value)}}>
                    <option>Select</option>
                    <option>Automotor London</option>
                    <option>Automotor Washington DC</option>
                </select>
                </div>
                <button className='place-order-btn'>Place Order</button>
            </form>
       </div>
    )
}