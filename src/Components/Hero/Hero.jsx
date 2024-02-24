import React from 'react';
import './Hero.css'; 
import hand_icon from '../Assets/hand_icon.png'
import heroimg from '../Assets/hero_image.png'


const Hero = () => {
return (
<div className='hero'>
    <div className='hero-left'>
    <p>New Arrivals Only</p>
    <div className='hand-icon'>
    <h1>New</h1>
        <img src={hand_icon} alt=""/>
    </div>
    <h1>Collection</h1>
    <h1>For Everyone</h1>



    </div>
    <div className='hero-right'>
        <img src={heroimg} alt=""/>
    </div>
</div>
)
}
export default Hero