import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `VisualTextCombo`.
 */
export type VisualTextComboProps =
  SliceComponentProps<Content.VisualTextComboSlice>;

/**
 * Component for "VisualTextCombo" Slices.
 */
const VisualTextCombo: FC<VisualTextComboProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for visual_text_combo (variation: {slice.variation})
      Slices
    </section>
  );
};

export default VisualTextCombo;
