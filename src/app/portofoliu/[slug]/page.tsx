"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, MapPin, Building2 } from "lucide-react";

const projectsData: Record<string, {
  name: string;
  area: string;
  category: string;
  description: string;
  image: string;
}> = {
  "apartament-2-camere-bucuresti": {
    name: "Apartament 2 camere",
    area: "București",
    category: "Renovare apartament",
    description: "Renovare completă a unui apartament cu 2 camere în București. Am refăcut instalațiile electrice și sanitare, am montat gresie și faianță, parchet nou, uși și finisaje complete. Transformarea a dus la un spațiu modern, luminos și funcțional, adaptat nevoilor proprietarilor.",
    image: "/renovari/project-01.jpg",
  },
  "apartament-3-camere-bucuresti": {
    name: "Apartament 3 camere",
    area: "București",
    category: "Renovare apartament",
    description: "Renovare completă a unui apartament cu 3 camere în București. Proiectul a inclus demolări și recompartimentări, refacerea instalațiilor, finisaje premium și amenajări interioare complete. Rezultatul: un apartament modern, spațios și confortabil.",
    image: "/renovari/project-02.jpg",
  },
  "baie-bucuresti": {
    name: "Baie",
    area: "București",
    category: "Renovare baie",
    description: "Renovare completă a băii — de la schimbat instalațiile sanitare, gresie și faianță, până la montajul obiectelor sanitare. Am construit un duș walk-in de la zero. Lucrăm curat, comunicăm deschis și nu plecăm până nu ne asigurăm că instalația sanitară este funcțională.",
    image: "/renovari/project-03.jpg",
  },
  "bucatarie-corbeanca": {
    name: "Bucătărie",
    area: "Corbeanca",
    category: "Renovare bucătărie",
    description: "Renovare completă de bucătărie în Corbeanca — de la tavan și până la refacerea instalațiilor electrice și de apă, montajul gresiei, faiantei și a electrocasnicelor incorporabile. Un spațiu modern, elegant și funcțional.",
    image: "/renovari/project-04.jpg",
  },
  "renovare-living-bucuresti": {
    name: "Renovare living",
    area: "București",
    category: "Renovare living",
    description: "Renovare completă a livingului — zugrăveli, glet, montaj parchet, finisaje premium și amenajări interioare. Un spațiu primitor, modern și confortabil pentru întreaga familie.",
    image: "/renovari/project-06.jpg",
  },
  "renovare-mansarda-bolintin-deal": {
    name: "Renovare mansardă",
    area: "Bolintin Deal",
    category: "Renovare mansardă",
    description: "Renovare completă a unei mansarde în Bolintin Deal. Am transformat spațiul într-o locuință modernă și funcțională, cu finisaje de calitate și atenție la fiecare detaliu.",
    image: "/renovari/project-07.jpg",
  },
  "constructie-semineu-pipera": {
    name: "Construcție șemineu",
    area: "Pipera",
    category: "Amenajări",
    description: "Construcție șemineu în Pipera — un element decorativ și funcțional care aduce căldură și eleganță în living. Realizat cu materiale de calitate și execuție impecabilă.",
    image: "/renovari/project-08.jpg",
  },
  "renovare-scara-bloc-bucuresti": {
    name: "Renovare scară de bloc",
    area: "București",
    category: "Renovare",
    description: "Renovare completă a scării de bloc — zugrăveli, finisaje, montaj de elemente decorative. Un proiect care a transformat spațiul comun într-un loc primitor și modern pentru toți locatarii.",
    image: "/renovari/project-09.jpg",
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  if (!project) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-cream mb-4">Proiect negăsit</h1>
          <Link href="/portofoliu" className="text-gold hover:underline">← Înapoi la portofoliu</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm mb-6">
              <Building2 size={14} className="text-gold" />
              <span className="text-xs tracking-[0.25em] uppercase text-gold">{project.category}</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4">{project.name}</h1>
            <p className="text-gold flex items-center justify-center gap-2">
              <MapPin size={16} /> {project.area}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <Link href="/portofoliu" className="inline-flex items-center gap-2 text-ash hover:text-gold transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Toate proiectele
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">{project.name}</h2>
            <p className="text-lg text-ash leading-relaxed mb-12">{project.description}</p>

            <div className="glass rounded-2xl p-8 text-center">
              <h3 className="font-display text-xl font-bold text-cream mb-4">
                Ai un proiect similar? Contactează-ne!
              </h3>
              <p className="text-ash mb-6">Echipa noastră te poate ajuta cu un proiect la fel de reușit.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
              >
                Cere o ofertă
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
