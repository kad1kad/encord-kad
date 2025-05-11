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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevSlideRef = useRef(0);
  const slides = slice.primary.slides || [];

  // Hardcoded icons for each slide
  const icons = [PaperClipOutlined, PartitionOutlined, FileAddOutlined];

  useEffect(() => {
    prevSlideRef.current = activeSlide;
  }, [activeSlide]);

  const handleSlideChange = (index: number) => {
    if (isTransitioning || index === activeSlide) return;
    
    setIsTransitioning(true);
    setDirection(index > activeSlide ? "down" : "up");
    setActiveSlide(index);
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
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
      className="py-14 px-10 mb-20 bg-white overflow-hidden border-1 border-gray-4 rounded-[20px]"
      aria-label="Features showcase"
    >
      {/* Section Header */}
      <div className="mb-16">
        {slice.primary.eyebrow && (
          <p className="inline-block py-[6px] px-[14px] rounded-[20px] text-[12px] font-[manrope] font-bold tracking-widest leading-4 text-encord-purple-3 uppercase mb-3 bg-encord-purple-4">
            {slice.primary.eyebrow}
          </p>
        )}
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <h5 className="text-4xl font-bold tracking-tighter leading-10 text-encord-purple-3 mb-10">
                {children}
              </h5>
            ),
          }}
        />

        {/* Carousel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,40%)_1fr] items-center border-1 border-gray-4 rounded-[20px]">
          {/* Left Side - Slide Selectors */}
          <nav className="w-full" role="tablist" aria-label="Feature selection">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                role="tab"
                aria-selected={activeSlide === index}
                aria-controls={`panel-${index}`}
                id={`tab-${index}`}
                className={`w-full text-left cursor-pointer p-5 transition-all duration-500 ${
                  activeSlide === index
                    ? "bg-[var(--color-gray-1)]"
                    : "bg-[var(--color-gray-2)] hover:bg-gray-3"
                } ${isTransitioning ? 'pointer-events-none' : ''}`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
                }}
                disabled={isTransitioning}
              >
                <div className="flex flex-col">
                  <div className="mb-2">
                    {getIcon(index, activeSlide === index)}
                  </div>
                  <h3
                    className={`text-base sm:text-xl font-semibold mb-2.5 transition-all duration-400 ${
                      activeSlide === index
                        ? "text-encord-purple-3"
                        : "text-gray-8"
                    }`}
                  >
                    {slide.slide_title}
                  </h3>
                  <div
                    className={`text-xs sm:text-sm transition-all duration-400 ${
                      activeSlide === index
                        ? "text-gray-9 opacity-100 transform translate-y-0"
                        : "text-gray-7 opacity-80 transform translate-y-1"
                    }`}
                  >
                    <PrismicRichText field={slide.slide_description} />
                  </div>
                </div>
              </button>
            ))}
          </nav>

          {/* Right Side - Image Display */}
          <div
            className="relative h-full min-h-[400px] md:min-h-[500px] overflow-hidden sm:rounded-bl-[20px] sm:rounded-br-[20px] lg:rounded-tr-[20px] lg:rounded-br-[20px] lg:rounded-bl-none bg-gray-2"
            role="tabpanel"
            aria-live="polite"
          >
            <div className="absolute inset-0">
              {slides.map((slide, index) => {
                // Calculate if this slide is active, previous, or neither
                const isActive = activeSlide === index;
                const isPrevious = prevSlideRef.current === index && !isActive;
                
                return (
                  <div
                    key={index}
                    id={`panel-${index}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${index}`}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 transition-all ${
                      isActive || isPrevious ? 'duration-600' : 'duration-0'
                    } ${
                      isActive
                        ? "opacity-100 blur-0 z-10 scale-100"
                        : isPrevious
                          ? `opacity-0 blur-[2px] z-5 ${
                              direction === "down" ? "-translate-y-4" : "translate-y-4"
                            } scale-[0.98]`
                          : "opacity-0 z-0"
                    }`}
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
                      transitionProperty: "opacity, filter, transform",
                    }}
                  >
                    {slide.slide_image?.url && (
                      <div className="absolute inset-0 transition-opacity duration-600" 
                           style={{ 
                             transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
                             opacity: isActive ? 1 : isPrevious ? 0 : 0
                           }}>
                        <PrismicNextImage
                          field={slide.slide_image}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
                          quality={90}
                          priority={index === 0}
                          loading={index === 0 ? "eager" : "lazy"}
                          unoptimized={false}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSplit;
