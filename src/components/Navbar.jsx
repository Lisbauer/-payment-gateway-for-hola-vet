import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <img className='logo_img' src="./images/logo.png" alt="logo" />

        <div className='li_container'>
            <ul className='ul_box'>
            <li><span style={{color:"#2afdb1"}}>❤</span> Blog</li>
            <li><span style={{color:"#2afdb1"}}>❤</span> Preguntas Frecuentes</li>
            <li><span style={{color:"#2afdb1"}}>❤</span> Contacto</li>
            </ul>
        </div>
        <div className='btn_container'>
        <h3 className='client_btn'>Soy Cliente</h3>
        <h3 className='contact_btn'>Quiero que me contacten</h3>
        </div>
    </div>
  )
}

export default Navbar