import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className='navbar_container'>
          <button
          className={`burger-btn ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuClick}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <img className='logo_img' src="./images/logo.png" alt="logo" />

        <div className={`li-container ${isMenuOpen ? "active" : ""}`}>
            <ul className='ul_box'>
            <li><span style={{color:"#2afdb1"}}>❤</span> Blog</li>
            <li><span style={{color:"#2afdb1"}}>❤</span> Preguntas Frecuentes</li>
            <li><span style={{color:"#2afdb1"}}>❤</span> Contacto</li>
            </ul>
        </div>
        <div className='btn_container'>
        <h3 className='client_btn'>Soy Cliente</h3>
        <h3 className='contact_btn'>Contactenme</h3>
        </div>
    </div>
  )
}

export default Navbar