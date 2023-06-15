import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Entrega en todo el mundo",
      decs: "Puedes comprar desde cualquier parte del mundo.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Pago seguro",
      decs: "Realiza tus pagos desde PSE de forma segura.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Compre con confianza ",
      decs: "Ofrecemos precios competitivos en nuestros más de 100 millones de productos.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Soporte 24/7 ",
      decs: "Comunicate con nosotros a cualquier hora.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
