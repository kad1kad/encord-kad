"use client";

import { FC, useState, useRef, useEffect, ReactNode } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { ImageField, RichTextField } from "@prismicio/client";

interface CarouselSlide {
  id: string | number;
  title?: string;
  description?: RichTextField;
  image?: ImageField<never>;
  icon?: ReactNode;
}

interface CarouselProps {
  slides: CarouselSlide[];
  renderTabContent?: (slide: CarouselSlide, isActive: boolean) => ReactNode;
  className?: string;
}

const Carousel: FC<CarouselProps> = ({ 
  slides, 
  renderTabContent,
  className = ""
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevSlideRef = useRef(0);

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

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[minmax(300px,40%)_1fr] items-center border-1 border-gray-4 rounded-[20px] ${className}`}>
      {/* Left Side - Slide Selectors */}
      <nav className="w-full" role="tablist" aria-label="Feature selection">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleSlideChange(index)}
            role="tab"
            aria-selected={activeSlide === index}
            aria-controls={`panel-${slide.id}`}
            id={`tab-${slide.id}`}
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
            {renderTabContent ? (
              renderTabContent(slide, activeSlide === index)
            ) : (
              <div className="flex flex-col">
                {slide.icon && <div className="mb-2">{slide.icon}</div>}
                <h3 className={`text-base sm:text-xl font-semibold mb-2.5 transition-all duration-400 ${
                  activeSlide === index
                    ? "text-encord-purple-3"
                    : "text-gray-8"
                }`}>
                  {slide.title}
                </h3>
              </div>
            )}
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
                key={slide.id}
                id={`panel-${slide.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${slide.id}`}
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
                {slide.image?.url && (
                  <div className="absolute inset-0 transition-opacity duration-600" 
                       style={{ 
                         transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
                         opacity: isActive ? 1 : isPrevious ? 0 : 0
                       }}>
                    <PrismicNextImage
                      field={slide.image}
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
  );
};

export default Carousel;
