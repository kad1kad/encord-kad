import { FC } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

/**
 * Props for `NavigationBar`.
 */
export type NavigationBarProps = SliceComponentProps<Content.NavigationBarSlice>;

/**
 * Component for "NavigationBar" Slices.
 */
const NavigationBar: FC<NavigationBarProps> = ({ slice }) => {
  const { logo, menu_items, action_buttons } = slice.primary;

  return (
    <nav 
      className="navigation-bar bg-white shadow-sm"
      data-slice-type={slice.slice_type} 
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {logo && (
            <div className="flex-shrink-0">
              <PrismicNextImage 
                field={logo} 
                className="h-10 w-auto object-contain"
              />
            </div>
          )}

          {/* Navigation Menu */}
          {menu_items && menu_items.length > 0 && (
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {menu_items.map((item, index) => (
                  <li key={index} className="relative">
                    <PrismicNextLink 
                      field={item.url}
                      className="text-gray-700 hover:text-blue-600 hover:underline transition-colors duration-200"
                    >
                      {item.label}
                    </PrismicNextLink>
                    
                    {/* Dropdown indicator */}
                    {item.has_dropdown && (
                      <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xs ml-1">
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
                    px-4 py-2 rounded-md text-sm font-medium
                    ${button.style === 'primary' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                    transition-colors duration-200
                  `}
                >
                  {button.label}
                </PrismicNextLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
