import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeadlineWithDescription`.
 */
export type HeadlineWithDescriptionProps =
  SliceComponentProps<Content.HeadlineWithDescriptionSlice>;

/**
 * Component for "HeadlineWithDescription" Slices.
 */
const HeadlineWithDescription: FC<HeadlineWithDescriptionProps> = ({
  slice,
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for headline_with_description (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default HeadlineWithDescription;
