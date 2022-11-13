import React from "react";

export const PrimaryButton = ({ children }) => {
  return <button className="btn btn-primary uppercase text-base-100 font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>;
};
