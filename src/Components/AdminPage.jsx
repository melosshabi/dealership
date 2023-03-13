import React, {useState} from 'react'
import {storage, db} from '../firebase-config'
import {uploadBytes, ref, getDownloadURL} from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import '../Styles/adminPage.css'

export default function AdminPage() {
    
  // Detajet e kerit
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState('')
    const [picture, setPicture] = useState()
    // Specifikat e kerit
    const [engine, setEngine] = useState('')
    const [power, setPower] = useState('')
    const [transmision, setTransmision] = useState('')
    const [dimensions, setDimensions] = useState('')
    const [fuel, setFuel] = useState('')

    // Ngjyrat Edhe Stock-i i kerit
    const [colorBlack, setColorBlack] = useState(10)
    const [colorOrange, setColorOrange] = useState(10)
    const [colorGreen, setColorGreen] = useState(10)
    const [colorRed, setColorRed] = useState(10)
    const [colorGray, setColorGray] = useState(10)

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
        }, 
        carStock:{
          blackStock:colorBlack,
          redStock:colorRed,
          orangeStock:colorOrange,
          redStock:colorRed,
          grayStock:colorGray,
          greenStock:colorGreen
        }
      }).then(() => {
          alert("Car added successfully")
          window.location.reload()})
    }
  return (
    <div className="admin-page-wrapper">
      <form onSubmit={e => UploadCar(e)}>
        <div className="carDetails">
          <h2>Car Details</h2>
        <input type="text" required placeholder='Brand' value={brand} onChange={e => setBrand(e.target.value)}/>
        <input type="text" required placeholder='Category' value={category} onChange={e => setCategory(e.target.value)}/>
        <input type="text" required placeholder='Model' value={model} onChange={e => setModel(e.target.value)}/>
        <input type="text" required placeholder='Price' value={price}  onChange={e => setPrice(e.target.value)}/>
        </div>
        
        <div className="carSpecs">
        <h2>Car Specs</h2>
        <input type="text" required placeholder='Engine' value={engine} onChange={e => setEngine(e.target.value)}/>
        <input type="text" required placeholder='Power' value={power} onChange={e => setPower(e.target.value)}/>
        <input type="text" required placeholder='Transmision' value={transmision} onChange={e => setTransmision(e.target.value)}/>
        <input type="text" required placeholder='Dimensions' value={dimensions} onChange={e => setDimensions(e.target.value)}/>
        <input type="text" required placeholder='Fuel' value={fuel} onChange={e => setFuel(e.target.value)}/>
        <input type="file" required onChange={e => {setPicture(() => e.target.files[0])}}/>
        </div>

        <div className="car-colors-stock">
          <h2>Car Stock</h2>
          <input type="number" required placeholder='Color Black' value={colorBlack} onChange={e => setColorBlack(e.target.value)}/>
          <input type="number" required placeholder='Color Orange' value={colorOrange} onChange={e => setColorOrange(e.target.value)}/>
          <input type="number" required placeholder='Color Green' value={colorGreen} onChange={e => setColorGreen(e.target.value)}/>
          <input type="number" required placeholder='Color Red' value={colorRed} onChange={e => setColorRed(e.target.value)}/>
          <input type="number" required placeholder='Color Gray' value={colorGray} onChange={e => setColorGray(e.target.value)}/>
        </div>
            <button className='submit-btn'>Submit</button>
      </form>
      </div>
  )
}
