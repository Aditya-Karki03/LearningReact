import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
        <div className="home-container">
            <div className="image1-container">
                <img src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                <div className="text">
                    <h2 className='header bold'>Download Now</h2>
                    <h3 className=''>Lorem Ipsum</h3>
                    <Link className='beautiful' to='#'>
                        <box-icon color='white' type='logo' name='play-store'></box-icon>
                        Download Now
                    </Link>
                </div>
            </div>
            <div className="image2-container">
                <img src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
                <h2>Lorem Ipsum Yojo</h2>
            </div>
        </div>
    </>
  )
}
//https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2"
//https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" 
export default Home