import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import EmailForm from "../../components/EmailForm";

/**
 * Props for `HeadlineWithCtaInput`.
 */
export type HeadlineWithCtaInputProps =
  SliceComponentProps<Content.HeadlineWithCtaInputSlice>;

/**
 * Component for "HeadlineWithCtaInput" Slices.
 */
const HeadlineWithCtaInput: FC<HeadlineWithCtaInputProps> = ({ slice }) => {
  const { eyebrow, headline, subheading, input_placeholder, cta_button } =
    slice.primary;
  return (
    <section
      className="flex flex-col items-center text-center pt-20 lg:pt-[108px] pb-8 lg:pb-10"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-20">
        {eyebrow && (
          <p className="text-[16px] font-medium text-encord-purple tracking-widest uppercase mb-5 lg:mb-7">
            {eyebrow}
          </p>
        )}
        {headline && (
          <PrismicRichText
            field={headline}
            components={{
              heading1: ({ children }) => (
                <h5 className="font-[manrope] text-5xl lg:text-6xl font-bold text-encord-purple-3 mb-6 leading-[68px] tracking-tighter max-w-4xl">
                  {children}
                </h5>
              ),
            }}
          />
        )}
        {subheading && (
          <div className="text-lg text-gray-9 leading-7 max-w-3xl mb-10">
            <PrismicRichText field={subheading} />
          </div>
        )}
        <div className="flex justify-center w-full">
          <EmailForm
            inputPlaceholder={input_placeholder || "Enter your email address"}
            ctaButton={cta_button}
            buttonText={cta_button?.text || "Submit"}
            variant="gradient"
          />
        </div>
      </div>
    </section>
  );
};

export default HeadlineWithCtaInput;
