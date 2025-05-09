import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeadlineCtaEmail`.
 */
export type HeadlineCtaEmailProps =
  SliceComponentProps<Content.HeadlineCtaEmailSlice>;

/**
 * Component for "HeadlineCtaEmail" Slices.
 */
const HeadlineCtaEmail: FC<HeadlineCtaEmailProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for headline_cta_email (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default HeadlineCtaEmail;
