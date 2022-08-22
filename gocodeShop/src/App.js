import './App.css';
import SearchField from './components/SearchField'
import ProductsWindow from './components/ProductsWindow'
import { useApiData } from './customHooks/useApiData';
import { MyContext } from './components/MyContext'
import React, { useEffect, useState } from 'react'
import ProductForDisplay from './components/ProductForDisplay'

function App() {
   const [listOpject, setListOpject] = useState([])

  const test = 'https://fakestoreapi.com/products/'
  listOpject = useApiData({test })
  console.log(listOpject)

  setListOpject( listOpject.map(p => p.category).filter((value, index, array) => 
  array.indexOf(value) === index))


  return (
    <MyContext.Provider value={[listOpject,setListOpject]}>
      <div className="flexColumn">
        <SearchField />
        <ProductsWindow />
      </div>
    </MyContext.Provider>
  );
}

export default App;
