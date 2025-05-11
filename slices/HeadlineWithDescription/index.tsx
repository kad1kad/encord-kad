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
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <div className="text-center lg:text-left">
                <h5 className="text-4xl text-encord-purple-3 leading-10 tracking-tighter font-bold mb-3">
                  {children}
                </h5>
              </div>
            ),
          }}
        />

        <div className="tracking-tight">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </section>
  );
};

export default HeadlineWithDescription;
