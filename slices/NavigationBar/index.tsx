import { FC } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

/**
 * Props for `NavigationBar`.
 */
export type NavigationBarProps =
  SliceComponentProps<Content.NavigationBarSlice>;

/**
 * Component for "NavigationBar" Slices.
 */
const NavigationBar: FC<NavigationBarProps> = ({ slice }) => {
  const { logo, menu_items, action_buttons } = slice.primary;
  console.log("NavigationBar slice data:", slice);
  return (
    <nav
      className="backdrop-blur-[10px] lg:backdrop-blur-[0px] sticky w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex items-center justify-between h-[108px]">
        {logo && (
          <PrismicNextImage
            field={logo}
            alt={logo.alt}
            className="h-10 w-auto object-contain"
          />
        )}
        {/* Navigation Menu */}
        {menu_items && menu_items.length > 0 && (
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {menu_items.map((item, index) => (
                <li key={index} className="relative">
                  <PrismicNextLink
                    field={item.url}
                    className="text-gray-8 font-medium"
                  >
                    {item.label}
                  </PrismicNextLink>

                  {/* Dropdown indicator */}
                  {item.has_dropdown && (
                    <span className="top-1/2 transform -translate-y-1/2 text-xs">
                      ▼
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        {action_buttons && action_buttons.length > 0 && (
          <div className="flex items-center space-x-4">
            {action_buttons.map((button, index) => (
              <PrismicNextLink
                key={index}
                field={button.url}
                className={`
                    px-4 py-2 rounded-[40px] text-sm font-medium
                    ${
                      button.style === "primary"
                        ? "bg-encord-purple text-white hover:bg-encord-purple-2"
                        : "bg-gray-2 border border-gray-6 text-gray-9 hover:border-gray-10 transition-colors duration-400"
                    }
                    transition-colors duration-200
                  `}
              >
                {button.label}
              </PrismicNextLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
