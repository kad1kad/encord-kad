import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      Placeholder component for headline_with_cta_input (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default HeadlineWithCtaInput;
