import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
type ButtonType = "white-main" | "primary";
type ButtonSize = "sm" | "md" | "lg";

interface MainButtonProps {
  type: ButtonType;
  title: string;
  customClass?: string;
  customChildClass?: string;
  link?: string;
  handleClick?: () => void;
  size?: ButtonSize;
}

const MainButton = ({
  type,
  title,
  customClass,
  customChildClass,
  link,
  handleClick,
  size = "md",
}: MainButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  const baseClasses =
    "font-clash font-semibold rounded-[10px] transition-all duration-300 animate-fade-in border";

  const buttonClasses = `${baseClasses} ${customClass || ""}`;

  return link ? (
    <button className={buttonClasses} onClick={handleClick}>
      <Link href={link}>
        {type === "white-main" ? (
          <p
            className={`bg-white text-text-primary hover:bg-black-medium hover:shadow-hover rounded-[10px] ${
              sizeClasses[size]
            } ${customChildClass || ""}`}
          >
            {title}
          </p>
        ) : (
          <p
            className={`bg-gradient-to-t from-primary to-accent text-white hover:bg-accent hover:shadow-hover rounded-[10px] ${
              sizeClasses[size]
            } ${customChildClass || ""}`}
          >
            {title}
          </p>
        )}
      </Link>
    </button>
  ) : (
    <button className={buttonClasses} onClick={handleClick}>
      {type === "white-main" ? (
        <p
          className={`bg-white text-text-primary hover:bg-black-medium hover:shadow-hover rounded-[10px] ${
            sizeClasses[size]
          } ${customChildClass || ""}`}
        >
          {title}
        </p>
      ) : (
        <p
          className={`bg-gradient-to-t from-primary to-accent text-white hover:bg-accent hover:shadow-hover rounded-[10px] ${
            sizeClasses[size]
          } ${customChildClass || ""}`}
        >
          {title}
        </p>
      )}
    </button>
  );
};

interface SwitchButtonProps {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  customClass?: string;
}

export const SwitchButton = ({
  status,
  setStatus,
  customClass,
}: SwitchButtonProps) => {
  const t = useTranslations("Home");
  return (
    <div className="w-full justify-self-center">
      <div
        className={`bg-background-light rounded-full flex border border-black-dark p-1 shadow-soft animate-fade-in justify-self-center ${customClass}`}
      >
        <button
          onClick={() => setStatus("Services")}
          className={`
          w-full md:w-fit px-6 py-4 border font-clash text-base md:text-[20px] font-[650] rounded-full
          transition-all duration-300
          ${
            status === "Tools"
              ? "border-transparent text-text-light hover:text-primary"
              : "bg-primary border-black-dark text-white shadow-soft"
          }
        `}
        >
          {t("Services.SwitchButton.Services")}
        </button>
        <button
          onClick={() => setStatus("Tools")}
          className={`
          w-full md:w-fit px-6 py-4 border font-clash text-base md:text-[20px] font-[650] rounded-full
          transition-all duration-300
          ${
            status === "Tools"
              ? "bg-primary border-black-dark text-white shadow-soft"
              : "border-transparent text-text-light hover:text-primary"
          }
        `}
        >
          {t("Services.SwitchButton.Tools")}
        </button>
      </div>
    </div>
  );
};

export default MainButton;
