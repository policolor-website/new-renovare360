"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";

const services = [
  { href: "/servicii/renovare-apartament-bucuresti-ilfov", label: "Renovare apartament București și Ilfov" },
  { href: "/servicii/renovare-casa-spatiu-birou", label: "Renovare casa sau spațiu birou" },
  { href: "/servicii/amenajari-finisaje-interioare", label: "Amenajări și finisaje interioare" },
  { href: "/servicii/instalatii-electrice", label: "Instalații electrice" },
  { href: "/servicii/instalatii-sanitare", label: "Instalații sanitare" },
  { href: "/servicii/finisaje-si-montaj", label: "Montaj gresie, faianță și parchet" },
  { href: "/servicii/renovare-baie-bucuresti-ilfov", label: "Renovare baie și bucătărie" },
  { href: "/servicii/casa-la-rosu", label: "Case la roșu" },
  { href: "/servicii/curatenie-profesionala", label: "Curățenie profesională" },
  { href: "/servicii/centrale-termice-aer-conditionat", label: "Centrale termice și Aer Condiționat" },
  { href: "/servicii/tamplarie-lucrari-pal", label: "Tâmplărie și lucrări din lemn și pal" },
  { href: "/servicii/pereti-muschi-licheni", label: "Pereți din mușchi și licheni" },
];

const navItems = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/servicii", label: "Servicii", hasDropdown: true },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-ink/95 backdrop-blur-md py-3 border-b border-gold/20" : "py-5 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group min-w-0 shrink">
          <div className="flex flex-col leading-none min-w-0">
            <span className="font-display text-xl sm:text-2xl font-bold gold-text tracking-tight truncate">{brand.name}</span>
            <span className={`text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-0.5 transition-colors duration-300 ${scrolled ? "text-ash" : "text-white/70"} truncate`}>{brand.tagline}</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
              onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
            >
              <Link
                href={item.href}
                className={`text-sm tracking-wide transition-colors duration-300 flex items-center gap-1 ${pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "text-gold" : "text-white hover:text-gold"}`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />}
              </Link>

              {item.hasDropdown && servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 bg-ink/95 backdrop-blur-md rounded-xl border border-gold/20 p-3 shadow-2xl">
                  <div className="grid grid-cols-1 gap-1 max-h-[70vh] overflow-y-auto">
                    {services.map((srv) => (
                      <Link
                        key={srv.href}
                        href={srv.href}
                        className="text-sm text-ash hover:text-gold hover:bg-gold/5 px-3 py-2 rounded-lg transition-colors duration-200 block"
                      >
                        {srv.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${brand.phone}`} className={`flex items-center gap-2 text-sm transition-colors ${scrolled ? "text-ash hover:text-gold" : "text-white hover:text-gold"}`}>
            <Phone size={14} />
            <span>Solicită ofertă</span>
          </a>
        </div>

        <button
          className="lg:hidden w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-white hover:text-gold transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-ink/95 mt-3 mx-4 rounded-xl p-6 animate-fade-up border border-gold/20 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:text-gold text-base block py-2"
                  onClick={() => item.hasDropdown && setServicesOpen(!servicesOpen)}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />}
                  </span>
                </Link>
                {item.hasDropdown && servicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-1">
                    {services.map((srv) => (
                      <Link
                        key={srv.href}
                        href={srv.href}
                        className="text-sm text-ash hover:text-gold py-1.5 block"
                      >
                        {srv.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={`tel:${brand.phone}`} className="flex items-center gap-2 text-gold text-sm mt-4 pt-4 border-t border-gold/10">
              <Phone size={14} /> {brand.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
