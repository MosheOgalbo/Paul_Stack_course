import './App.css';
import SearchField from './components/SearchField'
import ProductsWindow from './components/ProductsWindow'
import MyValue from './MyValue';
import MyContext from './MyContext'
import { useState,useEffect} from 'react';
import React, { useContext } from 'react'

function App({ AddProductToCart }) {

  const [filterValueInArray, setFilterValueInArray] = useState([]);
  const { listOpject } = useContext(MyContext);

  useEffect(()=>{
    setFilterValueInArray(filterValueInArray)

  },[listOpject])

  return (
    <MyValue.Provider value={{filterValueInArray}}>
      <div className="flexColumn">
        <SearchField />
        <ProductsWindow AddProductToCart={AddProductToCart} />
      </div>
    </MyValue.Provider>

  );
}

export default App;