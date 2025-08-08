"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navigator({responsive = false}: {responsive?: boolean}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

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
                className={`${ responsive ? (`absolute left-0 w-full md:static flex flex-col md:flex-row gap-4 bg-white md:bg-transparent p-4 md:p-0 ${isOpen ? "block" : "hidden md:flex"}`) : "flex flex-row gap-4 bg-transparent" }`}
                onClick={() => setIsOpen(false)}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/inventory">Inventory</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}