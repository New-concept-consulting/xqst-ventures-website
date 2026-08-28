"use client";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/hotel", label: "Hotel & Lounge" },
  { href: "/car-rentals", label: "Car Rentals" },
  { href: "/airbnb", label: "Airbnb" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-gold/30">
      <nav className="flex items-center justify-between px-6 md:px-16 py-4">
        <Link href="/" className="flex items-center gap-3 font-serif text-2xl tracking-wide">
          <img
            src="/images/XQST_logo.png"
            alt="XQST Events and Management Limited"
            className="h-10 w-10 object-contain"
          />
          <span>XQST Events and Management Limited</span>
        </Link>
        <ul className="hidden md:flex gap-8 text-sm tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
