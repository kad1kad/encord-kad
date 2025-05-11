import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroFormCta`.
 */
export type HeroFormCtaProps = SliceComponentProps<Content.HeroFormCtaSlice>;

/**
 * Component for "HeroFormCta" Slices.
 */
const HeroFormCta: FC<HeroFormCtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        Placeholder component for hero_form_cta (variation: {slice.variation})
        Slices
      </div>
    </section>
  );
};

export default HeroFormCta;
