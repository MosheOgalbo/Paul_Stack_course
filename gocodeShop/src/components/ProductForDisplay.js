import React from 'react'
import './ProductForDisplay.css'
import { useNavigate } from "react-router-dom";

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';



const ProductForDisplay = ({ title, image, category, price, addProductToCart, removalProductToCart }) => {

    const navigate = useNavigate()

    return (
        <div className="product-card">
            <p className="Product-description ">
                {title}
            </p>
            <div className="product-image">
                {/* <CardMedia> */}
                <img
                    src={image}
                    alt="dhsuagvdsahkd"
                />
                {/* </CardMedia> */}
            </div>
            <div className="product-info">
                <h5>{category}</h5>
                <h6>${price}</h6>
            </div>
            <button className='addButton'
                onClick={addProductToCart}
                style={{ cursor: "pointer" }}>
                +
            </button>

            <button className='removalButton' onClick={removalProductToCart}
                style={{ cursor: "pointer" }}>
                -
            </button>

            <button onClick={() => navigate("/cart")} 
            style={{ cursor: "pointer" }} >go to cart</button>
        </div>

    )
}

export default ProductForDisplay