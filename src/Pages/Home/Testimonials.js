import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Reviews } from "./Reviews";
import { PrimaryButton } from '../Shared/PrimaryButton';
export const Testimonials = () => {
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
    <div className="mb-48">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-primary text-xl font-bold">Testimonial</h3>
          <h2 className="text-3xl font-bold">Our Patients Reviews</h2>
        </div>
        {/* <div>
          <img className="w-24 lg:w-48" src={stethoscope} alt="" />
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-5 mt-12">
        {review?.slice(0, 3).map((review) => (
          <Reviews index={1} key={review?._id} review={review} />
        ))}
      </div>
      <Link to="/allReviews">
        <div className="text-center my-5">
          <PrimaryButton>See All Reviews</PrimaryButton>
        </div>
      </Link>
    </div>
  );
};
