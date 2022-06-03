import React from 'react'
import Image from 'react-bootstrap/Image'

export default function Movie({movie}) {
    return (
        <div className = 'movie-div'>
            <Image thumbnail src= {movie.imgSrc} ></Image> <br></br>
            <h2>{movie.name}</h2>
            <p>{movie.synopsis}</p>           
        </div>
    )
}
