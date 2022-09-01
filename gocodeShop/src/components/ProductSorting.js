import React from 'react'
import './ProductSorting.css';
import Slider from '@mui/material/Slider';

// import MyValue from '../MyValue';
// import MyContext from '../MyContext'
let number = [1, 2, 3, 4]

const ProductSorting = () => {

    // // const { filterValueInArray } = useContext(MyValue);
    // const { listOpject, filterProductsByCategory } = useContext(MyContext)


    return (
        <div className="collection-sort">
            <Slider
               
               getAriaLabel={() => 'Temperature range'}
               // value={value}
                onChangeCommitted='func'
                valueLabelDisplay="auto"
                size='small'
                

           
            />
        </div>
    )
}

export default ProductSorting