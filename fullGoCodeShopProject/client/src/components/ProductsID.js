import React from 'react'

const ProductsID = ({id}) => {
    
    const [listData, setListData] = useState([]);

    const getProductsApiID = async () => {      
        const test = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(test);
        const data1 = await response.json();
        setListData(data1)
        console.log(data1)
    };

    useEffect(() => {
        
        getProductsApiID()
    }, []);

    consol.log(data1)
    return (

        <div>{listData}</div>
    )
}

export default ProductsID