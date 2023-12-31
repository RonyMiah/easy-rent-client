import React from 'react'

const ProductCart = ({alldata, deletfunc}) => {
    const { _id, name, price, image, year, type, fual, kilo, picture } = alldata;
  return (
    <div className="product-box">
        <div>
          <div className="car-box">
          {!picture ? <img src={image} alt="" /> : 
        <img src={`data:img/png;base64,${picture}`} alt="" />}
            {/* <img src={image} alt="" /> */}
          </div>
          <div className="cart-text">
            <p className="year-text">{year}</p>
            <h3 className="name-text">{name}</h3>
            <p className="price-text">
              <span className="span-text">${price}</span>/Day
            </p>
            <div className="details-box">
              <small className="small_details">{kilo}kilo</small>
              <small className="small_details">{type}</small>
              <small className="small_details">{fual}</small>
            </div>
          </div>
        </div>
        <div className=" my-3 d-flex justify-content-between">

            <button onClick={() => deletfunc(_id)} className="deleteservice-button">Delete Product</button>
        </div>
      </div>
  )
}

export default ProductCart