"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Server } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/30">

            <Server className="h-6 w-6 text-black" />

          </div>

          <div>

            <h1 className="text-2xl font-black tracking-tight text-white">

              Grid<span className="text-cyan-400">Host</span>

            </h1>

            <p className="-mt-1 text-xs tracking-widest uppercase text-zinc-500">

              Premium Game Hosting

            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="#games"
            className="text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
          >
            Gry
          </Link>

          <Link
            href="#features"
            className="text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
          >
            Dlaczego My
          </Link>

          <Link
            href="#pricing"
            className="text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
          >
            Cennik
          </Link>

          <Link
            href="#faq"
            className="text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
          >
            FAQ
          </Link>

          <Link
            href="#contact"
            className="text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
          >
            Kontakt
          </Link>

        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">

          <Button
            variant="ghost"
            className="hidden text-zinc-300 hover:text-white md:flex"
          >
            Logowanie
          </Button>

          <Button className="bg-cyan-500 font-semibold text-black hover:bg-cyan-400">
            Zamów serwer
          </Button>

          <button className="rounded-xl border border-white/10 p-2 text-zinc-300 transition hover:border-cyan-500 hover:text-cyan-400 lg:hidden">
            <Menu size={20} />
          </button>

        </div>

      </div>
    </header>
  );
}