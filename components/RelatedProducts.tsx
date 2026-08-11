"use client";
import Link from "next/link";
import Image from "next/image";
import { navCategories } from "@/data/navCategories";

interface RelatedProductsProps {
  currentSlug: string;
}

export default function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  const related = navCategories.filter((cat) => cat.slug !== currentSlug);

  return (
    <section className="py-16 md:py-24 bg-white" aria-label="Related products">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Other Transport Solutions
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
            Explore our full range of commercial vehicle categories designed for
            logistics, construction, agriculture, and enterprise operations.
          </p>
        </div>

        {/* Related Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="group relative overflow-hidden h-[300px] md:h-[380px] block"
            >
              {/* Image */}
              <Image
                src={category.branding_img}
                alt={category.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
