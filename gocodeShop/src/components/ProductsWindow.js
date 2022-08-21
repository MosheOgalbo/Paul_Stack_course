import React, { useEffect, useState } from 'react'
import './ProductsWindow.css'
import ProductForDisplay from './ProductForDisplay'

const ProductsWindow = () => {

    const [listOpject, setListOpject] = useState([])
    const [changeView, setChangeView] = useState(true)

    const getApiData = async () => {
        try {
            const responseApi = await fetch('https://fakestoreapi.com/products/')
            const data = await responseApi.json()
            console.log(data)
            setListOpject(data)
            setChangeView(false)

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        console.log(changeView)
        getApiData()
        

    }, [])
   

    const productListDisplay = listOpject.map((element, index) => (

        <ProductForDisplay

            key={(index)}
            title={element.title}
            image={element.image}
            category={element.category}
            price={element.price}
        />
    ));

    return (

  
        <>
        
            {changeView ?
                <section className='loader'>{setChangeView(false)}</section>
                : <section className="products">{productListDisplay}</section>}
        </>

    )

}

export default ProductsWindow