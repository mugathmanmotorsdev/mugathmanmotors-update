import Link from "next/link";

export default function Navigator() {
    return (
        <nav>
            <ul className="flex gap-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/inventory">Inventory</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}