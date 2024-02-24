import React from 'react' 
import './Newsletter.css'
const  NewsLetter = () => {
    const clickMe = () => {

    }
return (
<div className='newsletter'>
    <div className='content'>
        <div className='uppercontent'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe to our NewsLetter and get updated</p>
    </div>
    <div className='lowercontent'>
    <input type='text' placeholder='Email'></input>
    <button onClick={clickMe}>Subscribe</button>   
    </div>
     </div>

</div>
)
}
export default NewsLetter