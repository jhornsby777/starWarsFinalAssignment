import React, { useState } from 'react'
import { deleteData, updateData } from '../APICalls';
import NewItemForm from './NewItemForm'
import Stars from './Stars'

export default function Review({ reviewObject, setReviewData }) {
    const [isEditing, setIsEditing] = useState(false)
    const [revisedReview, setRevisedReview] = useState('')
    const [revisedStarRating, setRevisedStarRating] = useState(0)

    const handleStartEditing = () => {
        setIsEditing(true);
        setRevisedReview(reviewObject.movieReview)
    }

    const handleEndEditing = () => {
        setIsEditing(false)
        updateData(reviewObject , setReviewData , revisedStarRating , revisedReview)
        setRevisedReview('')
        setRevisedStarRating(0)
    }

    return (
        <div>
            {isEditing ?
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleEndEditing()
                    }}>
                        <label>
                            <textarea type='text' name='name' value={revisedReview} onChange={(e) => {
                                setRevisedReview(e.target.value)
                            }}></textarea>
                        </label> <br></br>
                        <Stars rating={revisedStarRating} setRating={setRevisedStarRating}></Stars>
                        <input type='submit' value='Submit'></input>
                    </form>
                </div> :
                <div>
                    <p className='review-text'> {reviewObject.movieReview} </p>
                    <p>{reviewObject.starRating} Stars!</p>
                    <p>
                        <button onClick={() => {
                            // updateData(reviewObject, setReviewData) && setIsEditing(true)
                            handleStartEditing()
                        }}>Update review</button>
                        <button onClick={() => {
                            deleteData(reviewObject._id, setReviewData)
                        }}>Delete review</button>
                    </p>
                </div>
            }
        </div>
    )
}
