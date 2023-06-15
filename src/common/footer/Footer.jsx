import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>DETODITO</h1>
            <p>Tenemos de todo para ti.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Sobre nosotros</h2>
            <ul>
        
              <li>Puntos fisicos</li>
              <li>Terminos y condiciones</li>
              <li>Politicas de privacidad</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Atención al cliente</h2>
            <ul>
              <li>Center </li>
              <li>Cómo comprar </li>
              <li>Rastrea tu Order </li>
    
            </ul>
          </div>
          <div className='box'>
            <h2>Contactamos</h2>
            <ul>
              <li>Cartagena M29 L1 segunda etapa</li>
              <li>Email: atencionalcliente@gmail.com</li>
              <li>Phone: 3013198589</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
