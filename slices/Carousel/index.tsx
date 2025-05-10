"use client";

import { FC, useState, useRef, useEffect } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import {
  PaperClipOutlined,
  PartitionOutlined,
  FileAddOutlined,
} from "@ant-design/icons";

/**
 * Props for `FeatureHighlightSplit`.
 */
export type FeatureHighlightSplitProps =
  SliceComponentProps<Content.FeatureHighlightSplitSlice>;

/**
 * Component for "FeatureHighlightSplit" Slices.
 */
const FeatureHighlightSplit: FC<FeatureHighlightSplitProps> = ({ slice }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const prevSlideRef = useRef(0);
  const slides = slice.primary.slides || [];

  // Hardcoded icons for each slide
  const icons = [PaperClipOutlined, PartitionOutlined, FileAddOutlined];

  useEffect(() => {
    prevSlideRef.current = activeSlide;
  }, [activeSlide]);

  const handleSlideChange = (index: number) => {
    setDirection(index > activeSlide ? "down" : "up");
    setActiveSlide(index);
  };

  const getIcon = (index: number, isActive: boolean) => {
    const IconComponent = icons[index] || PartitionOutlined;

    return (
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
    );
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 bg-white overflow-hidden"
      aria-label="Features showcase"
    >
      {/* Section Header */}
      <div className="mb-16">
        {slice.primary.eyebrow && (
          <p className="inline-block py-[6px] px-[14px] rounded-md text-sm font-medium text-encord-purple-3 tracking-wider uppercase mb-4 bg-encord-purple-4">
            {slice.primary.eyebrow}
          </p>
        )}
        <h5 className="text-4xl font-bold tracking-tighter leading-10 color-encord-purple-3">
          <PrismicRichText field={slice.primary.title} />
        </h5>

        {/* Carousel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-8 lg:gap-16 items-center">
          {/* Left Side - Slide Selectors */}
          <nav
            className="space-y-4"
            role="tablist"
            aria-label="Feature selection"
          >
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                role="tab"
                aria-selected={activeSlide === index}
                aria-controls={`panel-${index}`}
                id={`tab-${index}`}
                className={`w-full text-left cursor-pointer p-6 rounded-xl transition-all duration-500 ${
                  activeSlide === index
                    ? "bg-[var(--color-gray-1)] shadow-sm transform scale-[1.02]"
                    : "bg-[var(--color-gray-2)] hover:bg-gray-3 transform scale-100"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getIcon(index, activeSlide === index)}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-semibold mb-2 transition-all duration-400 ${
                        activeSlide === index
                          ? "text-encord-purple-3 transform translate-x-0"
                          : "text-gray-8 transform -translate-x-1"
                      }`}
                    >
                      {slide.slide_title}
                    </h3>
                    <div
                      className={`text-sm transition-all duration-400 ${
                        activeSlide === index
                          ? "text-gray-700 opacity-100 transform translate-x-0"
                          : "text-gray-600 opacity-80 transform -translate-x-1"
                      }`}
                    >
                      <PrismicRichText field={slide.slide_description} />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </nav>

          {/* Right Side - Image Display */}
          <div
            className="relative h-[500px] rounded-xl overflow-hidden bg-[#171F34]"
            role="tabpanel"
            aria-live="polite"
          >
            <div className="absolute inset-0">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  id={`panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${index}`}
                  aria-hidden={activeSlide !== index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeSlide === index
                      ? "opacity-100 blur-0 z-10"
                      : index === prevSlideRef.current
                        ? "opacity-0 blur-sm z-0"
                        : direction === "down"
                          ? "opacity-0 blur-sm translate-y-8 z-0"
                          : "opacity-0 blur-sm -translate-y-8 z-0"
                  }`}
                >
                  {slide.slide_image?.url && (
                    <PrismicNextImage
                      field={slide.slide_image}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={90}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSplit;
