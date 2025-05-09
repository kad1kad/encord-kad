import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeatureHighlightSplit`.
 */
export type FeatureHighlightSplitProps =
  SliceComponentProps<Content.FeatureHighlightSplitSlice>;

/**
 * Component for "FeatureHighlightSplit" Slices.
 */
const FeatureHighlightSplit: FC<FeatureHighlightSplitProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for feature_highlight_split (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default FeatureHighlightSplit;
