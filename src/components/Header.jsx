import React from 'react'
import investImg from '../assets/investment-calculator-logo.png'

const Header = () => {
    return (
        <header id='header'>
            <img src={investImg} alt="" />
            <h2>Investment Calculator</h2>
        </header>
    )
}

export default Header
