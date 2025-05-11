"use client";
import { FC, useState, useEffect } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { DownOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1038) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-30 transition-all duration-300 ease-in-out ${
        scrolled ? "shadow-md backdrop-blur-md bg-white/80" : "bg-white"
      }`}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[80px] md:h-[108px]">
          {/* Logo */}
          {logo && logo.url && (
            <img
              src={logo.url}
              className="h-8 md:h-10 w-auto object-contain"
              alt={logo.alt || "logo"}
            />
          )}

          {/* Desktop Navigation */}
          {menu_items && menu_items.length > 0 && (
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                {menu_items.map((item, index) => (
                  <li key={index} className="relative">
                    <PrismicNextLink
                      field={item.url}
                      className="text-gray-8 font-medium flex items-center hover:text-encord-purple transition-colors duration-200"
                    >
                      {item.label}
                      {item.has_dropdown && (
                        <DownOutlined className="ml-1 text-xs" />
                      )}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Desktop Action Buttons */}
          {action_buttons && action_buttons.length > 0 && (
            <div className="hidden lg:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-8 hover:text-encord-purple transition-colors duration-200 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <CloseOutlined style={{ fontSize: "24px" }} />
            ) : (
              <MenuOutlined style={{ fontSize: "24px" }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-20 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
        style={{ top: "80px" }}
      >
        <div className="container mx-auto px-4 py-6 h-[calc(100vh-80px)] flex flex-col bg-gray-2">
          {/* Mobile Navigation Items */}
          {menu_items && menu_items.length > 0 && (
            <ul className="flex-1 space-y-6 pt-4">
              {menu_items.map((item, index) => (
                <li key={index} className="border-b border-gray-4 pb-4">
                  <PrismicNextLink
                    field={item.url}
                    className="text-gray-9 font-medium text-xl flex items-center justify-between"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.has_dropdown && <DownOutlined className="text-sm" />}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          )}

          {/* Mobile Action Buttons */}
          {action_buttons && action_buttons.length > 0 && (
            <div className="mt-auto space-y-4 pb-8">
              {action_buttons.map((button, index) => (
                <PrismicNextLink
                  key={index}
                  field={button.url}
                  className={`
                    block w-full text-center px-4 py-3 rounded-[40px] text-base font-medium
                    ${
                      button.style === "primary"
                        ? "bg-encord-purple text-white hover:bg-encord-purple-2"
                        : "bg-gray-2 border border-gray-6 text-gray-9 hover:border-gray-10 transition-colors duration-400"
                    }
                    transition-colors duration-200
                  `}
                  onClick={() => setIsMenuOpen(false)}
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
