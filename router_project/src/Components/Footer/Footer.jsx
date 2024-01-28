import React from 'react'
import 'boxicons'
import { Link } from 'react-router-dom'
import MyRedLogo from '../../Images/MyRedLogo.png'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <hr />
        
        <div className="multiples">
            <div className="logo">
                <Link to='/'>
                    <img src={MyRedLogo} alt="Logo" />
                </Link>
            </div>
            <div >
                <ul className="Resources">
                    <li><Link className='bolderr link' to='#'>RESOURCES</Link></li>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/About'>About</Link></li>
                </ul>
            </div>
            <div >
                <ul className="socialmedia Resources">
                    <li><Link className='bolderr link' to='#'>FOLLOW US</Link></li>
                    <li><Link className='link' to='/'>Github</Link></li>
                    <li><Link className='link' to='/About'>Discord</Link></li>
                </ul>
            </div>
            <div >
                <ul className="Resources">
                    <li><Link className='bolderr link' to='#'>LEGAL</Link></li>
                    <li><Link className='link' to='/'>Privacy Policy</Link></li>
                    <li><Link className='link' to='/About'>Terms & Conditions</Link></li>
                </ul>
            </div>
        </div>
        <hr />
       <div className="copyright">
            <span>&copy; 2024adityakarki. All Rights Rerserved</span>
            <div className="icons">
                <box-icon name='facebook-square' type='logo' ></box-icon>
                <box-icon type='logo' name='discord'></box-icon>
                <box-icon type='logo' name='instagram'></box-icon>
                <box-icon name='github' type='logo' ></box-icon>
            </div>
       </div>
    </footer>
  )
}

export default Footer