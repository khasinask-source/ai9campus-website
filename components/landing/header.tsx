"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/ai9campus-logo.png"
            alt="AI9CAMPUS Logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#features">Features</Link>
          <Link href="#solutions">Solutions</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
