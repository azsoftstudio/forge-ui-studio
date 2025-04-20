
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

const CustomButton = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
  };
  
  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };
  
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  
  return (
    <button className={classes} {...props}>
      {icon && iconPosition === "left" && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export { CustomButton };
