import React from 'react'
import "./header.css"

import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <header>
            <nav>
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/login')}>Login</li>
                    <li onClick={() => navigate('/logout')}>Logout</li>
                    <li onClick={() => navigate('/profile')}>Profile</li>
                    <li onClick={() => navigate('/order')} >Order</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header