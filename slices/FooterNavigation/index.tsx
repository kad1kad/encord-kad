import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FooterNavigation`.
 */
export type FooterNavigationProps =
  SliceComponentProps<Content.FooterNavigationSlice>;

/**
 * Component for "FooterNavigation" Slices.
 */
const FooterNavigation: FC<FooterNavigationProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for footer_navigation (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FooterNavigation;
