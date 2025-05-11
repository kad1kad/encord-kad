import { FC } from "react";
import { Content, ImageField, RichTextField } from "@prismicio/client";
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
  interface FeatureHighlightSplitPrimary extends Record<string, unknown> {
    features?: Array<{
      illustration?: ImageField<never>;
      title?: RichTextField;
      description?: RichTextField;
    }>;
  }

  const features =
    (slice.primary as FeatureHighlightSplitPrimary).features || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8 lg:py-10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full">
                {item.illustration?.url && (
                  <PrismicNextImage
                    field={item.illustration}
                    width={item.illustration.dimensions.width}
                    height={item.illustration.dimensions.height}
                    className="w-full h-auto border-1 border-[#E7E7E7] rounded-md"
                    priority
                    loading="eager"
                  />
                )}
                {item.title && (
                  <div className="mb-4 text-encord-purple-3 mt-3 text-xl tracking-tight leading-7">
                    <PrismicRichText field={item.title} />
                  </div>
                )}
                {item.description && (
                  <div className="mt-3">
                    <PrismicRichText field={item.description} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSplit;
