import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

// {
//     "variation": "default",
//     "version": "initial",
//     "items": [],
//     "primary": {
//         "logo": {},
//         "menu_items": [
//             {
//                 "label": "Product",
//                 "has_dropdown": true,
//                 "url": {
//                     "link_type": "Any"
//                 },
//                 "dropdown_id": "product"
//             },
//             {
//                 "label": "Pricing",
//                 "has_dropdown": null,
//                 "url": {
//                     "link_type": "Any"
//                 },
//                 "dropdown_id": "pricing"
//             },
//             {
//                 "label": "Case Studies",
//                 "has_dropdown": null,
//                 "url": {
//                     "link_type": "Any"
//                 },
//                 "dropdown_id": "case_studies"
//             },
//             {
//                 "label": "Resources",
//                 "has_dropdown": true,
//                 "url": {
//                     "link_type": "Any"
//                 },
//                 "dropdown_id": "resources"
//             },
//             {
//                 "label": "Company",
//                 "has_dropdown": true,
//                 "url": {
//                     "link_type": "Any"
//                 },
//                 "dropdown_id": "company"
//             }
//         ],
//         "action_buttons": [
//             {
//                 "label": "Login",
//                 "url": {
//                     "link_type": "Any"
//                 },
//                 "style": "secondary"
//             },
//             {
//                 "label": "Book a demo",
//                 "url": {
//                     "link_type": "Any"
//                 },
//                 "style": "primary"
//             }
//         ]
//     },
//     "id": "navigation_bar$91423edf-e1a6-4617-a5be-a245ec484ae6",
//     "slice_type": "navigation_bar",
//     "slice_label": null
// }

/**
 * Props for `NavigationBar`.
 */
export type NavigationBarProps =
  SliceComponentProps<Content.NavigationBarSlice>;

/**
 * Component for "NavigationBar" Slices.
 */
const NavigationBar: FC<NavigationBarProps> = ({ slice }) => {
  console.log("NavigationBar slice data:", slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for navigation_bar (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NavigationBar;
