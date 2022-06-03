import React , {useEffect , useState} from 'react'
import{movieListInfo} from '../Constants'
import NewItemForm from '../Components/NewItemForm'
import {readData} from '../APICalls'
import Review from './Review'

export default function Reviews() {
    const [reviewData , setReviewData] = useState([])

    useEffect(() => {
        readData(setReviewData)
    } , [])

    return (
        <div>
            <div>
                {movieListInfo.map((movieInfo , key) => {
                    return (
                        <div key = {key}> 
                            <h2>{movieInfo.name}</h2>
                            {reviewData.map((review) =>{
                                if(review.movieName===movieInfo.name){
                                    return(
                                        <Review reviewObject = {review} setReviewData = {setReviewData}></Review>
                                    )
                                }
                            })}
                            <NewItemForm movieName={movieInfo.name} setReviewData = {setReviewData}></NewItemForm>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}