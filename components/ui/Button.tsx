import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export default function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}