import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#" },
    { label: "Demo", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Status", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 bg-card">
      <div className="container mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2">
              {/* UPDATED: File name is now logo.png and size is h-24 (Big) */}
              <Image
                src="/logo.png"
                alt="AI9CAMPUS Logo"
                width={200}
                height={80}
                className="h-24 w-auto object-contain"
              />
            </a>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Empowering schools across India with AI-powered learning and intelligent automation solutions.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:contact@ai9campus.in"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                contact@ai9campus.in
              </a>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                India
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AI9CAMPUS. All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] leading-relaxed text-muted-foreground/70">
          Disclaimer: AI9CAMPUS provides education technology services only and does not own or sell academic or AI-generated content; AI outputs are for learning support, with all academic responsibility remaining with the respective schools and educators.
        </p>
      </div>
    </footer>
  );
}
