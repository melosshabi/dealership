import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import '../Styles/threeSixtyView.css'
export default function ThreeSixtyView(){
    const location = useLocation()
    console.log(location)
    const {InteriorLink} = location.state
    
    return (
        <div className="interior-wrapper">
            <script src="https://scripts.sirv.com/sirv.js"></script>
            {/* <div className="Sirv" data-src="https://ralumete.sirv.com/Spins/Test/BMWM8interior.spin"></div> */}
            <iframe src={InteriorLink} width="100%" height="100%" frameBorder="0" ></iframe>
      </div>
    )
}