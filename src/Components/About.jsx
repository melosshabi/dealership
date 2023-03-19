import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/About.css'

export default function About() {
    return(
        <div className='about-div'>
            <div className="introduction-div">
            <h2>About Us</h2>
            <p>Here at our dealership, we are dedicated to giving outstanding customer service and assisting you in finding the ideal vehicle to suit your 
                needs. From perusing our large inventory to obtaining financing and beyond, our team of experienced and amiable specialists is ready to help you at 
                every step of the road. We take pleasure in providing a large range of top-notch cars at affordable prices, and we work hard to make the car-buying 
                process as simple and fun as we can. We appreciate your decision to make us your go-to automotive partner.
            </p>
            <br/>
            <p>If you would like to check out some of our cars visit our <Link to="/">Home Page</Link></p>
            <p>Or if you have any questions please do not hesitate to send us a message at:<Link to="mailto:automotor@biz.com">automotor@biz.com </Link> 
             or through our <Link to="/contact">Contact</Link> Page</p>
            </div>
        </div>
    )
}