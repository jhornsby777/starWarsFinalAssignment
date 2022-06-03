import React from 'react'
import NavbarWrapper from '../Components/NavbarWrapper'
import NewItemForm from '../Components/NewItemForm'
import Stars from '../Components/Stars'
import { movieListInfo } from '../Constants'
import Reviews from '../Components/Reviews'


export default function ReviewPage() {
    return (
        <div>
            <NavbarWrapper></NavbarWrapper>
            <div className='page-content'>
                <Reviews></Reviews>
            </div>
        </div>
    )
}