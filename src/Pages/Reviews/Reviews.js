import React, { useEffect, useState } from "react";
import { Review } from "./Review";

export const Reviews = () => {
  const [review, setReview] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/reviews", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <h3 className="text-primary text-center text-xl font-bold">All Reviews</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {review?.map((review) => (
          <Review key={review?._id} review={review} />
        ))}
      </div>
    </div>
  );
};
