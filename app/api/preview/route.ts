import { NextRequest } from "next/server";
import { redirectToPreviewURL } from "@prismicio/next";
import { Metadata } from "next";

import { createClient } from "../../../prismicio";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

export async function GET(request: NextRequest) {
  const client = createClient();

  return await redirectToPreviewURL({ client, request });
}
