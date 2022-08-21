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


        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        console.log(changeView)
        getApiData()
        

    }, [])
    // useEffect(()=>{
    //     setChangeView(true)
    //     console.log(changeView)
    // },[])

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
                <section className='loader'>{setTimeout(()=>{setChangeView(false)},200)}</section>
                : <section className="products">{productListDisplay}</section>}
        </>

    )

}

export default ProductsWindow