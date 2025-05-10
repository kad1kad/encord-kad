"use client";

import { FC } from "react";
import { PrismicLink, PrismicLinkProps } from "@prismicio/react";

interface EmailFormProps {
  inputPlaceholder?: string;
  ctaButton?: PrismicLinkProps["field"];
  variant?: "gradient" | "default";
}

const EmailForm: FC<EmailFormProps> = ({
  inputPlaceholder = "Enter your email address",
  ctaButton,
  variant = "default",
}) => {
  return (
    <form className="flex w-full max-w-[508px]">
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
              ></PrismicLink>
            )}
          </div>
        </div>
      ) : (
        <div className="flex w-full">
          <input
            type="email"
            placeholder={inputPlaceholder}
            className="w-full sm:w-[350px] px-6 py-4 bg-white text-gray-900 placeholder-gray-500 rounded-full sm:rounded-r-none border-0 focus:outline-none focus:ring-2 focus:ring-[var(--color-encord-purple)] focus:ring-inset"
            required
          />
          {ctaButton && (
            <PrismicLink
              field={ctaButton}
              className="w-full sm:w-auto mt-3 sm:mt-0 bg-[var(--color-encord-purple)] text-white font-medium px-8 py-4 rounded-full sm:rounded-l-none hover:bg-[var(--color-encord-purple-2)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-encord-purple)] focus:ring-offset-2"
            ></PrismicLink>
          )}
        </div>
      )}
    </form>
  );
};

export default EmailForm;
