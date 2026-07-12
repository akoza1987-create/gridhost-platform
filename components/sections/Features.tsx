import {
  ShieldCheck,
  Clock3,
  Headphones,
  Rocket,
  Database,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Uruchomienie w 30 sekund",
    text: "Serwer zostaje utworzony automatycznie po opłaceniu zamówienia.",
  },
  {
    icon: ShieldCheck,
    title: "Ochrona DDoS",
    text: "Twoje serwery są zabezpieczone przed najpopularniejszymi atakami.",
  },
  {
    icon: Database,
    title: "Automatyczne kopie",
    text: "Backupy wykonywane regularnie, aby Twoje dane były bezpieczne.",
  },
  {
    icon: Headphones,
    title: "Wsparcie 24/7",
    text: "Pomagamy zawsze, gdy tego potrzebujesz.",
  },
  {
    icon: Zap,
    title: "Najwyższa wydajność",
    text: "Stabilna infrastruktura zapewniająca płynną rozgrywkę.",
  },
  {
    icon: Clock3,
    title: "99.99% Uptime",
    text: "Dbamy o dostępność usług przez całą dobę.",
  },
];

export default function Features() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-black">
            Dlaczego GridHost?
          </h2>

          <p className="mt-6 text-zinc-400">
            Wszystko czego potrzebujesz do hostowania serwera.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 transition hover:border-cyan-500/30 hover:bg-zinc-900"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4">

                  <Icon className="text-cyan-400" size={32} />

                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {item.text}
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}