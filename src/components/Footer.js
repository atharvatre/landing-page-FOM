import React from 'react'
import './Footer.css'
import logo from '../images/IMG-3365.jpg'
import { Divider } from '@mui/material'

const Footer=()=> {

    const year=new Date().getFullYear();
    return (
        <footer>
            <div className="footer_container">
                <div className="footr_deatils_one">
                    <h3>Address</h3>
                    <p>Meditate and Celebrate Inc 2997 E,<br/> Pacific Coast Highway Signal Hill CA 90755 USA . </p>
                    <h3>Phone: +1 562 760-2180 </h3>
                    
                </div>
                <div className="footr_deatils_one">
                    <h3>Get To Know Us</h3>
                    <p>Privacy policy</p>
                    <p>Refund policy</p>
                    <p>Terms of service</p>
                    
                </div>
                <div className="footr_deatils_one">
                    <h3>Connect With Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>

                </div>
                <div className="footr_deatils_one forres">
                    <h3>Information</h3>
                    <p>About Us</p>
                    <p>Meditation</p>
                    <p>Yoga Accessories</p>
                    <p>Travel Accessories </p>
                    <p>Bulk Buy</p>
                    <p>Personal Coaching</p>
                </div>
                <div className="footr_deatils_one forres">
                    <h3>NewsLetter</h3>
                    <p>Send Us a Mail</p>
                    <div className="contact-input">
                        <input type='email' placeholder='email address'/>
                    </div>
                </div>
            </div>
            <Divider style={{ background: 'white' }}/>
            <div className="lastdetails">
                <img src={logo} alt="" />
                <p>© 2020 All rights reserved</p>
            </div>
            
        </footer>
    )
}

export default Footer