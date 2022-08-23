import React, { useState, useEffect } from "react";
import App from "../App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import HomePage from "./HomePage"
import NotFound from "./NotFound";
import MyContext from "../MyContext";
import ProductManagementForm from './ProductManagementForm'

const Routing = () => {
    let isLoggedIn = true
    const [listOpject, setListOpject] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const getProductsApi = async () => {
        const test = "https://fakestoreapi.com/products/";
        const response = await fetch(test);
        const data = await response.json();
        setListOpject(data);
    };

    useEffect(() => {
        getProductsApi();
    }, []);

    const AddProductToCart = (product) => {
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

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    // useEffect(() => {
    //     console.log(listOpject);
    //   }, [listOpject]);

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
    const isAdmin = true

    return (
        <MyContext.Provider
            value={{ listOpject, filterProductsByCategory, filteredProducts, cart, categories }}
        >
            <BrowserRouter>
                <button value={"./"} >home</button>
                <div>
                    <Link to="homePage"> home </Link>
                    <Link to="main">main</Link>
                    <Link to="Admin"> Admin </Link>
                    <Link to="cart"> cart </Link>

                </div>
                {isLoggedIn ? (
                    <Routes>
                        <Route path="/" element={<App AddProductToCart={AddProductToCart} />} />
                        <Route path="main" element={<App />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="Admin" element={<ProductManagementForm setListOpject={setListOpject} categories={categories} />} />
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