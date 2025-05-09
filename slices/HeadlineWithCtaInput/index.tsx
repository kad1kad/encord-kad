import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText, PrismicNextLink } from "@prismicio/next";
import { richTextComponents } from "./rich-text-components";

/**
 * Props for `HeadlineWithCtaInput`.
 */
export type HeadlineWithCtaInputProps =
  SliceComponentProps<Content.HeadlineWithCtaInputSlice>;

/**
 * Component for "HeadlineWithCtaInput" Slices.
 */
const HeadlineWithCtaInput: FC<HeadlineWithCtaInputProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          {slice.primary.eyebrow && (
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              {slice.primary.eyebrow}
            </p>
          )}
          
          {/* Headline */}
          <PrismicRichText
            field={slice.primary.headline}
            components={richTextComponents}
          />
          
          {/* Subheading */}
          <PrismicRichText
            field={slice.primary.subheading}
            components={richTextComponents}
          />
          
          {/* CTA Form */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder={slice.primary.input_placeholder || "Enter your email"}
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
            <PrismicNextLink
              field={slice.primary.cta_button}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              {slice.primary.cta_label || "Get Started"}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadlineWithCtaInput;
