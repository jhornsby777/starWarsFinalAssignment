const crudcrudURL = 'https://crudcrud.com/api/d9ef40f4d31a418cba2d4ec1ed95b6ff/reviews'
export const readData = async (setReviewData) =>{
    let reviewData = await fetch(crudcrudURL)
    let reviewJSON = await reviewData.json()
    console.log(reviewJSON)
    setReviewData(reviewJSON)
}

export const submitData = async (formData , setFormData , setReviewData , movieName , starRating , setRating) =>{
    let newReviewPost = await fetch(crudcrudURL , 
    {
        method: 'POST' , 
        headers: {"Content-Type" : "application/json; charset = utf-8"},
        body: JSON.stringify({
            movieName: movieName ,
            starRating: starRating , 
            movieReview: formData
        })
    })
    setFormData('')
    setRating(0)
    readData(setReviewData)
}

export const deleteData = async (dataID , setReviewData) =>{
    await fetch(`${crudcrudURL}/${dataID}` ,
    {
        method: 'DELETE' ,
    })
    readData(setReviewData)
}

export const updateData = async (reviewObject , setReviewData , newStarRating , revisedReview) =>{
    let updatedObject = {...reviewObject};
    console.log(updatedObject);
    delete updatedObject._id;
    updatedObject.starRating=newStarRating;
    updatedObject.movieReview=revisedReview;
    await fetch(`${crudcrudURL}/${reviewObject._id}` ,
        {
            method: 'PUT' , 
            headers: {"Content-Type" : "application/json; charset = utf-8"},
            body: JSON.stringify(
                updatedObject
            )
        })
    readData(setReviewData)
}
