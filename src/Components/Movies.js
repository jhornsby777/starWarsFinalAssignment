import React from 'react'
import {movieListInfo} from '../Constants'
import Image from 'react-bootstrap/Image'
import Movie from './Movie'

export default function Movies() {
    return (
        <div>
            {movieListInfo.map((movieInfo) =>{
                return(
                    <Movie movie={movieInfo}></Movie>
                )
            })}
        </div>
    )
}
