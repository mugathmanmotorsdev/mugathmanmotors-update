"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navigator({responsive = false}: {responsive?: boolean}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const normalize = (p?: string) => {
        if (!p) return "/";
        return p === "/" ? "/" : p.replace(/\/+$/, "");
    };

    const isActive = (path: string) => {
        return normalize(pathname) === normalize(path);
    }

    return (
        <nav className="">
            <button 
                className={`${responsive ? "md:hidden" : "hidden"}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                <Menu size={24} />
            </button>
            <ul
                className={responsive ? `absolute left-0 w-full md:static flex flex-col md:flex-row gap-4 bg-white md:bg-transparent p-4 md:p-0 ${isOpen ? "block" : "hidden md:flex"}` : "flex flex-row gap-4 bg-transparent"}
                onClick={() => setIsOpen(false)}
            >
                <li><Link href="/" className={isActive("/") ? "font-bold text-indigo-900" : ""} aria-current={isActive("/") ? "page" : undefined}>Home</Link></li>
                <li><Link href="/about" className={isActive("/about") ? "font-bold text-indigo-900" : ""} aria-current={isActive("/about") ? "page" : undefined}>About</Link></li>
                <li><Link href="/inventory" className={isActive("/inventory") ? "font-bold text-indigo-900" : ""} aria-current={isActive("/inventory") ? "page" : undefined}>Inventory</Link></li>
                <li><Link href="/contact" className={isActive("/contact") ? "font-bold text-indigo-900" : ""} aria-current={isActive("/contact") ? "page" : undefined}>Contact</Link></li>
            </ul>
        </nav>
    );
}