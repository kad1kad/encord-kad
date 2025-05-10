"use client";

import { FC, useState, useRef, useEffect } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
// Using simple SVG icons instead of ant-design icons

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

  // Simple SVG icons for each slide
  const icons = [
    // PaperClip icon
    <svg key="paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"></path>
    </svg>,
    // Partition icon (grid)
    <svg key="partition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>,
    // File Add icon
    <svg key="fileadd" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="12" y1="18" x2="12" y2="12"></line>
      <line x1="9" y1="15" x2="15" y2="15"></line>
    </svg>
  ];

  useEffect(() => {
    prevSlideRef.current = activeSlide;
  }, [activeSlide]);

  const handleSlideChange = (index: number) => {
    setDirection(index > activeSlide ? "down" : "up");
    setActiveSlide(index);
  };

  const getIcon = (index: number, isActive: boolean) => {
    const icon = icons[index] || icons[1]; // Default to the second icon if not found
    
    return (
      <div 
        style={{
          color: isActive
            ? "var(--color-encord-purple-2)"
            : "var(--color-gray-8)",
          transition: "color 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
    );
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-14 px-10 bg-white overflow-hidden border-1 border-gray-4 rounded-[20px]"
      aria-label="Features showcase"
    >
      {/* Section Header */}
      <div className="mb-16">
        {slice.primary.eyebrow && (
          <p className="inline-block py-[6px] px-[14px] rounded-[20px] text-[12px] font-[manrope] font-bold tracking-widest leading-4 text-encord-purple-3 tracking-wider uppercase mb-3 bg-encord-purple-4">
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
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
                }}
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
            className="relative h-full min-h-[400px] md:min-h-[500px] overflow-hidden sm:rounded-bl-[20px] sm:rounded-br-[20px] lg:rounded-tr-[20px] lg:rounded-br-[20px] lg:rounded-bl-none"
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
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
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
