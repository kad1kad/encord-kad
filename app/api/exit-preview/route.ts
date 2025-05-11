import { exitPreview } from "@prismicio/next";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

export function GET() {
  return exitPreview();
}
