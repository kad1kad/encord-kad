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
      className="pb-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full max-w-[564px]">
                {item.illustration?.url && (
                  item.illustration.url.endsWith(".svg") ? (
                    <img
                      src={item.illustration.url}
                      alt={item.illustration.alt || ""}
                      width={item.illustration.dimensions?.width || 500}
                      height={item.illustration.dimensions?.height || 300}
                      className="w-full h-auto"
                      loading="eager"
                    />
                  ) : (
                    <PrismicNextImage
                      field={item.illustration}
                      width={item.illustration.dimensions?.width || 500}
                      height={item.illustration.dimensions?.height || 300}
                      className="w-full h-auto"
                      loading="eager"
                      priority
                    />
                  )
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
