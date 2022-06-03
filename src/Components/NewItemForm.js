import React, { useState } from 'react'
import { submitData } from '../APICalls'
import Stars from './Stars'

export default function NewItemForm({ setReviewData, movieName}) {
    const [formData, setFormData] = useState('')
    const [rating, setRating] = useState(0)

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                submitData(formData, setFormData, setReviewData, movieName , rating , setRating)
            }}>
                <label>
                    <textarea type='text' name='name' value={formData} onChange={(e) => {
                        setFormData(e.target.value)
                    }}></textarea>
                </label> <br></br>
                <Stars rating={rating} setRating={setRating}></Stars>
                <input type='submit' value='Submit'></input>
            </form>
        </div>
    )
}
