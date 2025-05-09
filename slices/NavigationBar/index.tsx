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
    <nav className="navigation-bar" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      {/* Logo */}
      {logo && (
        <div className="logo">
          <PrismicNextImage field={logo} />
        </div>
      )}

      {/* Navigation Menu */}
      {menu_items && menu_items.length > 0 && (
        <ul className="menu-items">
          {menu_items.map((item, index) => (
            <li key={index} className={`menu-item ${item.has_dropdown ? 'has-dropdown' : ''}`}>
              <PrismicNextLink field={item.url}>
                {item.label}
              </PrismicNextLink>
              
              {/* Dropdown indicator */}
              {item.has_dropdown && (
                <span className="dropdown-indicator">▼</span>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Action Buttons */}
      {action_buttons && action_buttons.length > 0 && (
        <div className="action-buttons">
          {action_buttons.map((button, index) => (
            <PrismicNextLink 
              key={index} 
              field={button.url} 
              className={`action-button ${button.style ? `btn-${button.style}` : ''}`}
            >
              {button.label}
            </PrismicNextLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
