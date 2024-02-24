import React from 'react' 
import './Footer.css'
import logo from '../Assets/logo_big.png'
import { Link } from 'react-router-dom';
import instagrm from'../Assets/instagram_icon.png'
import pint from'../Assets/pintester_icon.png'
import whats from'../Assets/whatsapp_icon.png'



const  Footer = () => {
return (
<div className='footer'>
    <div className='footer-content'>
        <div className='upper-content'>
            <img src={logo} alt="biglogo"></img>
            <p>Store by Hassan</p>
            <ul className="nav">
        <li><Link to="/">Company</Link></li>
        <li><Link to="/men">Product</Link></li>
        <li><Link to="/women">Office</Link></li>
        <li><Link to="/kids">About</Link></li>
        <li><Link to="/kids">Contact</Link></li>

      </ul>
        </div>
        <div className='content-lower'>
        <img src={instagrm} alt="biglogo"></img>
        <img src={pint} alt="biglogo"></img>
        <img src={whats} alt="biglogo"></img>

        </div>
    </div>

</div>
)
}
export default Footer