import React from 'react'
import '../styles/style.css'
import logo from '../resources/logo.jpeg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header'>
        <Link to="/#" class="logo">
            <img src={logo} alt="Logo" />
        </Link>
        <div class="header-right">
            Addis Ababa Science and Technology University Admin Dashboard
        </div>
    </div>
  )
}
