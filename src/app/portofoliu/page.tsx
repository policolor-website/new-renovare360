"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";

const projects = [
  {
    slug: "apartament-2-camere-bucuresti",
    name: "Apartament 2 camere",
    area: "București",
    category: "Renovare apartament",
    image: "/renovari/project-01.jpg",
  },
  {
    slug: "apartament-3-camere-bucuresti",
    name: "Apartament 3 camere",
    area: "București",
    category: "Renovare apartament",
    image: "/renovari/project-02.jpg",
  },
  {
    slug: "baie-bucuresti",
    name: "Baie",
    area: "București",
    category: "Renovare baie",
    image: "/renovari/project-03.jpg",
  },
  {
    slug: "bucatarie-corbeanca",
    name: "Bucătărie",
    area: "Corbeanca",
    category: "Renovare bucătărie",
    image: "/renovari/project-04.jpg",
  },
  {
    slug: "renovare-living-bucuresti",
    name: "Renovare living",
    area: "București",
    category: "Renovare living",
    image: "/renovari/project-06.jpg",
  },
  {
    slug: "renovare-mansarda-bolintin-deal",
    name: "Renovare mansardă",
    area: "Bolintin Deal",
    category: "Renovare mansardă",
    image: "/renovari/project-07.jpg",
  },
  {
    slug: "constructie-semineu-pipera",
    name: "Construcție șemineu",
    area: "Pipera",
    category: "Amenajări",
    image: "/renovari/project-08.jpg",
  },
  {
    slug: "renovare-scara-bloc-bucuresti",
    name: "Renovare scară de bloc",
    area: "București",
    category: "Renovare",
    image: "/renovari/project-09.jpg",
  },
];

export default function PortfolioPage() {
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
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Lucrări realizate</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">Transformări reale</h1>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              Peste 100 de proiecte finalizate în București și Ilfov. Iată câteva dintre transformările noastre.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => {
              const animations = [
                { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
                { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
                { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
              ];
              const anim = animations[i % 3];
              return (
                <motion.div
                  key={p.slug}
                  initial={anim.initial}
                  whileInView={anim.animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Link
                    href={`/portofoliu/${p.slug}`}
                    className="group block glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 text-gold">
                          {p.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display text-lg font-bold text-cream leading-tight">{p.name}</h3>
                        <p className="text-xs text-gold tracking-wide mt-1 flex items-center gap-1">
                          <MapPin size={12} /> {p.area}
                        </p>
                      </div>
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
