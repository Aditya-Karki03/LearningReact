import React from "react"
import MyRedLogo from '../../Images/MyRedLogo.png'
import './Header.css'
import { NavLink,Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Link to="/" className="logo">
                <img src={MyRedLogo} alt='Logo' />
            </Link>
            <div className="nav-bar">
                <ul>
                    <li>
                        <NavLink className={({isActive})=>{
                            `isActive?'red':'normal'`
                        }}>
                            <Link to="/">Home</Link>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink >
                            <Link to="/About">About</Link>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink >
                             <Link to="/Contact">Contact</Link>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <Link to='/Github'>Github</Link>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="buttons">
                <button className='Login btn'>Log in</button>
                <button className="GetStarted btn">Get Started</button>
            </div>
        </>
    );
}