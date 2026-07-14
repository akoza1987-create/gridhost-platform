"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navigation = [
  {
    label: "Gry",
    href: "#games",
  },
  {
    label: "Dlaczego GridHost?",
    href: "#features",
  },
  {
    label: "Konfigurator",
    href: "#pricing",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-white"
        >
          Grid<span className="text-cyan-400">Host</span>
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}

        </nav>

        {/* Desktop CTA */}

        <div className="hidden lg:block">

          <Button
            className="bg-cyan-500 text-black hover:bg-cyan-400"
          >
            Panel klienta
          </Button>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl border border-white/10 p-2 text-white lg:hidden"
        >
          {mobileOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileOpen && (

        <div className="border-t border-white/10 bg-zinc-950 lg:hidden">

          <nav className="flex flex-col p-6">

            {navigation.map((item) => (

              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-4 text-zinc-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                {item.label}
              </Link>

            ))}

            <Button
              className="mt-6 w-full bg-cyan-500 text-black hover:bg-cyan-400"
            >
              Panel klienta
            </Button>

          </nav>

        </div>

      )}

    </header>
  );
}