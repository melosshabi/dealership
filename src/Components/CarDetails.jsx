import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import {useGLTF, Stage, PresentationControls } from '@react-three/drei'
import '../Styles/carStyles.css'

export default function CarDetails() {
  let location = useLocation()
  let {carBrand, carModel, engine, power, transmision, dimensions, fuel, carPrice } = location.state;

  const [carColor, setCarColor] = useState('black');
  const [rimColor, setRimColor] = useState('black');

  // Funksioni qe e renderon modelin 3D
  function Model(props){
      const {scene} = useGLTF(`/3d-models/${carBrand}/${carModel}/${carColor}${carModel}${rimColor}Rims.glb`)
      return <primitive object={scene} {...props}/>
    }

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
        <Canvas id="car-canvas" dpr={[1, 2]} camera={{fov:45}} style={{'width':'50%', 'height':'40vh', 'margin':'auto', 'marginTop':'10vh'}}>
          {/* <color attach="background" args={['rgba(0, 0, 0)']}/> */}
          <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={null}>
              <Model scale={0.01}/>
            </Stage>
          </PresentationControls>
        </Canvas>
        <div className="car-details">
            <h2>{carBrand.toUpperCase() + ' ' + carModel}</h2>
            <div className="car-specs">
                <p><span className='car-specs-span'>Engine:</span> {engine}</p>
                <p><span className='car-specs-span'>Power:</span> {power}</p>
                <p><span className='car-specs-span'>Transimision:</span> {transmision}</p>
                <p><span className='car-specs-span'>Dimensions:</span> {dimensions}</p>
                <p><span className='car-specs-span'>C/D Fuel Economy:</span> {fuel}</p>
                <p><span className='car-specs-span' >Price:</span> ${carPrice}</p>
                {/* <button className="add-to-cart">Add To Cart</button> */}
                <button className='order-btn'>Order Now</button>
            </div>
        </div>
    </div>
  )
}
