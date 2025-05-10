import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MegaFooterNavigation`.
 */
export type MegaFooterNavigationProps =
  SliceComponentProps<Content.MegaFooterNavigationSlice>;

/**
 * Component for "MegaFooterNavigation" Slices.
 */
const MegaFooterNavigation: FC<MegaFooterNavigationProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for mega_footer_navigation (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default MegaFooterNavigation;
