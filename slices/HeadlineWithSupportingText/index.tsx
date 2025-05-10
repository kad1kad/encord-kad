import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeadlineWithSupportingText`.
 */
export type HeadlineWithSupportingTextProps =
  SliceComponentProps<Content.HeadlineWithSupportingTextSlice>;

/**
 * Component for "HeadlineWithSupportingText" Slices.
 */
const HeadlineWithSupportingText: FC<HeadlineWithSupportingTextProps> = ({
  slice,
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for headline_with_supporting_text (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default HeadlineWithSupportingText;
