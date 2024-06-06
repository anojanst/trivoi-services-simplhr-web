import React from "react";

interface FormInputProps {
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ label }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-gray-700 text-md mb-2">{label}</label>
      <input type="text" className="w-full rounded-md h-10 p-2 text-base" />
    </div>
  );
};

export default FormInput;
