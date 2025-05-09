import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `HeadlineWithDescription`.
 */
export type HeadlineWithDescriptionProps =
  SliceComponentProps<Content.HeadlineWithDescriptionSlice>;

/**
 * Component for "HeadlineWithDescription" Slices.
 */
const HeadlineWithDescription: FC<HeadlineWithDescriptionProps> = ({
  slice,
}) => {
  return (
    <section
      className="py-10"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-4xl text-encord-purple-3 leading-10 tracking-tighter font-bold mb-3">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="text-gray-8 leading-6 tracking-tight">
        <PrismicRichText field={slice.primary.description} />
      </div>
    </section>
  );
};

export default HeadlineWithDescription;
