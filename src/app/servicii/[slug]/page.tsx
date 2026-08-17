"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, ArrowLeft, Home, Building2, PaintBucket, Zap, Wrench, Layers, Bath, Hammer, Sparkles, Wind, TreePine, Check } from "lucide-react";
import { brand } from "@/lib/brand";

const servicesData: Record<string, {
  icon: any;
  title: string;
  hero: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}> = {
  "renovare-apartament-bucuresti-ilfov": {
    icon: Home,
    title: "Renovare apartament București și Ilfov",
    hero: "Renovare Apartament",
    subtitle: "Îți renovăm apartamentul fără stres, fără costuri ascunse și fără întârzieri.",
    description: "Renovăm apartamente de la zero până la ultimele finisaje, facem instatații electrice și sanitare, turnăm șapă, tragem glet, dam lavabil, punem gresie, faianță și parchet, facem montaj uși și tapet. Toate lucrările sunt realizate unitar și coordonat. Îți stăm la dispoziție cu evaluarea lucrărilor, consultanță și soluții adaptate nevoilor și bugetului tău. Analizăm fiecare proiect în detaliu astfel încât să îți oferim un deviz personalizat și garanția că rezultatul final este exact cel dorit de tine.",
    features: [
      "Pregătire suprafețe",
      "Refacere instalații electrice și sanitare",
      "Demolări și recompartimentări",
      "Finisaje complete",
      "Preluare moloz și curățenie",
      "Manager de proiect dedicat",
    ],
    image: "/renovari/svc-renovare-apartament.png",
  },
  "renovare-casa-spatiu-birou": {
    icon: Building2,
    title: "Renovare casa sau spațiu birou",
    hero: "Renovare Casă sau Birou",
    subtitle: "Îți amenajăm casa sau biroul exact așa cum ți-l imaginezi, cu design funcțional, execuție impecabilă și termene respectate.",
    description: "Realizăm renovări complete de case, vile și spații comerciale, magazine, birouri, restaurante și sedii de firmă în București și Ilfov, incluzând compartimentări, instalații, finisaje moderne și amenajări interioare complete. Toate lucrările sunt realizate unitar și coordonat. Îți stăm la dispoziție cu evaluare, consultanță și soluții adaptate nevoilor și bugetului tău. Analizăm fiecare proiect în detaliu astfel încât sa îți oferim un deviz personalizat și garanția că rezultatul final este exact cel dorit de tine.",
    features: [
      "Demolări și recompartimentări",
      "Instalații electrice/sanitare",
      "Tencuieli interioare/exterioare",
      "Finisaje complete",
      "Preluare moloz și curățenie",
      "Manager de proiect dedicat",
    ],
    image: "/renovari/svc-renovare-casa.jpg",
  },
  "amenajari-finisaje-interioare": {
    icon: PaintBucket,
    title: "Amenajări și finisaje interioare",
    hero: "Amenajări Interioare",
    subtitle: "Îți amenajăm locuința exact așa cum ai visat, fără stres, cu finisaje de calitate și atenție la fiecare detaliu.",
    description: "Oferim servicii complete de amenajări interioare în București și Ilfov, de la consultanță și concept de design până la execuție și finisaje premium, astfel încât să te bucuri de o locuință care reflectă stilul tău de viață. Ne ocupăm de zugraveli, glet, rigips, tapet și montaj de panouri decorative. Toate lucrările sunt realizate unitar și coordonat. Îți stăm la dispoziție cu evaluare, consultanță și soluții adaptate nevoilor și bugetului tău. Analizăm fiecare proiect în detaliu astfel încât sa îți oferim un deviz personalizat și garanția că rezultatul final este exact cel dorit de tine.",
    features: [
      "Consultanță materiale",
      "Pereți și tavane din rigips",
      "Tapet și panouri decorative",
      "Montaj de usi și plinte",
      "Preluare moloz și curățenie",
      "Manager de proiect dedicat",
    ],
    image: "/renovari/svc-amenajari.jpg",
  },
  "instalatii-electrice": {
    icon: Zap,
    title: "Instalații electrice",
    hero: "Instalații Electrice",
    subtitle: "Îți realizăm instalațiile electrice fără compromisuri la siguranță, cu materiale certificate, execuție profesionistă și fără surprize după finalizarea lucrării.",
    description: "Executăm instalații electrice complete pentru apartamente, case și spații comerciale din București și Ilfov. Ne ocupăm de înlocuirea instalațiilor vechi, montajul tablourilor electrice, circuitelor, prizelor, întrerupătoarelor și sistemelor de iluminat, folosind materiale certificate și respectând toate normele de siguranță. Facem verificări PRAM cu electrician autorizat ANRE. Toate lucrările sunt realizate unitar și coordonat. Îți stăm la dispoziție cu evaluare, consultanță și soluții adaptate nevoilor și bugetului tău. Analizăm fiecare proiect în detaliu astfel încât sa îți oferim un deviz personalizat și garanția că rezultatul final este exact cel dorit de tine.",
    features: [
      "Schimbare tablou electric",
      "Refacere trasee",
      "Montaj lustre, aplice și led-uri",
      "Montaj prize și întrerupătoare",
      "Montaj boilere",
      "Verificare PRAM",
    ],
    image: "/renovari/svc-electrice.jpg",
  },
  "instalatii-sanitare": {
    icon: Wrench,
    title: "Instalații sanitare",
    hero: "Instalații Sanitare",
    subtitle: "Îți realizăm instalațiile sanitare pentru o locuință sigură, fără infiltrații, fără reparații costisitoare și fără griji pe termen lung.",
    description: "Executăm instalații sanitare complete pentru apartamente, case și spații comerciale din București și Ilfov. Ne ocupăm de înlocuirea instalațiilor vechi, crearea unora noi, racordarea obiectelor sanitare și testarea întregului sistem, oferind soluții durabile, materiale certificate și execuție la cele mai înalte standarde. Toate lucrările sunt realizate unitar și coordonat. Îți stăm la dispoziție cu evaluare, consultanță și soluții adaptate nevoilor și bugetului tău. Analizăm fiecare proiect în detaliu astfel încât sa îți oferim un deviz personalizat și garanția că rezultatul final este exact cel dorit de tine.",
    features: [
      "Trasee apă și scurgere",
      "Montaj obiecte sanitare",
      "Pregătire baie",
      "Desfundare scurgere",
      "Probe și verificări",
      "Manager de proiect dedicat",
    ],
    image: "/renovari/svc-sanitare.jpg",
  },
  "finisaje-si-montaj": {
    icon: Layers,
    title: "Montaj gresie, faianță și parchet",
    hero: "Montaj Gresie și Parchet",
    subtitle: "Îți transformăm locuința prin montaj profesionist de gresie, faianță și parchet, cu atenție la fiecare detaliu și fără compromisuri la calitate.",
    description: "Oferim servicii complete de montaj gresie, faianță și parchet în București și Ilfov pentru apartamente, case și spații comerciale, terase interioare și exterioare. Lucrăm cu materiale ceramice, parchet laminat și parchet din lemn, asigurând o execuție precisă, aliniere perfectă și finisaje de înaltă calitate. Pregătim suprafața, verificăm planeitatea și folosim adezivi potriviți pentru fiecare tip de material. Toate lucrările sunt realizate unitar și coordonat. Îți stăm la dispoziție cu evaluare, consultanță și soluții adaptate nevoilor și bugetului tău. Analizăm fiecare proiect în detaliu astfel încât sa îți oferim un deviz personalizat și garanția că rezultatul final este exact cel dorit de tine.",
    features: [
      "Montaj gresie și faianță",
      "Montaj parchet și plintă",
      "Montaj riflaj decorativ",
      "Preluare moloz și curățenie",
      "Manager de proiect dedicat",
    ],
    image: "/renovari/svc-montaj.jpg",
  },
  "renovare-baie-bucuresti-ilfov": {
    icon: Bath,
    title: "Renovare baie și bucătărie București și Ilfov",
    hero: "Renovare Baie și Bucătărie",
    subtitle: "Își transformăm baia si bucătăria într-un spațiu modern, elegant și funcțional, prin renovări complete realizate cu atenție la fiecare detaliu.",
    description: "Ne ocupăm de întreaga renovare a băii tale, de la schimbat instalațiile sanitare, gresie și faianță și până la montajul obiectelor sanitare. Construim dușuri walk-in de la zero. Lucrăm curat, comunicăm deschis și nu plecăm până nu ne asigurăm că instalația sanitară este funcțională și nu picură pe nicăieri. Renovăm bucatării de la tavan și până la refacerea instalațiilor electrice și de apă, montajul gresie, faiantei și a electrocasnicelor incorporabile. Toate lucrările sunt realizate unitar și coordonat. Îți stăm la dispoziție cu evaluarea lucrărilor, consultanță și soluții adaptate nevoilor și bugetului tău. Analizăm fiecare proiect în detaliu astfel încât să îți oferim un deviz personalizat și garanția că rezultatul final este exact cel dorit de tine.",
    features: [
      "Montaj gresie si faianță",
      "Montaj obiecte sanitare",
      "Refacerea instalație sanitară",
      "Construcție duș walk-in",
      "Preluare moloz și curățenie",
      "Manager de proiect dedicat",
    ],
    image: "/renovari/svc-baie.jpg",
  },
  "casa-la-rosu": {
    icon: Hammer,
    title: "Case la roșu",
    hero: "Case la Roșu",
    subtitle: "Construim casa ta la roșu cu structură solidă, termene respectate și costuri transparente, pentru un început fără griji.",
    description: "Construim case la roșu în București și Ilfov, cu fundații solide, structură sigură și execuție realizată conform proiectului. Ne ocupăm de la fundație și pâna la acoperiș. Toate lucrările sunt realizate unitar și coordonat. Îți stăm la dispoziție cu evaluare, consultanță și soluții adaptate nevoilor și bugetului tău. Analizăm fiecare proiect în detaliu astfel încât sa îți oferim un deviz personalizat și garanția că rezultatul final este exact cel dorit de tine.",
    features: [
      "Organizare de șantier",
      "Fundație și cofrare",
      "Armaturi și zidărie",
      "Manager de proiect dedicat",
    ],
    image: "/renovari/svc-casa-rosu.jpg",
  },
  "curatenie-profesionala": {
    icon: Sparkles,
    title: "Curățenie profesională",
    hero: "Curățenie Profesională",
    subtitle: "Îți oferim servicii de curățenie profesională astfel încât să te bucuri de un spațiu curat, igienizat și pregătit pentru fiecare zi.",
    description: "Oferim servicii complete de curățenie profesională în București și Ilfov pentru apartamente, case, birouri și spații comerciale. Realizăm curățenie de întreținere, curățenie generală, curățenie după renovare și după chiriaș, folosind echipamente profesionale, produse eficiente și personal instruit pentru rezultate impecabile. Îți redăm confortul prin servicii de curățenie realizate cu grijă pentru fiecare detaliu, astfel încât să te bucuri de un mediu curat, sănătos și primitor, fără niciun efort.",
    features: [
      "Curățenie generală",
      "Curățenie de întreținere",
      "Curățenie după renovare",
      "Curățenie spații de birouri",
      "Curățenie după chiriaș",
      "Manager de proiect dedicat",
    ],
    image: "/renovari/svc-curatenie.jpg",
  },
  "centrale-termice-aer-conditionat": {
    icon: Wind,
    title: "Centrale termice și Aer Condiționat",
    hero: "Centrale Termice și AC",
    subtitle: "Îți asigurăm confortul în orice sezon prin montaj profesionist de centrale termice și aer condiționat, fără întârzieri și fără costuri ascunse.",
    description: "Instalăm, înlocuim și întreținem centrale termice și sisteme de aer condiționat pentru apartamente, case și spații comerciale din București și Ilfov, folosind echipamente de încredere și montaj realizat la cele mai înalte standarde. Toate lucrările sunt realizate unitar și coordonat. Îți stăm la dispoziție cu evaluare, consultanță și soluții adaptate nevoilor și bugetului tău. Analizăm fiecare proiect în detaliu astfel încât sa îți oferim un deviz personalizat și garanția că rezultatul final este exact cel dorit de tine.",
    features: [
      "Montaj centrale termice",
      "Verificare centrale termice",
      "Montaj senzori de gaz",
      "Montaj aer condiționat",
      "Curățare și verificare aer condiționat",
    ],
    image: "/renovari/svc-centrale.jpg",
  },
  "tamplarie-lucrari-pal": {
    icon: Hammer,
    title: "Tâmplărie și lucrări din lemn și pal",
    hero: "Tâmplărie și Lucrări PAL",
    subtitle: "Îți realizăm mobilier și lucrări din lemn și PAL pentru apartamente, case și spații comerciale.",
    description: "Executăm pergole din lemn, foișoare, labriuri de interior și exterior, geamuri din lemn, obloane din lemn și recondiționare uși din lemn. Mobila din pal și lemn, rafuri pentru spații comerciale, etc. Lucrăm organizat și cu atenție la detalii pentru proiecte durabile și adaptate fiecărui spațiu. Toate lucrările sunt realizate unitar și coordonat. Îți stăm la dispoziție cu evaluare, consultanță și soluții adaptate nevoilor și bugetului tău. Analizăm fiecare proiect în detaliu astfel încât sa îți oferim un deviz personalizat și garanția că rezultatul final este exact cel dorit de tine.",
    features: [
      "Montaj uși și plinte",
      "Panouri decorative",
      "Recondiționare parchet și uși",
      "Realizare foișoare și pergole",
      "Mobilă și rafturi spații comerciale",
      "Manager de proiect dedicat",
    ],
    image: "/renovari/svc-tamplarie.png",
  },
  "pereti-muschi-licheni": {
    icon: TreePine,
    title: "Pereți din mușchi și licheni",
    hero: "Pereți din Mușchi și Licheni",
    subtitle: "Îți aducem natura în casa sau biroul tău prin pereți decorativi cu licheni și mușchi naturali, creați pentru un ambient elegant, modern și relaxant.",
    description: "Proiectăm și montăm pereți decorativi cu licheni și mușchi stabilizați care aduc natura în interior, îmbunătățesc confortul vizual și oferă un design elegant, fără întreținere. Fiecare proiect este personalizat în funcție de spațiu și stilul dorit, folosind materiale premium și finisaje de înaltă calitate. Toate lucrările sunt realizate unitar și coordonat. Îți stăm la dispoziție cu evaluare, consultanță și soluții adaptate nevoilor și bugetului tău. Analizăm fiecare proiect în detaliu astfel încât sa îți oferim un deviz personalizat și garanția că rezultatul final este exact cel dorit de tine.",
    features: [
      "Pregătire suprafață",
      "Consultanță materiale",
      "Proiectare personalizată",
      "Montaj mușchi și licheni",
      "Manager de proiect dedicat",
    ],
    image: "/renovari/svc-muschi.jpg",
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];

  if (!service) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-cream mb-4">Serviciu negăsit</h1>
          <Link href="/servicii" className="text-gold hover:underline">← Înapoi la servicii</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto">
              <service.icon size={32} className="text-gold" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">{brand.name}</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4">{service.hero}</h1>
            <p className="text-lg text-ash max-w-2xl mx-auto">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <Link href="/servicii" className="inline-flex items-center gap-2 text-ash hover:text-gold transition-colors mb-8 text-sm">
            <ArrowLeft size={16} /> Toate serviciile
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">{service.title}</h2>
            <p className="text-lg text-ash leading-relaxed mb-12">{service.description}</p>

            <h3 className="font-display text-xl font-bold text-cream mb-6">Ce include:</h3>
            <div className="space-y-3">
              {service.features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-gold" />
                  </span>
                  <span className="text-cream text-sm leading-relaxed">{feat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 glass rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              Vrei o ofertă personalizată? Apelează-ne!
            </h3>
            <p className="text-ash mb-6"><a href={`tel:${brand.phone.replace(/\./g, "")}`} className="text-gold text-2xl font-bold">{brand.phone}</a></p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
            >
              Cere o ofertă <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
