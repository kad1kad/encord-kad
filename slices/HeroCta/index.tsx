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
    >
      Placeholder component for hero_cta (variation: {slice.variation}) Slices
    </section>
  );
};

export default HeroCta;
