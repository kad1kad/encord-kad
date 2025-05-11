import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroCta`.
 */
export type HeroCtaProps = SliceComponentProps<Content.HeroCtaSlice>;

/**
 * Component for "HeroCta" Slices.
 */
const HeroCta: FC<HeroCtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        Placeholder component for hero_cta (variation: {slice.variation}) Slices
      </div>
    </section>
  );
};

export default HeroCta;
