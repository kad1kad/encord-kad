import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { GithubOutlined, TwitterOutlined } from "@ant-design/icons";
import EmailForm from "../../components/EmailForm";

/**
 * Props for `MegaFooterNavigation`.
 */
export type MegaFooterNavigationProps =
  SliceComponentProps<Content.MegaFooterNavigationSlice>;

/**
 * Component for "MegaFooterNavigation" Slices.
 */
const MegaFooterNavigation: FC<MegaFooterNavigationProps> = ({ slice }) => {
  const {
    logo,
    legal_links,
    navigation_columns,
    subscribe_text,
    subscribe_placeholder,
    subscribe_action,
    certification_badges,
    copyright,
    company_addresses,
  } = slice.primary;

  return (
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 border-t border-gray-200"
    >
      <div>
        {/* Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          <div className="col-span-1 lg:col-span-3">
            {logo?.url &&
              (logo.url.endsWith(".svg") ? (
                <img
                  src={logo.url}
                  alt={logo.alt || "Encord logo"}
                  width={logo.dimensions.width}
                  height={logo.dimensions.height}
                  className="mb-4"
                />
              ) : (
                <PrismicNextImage
                  field={logo}
                  width={logo.dimensions.width}
                  height={logo.dimensions.height}
                  className="mb-4"
                />
              ))}

            <div className="flex flex-col space-y-2 text-sm">
              {legal_links?.map((link, index) => (
                <PrismicNextLink
                  key={index}
                  field={link}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {link.text}
                </PrismicNextLink>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {navigation_columns?.map((column, index) => (
            <div key={index} className="col-span-1 lg:col-span-2">
              <h3 className="font-semibold text-gray-900 mb-4">
                {column.column_title}
              </h3>
              <ul className="space-y-2">
                {column.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <PrismicNextLink
                      field={link}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {link.text}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe Section - Works across all viewports */}
          <div className="col-span-2 lg:col-span-2 order-first lg:order-last mb-8 lg:mb-0">
            <div className="subscribe-section">
              <h3 className="font-semibold text-gray-900 mb-4">
                {subscribe_text ? <PrismicRichText field={subscribe_text} /> : "Subscribe to our newsletter"}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get occasional product updates and tutorials to your inbox.
              </p>
              <EmailForm
                inputPlaceholder={subscribe_placeholder || "Your work email"}
                ctaButton={subscribe_action}
                buttonText="→"
                variant="footer"
              />
            </div>
          </div>
        </div>

        {/* Certification Badges */}
        {certification_badges && certification_badges.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-8">
            {certification_badges.map((badge, index) => (
              <div key={index} className="relative h-16">
                {badge?.badge?.url && (
                  <PrismicNextImage
                    field={badge.badge}
                    className="h-full w-auto"
                    height={64}
                    width={
                      badge.badge.dimensions?.width
                        ? Math.round(
                            (badge.badge.dimensions.width * 64) /
                              badge.badge.dimensions.height,
                          )
                        : 64
                    }
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Copyright */}
            <div className="mb-4 md:mb-0">
              <PrismicRichText
                field={copyright}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-sm text-gray-600">{children}</p>
                  ),
                }}
              />
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <PrismicNextLink
                href="https://twitter.com/encord"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <TwitterOutlined className="text-xl" />
              </PrismicNextLink>

              <PrismicNextLink
                href="https://github.com/encord"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <GithubOutlined className="text-xl" />
              </PrismicNextLink>
            </div>
          </div>

          {/* Company Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {company_addresses?.map((address, index) => (
              <div key={index} className="text-sm text-gray-600">
                <PrismicRichText
                  field={address.address_text}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="leading-relaxed">{children}</p>
                    ),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaFooterNavigation;
