//import { identity } from 'cypress/types/lodash'
import React, { useContext } from 'react'
import MyContext from '../MyContext'
import './ProductFiltering.css'
//לעשות מיון בטבלה 
const ProductFiltering = () => {

    const { filterProductsByCategory ,categories} = useContext(MyContext)

   

    return (
        <div className="collection-sort">
        <label>Filter by:</label>
        <select onChange={(e) => filterProductsByCategory(e.target.value)}>
            <option value="/">All Products</option>
            {categories && categories.map(category  => 
            <option key={category.toString()} value={category}>{category}</option>)}
        </select>
    </div>)
    
}

export default ProductFiltering