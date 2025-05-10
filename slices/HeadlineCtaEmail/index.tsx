"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `HeadlineCtaEmail`.
 */
export type HeadlineCtaEmailProps =
  SliceComponentProps<Content.HeadlineCtaEmailSlice>;

/**
 * Component for "HeadlineCtaEmail" Slices.
 */
const HeadlineCtaEmail: FC<HeadlineCtaEmailProps> = ({ slice }) => {
  const { title, description, input_placeholder, button_text, button_link } =
    slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24 px-4 bg-[#1a0033]"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <div className="mb-6">
          <PrismicRichText
            field={title}
            components={{
              heading1: ({ children }) => (
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {children}
                </h2>
              ),
              heading2: ({ children }) => (
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {children}
                </h2>
              ),
              heading3: ({ children }) => (
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {children}
                </h2>
              ),
            }}
          />
        </div>

        {/* Description */}
        <div className="mb-12 max-w-2xl mx-auto">
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-lg text-gray-300 leading-relaxed">
                  {children}
                </p>
              ),
            }}
          />
        </div>

        {/* Input and Button Container */}
        <form
          className="flex flex-col sm:flex-row justify-center items-center gap-0 max-w-xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-full sm:w-auto">
            <input
              type="email"
              placeholder={input_placeholder || "Enter your email address"}
              className="w-full sm:w-[350px] px-6 py-4 bg-white text-gray-900 placeholder-gray-500 rounded-full sm:rounded-r-none border-0 focus:outline-none focus:ring-2 focus:ring-[var(--color-encord-purple)] focus:ring-inset"
              required
            />
          </div>

          {button_link && (
            <PrismicNextLink
              field={button_link}
              className="w-full sm:w-auto mt-3 sm:mt-0 bg-[var(--color-encord-purple)] text-white font-medium px-8 py-4 rounded-full sm:rounded-l-none hover:bg-[var(--color-encord-purple-2)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-encord-purple)] focus:ring-offset-2 focus:ring-offset-[#1a0033]"
            >
              {button_text || "Book a demo"}
            </PrismicNextLink>
          )}
        </form>
      </div>
    </section>
  );
};

export default HeadlineCtaEmail;
