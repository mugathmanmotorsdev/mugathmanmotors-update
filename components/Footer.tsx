import Link from "next/link";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact Section */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p>+234-814-889-6797</p>
              <p>info@mugathmanmotors.com</p>
              <p>
                Dandal Nassai Housing Estate, Marri Kumbotso LGA, Kano, Nigeria
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                target="_blank"
                href="https://www.tiktok.com/@mugathman_motors?is_from_webapp=1&sender_device=pc"
                className="text-gray-400 hover:text-[#587FFF] transition-colors"
              >
                <FaTiktok size={20} />
              </a>
              <a
                target="_blank"
                href="https://youtube.com/@mugathmanmotors?si=HCEMYU6dGM7IaXvr"
                className="text-gray-400 hover:text-[#587FFF] transition-colors"
              >
                <FaYoutube size={20} />
              </a>
              <a
                target="_blank"
                href="https://web.facebook.com/profile.php?id=61583124653834"
                className="text-gray-400 hover:text-[#587FFF] transition-colors"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/inventory" className="hover:text-[#587FFF] transition-colors">
                  Dump Truck
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="hover:text-[#587FFF] transition-colors">
                  Tractor Head
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="hover:text-[#587FFF] transition-colors">
                  Trailer
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="hover:text-[#587FFF] transition-colors">
                  Tractor
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#587FFF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#587FFF] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#587FFF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#587FFF] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-lg">Mugathman Motors</span>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-[#587FFF] transition-colors">
              Terms and conditions
            </Link>
            <Link href="#" className="hover:text-[#587FFF] transition-colors">
              Privacy
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500 mb-1">
              Built with <span className="text-red-500">❤️</span> by{" "}
              <a
                href="https://kuibit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#587FFF]"
              >
                KUIBIT
              </a>
            </p>
            <p className="text-sm text-gray-500">
              Copyright © Mugathman Motors 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
