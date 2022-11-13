import treatment from "../../assets/images/treatment.png";
import { PrimaryButton } from "../Shared/PrimaryButton";
export const ExtraInfo = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img style={{ width: "25rem" }} src={treatment} alt="" className="max-w-full rounded-lg shadow-2xl mx-20" />
        <div>
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
          <PrimaryButton>get started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
