import React, {useState} from 'react'
import {storage, db} from '../firebase-config'
import {uploadBytes, ref, getDownloadURL} from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import '../Styles/adminPage.css'

export default function AdminPage() {
    
  // Car Details
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState('')
    const [picture, setPicture] = useState()
    // Car Specs
    const [engine, setEngine] = useState('')
    const [power, setPower] = useState('')
    const [transmision, setTransmision] = useState('')
    const [dimensions, setDimensions] = useState('')
    const [fuel, setFuel] = useState('')

    async function UploadCar(e){
        e.preventDefault();
        let pictureURL;
        const pictureRef = ref(storage, `/${brand}/${model}/picture`)
        await uploadBytes(pictureRef, picture)
        await getDownloadURL(pictureRef)
        .then(res => pictureURL = res)

        const carCollectionRef = collection(db, brand)
        await addDoc(carCollectionRef, {carBrand:brand, carModel:model, carCategory:category, carPrice:price, carPicture:pictureURL, carSpecs:{
          engine:engine,
          power:power,
          transmision:transmision,
          dimensions:dimensions,
          fuel:fuel
        }}).then(() => {
          alert("Car added successfully")
          window.location.reload()})
    }
  return (
    <div className="admin-page-wrapper">
      <form onSubmit={e => UploadCar(e)}>
        <div className="carDetails">
          <h2>Car Details</h2>
        <input type="text" placeholder='Brand' value={brand} onChange={e => setBrand(e.target.value)}/>
        <input type="text" placeholder='Category' value={category} onChange={e => setCategory(e.target.value)}/>
        <input type="text" placeholder='Model' value={model} onChange={e => setModel(e.target.value)}/>
        <input type="text" placeholder='Price' value={price}  onChange={e => setPrice(e.target.value)}/>
        </div>

        <div className="carSpecs">
        <h2>Car Specs</h2>
        <input type="text" placeholder='Engine' value={engine} onChange={e => setEngine(e.target.value)}/>
        <input type="text" placeholder='Power' value={power} onChange={e => setPower(e.target.value)}/>
        <input type="text" placeholder='Transmision' value={transmision} onChange={e => setTransmision(e.target.value)}/>
        <input type="text" placeholder='Dimensions' value={dimensions} onChange={e => setDimensions(e.target.value)}/>
        <input type="text" placeholder='Fuel' value={fuel} onChange={e => setFuel(e.target.value)}/>
        <input type="file" onChange={e => {setPicture(() => e.target.files[0])}}/>
        <button className='submit-btn'>Submit</button>
        </div>
      </form>
      </div>
  )
}
