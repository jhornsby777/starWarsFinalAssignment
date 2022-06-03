import React from 'react'
import NavbarWrapper from '../Components/NavbarWrapper'
import CharacterTable from '../Components/CharacterTable'


export default function CharacterPage() {
    return (
        <div>
            <NavbarWrapper></NavbarWrapper>
            <div className='page-content'><CharacterTable></CharacterTable></div>
        </div>
    )
}
