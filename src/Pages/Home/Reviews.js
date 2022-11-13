export const Reviews = ({ review }) => {
  return (
    <div className="card max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.review}</p>
        <div className="flex justify-start items-center">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5 mt-2">
            <img src={review.image} alt="" />
          </div>
          <div>
            <h2 className="card-title">{review.name}</h2>
            <p>California</p>
          </div>
        </div>
      </div>
    </div>
  );
};
