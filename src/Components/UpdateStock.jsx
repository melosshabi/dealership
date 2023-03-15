import React, {useState,useEffect} from 'react'
import {db, auth} from '../firebase-config'
import {getDocs, collection} from 'firebase/firestore'
import '../Styles/updateStock.css'

export default function UpdateStock(){

    const [cars, setCars] = useState([])

    useEffect(()=>{
        async function fetchCars(){
            let tempArr = []
            const carsRef = collection(db, 'bmw')
            await getDocs(carsRef)
            .then(res => {
                res.docs.forEach(doc =>{
                    tempArr.push({...doc.data(), docID:doc.id})
                })
            })
            setCars(tempArr)
        }
            fetchCars()
            return () => fetchCars()
    }, [])
    return (
        <div className='update-stock-wrapper'>
            <h2 className='stock-updater-title'>Stock Updater</h2>
            <div className="car-brands">
                <button className='switch-brand-btn active-btn'>BMW</button>
                <button className='switch-brand-btn'>Mercedes</button>
                <button className='switch-brand-btn'>Audi</button>
            </div>
            <div className="cars">
            {cars.map((car, index) =>{
            return (
              <div key={index} className="cars-stock-div">
                <img src={car.carPicture}/>
                <div className="cars-details">
                  <span>{car.carCategory}</span>
                  <p>{car.carBrand.toUpperCase()} {car.carModel}</p>
                  <span>$ {car.carPrice}</span>
                  
                </div>
              </div>
            )
          })}
            </div>
        </div>
    )
}