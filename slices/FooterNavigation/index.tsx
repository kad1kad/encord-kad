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
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-[56px]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        Placeholder component for footer_navigation (variation: {slice.variation})
        Slices
      </div>
    </footer>
  );
};

export default FooterNavigation;
