import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeatureHighlightWithIllustration`.
 */
export type FeatureHighlightWithIllustrationProps =
  SliceComponentProps<Content.FeatureHighlightWithIllustrationSlice>;

/**
 * Component for "FeatureHighlightWithIllustration" Slices.
 */
const FeatureHighlightWithIllustration: FC<
  FeatureHighlightWithIllustrationProps
> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for feature_highlight_with_illustration (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default FeatureHighlightWithIllustration;
