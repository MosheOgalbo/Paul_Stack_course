import React, { useState, useEffect, } from "react";
import App from "../App";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Cart from "./Cart";
import HomePage from "./HomePage"
import NotFound from "./NotFound";
import MyContext from "../MyContext";
import ProductManagementForm from './ProductManagementForm'
import Header from './Header';



const Routing = () => {

    let isLoggedIn = true
    const [listOpject, setListOpject] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const getProductsApi = async () => {
        
        const StoredetailsUrl = "http://localhost:8000/api/products/";
        const response = await axios.get(StoredetailsUrl);
        console.log(StoredetailsUrl)
        const data = await response.data;
        setListOpject(data);
    };

    useEffect(() => {
        getProductsApi();
    }, []);

    const addProductToCart = (product) => {

        const productInCart = cart.findIndex((item) => item.id === product.id);
        if (productInCart === -1) {
            const newProductToCart = { ...product, amount: 1 };
            setCart((prev) => [...prev, newProductToCart]);
        } else {
            const newCart = [...cart];
            newCart[productInCart].amount++;
            setCart(newCart);
        }
    };

    //לתקן
    const removalProductToCart = (product) => {

        const productInCartIndex = cart.findIndex((item) => item.id === product.id);
        if (productInCartIndex !== -1) {
            if (cart[productInCartIndex].amount > 1) {
                const newCart = [...cart]
                newCart[productInCartIndex].amount += -1
                setCart(newCart)
            } else {
                const productInCart = cart.filter((item) => item.id !== product.id);
                setCart(productInCart)
            }
        }
    }





    const filterProductsByCategory = (category) => {
        if (category === "/") {
            setFilteredProducts(listOpject);
            return;
        }
        const filteredItems = listOpject.filter(
            (product) => product.category === category
        );
        setFilteredProducts(filteredItems);
    };

    const categories = listOpject.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index)

        // const isAdmin = true
        //  let id =6




return (
    <MyContext.Provider value={{ listOpject, filterProductsByCategory, filteredProducts, cart, categories }} >

        <BrowserRouter>
            <div className="HeaderTop">
                <Header />
                {/* <SwipeableDrawer /> */}
            </div>



            {isLoggedIn ? (
                <Routes>
                    <Route path="/" element={<App addProductToCart={addProductToCart} removalProductToCart={removalProductToCart} />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="Admin" element={<ProductManagementForm setListOpject={setListOpject} categories={categories} />} />
                    {/* <Route path= "product" element={<ProductsID id={id}/>}/> */}
                    <Route path="homePage" element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            ) :

                <Routes>
                    <Route path="homePage" element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>}

        </BrowserRouter>
    </MyContext.Provider>
);
};

export default Routing;