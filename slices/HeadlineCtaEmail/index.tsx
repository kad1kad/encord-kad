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
      className="py-12 lg:py-20 bg-encord-purple-5 w-full"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-6">
          <PrismicRichText
            field={title}
            components={{
              heading1: ({ children }) => (
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-2 mb-6 tracking-tighter leading-12">
                  {children}
                </h3>
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
            buttonText={button_text || "Book a demo"}
            variant="default"
          />
        </div>
      </div>
    </section>
  );
};

export default HeadlineCtaEmail;
