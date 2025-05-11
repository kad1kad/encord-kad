"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import {
  PaperClipOutlined,
  PartitionOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import Carousel from "../../components/Carousel";

/**
 * Props for `FeatureHighlightSplit`.
 */
export type FeatureHighlightSplitProps =
  SliceComponentProps<Content.FeatureHighlightSplitSlice>;

/**
 * Component for "FeatureHighlightSplit" Slices.
 */
const FeatureHighlightSplit: FC<FeatureHighlightSplitProps> = ({ slice }) => {
  const slides = slice.primary.slides || [];

  // Hardcoded icons for each slide
  const icons = [PaperClipOutlined, PartitionOutlined, FileAddOutlined];

  // Map Prismic slides to the format expected by our Carousel component
  const carouselSlides = slides.map((slide, index) => ({
    id: index,
    title: slide.slide_title,
    description: slide.slide_description,
    image: slide.slide_image,
    icon: icons[index] || PartitionOutlined,
  }));

  const renderTabContent = (slide: any, isActive: boolean) => {
    const IconComponent = slide.icon;

    return (
      <div className="flex flex-col">
        <div className="mb-2">
          <IconComponent
            style={{
              fontSize: "24px",
              color: isActive
                ? "var(--color-encord-purple-2)"
                : "var(--color-gray-8)",
              transition: "color 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
            }}
            aria-hidden="true"
          />
        </div>
        <h3
          className={`text-base sm:text-xl font-semibold mb-2.5 transition-all duration-400 ${
            isActive ? "text-encord-purple-3" : "text-gray-8"
          }`}
        >
          {slide.title}
        </h3>
        <div
          className={`text-xs sm:text-sm transition-all duration-400 ${
            isActive
              ? "text-gray-9 opacity-100 transform translate-y-0"
              : "text-gray-7 opacity-80 transform translate-y-1"
          }`}
        >
          <PrismicRichText field={slide.description} />
        </div>
      </div>
    );
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 lg:pb-20 max-w-[1280px] mx-auto px-4 lg:px-8"
      aria-label="Features showcase"
    >
      <div className="bg-white overflow-hidden border border-gray-4 rounded-[20px] py-10 lg:py-14 px-10">
        <div className="flex flex-col items-center md:items-start">
          {slice.primary.eyebrow && (
            <p className="inline-block py-[6px] px-[14px] rounded-md text-[12px] font-[manrope] font-bold tracking-widest leading-4 text-encord-purple-3 wider uppercase mb-3 bg-encord-purple-4">
              {slice.primary.eyebrow}
            </p>
          )}
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <h5 className="text-4xl font-bold tracking-tighter leading-10 text-encord-purple-3 mb-10 text-center md:text-left">
                  {children}
                </h5>
              ),
            }}
          />
        </div>

        {/* Carousel Component */}
        <Carousel slides={carouselSlides} renderTabContent={renderTabContent} />
      </div>
    </section>
  );
};

export default FeatureHighlightSplit;
