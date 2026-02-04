"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/ai9campus-logo.png"
            alt="AI9CAMPUS Logo"
            className="h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="lg" className="bg-accent px-8 text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30">
            Request Demo
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-card shadow-lg md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              
                key={item.label}
                href={item.href}
                className="text-base font-semibold text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button size="lg" className="mt-2 w-full bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90">
              Request Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}