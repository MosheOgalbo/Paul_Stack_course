import React, { useState } from 'react'
import './ProductManagementForm.css'


const ProductManagementForm = ({ categories, setListOpject }) => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [error, setError] = useState([])

    const CheckingFieldValues = () => {
        //  debugger
        setError([])
        let isValid = true

        if ((title && title.length < 8) || title.length > 20) {
            setError(prev => [...prev, 'the title is too short or too long, check it please'])
            isValid = false
        }
        if ((description && description.length < 8) || description.length > 22) {
            setError(prev => [...prev, 'the description is too short or too long, check it please'])
            isValid = false
        }
        if (price === 0 || price < 0) {
            setError(prev => [...prev, 'no one sells things for free :)'])
            isValid = false
        }
        if (price > 999) {
            setError(prev => [...prev, 'too high of a price, i will call mas hanchasa'])
            isValid = false
        }
        if (!category || !image || !description || !title || !price) {
            setError(prev => [...prev, 'one of the mandatory fields is not enlisted'])
            isValid = false
        }

        if (!isValid) {
            console.log(error)
            return
        }


        const newProduct = {
            id: Date.now(), title, description, price, category, image: image, rating: { rate: 5.0, count: 130 }
        }
        setListOpject(prev => [newProduct, ...prev])
        setTitle('')
        setDescription('')
        setImage('')
        setPrice('')
        setCategory('')

        console.log(categories)

    }

    return (
        <div className='AdminPageContainer'>
            <form  >
                <div className='InputWrapper'>
                    <label >
                        Title:
                        <input role="presentation" autoComplete="off" type="text" name="description"
                            onChange={(e) => setTitle(e.target.value)} />

                    </label>
                </div>
                <div className='InputWrapper'>
                    <label >
                        description:
                        <input role="presentation" autoComplete="off" type="text" name="description"
                            onChange={(e) => setDescription(e.target.value)} />

                    </label >
                </div>

                <div className='InputWrapper'>
                    <label >
                        price:
                        <input role="presentation" autoComplete="off"
                            type="number" name="price" onChange={(e) => setPrice(e.target.value)} />
                    </label>
                </div>
                <div className='InputWrapper'>
                    <label >
                        imageUrl:
                        <input role="presentation" autoComplete="off"
                            type="text" name="image" onChange={(e) => setImage(e.target.value)} />
                    </label>
                </div>
                <div className='InputWrapper'>
                    <label >
                        category:
                        <select>
                            <option value=" ">Please select a value</option>
                            {categories.map((category, index) =>
                                <option key={index} value={category}>{category}</option>)}
                        </select>

                    </label></div>

                <div className='InputWrapper'>
                    <button className='buttonSubmit' type="submit" onClick={CheckingFieldValues} >create a new product</button></div>
            </form>

            <div>
                {error.length > 0 && error.map((err, index) => <div key={index}>{err}</div>)}
            </div>
        </div>
    )
}

export default ProductManagementForm