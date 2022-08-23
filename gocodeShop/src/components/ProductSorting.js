import React, { useContext } from 'react'
import './ProductSorting.css';
import MyValue from '../MyValue';
import MyContext from '../MyContext'


const ProductSorting = () => {
    const { filterValueInArray } = useContext(MyValue);
    const { listOpject, filterProductsByCategory } = useContext(MyContext)


    return (
        <div className="collection-sort">
            <label>Sort by:</label>
            <select  onChange={(e) => filterProductsByCategory(e.target.value)}>
                <option value="Featured">Featured</option>
                <option value="BestSelling">Best Selling</option>
                <option value="Ascending-A-Z">Alphabetically, A-Z</option>
                <option value="Descending-Z-A">Alphabetically, Z-A</option>
                <option value="PriceLowToHigh">Price, low to high</option>
                <option value="PriceHighToLow">Price, high to low</option>
                <option value="DateNewToOld">Date, new to old</option>
                <option value="/">Date, old to new</option>
            </select>
        </div>
    )
}

export default ProductSorting