import React from 'react'
import NavbarWrapper from '../Components/NavbarWrapper'
import Movies from '../Components/Movies'


export default function MoviePage() {
    return (
        <div>
            <NavbarWrapper></NavbarWrapper>
           <div className='page-content'> <Movies></Movies></div>
        </div>
    )
}
