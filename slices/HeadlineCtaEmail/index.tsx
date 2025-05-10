"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import EmailForm from "../../components/EmailForm";

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
        <div className="max-w-xl mx-auto flex justify-center">
          <EmailForm
            inputPlaceholder={input_placeholder || "Enter your email address"}
            ctaButton={button_link}
            variant="default"
          />
        </div>
      </div>
    </section>
  );
};

export default HeadlineCtaEmail;
