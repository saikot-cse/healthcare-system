import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import { InfoCard } from "./InfoCard";
export const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" cardDesc="Lorem Ipsum is simply dummy text of the pri" img={clock} />
      <InfoCard bgClass="bg-neutral" cardTitle="Visit our location" cardDesc="Brooklyn, NY 10036, United States" img={marker} />
      <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact us now" cardDesc="+000 123 456789" img={phone} />
    </div>
  );
};
