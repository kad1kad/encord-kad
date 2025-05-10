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
    >
      Placeholder component for hero_form_cta (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeroFormCta;
