import doctorImage from "../../assets/images/doctor.png";
import { PrimaryButton } from "../Shared/PrimaryButton";
export const MakeAppoinment = () => {
  return (
    <section className="flex justify-center items-center bg-appoinment mt-24 mb-12">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctorImage} alt="" />
      </div>
      <div className="flex-1 p-12">
        <h3 className="text-xl text-primary font-bold mb-3">Appointment</h3>
        <h2 className="text-3xl font-bold text-white mb-3">Make an appointment Today</h2>
        <p className=" text-white mb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <PrimaryButton>get started</PrimaryButton>
      </div>
    </section>
  );
};
