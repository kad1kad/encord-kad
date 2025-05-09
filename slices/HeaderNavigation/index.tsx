import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeaderNavigation`.
 */
export type HeaderNavigationProps =
  SliceComponentProps<Content.HeaderNavigationSlice>;

/**
 * Component for "HeaderNavigation" Slices.
 */
const HeaderNavigation: FC<HeaderNavigationProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for header_navigation (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeaderNavigation;
