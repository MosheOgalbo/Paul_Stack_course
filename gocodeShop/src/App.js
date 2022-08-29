import './App.css';
import SearchField from './components/SearchField'
import ProductsWindow from './components/ProductsWindow'
import MyValue from './MyValue';
import MyContext from './MyContext'
import { useState,useEffect} from 'react';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

function App({ addProductToCart,removalProductToCart}) {

  const [filterValueInArray, setFilterValueInArray] = useState([]);
  const { listOpject } = useContext(MyContext);

  useEffect(()=>{
    setFilterValueInArray(filterValueInArray)

  },[listOpject])

  return (
    <MyValue.Provider value={{filterValueInArray}}>
      
     
        <SearchField />
      <div className="flexColumn">
        <ProductsWindow addProductToCart={addProductToCart} removalProductToCart={removalProductToCart} />
      </div>
    </MyValue.Provider>

  );
}

export default App;