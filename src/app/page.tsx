"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, Home, Wrench, PaintBucket, Zap, Layers, Bath, Hammer, Sparkles, Wind, TreePine, Award, ShieldCheck, Users, Clock, Briefcase, FileCheck, UserCheck } from "lucide-react";
import BuildingHero3D from "@/components/building-hero-3d";
import { brand } from "@/lib/brand";

// ============================================
// SERVICII — 12 servicii RENOVARİ 360
// ============================================
const services = [
  {
    slug: "renovare-apartament-bucuresti-ilfov",
    icon: Home,
    title: "Renovare apartament București și Ilfov",
    short: "Renovări complete apartamente",
    text: "Îți renovăm apartamentul fără stres, fără costuri ascunse și fără întârzieri.",
    image: "/renovari/svc-renovare-apartament.png",
  },
  {
    slug: "renovare-casa-spatiu-birou",
    icon: Building2,
    title: "Renovare casa sau spațiu birou",
    short: "Case, vile, spații comerciale",
    text: "Îți amenajăm casa sau biroul exact așa cum ți-l imaginezi, cu design funcțional, execuție impecabilă și termene respectate.",
    image: "/renovari/svc-renovare-casa.jpg",
  },
  {
    slug: "amenajari-finisaje-interioare",
    icon: PaintBucket,
    title: "Amenajări și finisaje interioare",
    short: "Design, execuție, finisaje premium",
    text: "Îți amenajăm locuința exact așa cum ai visat, fără stres, cu finisaje de calitate și atenție la fiecare detaliu.",
    image: "/renovari/svc-amenajari.jpg",
  },
  {
    slug: "instalatii-electrice",
    icon: Zap,
    title: "Instalații electrice",
    short: "Materiale certificate, verificare PRAM",
    text: "Îți realizăm instalațiile electrice fără compromisuri la siguranță, cu materiale certificate, execuție profesionistă și fără surprize.",
    image: "/renovari/svc-electrice.jpg",
  },
  {
    slug: "instalatii-sanitare",
    icon: Wrench,
    title: "Instalații sanitare",
    short: "Soluții durabile, materiale certificate",
    text: "Îți realizăm instalațiile sanitare pentru o locuință sigură, fără infiltrații, fără reparații costisitoare și fără griji pe termen lung.",
    image: "/renovari/svc-sanitare.jpg",
  },
  {
    slug: "finisaje-si-montaj",
    icon: Layers,
    title: "Montaj gresie, faianță și parchet",
    short: "Materiale ceramice, parchet laminat și din lemn",
    text: "Îți transformăm locuința prin montaj profesionist de gresie, faianță și parchet, cu atenție la fiecare detaliu și fără compromisuri la calitate.",
    image: "/renovari/svc-montaj.jpg",
  },
  {
    slug: "renovare-baie-bucuresti-ilfov",
    icon: Bath,
    title: "Renovare baie și bucătărie",
    short: "Dușuri walk-in, montaj electrocasnice",
    text: "Își transformăm baia si bucătăria într-un spațiu modern, elegant și funcțional, prin renovări complete realizate cu atenție la fiecare detaliu.",
    image: "/renovari/svc-baie.jpg",
  },
  {
    slug: "casa-la-rosu",
    icon: Hammer,
    title: "Case la roșu",
    short: "Fundație, structură, acoperiș",
    text: "Construim casa ta la roșu cu structură solidă, termene respectate și costuri transparente, pentru un început fără griji.",
    image: "/renovari/svc-casa-rosu.jpg",
  },
  {
    slug: "curatenie-profesionala",
    icon: Sparkles,
    title: "Curățenie profesională",
    short: "Curățenie generală, după renovare, birouri",
    text: "Îți oferim servicii de curățenie profesională astfel încât să te bucuri de un spațiu curat, igienizat și pregătit pentru fiecare zi.",
    image: "/renovari/svc-curatenie.jpg",
  },
  {
    slug: "centrale-termice-aer-conditionat",
    icon: Wind,
    title: "Centrale termice și Aer Condiționat",
    short: "Montaj, înlocuire, întreținere",
    text: "Îți asigurăm confortul în orice sezon prin montaj profesionist de centrale termice și aer condiționat, fără întârzieri și fără costuri ascunse.",
    image: "/renovari/svc-centrale.jpg",
  },
  {
    slug: "tamplarie-lucrari-pal",
    icon: Hammer,
    title: "Tâmplărie și lucrări din lemn și pal",
    short: "Pergole, foișoare, mobilă, rafturi",
    text: "Îți realizăm mobilier și lucrări din lemn și PAL pentru apartamente, case și spații comerciale.",
    image: "/renovari/svc-tamplarie.png",
  },
  {
    slug: "pereti-muschi-licheni",
    icon: TreePine,
    title: "Pereți din mușchi și licheni",
    short: "Pereți decorativi, design elegant",
    text: "Îți aducem natura în casa sau biroul tău prin pereți decorativi cu licheni și mușchi naturali, creați pentru un ambient elegant, modern și relaxant.",
    image: "/renovari/svc-muschi.jpg",
  },
];

// ============================================
// PROIECTE — 8 transformări RENOVARİ 360
// ============================================
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

// ============================================
// VALORI — 5 valori RENOVARİ 360
// ============================================
const values = [
  { icon: Briefcase, title: "Peste 100 proiecte", text: "Experiență și rezultate dovedite în București și Ilfov." },
  { icon: FileCheck, title: "Deviz transparent", text: "Fără costuri ascunse. Totul este clar de la început." },
  { icon: ShieldCheck, title: "Garanție pentru lucrări", text: "Oferim garanție pentru toate lucrările executate." },
  { icon: Clock, title: "Respectarea termenelor", text: "Ne ținem de cuvânt. Termenele sunt respectate." },
  { icon: UserCheck, title: "Manager de proiect", text: "Ai un singur punct de contact pe tot parcursul proiectului." },
];

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 4;
      const animRange = heroHeight - window.innerHeight;
      setScrollProgress(Math.max(0, Math.min(1, scrollY / animRange)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fade out hero text as assembly begins (0 → 0.15 scroll)
  const heroTextOpacity = scrollProgress < 0.15
    ? 1 - (scrollProgress / 0.15)
    : 0;

  return (
    <main>
      {/* ============================================ */}
      {/* HERO — 3D Building animation */}
      {/* ============================================ */}
      <section className="relative h-[400vh] bg-ink">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <BuildingHero3D />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/40 via-transparent to-ink/80 pointer-events-none" />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-4xl text-center px-6 pointer-events-none transition-opacity duration-300"
            style={{ opacity: heroTextOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs tracking-[0.25em] uppercase text-gold">Peste 100 proiecte • București & Ilfov • Renovări fără stres</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-display text-6xl md:text-8xl font-bold leading-[0.95] mb-6"
            >
              <span className="gold-text">{brand.name}</span>
              <br />
              <span className="text-cream text-3xl md:text-5xl italic font-normal">Renovări complete, fără stres</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-ash max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Transformăm apartamente, case și spații comerciale în locuințe moderne, fără stres, fără întârzieri și fără costuri ascunse.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto"
            >
              <Link
                href="/servicii"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-gold font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                Serviciile noastre <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-cream font-semibold rounded-lg hover:border-gold/50 hover:shadow-[0_4px_30px_rgba(255,107,0,0.25)] transition-all duration-300"
              >
                Cere o ofertă
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
            <span className="text-xs tracking-[0.3em] uppercase text-stone">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DESPRE COMPANIE */}
      {/* ============================================ */}
      <section className="py-24 px-6 relative bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Cine suntem</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
                Despre <span className="gold-text">Renovari360</span>
              </h2>
              <p className="text-lg text-ash leading-relaxed mb-6">
                Suntem o echipă cu experiență în renovări și amenajări interioare complete. Ne ocupăm de întregul proces, de la proiectare până la predarea la cheie, astfel încât tu să te bucuri de rezultatul final fără bătăi de cap.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {["Consultanță și garanție", "Echipe proprii de specialiști", "Materiale de calitate", "Predare la cheie", "Renovare fără stres", "Manager de proiect dedicat"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-ash">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/despre-noi" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
                Despre noi <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden glass">
                <img
                  src="/renovari/about.png"
                  alt="Renovari360"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 hidden md:block">
                <p className="font-display text-4xl font-bold gold-text">100+</p>
                <p className="text-xs text-ash tracking-wide uppercase mt-1">Proiecte finalizate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATISTICI */}
      {/* ============================================ */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, value: "100+", label: "Proiecte finalizate" },
              { icon: Users, value: "100+", label: "Clienți mulțumiți" },
              { icon: Award, value: "12", label: "Servicii oferite" },
              { icon: Clock, value: "24h", label: "Răspuns ofertă" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 mx-auto">
                  <stat.icon size={24} className="text-gold" />
                </div>
                <p className="font-display text-4xl font-bold gold-text mb-2">{stat.value}</p>
                <p className="text-xs text-ash tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* VALORI */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">De ce să ne alegi</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Renovare fără stres</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="glass rounded-2xl p-6 hover:border-gold/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <val.icon size={20} className="text-gold" />
                  </div>
                  <span className="font-display text-2xl font-bold text-stone">0{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-3">{val.title}</h3>
                <p className="text-xs text-ash leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICII */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Alege serviciul potrivit</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Serviciile noastre</h2>
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
                    <div className="relative h-48 overflow-hidden bg-ink/50 flex items-center justify-center">
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
                        Vezi mai mult <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROIECTE */}
      {/* ============================================ */}
      <section className="py-24 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">Lucrări realizate</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">Transformări reale</h2>
            <p className="text-ash max-w-2xl mx-auto">
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

      {/* ============================================ */}
      {/* CTA */}
      {/* ============================================ */}
      <section className="py-32 px-6 bg-surface">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
            Ai un proiect de renovat? <span className="gold-text">Solicită ofertă!</span>
          </h2>
          <p className="text-lg text-ash mb-10">
            Completează datele și primești o estimare personalizată în mai puțin de 24 de ore. Rapid, gratuit și fără obligații.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg"
          >
            Solicită ofertă <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
