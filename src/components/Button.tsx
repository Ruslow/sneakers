import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-x-3 items-center justify-center py-4 rounded-xl bg-primary-orange text-white w-full font-bold text-base shadow-2xl hover:opacity-50 transition-opacity"
    >
      {children}
    </button>
  );
};

export default Button;
