import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import homeImage1 from '../images/home-image.jpg'
import homeImage2 from '../images/home-image2.jpg'
import homeImage3 from '../images/home-image3.jpg'
import '../Styles/Home.css'
import {db} from '../firebase-config'
import {collection, getDocs} from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

export default function Home(){

    // Funksioni per Slideshow
    useEffect(() =>{
      
      if(document.readyState != "ready"){
          let homeImages = document.getElementsByClassName('home-images')
          let counter = 1
          if(counter <= homeImages.length){
            var imageInterval = setInterval(()=> {
              homeImages[counter].classList.toggle('active-image')
              counter++
  
              if(counter === homeImages.length){
                counter = 1
              }
            }, 3000)
          }
        }
      return () => clearInterval(imageInterval)
    }, [])
  
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
        <div className="images-wrapper">
          <img src={homeImage1} className="home-images active-image" alt="Home image 1"/>
          <img src={homeImage2} className="home-images" alt="Home image 2"/>
          <img src={homeImage3} className="home-images" alt="Home image 3"/>
        </div>
        <div className="car-categories-wrapper">
          <div className='bmw-category'><button className="car-btn active-btn" onClick={e => switchCarBrands(e.target, 'bmw')}>BMW</button></div>
          <div className='mercedes-category'><button className='car-btn' onClick={e => switchCarBrands(e.target, 'mercedes')}>Mercedes</button></div>
          <div className='audi-category'><button className='car-btn' onClick={e => switchCarBrands(e.target,'audi')}>Audi</button></div>
        </div>
        
        <section className="cars-section">
          {cars.map(car =>{
            console.log(car)
            return (
              <div key={uuidv4()} className="cars-div">
                <img src={car.mainPicture}/>
                <div className="cars-details">
                  <span>{car.carCategory}</span>
                  <p>{car.carBrand.toUpperCase()} {car.carModel}</p>
                  <span>$ {car.carPrice}</span>
                <Link className="view-details-btn" to='/carDetails' state={{documentID:car.id, carBrand:car.carBrand, carModel:car.carModel, color1Name:car.carStock.color1Name, color1Spin:car.carStock.color1Spin, color1Stock:car.carStock.color1Stock, color2Name:car.carStock.color2Name, color2Spin:car.carStock.color2Spin, car2Stock:car.carStock.color2Stock, color3Name:car.carStock.color3Name, color3Spin:car.carStock.color3Spin, color3Stock:car.carStock.color3Stock, interiorLink:car.interiorLink, engine:car.carSpecs.engine, power:car.carSpecs.power, transmision:car.carSpecs.transmision, dimensions:car.carSpecs.dimensions, fuel:car.carSpecs.fuel, carPrice:car.carPrice, carStock:{blackStock:car.carStock.blackStock, orangeStock:car.carStock.orangeStock, redStock:car.carStock.redStock, grayStock:car.carStock.grayStock, greenStock:car.carStock.greenStock}}}>View Details</Link>
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