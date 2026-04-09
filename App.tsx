/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  MessageSquare,
  Bolt,
  Wrench,
  ShieldCheck,
  CreditCard,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

/* ─── CONSTANTS ─────────────────────────────────────────────── */
const PHONE_DISPLAY = "063926 59316";
const PHONE_TEL = "tel:+916392659316";
const WA_BASE = "https://wa.me/916392659316";
const WA_QUOTE = `${WA_BASE}?text=Hi%20Nilesh%2C%20I%20want%20a%20free%20quote%20for%20car%20accessories%20in%20Basti`;
const WA_OFFER = `${WA_BASE}?text=Hi%20Nilesh%2C%20I%20want%20to%20claim%20the%20FREE%20installation%20offer`;
const GOOGLE_PROFILE = "https://share.google/oxAr3Z7vXBDpgn3Yt";
const LOGO_URL =
  "https://lh3.googleusercontent.com/aida/ADBb0ugPp3FChgP3s0ixDFzQPPZr4UZUXVsFrrfGL3FBF2bHCDXF_cf2rfYJTNbLlZCmo16eWjFfvnXm90vdhwxb5IvspqCOmNfYMwqEhmSIfNpc4Yu9ZDoK5xAXf_kiknOCODXU5ExqUjYTcVDznSUPTugQmqlu7ajh0MMG3w-M4hBAZuFVV6Qfg2-8aA_mu-CmZxFmEwPJKouiCWNfbhInX-se91POaKk28ZJaguT4JF0PisnpKfq21ouUB7gLZjm8FTTAw6uyNNF81A";

/* ─── HELPERS ────────────────────────────────────────────────── */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  [key: string]: any;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: "easeOut", delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

const GoogleG = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const WaIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.526-2.961-2.642-.087-.116-.708-.94-.708-1.797 0-.856.448-1.277.607-1.45.16-.174.346-.217.462-.217l.332.005c.109.004.258-.041.404.314l.542 1.312c.058.145.096.314.001.502-.099.19-.148.307-.293.477-.144.17-.307.379-.439.507-.145.145-.297.302-.128.591.17.29.754 1.243 1.626 2.02.112.302.211.502.374.63.162.127.362.187.525.187s.325-.06.488-.22c.162-.162.705-.824.896-1.112.19-.288.38-.242.637-.145.257.097 1.634.771 1.914.912.28.141.466.211.535.33.07.119.07.687-.141 1.092z" />
  </svg>
);

/* ─── COUNTDOWN ──────────────────────────────────────────────── */
function useCountdown() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 0);
      const diff = end.getTime() - now.getTime();
      const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ─── DATA ───────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNs9J0J6fywhhgbS01pFizZoDGx2EqkA4lDzxACxj9r8SaGKWQUPqp7hD7_9L0wIoY7kOu8Th_JFbfdlaxpYdc9s5p29c9I6nSiwT6Z_V_U0DTp8rX6-PyPBozpDEQlotVkkURRfqnoJa41X3Kiw__k3fIcGehW2JH3V9FU5AervTUiP8FGcAjphv9Wf6fPZwLG2mxtXMfehaaPZdSodydeZP2RhU3CmJ_Jr6_RW3tJFOArgPefFwJVKHzkpAq3goCUqltjUJxlVI",
    alt: "Premium leather seat covers – car accessories Basti",
    title: "Luxury Comfort Upgrade",
    desc: "Custom-fit leather & fabric seat covers for all car models. Same-day fitment in Basti.",
    badge: "Best Seller",
    badgeGreen: false,
    span: "md:col-span-8",
    height: "h-[480px]",
    wa: `${WA_BASE}?text=Hi%2C%20I%20want%20seat%20covers%20for%20my%20car`,
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQh752eJCZyGXy0C_DgAV1FMx8kIb5Py5VkNbxkaoC54IE1adYesj6IcUa_htJYbJQ1_a6KFILendrT3zx9UYdhOTWpgrYK-7u6xV82Xcvy9j7Mj8y3zcQ7wThgIn9m1m183xaQj4alo-x5EDzficanBNvaoffdS6bk8pr3aLTSoYgL47h9SwQjnKYLGyE9kYuHu_49Qp4HtY9A70xguUZrhH8bu_lBum3pa83IQiTjt6FlA9esv2sNesphkDg8W8HeTL05-OTrns",
    alt: "Car music system Basti near me",
    title: "Feel Every Beat",
    desc: "Pioneer, Sony, JBL — top brands. FREE installation this month.",
    badge: "FREE Install",
    badgeGreen: true,
    span: "md:col-span-4",
    height: "h-[480px]",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM-Cj1hQ263acBGFbJW46D58vEwm-FzpQxdTnFx7XofbSssAmdJtGRpSaCG4bAZ9_lPUzkz5ZSDNGQ71wmjj8JgG0iZAKqJSpETA3Da4tQckXVM4adKg5MkehuAhEe-u5AxyVrczLkcyJjy0PUBz69QFfVUQCzoyJ07dbtHUcP0nNKWUoFNOV2-9-UA5nLK-euLWdnfyjj4IwOYQX1NkG7R_-nMQDj0FuFZ6m3Z1_A1KfWT4ucxBR90MQKn7C6gANsQMYe0Z8dTBQ",
    alt: "Car LED lighting Basti UP",
    title: "Drive in Style",
    desc: "Ambient, DRL & headlight LED upgrades.",
    badge: "FREE Install",
    badgeGreen: false,
    span: "md:col-span-4",
    height: "h-[350px]",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeJoUTBzN-F-vwQ-pc1gYbQUg__EpiP3rZz-aP4LGFuv5zYpsZbi40UgLbUM4ThI9dVBHCjHwLwh7j9Y-QnLiTzl0UrrPggi59DlWKuuvdHzuluCr39mpVhbZtC8tR5qFAuj_IAgTNW6rBbDCAyVWr-zuylt36Mfs2rvGSWyPy8079g2veXBALfXN_yFOc41ZKrKy2VmJcFwg8t7hqsQ_MV_bz_3lYalXIHmLjsJO8PX1yrRjTTTB0E3wZta2neZaLHHozqnCSBBE",
    alt: "Alloy wheels Basti UP",
    title: "Performance Wheels",
    desc: "Style & performance alloy upgrades.",
    span: "md:col-span-4",
    height: "h-[350px]",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjPD-TWBp8VtvN8NkrfrgNMaoZ9OorJ5oGv6o0GktdmUtbpcqHqUakk8MO_XNfISbfrDC3QUW4YSA0Uf-l-twkIFf4r5_W1sbVWwFox1k3C8IonGMVWVggOU_eJKTjt4_maFhDw6r7OQSQ_LHF6pamyn9ydKfRWew4yfPTBaz59g6E0oVMilqrJf0L15Ng7N9-d3E8QbCrR6oM-bLgCfEBJdJnkC45Q8HsMiRPmdDJI8a6f3UrYwKDfY600jMiythZN_bXPCrPRYM",
    alt: "Ceramic coating car Basti",
    title: "Ceramic Shield",
    desc: "5-year paint protection coating.",
    span: "md:col-span-4",
    height: "h-[350px]",
  },
];

const REVIEWS = [
  { name: "Rajiv Sharma", car: "Fortuner Owner", initial: "R", text: "Completely transformed my SUV. Seat covers are better than factory quality and the music system is mind-blowing. Best car accessories near me — #1 shop in Basti!" },
  { name: "Amit Patel", car: "Creta Owner", initial: "A", text: "True professionals. Explained everything clearly and finished ahead of schedule. If you're looking for car modification near me in Basti — this is THE place." },
  { name: "Sandeep K.", car: "Luxury Sedan Owner", initial: "S", text: "The only place I trust for ceramic coating in Basti. My car still looks brand new after 6 months. Worth every rupee!" },
];

/* ─── APP ────────────────────────────────────────────────────── */
export default function App() {
  const countdown = useCountdown();

  // Schema.org structured data for Google SEO
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "AutoPartsStore",
      name: "Nilesh Car Accessories",
      description: "Basti's #1 car accessories and modification shop — seat covers, music systems, LED lighting, ceramic coating, alloy wheels.",
      telephone: "+916392659316",
      address: { "@type": "PostalAddress", addressLocality: "Basti", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      geo: { "@type": "GeoCoordinates", latitude: 26.799, longitude: 82.728 },
      openingHours: ["Mo-Sa 10:00-21:00"],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "500" },
      sameAs: [GOOGLE_PROFILE],
      priceRange: "₹₹",
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-dim selection:text-white overflow-x-hidden">

      {/* URGENCY TICKER */}
      <div className="bg-primary-dim overflow-hidden py-2">
        <div className="whitespace-nowrap inline-flex gap-12 items-center animate-infinite-scroll" style={{ width: "max-content" }}>
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="text-white font-headline font-bold uppercase tracking-widest">🔥 FREE Installation on Music Systems This Month</span>
              <span className="text-white/40">•</span>
              <span className="text-white font-headline font-bold uppercase tracking-widest">⭐ 500+ Happy Customers in Basti</span>
              <span className="text-white/40">•</span>
              <span className="text-white font-headline font-bold uppercase tracking-widest">📞 {PHONE_DISPLAY}</span>
              <span className="text-white/40">•</span>
              <span className="text-white font-headline font-bold uppercase tracking-widest">🚗 #1 Car Accessories Near Me – Basti UP</span>
              <span className="text-white/40">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* NAV */}
      <nav className="fixed top-8 w-full z-[60] bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-5 md:px-10 py-3">
        <div className="flex items-center gap-3">
          <img alt="Nilesh Car Accessories Logo" className="h-10 md:h-12 w-auto object-contain" src={LOGO_URL} referrerPolicy="no-referrer" />
          <span className="hidden lg:block text-lg font-black italic tracking-tight text-white font-headline uppercase">NILESH CAR ACCESSORIES</span>
        </div>
        <div className="hidden md:flex gap-7 items-center font-headline font-bold text-sm uppercase tracking-widest">
          <a className="text-primary-dim border-b-2 border-primary-dim" href="#products">Products</a>
          <a className="text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
          <a className="text-zinc-400 hover:text-white transition-colors" href="#gallery">Gallery</a>
          <a className="text-zinc-400 hover:text-white transition-colors" href="#reviews">Reviews</a>
          <a className="text-zinc-400 hover:text-white transition-colors" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href={PHONE_TEL} className="hidden sm:flex items-center gap-2 bg-primary-dim text-white px-4 py-2.5 font-black font-headline uppercase tracking-widest text-sm hover:bg-red-700 transition-all active:scale-95">
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
          <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-green-500 text-white px-4 py-2.5 font-black font-headline uppercase tracking-widest text-sm hover:bg-green-600 transition-all active:scale-95">
            <WaIcon size={16} /> WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            alt="Premium car at Nilesh Car Accessories Basti"
            className="w-full h-full object-cover opacity-50 hero-glow"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQnhP82YlALR-puRiJYTV92SQ-nuODBz1XcOuyIps5zRwB8GQburSn8xsQYFi8uGt58fP2o6MVxPJ1UsWllxRs1kVx9qR7ZK-ZyPgveT1KAExDqH7S8BlWSiaNxcS3muskH47Fu0k4ouvcbRUDadL1AMLFNeBMkeS2Bz2rnD0YmbkyVAH2B6J1OG8sguZPPrQ5Z_blN-z0ftBXhF9PfH009_aaAf926OSoF4V9uLpxUQBsRJVob6ProcuQhj5MSH-MPZvh8ehGnqI"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl px-6 md:px-16">
          {/* Trust badges */}
          <Reveal className="flex flex-wrap items-center gap-3 mb-8">
            <a href={GOOGLE_PROFILE} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white px-3 py-2 hover:shadow-lg transition-shadow">
              <GoogleG size={18} />
              <div>
                <div className="text-yellow-500 text-xs leading-none">★★★★★</div>
                <div className="text-xs text-gray-500 font-bold">5.0 Google Rating</div>
              </div>
            </a>
            <div className="flex items-center gap-2 bg-white/8 border border-white/12 px-3 py-2 text-sm font-headline font-bold uppercase tracking-widest text-white">
              <ShieldCheck className="w-4 h-4 text-yellow-400" /> 500+ Happy Customers
            </div>
            <div className="flex items-center gap-2 bg-white/8 border border-white/12 px-3 py-2 text-sm font-headline font-bold uppercase tracking-widest text-white">
              <Bolt className="w-4 h-4 text-primary-dim" /> Same-Day Install
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-8xl font-black font-headline uppercase leading-none tracking-tighter mb-6">
              Basti's #1 Car <span className="text-primary-dim">Accessories</span> &amp; Modification Hub
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light mb-5 max-w-2xl border-l-4 border-primary-dim pl-6">
              Best car accessories near me in Basti, UP. Expert craftsmanship, premium parts &amp; same-day installation — since 2010.
            </p>
          </Reveal>

          {/* Urgency countdown */}
          <Reveal delay={0.3} className="inline-flex flex-wrap items-center gap-4 border border-red-900 bg-gradient-to-r from-red-950/60 to-zinc-950/60 px-5 py-4 mb-8">
            <span className="text-3xl">🎁</span>
            <div>
              <div className="font-headline font-black text-white text-sm uppercase tracking-widest">This Month Special</div>
              <div className="text-gray-300 text-sm">
                <span className="text-primary-dim font-bold">FREE Installation</span> on music systems &amp; LED kits
              </div>
            </div>
            <div className="border border-red-800 bg-black/40 px-4 py-2 text-center">
              <div className="font-headline font-black text-white text-xl leading-none">{countdown}</div>
              <div className="text-gray-500 text-[10px] uppercase tracking-widest">Ends Tonight</div>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="flex flex-col sm:flex-row gap-4">
            <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-green-500 text-white text-lg px-8 py-4 font-black font-headline uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 active:scale-95">
              <WaIcon size={22} /> Get FREE Quote on WhatsApp
            </a>
            <a href={PHONE_TEL} className="flex items-center justify-center gap-3 bg-primary-dim text-white text-lg px-8 py-4 font-black font-headline uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-primary-dim/20 active:scale-95">
              <Phone className="w-5 h-5" /> Call: {PHONE_DISPLAY}
            </a>
          </Reveal>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-zinc-900 border-y border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "500+", label: "Happy Customers" },
            { val: "10+", label: "Years in Basti" },
            { val: "50+", label: "Products Available" },
            { val: "5.0 ⭐", label: "Google Rating" },
          ].map(({ val, label }) => (
            <div key={label}>
              <div className="font-headline font-black text-4xl md:text-5xl text-primary-dim">{val}</div>
              <div className="text-on-surface-variant text-xs uppercase tracking-widest font-headline font-semibold mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="services" className="bg-surface-container py-24 relative overflow-hidden">
        <div className="carbon-texture absolute inset-0 opacity-10" />
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { Icon: Wrench, title: "Expert Installation Near You", desc: "Certified technicians with 10+ years of car modification experience right here in Basti. Factory-quality finish, every time." },
            { Icon: ShieldCheck, title: "100% Genuine Parts", desc: "Only warranty-backed products from top global brands. If you search 'car accessories near me' — we're the answer." },
            { Icon: CreditCard, title: "Best Price in Basti", desc: "Transparent pricing, no hidden costs. Price-match guarantee — we beat any local competitor's quote." },
          ].map(({ Icon, title, desc }) => (
            <Reveal key={title} className="flex flex-col items-center text-center p-10 bg-background/50 border border-white/5 hover:border-primary-dim/40 transition-all group">
              <Icon className="w-16 h-16 text-primary-dim mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-xl font-bold uppercase mb-4">{title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">{desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LIMITED OFFER */}
      <section className="py-12 px-6" style={{ background: "linear-gradient(135deg,#0f0000,#1a0002)" }}>
        <div className="max-w-4xl mx-auto">
          <Reveal className="border border-red-900 p-8 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#1a0002,#2a0004)" }}>
            <span className="inline-block bg-primary-dim text-white font-headline font-bold uppercase tracking-widest text-xs px-3 py-1 mb-4">
              🔥 This Month Only — Limited Offer
            </span>
            <h2 className="font-headline font-black uppercase text-white mb-3" style={{ fontSize: "clamp(2rem,5vw,3.2rem)", lineHeight: 1.05 }}>
              Free Installation<br /><span className="text-primary-dim">Worth ₹500 – ₹2000</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-lg mb-6">
              On all music systems, LED kits &amp; seat cover packages. Walk into our shop in Basti or WhatsApp us to lock in your free installation before the offer ends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WA_OFFER} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white font-headline font-black uppercase tracking-widest text-sm px-7 py-4 hover:bg-green-600 transition-all active:scale-95">
                <WaIcon size={18} /> Claim Offer on WhatsApp
              </a>
              <a href={PHONE_TEL} className="flex items-center justify-center gap-2 border-2 border-white/30 text-white font-headline font-black uppercase tracking-widest text-sm px-7 py-4 hover:border-primary-dim hover:text-primary-dim transition-all">
                <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
            <Reveal>
              <span className="text-primary-dim font-headline font-bold uppercase tracking-widest text-xs block mb-3">// Car Accessories Near Me – Basti, UP</span>
              <h2 className="text-5xl md:text-6xl font-black font-headline uppercase leading-tight">Elevate Your <span className="text-primary-dim">Experience</span></h2>
            </Reveal>
            <div className="hidden md:block h-px flex-grow mx-12 bg-white/10" />
            <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="border-2 border-white/20 text-white font-headline font-bold uppercase tracking-widest text-xs px-6 py-3 hover:border-primary-dim hover:text-primary-dim transition-all">
              View All Products →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {PRODUCTS.map((p, i) => (
              <Reveal key={i} className={`${p.span} group relative overflow-hidden ${p.height} bg-zinc-900`}>
                <img alt={p.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60" src={p.img} referrerPolicy="no-referrer" loading={i === 0 ? "eager" : "lazy"} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                {p.badge && (
                  <div className={`absolute top-4 left-4 z-10 ${p.badgeGreen ? "bg-green-500" : "bg-primary-dim"} text-white font-headline font-black uppercase tracking-widest text-xs px-3 py-1`}>
                    {p.badge}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-black font-headline uppercase mb-2">{p.title}</h3>
                  {p.desc && <p className="text-on-surface-variant mb-4 text-sm max-w-md">{p.desc}</p>}
                  {p.wa && (
                    <a href={p.wa} target="_blank" rel="noreferrer" className="text-primary-dim font-black font-headline uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-4 transition-all hover:drop-shadow-[0_0_8px_rgba(235,0,0,0.6)]">
                      Explore &amp; Quote <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section id="gallery" className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-black font-headline uppercase leading-none mb-4 text-center">
              The <span className="text-primary-dim">Transformation</span> Facility
            </h2>
            <p className="text-center text-on-surface-variant mb-16 text-xs uppercase tracking-widest font-headline">Real results at our Basti shop</p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal className="relative group bg-background overflow-hidden border border-white/5">
              <div className="absolute top-6 left-6 z-20 bg-primary-dim px-4 py-2 font-headline text-xs font-black uppercase tracking-widest text-white shadow-xl">BEFORE</div>
              <img alt="Car before modification – Nilesh Car Accessories Basti" className="w-full h-[480px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida/ADBb0ui4_vagXbDT8BwYt6bDKKYj_bDDqcelv6Cbyt6JgiNWHuArzDoRAPxTxe-Q596Cf2hKzrT7-_YRVC1Edq-iE_hiPj8kcITK0t5HjsSQ8oebVkLlKaY6N4FqD1W7yIlYEuENPAylsQkrIn4rkvC_YFX4XrcLKhYsYczQi8JQ4WAqi4OJMxqJJoWK6t6Oj6luTyI9AtUHjjYRZ32P-kgTcvm5a8J4LpWP2q8f-YqIXPtuQ5x4Q3ttnvAh-BJyN289mwk9rLxv6HkZ" referrerPolicy="no-referrer" loading="lazy" />
              <div className="absolute inset-0 border-[10px] border-white/5 pointer-events-none" />
            </Reveal>
            <Reveal className="relative group bg-background overflow-hidden border border-white/5">
              <div className="absolute top-6 left-6 z-20 bg-white text-black px-4 py-2 font-headline text-xs font-black uppercase tracking-widest shadow-xl">AFTER UPGRADE</div>
              <img alt="Car after modification – Nilesh Car Accessories Basti" className="w-full h-[480px] object-cover group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida/ADBb0ujWWVKGOX1WG16fLjXA3IqUFirTGnXbUQQQdB-UFS6ydeuvTTKB0FT7XHnaqGcxlbBOrDPmChatbrBVUmsyBxPNrefMCX_kM2-aPiv3bo0K50lnGVneFVs9Z9FkdBICMqStbaybB39AWKqhWUGIuNaid58ovUbSHYW9szjIiyYjfkQz1qBtpPyUEXgGt8QcpsRhgvkjFcwEpQ1dLyx_L2dqh7x4UrdgCCEbWfAV82C1TzxDYqHtHe_knyjw3O6qPmNn413jhNov" referrerPolicy="no-referrer" loading="lazy" />
              <div className="absolute inset-0 border-[10px] border-white/5 pointer-events-none" />
            </Reveal>
          </div>
          <Reveal className="mt-14 text-center">
            <p className="font-body text-xl text-on-surface-variant max-w-3xl mx-auto italic leading-relaxed mb-6">
              "We don't just add parts; we redefine the driving experience. Visit the best car accessories shop in Basti to witness the precision firsthand."
            </p>
            <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary-dim text-white font-headline font-black uppercase tracking-widest px-8 py-4 hover:bg-red-700 transition-all">
              Book Your Slot Now →
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary-dim relative overflow-hidden">
        <div className="absolute inset-0 carbon-texture opacity-20" />
        <Reveal className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-black font-headline uppercase text-white mb-6">Upgrade Your Car Today</h2>
          <p className="text-xl text-white/80 font-medium mb-10 max-w-2xl">Premium modifications, one call away. Get your FREE custom quote now.</p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white text-primary-dim text-xl px-12 py-5 font-black font-headline uppercase tracking-widest hover:bg-zinc-100 transition-all shadow-2xl active:scale-95">
              <WaIcon size={22} /> WhatsApp Now
            </a>
            <a href={PHONE_TEL} className="flex items-center justify-center gap-3 border-2 border-white text-white text-xl px-12 py-5 font-black font-headline uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
              <Phone className="w-5 h-5" /> {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </section>

      {/* GOOGLE REVIEWS */}
      <section id="reviews" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
            <Reveal>
              <span className="text-primary-dim font-headline font-bold uppercase tracking-widest text-xs block mb-3">// What Customers in Basti Say</span>
              <h2 className="text-5xl md:text-6xl font-black font-headline uppercase leading-tight">Real <span className="text-primary-dim">Reviews</span></h2>
            </Reveal>
            <a href={GOOGLE_PROFILE} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white text-gray-800 px-4 py-3 hover:shadow-xl transition-shadow">
              <GoogleG size={22} />
              <div>
                <div className="text-yellow-500 text-sm">★★★★★</div>
                <div className="text-xs font-bold">See All Google Reviews</div>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map(({ name, car, initial, text }, i) => (
              <Reveal key={i} delay={i * 0.1} className="bg-surface-container p-10 border-l-4 border-primary-dim hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-full bg-primary-dim flex items-center justify-center font-headline font-black text-white text-lg flex-shrink-0">{initial}</div>
                  <div>
                    <p className="font-headline font-bold uppercase tracking-wide text-white text-sm">{name}</p>
                    <p className="text-primary-dim text-xs font-bold uppercase tracking-widest">{car}</p>
                  </div>
                  <div className="ml-auto"><GoogleG size={18} /></div>
                </div>
                <div className="flex text-yellow-400 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}</div>
                <p className="text-on-surface-variant italic text-sm leading-relaxed">"{text}"</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <a href={GOOGLE_PROFILE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-headline font-bold uppercase tracking-widest text-sm px-8 py-4 hover:border-primary-dim hover:text-primary-dim transition-all">
              <GoogleG size={16} /> Read All Google Reviews
            </a>
          </Reveal>
        </div>
      </section>

      {/* CONTACT + REAL MAP */}
      <section id="contact" className="py-24 bg-surface-container relative">
        <div className="max-w-7xl mx-auto px-8">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black font-headline uppercase mb-16 text-center">
              Visit Us Today In <span className="text-primary-dim">Basti</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="flex items-center gap-2 bg-white text-gray-800 px-3 py-2 text-xs font-bold">
                  <GoogleG size={16} /> 5.0 ★ Google Verified
                </div>
                <div className="flex items-center gap-2 border border-green-800 bg-green-950/30 text-green-400 font-headline font-bold uppercase tracking-widest text-xs px-3 py-2">
                  ✓ 500+ Cars Served in Basti
                </div>
              </div>
              <div className="space-y-10 mb-12">
                <div className="flex gap-6 group">
                  <div className="bg-primary-dim p-4 group-hover:scale-110 transition-transform flex-shrink-0"><MapPin className="w-5 h-5 text-white" /></div>
                  <div>
                    <p className="font-headline font-bold uppercase tracking-[0.2em] text-on-surface mb-2 text-sm">Find Our Shop</p>
                    <p className="text-on-surface-variant">Nilesh Car Accessories, Basti City, Uttar Pradesh</p>
                    <a href={GOOGLE_PROFILE} target="_blank" rel="noreferrer" className="text-xs text-primary-dim mt-1 inline-block hover:underline">Open in Google Maps →</a>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="bg-primary-dim p-4 group-hover:scale-110 transition-transform flex-shrink-0"><Clock className="w-5 h-5 text-white" /></div>
                  <div>
                    <p className="font-headline font-bold uppercase tracking-[0.2em] text-on-surface mb-2 text-sm">Operating Hours</p>
                    <p className="text-on-surface-variant">Mon – Sat: 10:00 AM – 9:00 PM</p>
                    <p className="text-on-surface-variant">Sunday: Special Appointments Only</p>
                    <span className="inline-block bg-green-500 text-white font-headline font-bold uppercase tracking-widest text-xs px-3 py-1 mt-2">Open Now</span>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="bg-primary-dim p-4 group-hover:scale-110 transition-transform flex-shrink-0"><Phone className="w-5 h-5 text-white" /></div>
                  <div>
                    <p className="font-headline font-bold uppercase tracking-[0.2em] text-on-surface mb-2 text-sm">Direct Contact</p>
                    <a href={PHONE_TEL} className="text-white text-3xl font-black font-headline mt-1 tracking-tighter block hover:text-primary-dim transition-colors">{PHONE_DISPLAY}</a>
                    <a href={WA_BASE} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-green-400 mt-1 hover:underline">
                      <WaIcon size={14} /> Also on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-3 bg-primary-dim py-5 font-headline font-black uppercase tracking-widest text-white hover:bg-red-700 transition-all text-lg shadow-2xl active:scale-95">
                <WaIcon size={20} /> Get a Free Custom Quote
              </a>
            </Reveal>

            {/* REAL GOOGLE MAPS EMBED */}
            <Reveal className="h-[560px] border border-white/5 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57660.39804603604!2d82.69505!3d26.79901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990157e36bc0001%3A0x6b4de0474e61db01!2sBasti%2C%20Uttar%20Pradesh%20272001!5e0!3m2!1sen!2sin!4v1712650000000!5m2!1sen!2sin"
                title="Nilesh Car Accessories – Basti UP"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-16 border-t border-white/5 bg-black font-body text-xs tracking-[0.2em] uppercase">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-5 md:col-span-2">
            <img alt="Nilesh Car Accessories Basti" className="h-14 w-auto object-contain self-start" src={LOGO_URL} referrerPolicy="no-referrer" loading="lazy" />
            <p className="text-zinc-500 normal-case tracking-normal max-w-sm leading-relaxed text-sm">
              Basti's premier destination for high-end automotive modifications. Trusted by 500+ customers for car accessories near me in Basti, UP since 2010.
            </p>
            <div className="flex gap-5 mt-1">
              <Facebook className="w-5 h-5 text-zinc-500 hover:text-primary-dim transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 text-zinc-500 hover:text-primary-dim transition-colors cursor-pointer" />
              <Youtube className="w-5 h-5 text-zinc-500 hover:text-primary-dim transition-colors cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-black text-white mb-2 text-sm font-headline tracking-widest">Navigation</p>
            <a className="text-zinc-500 hover:text-primary-dim transition-colors" href="#products">Products</a>
            <a className="text-zinc-500 hover:text-primary-dim transition-colors" href="#services">Services</a>
            <a className="text-zinc-500 hover:text-primary-dim transition-colors" href="#gallery">Gallery</a>
            <a className="text-zinc-500 hover:text-primary-dim transition-colors" href="#reviews">Reviews</a>
            <a className="text-zinc-500 hover:text-primary-dim transition-colors" href={GOOGLE_PROFILE} target="_blank" rel="noreferrer">Google Maps</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-black text-white mb-2 text-sm font-headline tracking-widest">Contact</p>
            <a href={PHONE_TEL} className="text-zinc-500 hover:text-primary-dim transition-colors flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" /> {PHONE_DISPLAY}
            </a>
            <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-primary-dim transition-colors flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Us
            </a>
            <span className="text-zinc-500 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" /> Basti, Uttar Pradesh, India
            </span>
            <p className="text-zinc-700 tracking-tighter text-[10px] mt-4 normal-case">© 2024 NILESH CAR ACCESSORIES. ENGINEERED FOR PERFORMANCE.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WhatsApp FAB */}
      <a
        className="fixed bottom-24 right-5 md:right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all group flex items-center gap-3"
        href={WA_QUOTE}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-50" />
        <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-headline font-bold uppercase tracking-widest text-sm">
          Chat with Experts
        </span>
        <WaIcon size={26} />
      </a>

      {/* FLOATING CALL FAB (desktop only) */}
      <a
        className="fixed bottom-44 right-5 md:right-8 z-[100] bg-primary-dim text-white p-3.5 rounded-full shadow-[0_8px_25px_rgba(235,0,0,0.4)] hover:scale-110 active:scale-95 transition-all hidden md:flex"
        href={PHONE_TEL}
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* MOBILE STICKY BOTTOM CTA — split Call | WhatsApp */}
      <div className="fixed bottom-0 left-0 right-0 z-[110] flex md:hidden border-t border-white/10" style={{ background: "#0a0a0a" }}>
        <a
          href={PHONE_TEL}
          className="flex-1 flex items-center justify-center gap-2 bg-primary-dim text-white font-headline font-black uppercase tracking-widest text-base py-4 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a
          href={WA_QUOTE}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-headline font-black uppercase tracking-widest text-base py-4 active:scale-95 transition-transform"
        >
          <WaIcon size={18} /> WhatsApp
        </a>
      </div>

    </div>
  );
}
