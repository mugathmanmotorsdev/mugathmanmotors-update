"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navCategories } from "@/data/navCategories";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Normalize pathname
  const normalize = (p?: string) => {
    if (!p) return "/";
    return p === "/" ? "/" : p.replace(/\/+$/, "");
  };

  //Check for the active path
  const isActive = (path: string) => {
    return normalize(pathname) === normalize(path);
  };

  //Nav links
  const navLinks = [
    { href: "/", label: "Home", TrasparentBg: true },
    { href: "/dump-trucks", label: "Dump Truck", TrasparentBg: true },
    { href: "/cars", label: "Car", TrasparentBg: true },
    { href: "/tractor-heads", label: "Tractor Head", TrasparentBg: true },
    { href: "/lpg-tank-trailers", label: "LPG Tank", TrasparentBg: true },
    { href: "/tractors", label: "Tractor", TrasparentBg: true },
    { href: "/about", label: "About", TrasparentBg: false },
    { href: "/contact", label: "Contact", TrasparentBg: false },
  ];

  //Check for the background of current path
  const istransparent = navLinks.find(nav => nav.href === pathname)?.TrasparentBg
  
  return (
    <header className="flex flex-col">
      <div
      className={cn(
        "w-full md:w-[98vw] fixed md:top-2 md:left-2 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm px-6 md:px-15"
          : istransparent ? "bg-white md:bg-transparent px-6 md:px-12" : "bg-white px-6 md:px-12"
      )}
      role="banner"
      >
        <div className="max-w-8xl mx-auto flex justify-between items-stretch">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 py-5" aria-label="Mugathman Motors - Home">
            <div
              className="w-8 h-8 flex items-center justify-center"
              aria-hidden="true"
            >
              <Image
                src="/logo.png"
                alt="Mugathman Motors Logo"
                width={32}
                height={32}
              />
            </div>
            <span
              className={cn(
                "font-bold transition-all duration-300",
                isScrolled 
                ? "text-lg md:text-xl" 
                : istransparent ? "md:text-white text-lg md:text-xl" : "text-black text-lg md:text-xl"
              )}
            >
              Mugathman Motors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex content-stretch gap-8" aria-label="Main navigation">
            {/* Home */}
            <Link
              href="/"
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-[#587FFF]",
                isActive("/")
                  ? "text-[#587FFF] font-bold"
                  : isScrolled
                    ? "text-black"
                    : istransparent ? "text-white" : "text-black"
              )}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Home
            </Link>

            {/* Products with Dropdown */}
            <div className="group flex items-center">
              <Link
                href="/inventory"
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#587FFF]",
                  isActive("/inventory")
                    ? "text-[#587FFF] font-bold"
                    : isScrolled
                      ? "text-black"
                      : istransparent ? "text-white" : "text-black"
                )}
                aria-current={isActive("/inventory") ? "page" : undefined}
              >
                Products
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Dropdown Panel */}
              <div className="w-[98vw] absolute left-0 right-0 top-16 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:visible pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
                {/* Transparent bridge to prevent hover flicker */}
                <div className="h-3 w-full" />
                <div className="bg-white shadow-xl border border-gray-200 p-6 grid grid-cols-9 gap-4 gap-x-10">
                  <div className="col-span-7 grid grid-cols-4">
                    {navCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/${cat.slug}`}
                        className="group/card flex flex-col items-center gap-2 p-3 rounded-lg transition-colors"
                      >
                        <div className="w-50 h-32 relative rounded-lg overflow-hidden">
                          <Image
                            src={cat.image}
                            alt={cat.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover/card:scale-110"
                            sizes="(max-width: 768px) 100vw, 240px"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 text-center group-hover/card:text-[#587FFF] transition-colors">
                          {cat.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="col-span-2 border-l-2 px-5">
                    <div className="flex flex-col w-full">
                      <div className="w-full h-50 relative overflow-hidden">
                        <Image
                          src="/vision.jpg"
                          alt="Vehicle engine"
                          fill
                          className="object-cover transition-transform duration-300 group-hover/card:scale-110"
                          sizes="(max-width: 768px) 100vw, 240px"
                        />
                      </div>
                      <h1 className="text-lg font-bold text-gray-800 mt-4 mb-2">Little About Mugathman Motors</h1>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Mugathman Motors is a trusted truck and spare parts dealer based in Kano, Nigeria, offering a wide range of vehicles including trucks, cars, farm tractors, and quality spare parts to meet all logistics, transportation, and agricultural needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <Link
              href="/about"
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-[#587FFF]",
                isActive("/about")
                  ? "text-[#587FFF] font-bold"
                  : isScrolled
                    ? "text-black"
                    : istransparent ? "text-white" : "text-black"
              )}
              aria-current={isActive("/about") ? "page" : undefined}
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-[#587FFF]",
                isActive("/contact")
                  ? "text-[#587FFF] font-bold"
                  : isScrolled
                    ? "text-black"
                    : istransparent ? "text-white" : "text-black"
              )}
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? (
              <X size={24} className={isScrolled ? "text-black" : "md:text-white"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-black" : "md:text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden fixed top-20 left-0 w-full h-screen bg-white border-t border-gray-100 shadow-lg z-40"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={cn(
                  "text-base font-medium py-2 px-4 rounded-lg transition-colors hover:bg-gray-50",
                  isActive(link.href) ? "text-[#587FFF] font-bold" : "text-black"
                )}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
