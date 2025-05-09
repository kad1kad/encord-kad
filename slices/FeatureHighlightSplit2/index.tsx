import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `FeatureHighlightSplit`.
 */
export type FeatureHighlightSplitProps =
  SliceComponentProps<Content.FeatureHighlightSplitSlice>;

/**
 * Component for "FeatureHighlightSplit" Slices.
 */
const FeatureHighlightSplit: FC<FeatureHighlightSplitProps> = ({ slice }) => {
  // Features are in slice.primary.features, not slice.items
  const features = slice.primary.features || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Container with fixed width - image dimensions from your data */}
              <div className="w-full max-w-[564px]">
                {item.illustration?.url && (
                  <div className="mb-6">
                    <PrismicNextImage
                      field={item.illustration}
                      width={item.illustration.dimensions.width}
                      height={item.illustration.dimensions.height}
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <div className="mb-4">
                  <PrismicRichText field={item.title} />
                </div>
                <div className="text-gray-600">
                  <PrismicRichText field={item.description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSplit;
