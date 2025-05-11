"use client";

import { FC } from "react";
import { PrismicLink } from "@prismicio/react";
import { LinkField } from "@prismicio/client";

interface EmailFormProps {
  inputPlaceholder?: string;
  ctaButton?: LinkField;
  buttonText?: string;
  variant?: "gradient" | "default" | "footer";
}

const EmailForm: FC<EmailFormProps> = ({
  inputPlaceholder = "Enter your email address",
  ctaButton,
  buttonText,
  variant = "default",
}) => {
  if (variant === "footer") {
    return (
      <form
        className="w-full max-w-[387px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative flex items-center mt-5 h-[43px] bg-white rounded-full overflow-hidden shadow-[0px_3px_6px_-4px_#0000001F,0px_6px_16px_0px_#00000014,0px_9px_28px_8px_#0000000D]">
          <input
            type="email"
            placeholder={inputPlaceholder || "Your work email"}
            className="flex-1 h-full px-5 text-[16px] leading-[1.5] placeholder-gray-6 text-gray-9 font-medium outline-none"
            required
          />
          {ctaButton && (
            <PrismicLink
              field={ctaButton}
              className="absolute right-0 h-full aspect-square bg-encord-purple text-white flex items-center justify-center rounded-tr-full rounded-br-full w-[60px] transition-colors hover:bg-encord-purple-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-0.5"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </PrismicLink>
          )}
        </div>
      </form>
    );
  }

  return (
    <form
      className="flex w-full max-w-[508px] justify-self-center"
      onSubmit={(e) => e.preventDefault()}
    >
      {variant === "gradient" ? (
        <div className="w-full rounded-full p-[1px] bg-gradient-to-bl from-encord-purple via-gray-5 to-[rgba(94,68,255,0.6)] shadow-sm">
          <div className="flex w-full rounded-full overflow-hidden bg-white">
            <input
              type="email"
              placeholder={inputPlaceholder}
              className="flex-1 min-w-0 pl-[18px] py-3 outline-none text-lg text-gray-9 placeholder-gray-7 bg-white"
            />
            {ctaButton && (
              <PrismicLink
                field={ctaButton}
                className="bg-encord-purple hover:bg-encord-purple-2 m-[6px] text-white font-bold font-[manrope] text-base px-4 py-2 flex-shrink-0 flex items-center transition-all duration-400 whitespace-nowrap rounded-full"
              >
                {buttonText}
              </PrismicLink>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full rounded-full shadow-sm">
          <div className="flex w-full rounded-full overflow-hidden bg-white">
            <input
              type="email"
              placeholder={inputPlaceholder}
              className="flex-1 min-w-0 pl-[18px] py-3 outline-none text-lg text-gray-9 placeholder-gray-7 bg-white"
              required
            />
            {ctaButton && (
              <PrismicLink
                field={ctaButton}
                className="bg-encord-purple hover:bg-encord-purple-2 m-[6px] text-white font-bold font-[manrope] text-base px-4 py-2 flex-shrink-0 flex items-center transition-all duration-400 whitespace-nowrap rounded-full"
              >
                {buttonText || "Submit"}
              </PrismicLink>
            )}
          </div>
        </div>
      )}
    </form>
  );
};

export default EmailForm;
