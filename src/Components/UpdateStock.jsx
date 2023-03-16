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
    async function updateStock(e, carBrand, docID){
      e.preventDefault()
      const stockInputs = document.getElementsByClassName('stock-input')
      const newBlackStock = stockInputs[0].value
      const newRedStock = stockInputs[1].value
      const newOrangeStock = stockInputs[2].value
      const newGreenStock = stockInputs[3].value
      const newGrayStock = stockInputs[4].value
      console.log(newBlackStock, newRedStock, newOrangeStock, newGreenStock, newGrayStock)

      const docRef = doc(db, carBrand, docID)
      try{
      await updateDoc(docRef, {carStock:{blackStock:newBlackStock, redStock:newRedStock, greenStock:newGreenStock, orangeStock:newOrangeStock, grayStock:newGrayStock}})
      .then(()=> window.location.reload())
      }catch(err){
        setError(err.message)
      }
    }
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
                  <img src={car.carPicture}/>
                  <p>{car.carBrand.toUpperCase() + " " + car.carModel}</p>
                  <p>${car.carPrice}</p>
                </div>
                
                <div className="car-stocks">
                  <form className="update-stock-form" onSubmit={e => updateStock(e, car.carBrand, car.docID)}>
                    <label>Current Black Stock: <span className='bold'>{car.carStock.blackStock}</span> Update Stock:<input className="stock-input" type="number" onChange={e => console.log(e.target.value)}/></label>
                    <label>Current Red Stock: <span className="bold">{car.carStock.redStock}</span> Update Stock:<input className="stock-input" type="number"/></label>
                    <label>Current Orange Stock: <span className="bold">{car.carStock.orangeStock}</span> Update Stock:<input className="stock-input" type="number" /></label>
                    <label>Current Green Stock: <span className="bold">{car.carStock.greenStock}</span> Update Stock:<input className="stock-input" type="number"/></label>
                    <label>Current Gray Stock: <span className="bold">{car.carStock.grayStock}</span> Update Stock:<input className="stock-input" type="number"/></label>
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