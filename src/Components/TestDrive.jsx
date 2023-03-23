import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Styles/testDrive.css'
import {db} from '../firebase-config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default function TestDrive(){
    const navigate = useNavigate()
    const location = useLocation();
    let {brand, model, colorName, colorSpin, price} = location.state
    console.log(colorName, colorSpin)
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
                     carDetails:{carBrand:brand, carModel:model, carColor:colorName, price:price}
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
            
            <div className="selected-car-spin-wrapper">
                <h3 className='selected-car-h3'>Selected Car:</h3>
                <script src="https://scripts.sirv.com/sirv.js"></script>
                <iframe src={colorSpin}  width="100%" height="100%" frameBorder="0"></iframe>
            </div>

            <div className="selected-test-drive-car-details">
                <h2>{brand.toUpperCase() + ' ' + model}</h2>
            </div>
            <form className="order-form" onSubmit={e => placeOrder(e)}>
                <h3>Please enter your information below</h3>
                <input type="text" placeholder='Full Name' required value={fullName} onChange={e => setFullName(e.target.value)}/> 
                <input type="email" placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="number" placeholder='Phone Number' required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>

                <div className="purchase-period-wrapper">
                    <label>When do you plan to buy a car?</label>
                    <select onChange={e => setPurchasePeriod(e.target.value)}>
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
                <select onChange={e => setPreferredDealership(e.target.value)}>
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