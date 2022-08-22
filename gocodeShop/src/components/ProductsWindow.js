import React, { useContext, useEffect, useState } from 'react'
import './ProductsWindow.css'
import ProductForDisplay from './ProductForDisplay'
import { MyContext } from './MyContext'


const ProductsWindow = () => {

    const { listOpject, changeView } = useContext(MyContext);
//פונקציה הוסף לסל 
const wasAdded =()=>{

}

    const productListDisplay = listOpject.map((element, index) => (
        <ProductForDisplay
            key={(index)}
            title={element.title}
            image={element.image}
            category={element.category}
            price={element.price}
            functioButton={wasAdded}
        />
    ));
    return (
        <>
            {listOpject ?
                <section className='loader'>{ }</section>
                : <section className="products">{productListDisplay}</section>}
        </>

    )

}

export default ProductsWindow