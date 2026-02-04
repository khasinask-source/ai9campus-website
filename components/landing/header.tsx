"use client";

import { useState } from "react";
import Link from "next/link";

// CHANGE: We removed 'default' and just use 'export function'
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
  {/* I changed h-8 to h-20 (Height 20). This makes it much bigger! */}
  <img 
    src="/logo.png" 
    alt="AI9 Campus Logo" 
    className="h-20 w-auto" 
  />
  
  {/* I also increased text size from 'text-xl' to 'text-2xl' so it matches the big logo */}
  <span className="text-2xl font-bold">AI9 Campus</span>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
           <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
             About
           </Link>
           <Link href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
             Courses
           </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <div className="flex flex-col space-y-4">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
          </div>
        </div>
      )}
    </header>
  );
}
