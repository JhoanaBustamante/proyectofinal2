import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Moda",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Tecnologia",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Carros",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Casa",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Regalos",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Musica",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Mascota",
    },

    {
      cateImg: "./images/category/cat11.png",
      cateName: "Libros",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
