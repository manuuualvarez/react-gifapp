import React from 'react'
// Components
import {  GifGridItem } from './GifGridItem'
// Hooks
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ( {category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3> { category } </h3>
        
            { loading && <p className="animate__animated animate__flash">Loading...</p>  }

            <div className="card-grid">
                {  images.map( img =>  

                    <GifGridItem  
                        key={ img.id }
                        { ...img }
                    />       
                    )
                }
            </div>
        </>
    )
}
