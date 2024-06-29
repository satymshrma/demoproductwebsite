import React from "react";

type ButtonProps = {
  label: string;
  iconURL?: string;
  colors?: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  };
};
const Button: React.FC<ButtonProps> = ({ label, iconURL, colors }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        colors?.backgroundColor || `bg-coral-red`
      } rounded-full ${colors?.textColor || `text-white`} ${
        colors?.borderColor || `border-coral-red`
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
