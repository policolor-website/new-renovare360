"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Building2, PaintBucket, Zap, Wrench, Layers, Bath, Hammer, Sparkles, Wind, TreePine } from "lucide-react";

const services = [
  {
    slug: "renovare-apartament-bucuresti-ilfov",
    icon: Home,
    title: "Renovare apartament București și Ilfov",
    text: "Îți renovăm apartamentul fără stres, fără costuri ascunse și fără întârzieri.",
    image: "/renovari/svc-renovare-apartament.png",
  },
  {
    slug: "renovare-casa-spatiu-birou",
    icon: Building2,
    title: "Renovare casa sau spațiu birou",
    text: "Îți amenajăm casa sau biroul exact așa cum ți-l imaginezi, cu design funcțional, execuție impecabilă și termene respectate.",
    image: "/renovari/svc-renovare-casa.jpg",
  },
  {
    slug: "amenajari-finisaje-interioare",
    icon: PaintBucket,
    title: "Amenajări și finisaje interioare",
    text: "Îți amenajăm locuința exact așa cum ai visat, fără stres, cu finisaje de calitate și atenție la fiecare detaliu.",
    image: "/renovari/svc-amenajari.jpg",
  },
  {
    slug: "instalatii-electrice",
    icon: Zap,
    title: "Instalații electrice",
    text: "Îți realizăm instalațiile electrice fără compromisuri la siguranță, cu materiale certificate, execuție profesionistă și fără surprize după finalizarea lucrării.",
    image: "/renovari/svc-electrice.jpg",
  },
  {
    slug: "instalatii-sanitare",
    icon: Wrench,
    title: "Instalații sanitare",
    text: "Îți realizăm instalațiile sanitare pentru o locuință sigură, fără infiltrații, fără reparații costisitoare și fără griji pe termen lung.",
    image: "/renovari/svc-sanitare.jpg",
  },
  {
    slug: "finisaje-si-montaj",
    icon: Layers,
    title: "Montaj gresie, faianță și parchet",
    text: "Îți transformăm locuința prin montaj profesionist de gresie, faianță și parchet, cu atenție la fiecare detaliu și fără compromisuri la calitate.",
    image: "/renovari/svc-montaj.jpg",
  },
  {
    slug: "renovare-baie-bucuresti-ilfov",
    icon: Bath,
    title: "Renovare baie și bucătărie București și Ilfov",
    text: "Își transformăm baia si bucătăria într-un spațiu modern, elegant și funcțional, prin renovări complete realizate cu atenție la fiecare detaliu.",
    image: "/renovari/svc-baie.jpg",
  },
  {
    slug: "casa-la-rosu",
    icon: Hammer,
    title: "Case la roșu",
    text: "Construim casa ta la roșu cu structură solidă, termene respectate și costuri transparente, pentru un început fără griji.",
    image: "/renovari/svc-casa-rosu.jpg",
  },
  {
    slug: "curatenie-profesionala",
    icon: Sparkles,
    title: "Curățenie profesională",
    text: "Îți oferim servicii de curățenie profesională astfel încât să te bucuri de un spațiu curat, igienizat și pregătit pentru fiecare zi.",
    image: "/renovari/svc-curatenie.jpg",
  },
  {
    slug: "centrale-termice-aer-conditionat",
    icon: Wind,
    title: "Centrale termice și Aer Condiționat",
    text: "Îți asigurăm confortul în orice sezon prin montaj profesionist de centrale termice și aer condiționat, fără întârzieri și fără costuri ascunse.",
    image: "/renovari/svc-centrale.jpg",
  },
  {
    slug: "tamplarie-lucrari-pal",
    icon: Hammer,
    title: "Tâmplărie și lucrări din lemn și pal",
    text: "Îți realizăm mobilier și lucrări din lemn și PAL pentru apartamente, case și spații comerciale.",
    image: "/renovari/svc-tamplarie.png",
  },
  {
    slug: "pereti-muschi-licheni",
    icon: TreePine,
    title: "Pereți din mușchi și licheni",
    text: "Îți aducem natura în casa sau biroul tău prin pereți decorativi cu licheni și mușchi naturali, creați pentru un ambient elegant, modern și relaxant.",
    image: "/renovari/svc-muschi.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-20 px-6 bg-canvas min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Alege serviciul potrivit</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">Serviciile noastre</h1>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              Vezi ce include fiecare lucrare și solicită un deviz personalizat. Renovări complete, fără stres, în București și Ilfov.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
              ];
              const anim = animations[i % 3];
              return (
                <motion.div
                  key={srv.slug}
                  initial={anim.initial}
                  whileInView={anim.animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Link
                    href={`/servicii/${srv.slug}`}
                    className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                  >
                    <div className="relative h-48 overflow-hidden bg-ink/50">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center">
                          <srv.icon size={20} className="text-gold" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-cream">{srv.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-ash leading-relaxed mb-4">{srv.text}</p>
                      <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Vezi detalii <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
