import React, { useState } from 'react'

// Components
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>Gif expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {  categories.map( (category) =>  
                    <GifGrid 
                        key= { category }
                        category= {category} 
                    />
                    )   
                }
            </ol>
        </>
    )
}
