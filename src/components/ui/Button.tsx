// components/Button.tsx
import React from "react";
import { button, type ButtonVariants } from "@/utils/button";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    children: React.ReactNode;
  };

export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  children,
  className,
  ...props
}) => {
  return (
    <button className={button({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};
