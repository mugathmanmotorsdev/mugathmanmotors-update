"use client";

interface JsonLdProps {
  data: Record<string, unknown>;
}

/*
 * Reusable JSON-LD structured data injector.
 * Renders a <script type="application/ld+json"> tag with the provided data.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}