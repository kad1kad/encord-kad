import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

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
      className="flex flex-col items-center text-center px-4 pt-20 pb-10"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {eyebrow && (
        <p className="text-sm font-medium text-encord-purple tracking-widest uppercase mb-7">
          {eyebrow}
        </p>
      )}
      {headline && (
        <div className="font-[manrope] text-6xl md:text-6xl font-bold text-encord-purple-3 mb-6 leading-[68px] tracking-tighter max-w-4xl">
          <PrismicRichText field={headline} />
        </div>
      )}
      {subheading && (
        <div className="text-lg text-gray-9 leading-7 max-w-2xl mb-10">
          <PrismicRichText field={subheading} />
        </div>
      )}
      <form className="flex w-full max-w-[508px]">
        <div className="w-full rounded-full p-[1px] bg-gradient-to-bl from-encord-purple via-gray-5 to-[rgba(94,68,255,0.6)] shadow-sm">
          <div className="flex w-full rounded-full overflow-hidden bg-white">
            <input
              type="email"
              placeholder={input_placeholder || "Enter your email address"}
              className="flex-grow pl-[18px] py-3 outline-none text-lg text-gray-9 placeholder-gray-7 bg-white"
            />
            {cta_button && (
              <PrismicLink
                field={cta_button}
                className="bg-encord-purple m-[6px] text-white font-bold font-[manrope] text-base px-4 py-2 flex items-center transition-all duration-400 whitespace-nowrap rounded-full"
              >
                Book a demo
              </PrismicLink>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default HeadlineWithCtaInput;
