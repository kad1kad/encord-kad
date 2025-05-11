import { FC, Fragment } from "react";
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
      className="py-[56px]"
    >
      <div>
        {/* Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 mb-12 lg:mb-16">
          <div className="col-span-1 lg:col-span-3">
            {logo?.url &&
              (logo.url.endsWith(".svg") ? (
                <img
                  src={logo.url}
                  alt={logo.alt || "Encord logo"}
                  width={logo.dimensions.width}
                  height={logo.dimensions.height}
                  className="mb-6"
                />
              ) : (
                <PrismicNextImage
                  field={logo}
                  width={logo.dimensions.width}
                  height={logo.dimensions.height}
                  className="mb-6"
                />
              ))}

            <div className="flex space-x-0.5 text-[11px] tracking-[-0.035em] leading-[1.5] h-[43px] items-center text-gray-10">
              {legal_links?.map((link, index) => (
                <Fragment key={index}>
                  <PrismicNextLink field={link} className="hover:text-gray-9">
                    {link.text}
                  </PrismicNextLink>
                  {index < legal_links.length - 1 && <span>•</span>}
                </Fragment>
              ))}
            </div>
          </div>

          {navigation_columns?.map((column, index) => (
            <div key={index} className="col-span-1 lg:col-span-2">
              <h3 className="font-semibold text-gray-10 mb-5 h-[43px] flex items-center leading-[1.5] text-[16px]">
                {column.column_title}
              </h3>
              <ul className="space-y-[5px]">
                {column.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <PrismicNextLink
                      field={link}
                      className="text-[16px] leading-6 tracking-tighter min-h-[30px] flex items-center"
                    >
                      {link.text}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe Section */}
          <div className="col-span-2 lg:col-span-3 order-first lg:order-last mb-8 lg:mb-0">
            <div className="subscribe-section">
              <h3 className="font-semibold text-gray-10 mb-5 h-[43px] flex items-center leading-[1.5] text-[16px]">
                {subscribe_text ? (
                  <PrismicRichText field={subscribe_text} />
                ) : (
                  "Subscribe"
                )}
              </h3>
              <p className="text-[16px] leading-6 tracking-tighter text-gray-8">
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
          <div className="relative w-full mb-8">
            <div className="flex flex-wrap gap-4">
              {certification_badges.map((badge, index) => {
                // Third badge — position it absolutely
                if (index === 2) {
                  return (
                    <div
                      key={index}
                      className="absolute right-0 top-0 h-[82px]"
                      style={{ zIndex: 10 }}
                    >
                      {badge?.badge?.url && (
                        <PrismicNextImage
                          field={badge.badge}
                          className="h-full w-auto"
                          height={63}
                          width={82}
                        />
                      )}
                    </div>
                  );
                }

                // First two badges — normal layout
                return (
                  <div key={index} className="relative h-16">
                    {badge?.badge?.url && (
                      <PrismicNextImage
                        field={badge.badge}
                        className="h-full w-auto"
                        height={64}
                        width={64}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Section */}
        <div className="pt-8 lg:pt-14">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Copyright */}
            <div className="mb-4 md:mb-0">
              <PrismicRichText
                field={copyright}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-[16px] leading-6 tracking-tighter text-gray-10">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <PrismicNextLink
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-9 hover:text-gray-10"
              >
                <TwitterOutlined className="text-xl" />
              </PrismicNextLink>

              <PrismicNextLink
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-9 hover:text-gray-10"
              >
                <GithubOutlined className="text-xl" />
              </PrismicNextLink>
            </div>
          </div>

          {/* Company Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 mt-[29px] gap-5 text-gray-10 text-[11px]">
            {company_addresses?.map((address, index) => (
              <div
                key={index}
                className={`${index === 1 ? "lg:justify-self-end" : ""}`}
              >
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
