import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "dark";
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  onClick,
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-sm font-label text-sm uppercase tracking-widest font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-center";

  const variants = {
    primary: "champagne-gradient text-white shadow-xl hover:scale-105",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/5",
    dark: "bg-inverse-surface text-white hover:bg-zinc-800",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
