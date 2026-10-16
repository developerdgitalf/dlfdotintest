

"use client";

import dynamic from "next/dynamic";

const PdfSlide = dynamic(
  () => import("./PdfSlide"),
  {
    ssr: false,
    loading: () => <p>Loading presentation...</p>,
  }
);

export default function PdfSlideClient() {
  return <PdfSlide />;
}