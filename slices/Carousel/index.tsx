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
import { motion, AnimatePresence } from "framer-motion";

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
    }, 800);
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
              <motion.button
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
                whileTap={{ scale: 0.98 }}
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
              </motion.button>
            ))}
          </nav>

          {/* Right Side - Image Display */}
          <div
            className="relative h-full min-h-[400px] md:min-h-[500px] overflow-hidden sm:rounded-bl-[20px] sm:rounded-br-[20px] lg:rounded-tr-[20px] lg:rounded-br-[20px] lg:rounded-bl-none bg-gray-2"
            role="tabpanel"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" initial={false}>
              {slides.map((slide, index) => 
                activeSlide === index && slide.slide_image?.url ? (
                  <motion.div
                    key={index}
                    id={`panel-${index}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${index}`}
                    className="absolute inset-0"
                    initial={{ 
                      opacity: 0,
                      y: direction === "down" ? 20 : -20,
                      scale: 1.05
                    }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        opacity: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
                        y: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
                        scale: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      scale: 0.95,
                      y: direction === "down" ? -20 : 20,
                      transition: {
                        opacity: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] },
                        scale: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
                        y: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-2/10" />
                    <motion.div 
                      className="absolute inset-0"
                      initial={{ filter: "blur(8px)" }}
                      animate={{ 
                        filter: "blur(0px)",
                        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
                      }}
                      exit={{ 
                        filter: "blur(8px)",
                        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
                      }}
                    >
                      <PrismicNextImage
                        field={slide.slide_image}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
                        quality={95}
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </motion.div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSplit;
