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
      <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder={inputPlaceholder}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--color-encord-purple)] focus:border-transparent"
          required
        />
        {ctaButton && (
          <PrismicLink
            field={ctaButton}
            className="bg-[var(--color-encord-purple)] text-white px-6 py-2 rounded-r-md hover:bg-[var(--color-encord-purple-2)] transition-colors flex items-center justify-center"
          >
            {buttonText || "→"}
          </PrismicLink>
        )}
      </form>
    );
  }

  return (
    <form className="flex w-full max-w-[508px]" onSubmit={(e) => e.preventDefault()}>
      {variant === "gradient" ? (
        <div className="w-full rounded-full p-[1px] bg-gradient-to-bl from-encord-purple via-gray-5 to-[rgba(94,68,255,0.6)] shadow-sm">
          <div className="flex w-full rounded-full overflow-hidden bg-white">
            <input
              type="email"
              placeholder={inputPlaceholder}
              className="flex-grow pl-[18px] py-3 outline-none text-lg text-gray-9 placeholder-gray-7 bg-white"
            />
            {ctaButton && (
              <PrismicLink
                field={ctaButton}
                className="bg-encord-purple m-[6px] text-white font-bold font-[manrope] text-base px-4 py-2 flex items-center transition-all duration-400 whitespace-nowrap rounded-full"
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
              className="flex-grow pl-[18px] py-3 outline-none text-lg text-gray-9 placeholder-gray-7 bg-white"
              required
            />
            {ctaButton && (
              <PrismicLink
                field={ctaButton}
                className="bg-encord-purple m-[6px] text-white font-bold font-[manrope] text-base px-4 py-2 flex items-center transition-all duration-400 whitespace-nowrap rounded-full"
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
