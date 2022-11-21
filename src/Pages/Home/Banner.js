import chair from "../../assets/images/chair.png";
import { PrimaryButton } from "../Shared/PrimaryButton";
export const Banner = () => {
  return (
    <div className="h-[650px]">
      <div className="hero min-h-full bg-banner">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img style={{ width: "40rem" }} src={chair} alt="" className="max-w-full rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <PrimaryButton>get started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
