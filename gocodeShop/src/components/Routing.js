import React, { useState, useEffect } from "react";
import App from "../App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import HomePage from "./HomePage"
import NotFound from "./NotFound";
import MyContext from "../MyContext";
import ProductManagementForm from './ProductManagementForm'
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';


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

    const addProductToCart = (product) => {
        console.log(product);
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
        console.log(product)
        const productInCartIndex = cart.findIndex((item) => item.id === product.id);
        if (productInCartIndex !== -1) {
            if (product.amount > 1) {
                const newCart = [...cart]
                newCart[productInCartIndex].amount += -1
                setCart(newCart)
            } else {
                const productInCart = cart.filter((item) => item.id !== product.id);
                setCart(productInCart)
            }
        }
    }



    useEffect(() => {
        console.log(cart);
    }, [cart]);


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
    // const navigate = useNavigate()
    return (
        <MyContext.Provider
            value={{ listOpject, filterProductsByCategory, filteredProducts, cart, categories }}
        >
            <BrowserRouter>






                <div>
                    <Link to="homePage"> home </Link>
                    <Link to="/">main</Link>
                    <Link to="Admin"> Admin </Link>
                    <Link to="cart"> cart </Link>
                    <Link to="product">2</Link>
                </div>
                {/* </Toolbar> */}

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