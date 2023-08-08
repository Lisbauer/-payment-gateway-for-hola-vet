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
        <a href="https://holavet.com.ar/"><img className='logo_img' src="./images/logo.png" alt="logo" /></a>

        <div className={`li-container ${isMenuOpen ? "active" : ""}`}>
            <ul className='ul_box'>
            <a href="https://holavet.com.ar/blog/"><li><span style={{color:"#2afdb1"}}>❤</span> Blog</li></a>
            <a href="https://holavet.com.ar/preguntas-frecuentes/"><li><span style={{color:"#2afdb1"}}>❤</span> Preguntas Frecuentes</li></a>
            <a href="https://holavet.com.ar/contact/"><li><span style={{color:"#2afdb1"}}>❤</span> Contacto</li></a>
            </ul>
        </div>
        <div className='btn_container'>
        <a href="https://holavet.com.ar/clientes-nuevo/" style={{textDecoration:"none"}}><h3 className='client_btn'>Soy Cliente</h3></a>
        </div>
    </div>
  )
}

export default Navbar