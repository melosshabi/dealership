import React, {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import '../Styles/carDetails.css'
import Xicon from '../images/x-icon.svg';

export default function CarDetails() {
  let location = useLocation()
  let {carBrand, carModel, color1Name, color1Spin, color1Stock, color2Name, color2Stock, color2Spin, color3Name, color3Stock, color3Spin, interiorLink, engine, transmision, dimensions, fuel, carPrice, documentID } = location.state;
  const [carColor, setCarColor] = useState(color1Name);
  const [carStock, setStock] = useState(color1Stock)
  const [selectedColor, setSelectedColorSpin] = useState(color1Spin)


    // Funksioni qe e ndron ngjyren e kerit
    function switchCarColor(colorName, colorStock, colorSpin, targetButton){
      let switchColorBtns = document.querySelectorAll('.switch-car-color-btn')
      switchColorBtns.forEach(btn => btn.classList.remove('selected-color'))
      targetButton.classList.add('selected-color')
      setCarColor(colorName)
      setStock(colorStock)
      setSelectedColorSpin(colorSpin)
    }

    // Funksioni qe e shfaq interiorin
    function toggleInterior(){
      const interiorWrapper = document.getElementsByClassName('interior-wrapper')[0]
      interiorWrapper.classList.toggle('active-interior')
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      document.body.classList.toggle('bodyScrollDisabled')

      if(!document.documentElement.classList.contains('htmlScrollDisabled')) {
        document.documentElement.classList.add('htmlScrollDisabled')
      } else if(document.documentElement.classList.contains('htmlScrollDisabled')){
        document.documentElement.classList.remove('htmlScrollDisabled')
      } 
    }
  return (
    <div className='car-wrapper'>
    
        <div className="selected-car-details">
          <div className="car-canvas">
            <script src="https://scripts.sirv.com/sirv.js"></script>
            <iframe src={selectedColor}  width="100%" height="100%" frameBorder="0"></iframe>   
            <div className="car-colors">
              <div className="switch-car-color-btn selected-color" style={{backgroundColor:color1Name}} onClick={e => switchCarColor(color1Name, color1Stock, color1Spin, e.target)}></div>
              <div className="switch-car-color-btn" style={{backgroundColor:color2Name}} onClick={e => switchCarColor(color2Name, color2Stock, color2Spin, e.target)}></div>
              <div className="switch-car-color-btn" style={{backgroundColor:color3Name}} onClick={e => switchCarColor(color3Name, color3Stock, color3Spin, e.target)}></div>
            </div>
          </div>
            <h2 className='car-h2'>{carBrand.toUpperCase() + ' ' + carModel}</h2>
            <p>Stock: {carStock}</p>
            <div className="car-specs">
                <p><span className='car-specs-span'>Engine:</span> {engine}</p>
                <p><span className='car-specs-span'>Transimision:</span> {transmision}</p>
                <p><span className='car-specs-span'>Dimensions:</span> {dimensions}</p>
                <p><span className='car-specs-span'>Fuel:</span> {fuel}</p>
                <p><span className='car-specs-span' >Price:</span> ${carPrice}</p>
                <div className="btns-wrapper">
                <button className="interior-btn" onClick={toggleInterior}>View Interior</button>
                <Link className='request-test-drive-btn' to="/reqTestDrive" state={{documentID:documentID,brand:carBrand, model:carModel, colorName:carColor, colorSpin:selectedColor, price:carPrice}}>Request Test Drive</Link>
                </div>
                
                {/* div-i i interiorit */}
                <div className="interior-wrapper">
                  <button className="close-interior-btn" onClick={toggleInterior}><img className="x-icon" src={Xicon}/></button>
                  <iframe src={interiorLink} width="90%" height="90%" frameBorder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}
