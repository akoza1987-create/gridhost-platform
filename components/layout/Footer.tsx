import Link from "next/link";

import { footer } from "@/data/footer";
import FooterColumn from "@/components/ui/FooterColumn";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Logo */}

          <div className="lg:col-span-2">

            <Link
              href="/"
              className="text-3xl font-black text-white"
            >
              Grid<span className="text-cyan-400">Host</span>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-zinc-400">
              {footer.company.description}
            </p>

            <p className="mt-6 text-zinc-300">
              {footer.contact.email}
            </p>

          </div>

          {footer.columns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} GridHost.
              Wszystkie prawa zastrzeżone.
            </p>

            <div className="flex gap-6 text-sm">

              <Link
                href="/regulamin"
                className="text-zinc-500 hover:text-cyan-400"
              >
                Regulamin
              </Link>

              <Link
                href="/polityka-prywatnosci"
                className="text-zinc-500 hover:text-cyan-400"
              >
                Polityka prywatności
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}