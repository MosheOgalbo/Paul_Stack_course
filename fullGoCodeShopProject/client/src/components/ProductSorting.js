import React, { useEffect, useState } from 'react'
import './ProductSorting.css';
import Slider from '@mui/material/Slider';
// import MyValue from '../MyValue';
// import MyContext from '../MyContext'


const ProductSorting = () => {

    // // const { filterValueInArray } = useContext(MyValue);
    // const { listOpject, filterProductsByCategory } = useContext(MyContext)
    const [val, setVal] = useState(0,100)
    const undefined = (e, data) => {
     
        setVal(data)
    }
 
    return (
        <div className="collection-sort" >

            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={val}
                color="secondary"
                defaultValue={0}
                onChange={undefined}
                aria-label='Temperature'
                valueLabelDisplay="auto"
                min={-2}
                max={101}
                size='medium'
                step={1}
                track='normal'
                
            />
        </div>
    )
}

export default ProductSorting