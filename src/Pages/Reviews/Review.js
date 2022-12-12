import React from 'react'

export const Review = ({ review }) => {
  return (
    <div className="card max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.details}</p>
        <div className="flex justify-start items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden ring ring-primary ring-offset-base-100 mr-5 mt-2">
            <img src={review.img} alt="" />
          </div>
          <div>
            <h2 className="card-title">{review.name}</h2>
            <p><span className="font-bold">Ratings:</span> {review.ratings}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
