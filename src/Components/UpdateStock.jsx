import React, {useState,useEffect} from 'react'
import {db} from '../firebase-config'
import {getDocs, collection, updateDoc, doc} from 'firebase/firestore'
import '../Styles/updateStock.css'

export default function UpdateStock(){

    const [cars, setCars] = useState([])
    const [error, setError] = useState('')

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
    // Funksioni per mi ndru keret ne ekran
    async function switchBrand(targetButton, brand){
      const buttons = document.getElementsByClassName('switch-brand-btn')

      for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('active-btn')
      }
      targetButton.classList.add("active-btn")
      const collectionRef = collection(db, brand)
      const documents = await getDocs(collectionRef)
      
      let tempArr = []
      documents.forEach(doc => {
        tempArr.push({...doc.data(), docID:doc.id})
      })
      setCars(tempArr)
    }

    // Funksioni per me perditesu stockin
    async function updateStock(e, carBrand, docID, color1Name, color1Spin, color2Name, color2Spin, color3Name, color3Spin){
      e.preventDefault()
      const stockInputs = document.getElementsByClassName('stock-input')
      const newColor1Stock = stockInputs[0].value
      const newColor2Stock = stockInputs[1].value
      const newColor3Stock = stockInputs[2].value

      const docRef = doc(db, carBrand, docID)
      try{
      await updateDoc(docRef, {carStock:{color1Name:color1Name, color1Spin:color1Spin, color1Stock:newColor1Stock, color2Name, color2Spin, color2Stock:newColor2Stock, color3Name, color3Spin, color3Stock:newColor3Stock}})
      .then(()=> window.location.reload())
      }catch(err){
        setError(err.message)
      }
    }
    // function capitalize(str){
    //   let tempStr = str.split('');
    //   let capitalizedLetter = tempStr[0].toUpperCase()
    //   tempStr[0] = capitalizedLetter
    //   let newStr = tempStr.join('')
    //   return newStr;      
    // }
    return (
        <div className='update-stock-wrapper'>
            <h2 className='stock-updater-title'>Stock Updater</h2>
            <div className="car-brands">
                <button className='switch-brand-btn active-btn' onClick={e => switchBrand(e.target, 'bmw')}>BMW</button>
                <button className='switch-brand-btn' onClick={e => switchBrand(e.target, 'mercedes')}>Mercedes</button>
                <button className='switch-brand-btn' onClick={e => switchBrand(e.target, 'audi')}>Audi</button>
            </div>
            <div className="cars">
            {cars.map((car, index) =>{

            return (
              <div key={index} className="cars-stock-div">
                <div className="update-stock-cars-details">
                  <img src={car.mainPicture}/>
                  <p>{car.carBrand.toUpperCase() + " " + car.carModel}</p>
                  <p>${car.carPrice}</p>
                </div>
                
                <div className="car-stocks">
                  <form className="update-stock-form" onSubmit={e => updateStock(e, car.carBrand, car.docID, car.carStock.color1Name, car.carStock.color1Spin, car.carStock.color2Name, car.carStock.color2Spin, car.carStock.color3Name, car.carStock.color3Spin)}>
                    <label>Current {car.carStock.color1Name} Stock: <span className='bold'>{car.carStock.color1Stock}</span> Update Stock:<input className="stock-input" type="number" onChange={e => console.log(e.target.value)}/></label>
                    <label>Current {car.carStock.color2Name} Stock: <span className="bold">{car.carStock.color2Stock}</span> Update Stock:<input className="stock-input" type="number"/></label>
                    <label>Current {car.carStock.color3Name} Stock: <span className="bold">{car.carStock.color3Stock}</span> Update Stock:<input className="stock-input" type="number" /></label>
                      <p className='update-stock-error'>{error}</p>
                      <button className='update-stock-btn'>Update Stock</button>
                  </form>
                  </div>
              </div>
            )
          })}
            </div>
        </div>
    )
}