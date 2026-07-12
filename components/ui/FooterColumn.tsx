import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
};

export default function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");

          if (isExternal) {
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors duration-300 hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            );
          }

          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-zinc-400 transition-colors duration-300 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}