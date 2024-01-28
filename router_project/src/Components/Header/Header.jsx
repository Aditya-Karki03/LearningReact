import React from 'react'
import './Header.css'
import MyRedLogo from '../../Images/MyRedLogo.png'
import { Link,NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="header-container">
        <div className="img-container">
            <Link to='/'>
                <img src={MyRedLogo} alt="Logo" />
            </Link>            
        </div>
        <div>
            <ul className="navigation">
                <li>
                    <NavLink className={({isActive})=>
                        `Navlink ${isActive?'orange':'gray'}`
                    } to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>
                        `Navlink ${isActive?'orange':'gray'}`
                    } to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>
                        `Navlink ${isActive?'orange':'gray'}`
                    } to='/Contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>
                        `Navlink ${isActive?'orange':'gray'}`
                    } to='/Github'>Github</NavLink>
                </li>
            </ul>
        </div>
        <div className="btns">
            <Link className='link login' to='#'>Log in</Link>
            <Link className='link getStarted' to='#'>Get started</Link>
        </div>
    </div>
  )
}

export default Header