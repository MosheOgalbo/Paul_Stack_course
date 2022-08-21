import React from 'react'
import './ProductForDisplay.css'

 const ProductForDisplay = ({ title, image, category, price }) => {
    return (
        <div className="product-card">
            <p className="Product-description ">
                {title}
            </p>
            <div className="product-image">
                <img
                    src={image}
                />
            </div>
            <div className="product-info">
                <h5>{category}</h5>
                <h6>${price}</h6>
            </div>
        </div>
    )
}

export default ProductForDisplay


