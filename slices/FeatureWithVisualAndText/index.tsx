import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeatureWithVisualAndText`.
 */
export type FeatureWithVisualAndTextProps =
  SliceComponentProps<Content.FeatureWithVisualAndTextSlice>;

/**
 * Component for "FeatureWithVisualAndText" Slices.
 */
const FeatureWithVisualAndText: FC<FeatureWithVisualAndTextProps> = ({
  slice,
}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        Placeholder component for feature_with_visual_and_text (variation:{" "}
        {slice.variation}) Slices
      </div>
    </section>
  );
};

export default FeatureWithVisualAndText;
