import cavity from "../../assets/images/cavity.png";
import fluride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import { SingleService } from "./SingleService";
export const Services = () => {
  const services = [
    {
      _id: 1,
      title: "Fluoride Treatment",
      image: fluride,
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      title: "Cavity Filling",
      image: cavity,
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      title: "Teeth Whitening",
      image: whitening,
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div>
      <div className="text-center mt-28">
        <h3 className="text-primary text-xl font-bold uppercase">Our Services</h3>
        <h2 className="text-4xl font-bold uppercase">Services We Provide</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-5 mt-14">
          {services.map((service) => (
            <SingleService key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};
