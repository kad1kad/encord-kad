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
    <header
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-[56px]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        Placeholder component for header_navigation (variation: {slice.variation})
        Slices
      </div>
    </header>
  );
};

export default HeaderNavigation;
