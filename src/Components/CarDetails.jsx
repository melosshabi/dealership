import React, {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import '../Styles/carStyles.css'
import Xicon from '../images/x-icon.svg';

export default function CarDetails() {
  let location = useLocation()
  let {carBrand, carModel, exteriorLink,interiorLink, engine, power, transmision, dimensions, fuel, carPrice, carStock, documentID } = location.state;
  const [carColor, setCarColor] = useState('black');
  const [rimColor, setRimColor] = useState('black');

  // Funksioni qe e renderon modelin 3D
  // function Model(props){
  //     const {scene} = useGLTF(`/3d-models/${carBrand}/${carModel}/${carColor}${carModel}${rimColor}Rims.glb`)
  //     return <primitive object={scene} {...props}/>
  //   }

    // Funksioni qe e ndron ngjyren e kerit
    function switchCarColor(color, targetButton){
      let switchColorBtns = document.querySelectorAll('.switch-car-color-btn')
      switchColorBtns.forEach(btn => btn.classList.remove('selected-color'))
      targetButton.classList.add('selected-color')
      setCarColor(color)
    }

    // Funskioni qe e ndron ngjyren e fellneve
    function switchRimColor(color, targetButton){
      let switchColorBtns = document.querySelectorAll('.switch-rim-color-btn')
      switchColorBtns.forEach(btn => btn.classList.remove('selected-color'))
      targetButton.classList.add('selected-color')
      setRimColor(color)
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
        {/* Ngjyrat e kerit */}
          
          <div className="car-colors">
            <div className="switch-car-color-btn color-black selected-color" onClick={e => switchCarColor('black', e.target)}></div>
            <div className="switch-car-color-btn color-orange" onClick={e => switchCarColor('orange', e.target)}></div>
            <div className="switch-car-color-btn color-green" onClick={e => switchCarColor('green', e.target)}></div>
            <div className="switch-car-color-btn color-red" onClick={e => switchCarColor('red', e.target)}></div>
            <div className="switch-car-color-btn color-gray" onClick={e => switchCarColor('gray', e.target)}></div>
          </div>

            {/* Ngjyrat e fellneve */}
          <div className="rim-colors">
          <div className="switch-rim-color-btn color-black selected-color" onClick={e => switchRimColor('black', e.target)}></div>
              <div className="switch-rim-color-btn color-white" onClick={e => switchRimColor('white', e.target)}></div>
              
          </div>
        {/* <Canvas id="car-canvas" dpr={[1, 2]} camera={{fov:15}} style={{'width':'60%', 'height':'40vh'}} >
          <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={null}>
              <Model scale={0.01}/>
            </Stage>
          </PresentationControls>
        </Canvas> */}
        <div id="car-canvas">
        <iframe src={exteriorLink} width="100%" height="100%" frameBorder="0"></iframe>
        </div>
        <div className="car-details">
            <p>Stock:{carColor == 'black' ? carStock.blackStock
                      : carColor == 'orange' ? carStock.orangeStock
                      : carColor == 'green' ? carStock.greenStock
                      : carColor == 'red' ? carStock.redStock
                      : carColor == 'gray' ? carStock.grayStock : ''
              }</p>
            <h2>{carBrand.toUpperCase() + ' ' + carModel}</h2>
              
            <div className="car-specs">
                <p><span className='car-specs-span'>Engine:</span> {engine}</p>
                <p><span className='car-specs-span'>Power:</span> {power}</p>
                <p><span className='car-specs-span'>Transimision:</span> {transmision}</p>
                <p><span className='car-specs-span'>Dimensions:</span> {dimensions}</p>
                <p><span className='car-specs-span'>C/D Fuel Economy:</span> {fuel}</p>
                <p><span className='car-specs-span' >Price:</span> ${carPrice}</p>
                <div className="btns-wrapper">
                <button className="interior-btn" onClick={toggleInterior}>View Interior</button>
                <Link className='request-test-drive-btn' to="/reqTestDrive" state={{documentID:documentID,brand:carBrand, model:carModel, color:carColor, rimColor:rimColor, price:carPrice}}>Request Test Drive</Link>
                </div>
                
                {/* div-i i interiorit */}
                <div className="interior-wrapper">
                  <button className="close-interior-btn" onClick={toggleInterior}><img src={Xicon}/></button>
                  <script src="https://scripts.sirv.com/sirv.js"></script>
                  <iframe src={interiorLink} width="90%" height="90%" frameBorder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}
