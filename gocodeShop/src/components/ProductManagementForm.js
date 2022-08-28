import React, { useState, useEffect } from 'react'
import './ProductManagementForm.css'


const ProductManagementForm = ({ categories, setListOpject ,listOpject}) => {

    const [texts, setTexts] = useState([])
    const [error, setError] = useState([])

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')


    const CheckingFieldValues = () => {
         debugger
        setError([])

        let isValid = true

        if ((title && title.length < 2) || title.length > 20) {
            isValid = false
            setError(prev => [...prev, 'the title is too short or too long, check it please'])

        }
        if ((description && description.length < 2) || description.length > 22) {
            isValid = false
            setError(prev => [...prev, 'the description is too short or too long, check it please'])
        }
        if (price === 0 || price < 0) {
            isValid = false
            setError(prev => [...prev, 'no one sells things for free :)'])
        }
        if (price > 100) {
            isValid = false
            setError(prev => [...prev, 'too high of a price, i will call mas hanchasa'])
        }
        if(!image ){
            isValid = false
            setError(prev => [...prev, 'There is no value in the image field'])
        }
        if (!category || !image || !description || !title || !price) {
            isValid = false
            setError(prev => [...prev, 'one of the mandatory fields is not enlisted'])
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
        console.log(error)
    

    }
    useEffect(() => {

        setTexts(error)
    }, [error])


    return (
        <div className='AdminPageContainer'>
            <form >
                <div className='InputWrapper'>

                    <label onClick={() => setTexts([])}>
                        Title:
                        <input value={title} role="presentation" autoComplete="off" type="text" name="description"
                            onChange={(e) => setTitle(e.target.value)}
                        />

                    </label>
                </div>
                <div className='InputWrapper'>
                    <label onClick={() => setTexts([])}>
                        description:
                        <input value={description} role="presentation" autoComplete="off" type="text" name="description"
                            onChange={(e) => setDescription(e.target.value)}
                        />

                    </label >
                </div>

                <div className='InputWrapper'>
                    <label onClick={() => setTexts([])}>
                        price:
                        <input value={price} role="presentation" autoComplete="off"
                            type="number" name="price" onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                </div>
                <div className='InputWrapper'>
                    <label onClick={() => setTexts([])} >
                        imageUrl:
                        <input value={image} role="presentation" autoComplete="off"
                            type="text" name="image" onChange={(e) => setImage(e.target.value)}
                        />
                    </label>
                </div>
                <div className='InputWrapper'>
                    <label onClick={() => setTexts([])}>

                        category:
                        <select value={category} onChange={(e) => setCategory(e.target.value)} name="choice" autoComplete="off" required>
                            <option value="">Please select a value</option>
                            {categories.map((category, index) =>
                                <option key={index} value={category}>{category} </option>)}
                        </select>

                    </label></div>

                <div className='InputWrapper'>

                    <button className='buttonSubmit' type="button" onClick={CheckingFieldValues} >create a new product</button></div>
            </form>

            <div>
                <div>{texts.map((err, index) => <li key={index}> {err}</li>)}</div>
                
            </div>


        </div>
    )
}

export default ProductManagementForm