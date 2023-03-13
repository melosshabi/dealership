import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import homeImage from '../images/home-image.jpg'
import '../Styles/Home.css'
import {db, storage} from '../firebase-config'
import {collection, getDocs} from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

export default function Home(){

    const [cars, setCars] = useState([])

    // I mer keret n renderin e par t faqes
    useEffect(()=>{
      async function fetchData() {
        const collectionRef = collection(db, 'bmw')
        const documents = await getDocs(collectionRef)
        let tempArr = []
        documents.forEach(doc =>{
          tempArr.push({...doc.data(), id:doc.id})
        })
        setCars(tempArr)
      }
        fetchData()
        return () => fetchData()
    },[])
 
    // Funksion per me ndru firmen e kerit qe jon n Home
    async function switchCarBrands(targetButton, brand) {
      const buttons = document.querySelectorAll('.car-btn')
      for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('active-btn')
      }
      targetButton.classList.add("active-btn")
      const collectionRef = collection(db, brand)
      const documents = await getDocs(collectionRef)
      
      let tempArr = []
      documents.forEach(doc => {
        tempArr.push({...doc.data(), id:doc.id})
      })
      setCars(tempArr)
    }
    return(
      <div className="home-div">
        <img className="home-image" src={homeImage} />
        <div className="car-categories-wrapper">
          <div className='bmw-category '><button className="car-btn active-btn" onClick={e => switchCarBrands(e.target, 'bmw')}>BMW</button></div>
          <div className='mercedes-category'><button className='car-btn' onClick={e => switchCarBrands(e.target, 'mercedes')}>Mercedes</button></div>
          <div className='audi-category'><button className='car-btn' onClick={e => switchCarBrands(e.target,'audi')}>Audi</button></div>
        </div>
        
        <section className="cars-section">
          {cars.map(car =>{
            return (
              <div key={uuidv4()} className="cars-div">
                <img src={car.carPicture}/>
                <div className="cars-details">
                  <span>{car.carCategory}</span>
                  <p>{car.carBrand.toUpperCase()} {car.carModel}</p>
                  <span>$ {car.carPrice}</span>
                <Link to='/carDetails' state={{carBrand:car.carBrand, carModel:car.carModel, engine:car.carSpecs.engine, power:car.carSpecs.power, transmision:car.carSpecs.transmision, dimensions:car.carSpecs.dimensions, fuel:car.carSpecs.fuel, carPrice:car.carPrice, carStock:{blackStock:car.carStock.blackStock, orangeStock:car.carStock.orangeStock, redStock:car.carStock.redStock, grayStock:car.carStock.grayStock, greenStock:car.carStock.greenStock}}}>View Details</Link>
                </div>
              </div>
            )
          })}
        </section>
        <footer>
            <h1 className='nav-title'><Link className='link-to-home' to="/"><span style={{color:'rgb(248, 175, 2)'}}>auto</span>motor</Link></h1>
            <div className="contact-info-div">
              <Link to="mailto:automotor@biz.com">automotor@biz.com</Link>
              <span>+38344897236</span>
            </div>
        </footer>
        </div>
    )
}