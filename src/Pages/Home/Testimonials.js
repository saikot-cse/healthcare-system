import quote from "../../assets/icons/quote.svg";
import prople1 from '../../assets/images/people1.png';
import prople2 from '../../assets/images/people2.png';
import prople3 from '../../assets/images/people3.png';
import { Reviews } from "./Reviews";
export const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Will Smith",
      review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: prople1,
    },
    {
      _id: 2,
      name: "Princess Diana",
      review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: prople2,
    },
    {
      _id: 3,
      name: "Wanda",
      review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: prople3,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-primary text-xl font-bold">Testimonial</h3>
          <h2 className="text-3xl font-bold">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-5 mt-12">
        {
          reviews.map(review=><Reviews key={review._id} review={review}/>)
        }
      </div>
    </div>
  );
};
