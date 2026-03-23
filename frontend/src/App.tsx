import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  ChevronRight,
  Cpu,
  Facebook,
  Globe,
  Heart,
  Landmark,
  Leaf,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  Sun,
  Target,
  TrendingUp,
  Twitter,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitContact, useSubscribeNewsletter } from "./hooks/useQueries";

const queryClient = new QueryClient();

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const el of document.querySelectorAll(".section-reveal")) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

const NAV_LINKS = [
  { label: "ABOUT US", href: "#about" },
  { label: "LEADERSHIP", href: "#leadership" },
  { label: "PROGRAMS", href: "#programs" },
  { label: "POLICY FORUM", href: "#policy" },
  { label: "PARTNERSHIPS", href: "#partnerships" },
  { label: "IMPACT", href: "#impact" },
  { label: "CONTACT", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-nav" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="h-1 tricolor-bar" />
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-display font-bold text-lg">
              VB
            </span>
          </div>
          <div className="hidden sm:block">
            <div className="font-display font-bold text-navy text-sm leading-tight">
              VIKSIT BHARAT DEVELOPMENT FORUM 2047
            </div>
            <div className="text-xs text-muted-foreground font-body">
              Apex Advisory Agency
            </div>
          </div>
        </div>
        <nav className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              data-ocid="nav.link"
              onClick={() => handleNav(link.href)}
              className="text-xs font-semibold text-foreground hover:text-saffron transition-colors tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <Button
            data-ocid="header.primary_button"
            onClick={() => handleNav("#contact")}
            className="bg-navy text-white hover:bg-navy-dark font-semibold text-sm px-5"
          >
            GET INVOLVED
          </Button>
        </div>
        <button
          type="button"
          data-ocid="nav.toggle"
          className="xl:hidden p-2 text-navy"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div
          className="xl:hidden bg-white border-t border-border py-4 px-4 flex flex-col gap-3 shadow-nav"
          data-ocid="nav.panel"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNav(link.href)}
              className="text-left text-sm font-semibold text-navy py-2 border-b border-border last:border-0"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => handleNav("#contact")}
            className="bg-navy text-white mt-2"
          >
            GET INVOLVED
          </Button>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.07 258) 0%, oklch(0.25 0.09 258) 40%, oklch(0.55 0.14 55) 80%, oklch(0.70 0.16 65) 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-viksit-bharat.dim_1920x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
        style={{ width: 480, height: 480 }}
      >
        <AshokaSvg />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 flex flex-col">
        <div className="flex-1 bg-saffron" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-india-green" />
      </div>
      <div className="relative container mx-auto px-6 lg:px-16 pt-32 pb-20">
        <div className="max-w-3xl">
          <Badge className="mb-6 bg-saffron/20 text-saffron border-saffron/30 text-xs font-semibold tracking-widest">
            🇮🇳 VIKSIT BHARAT MISSION 2047
          </Badge>
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 uppercase tracking-tight">
            Forging India&apos;s
            <span className="text-saffron block">Ascension:</span>
            <span className="text-white/90 text-3xl md:text-4xl lg:text-5xl font-semibold">
              A Developed Nation by 2047
            </span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-body mb-10 leading-relaxed max-w-xl">
            Apex Advisory and Implementation Agency for Viksit Bharat Mission —
            Aligned with African Union Agenda 2063 and UN SDG 2030
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              data-ocid="hero.primary_button"
              size="lg"
              className="bg-saffron text-navy-dark hover:bg-saffron/90 font-bold px-8 text-base"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              OUR VISION 2047 <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 font-bold px-8 text-base"
              onClick={() =>
                document
                  .querySelector("#programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              EXPLORE MISSION
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { val: "2047", label: "Target Year" },
              { val: "SDG 17", label: "UN Goals" },
              { val: "AU 2063", label: "Africa Alliance" },
            ].map((s) => (
              <div key={s.val} className="text-center">
                <div className="text-saffron font-display font-bold text-2xl">
                  {s.val}
                </div>
                <div className="text-white/60 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SPOKE_ANGLES = Array.from({ length: 24 }, (_, i) => (i * 360) / 24);

function AshokaSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ashoka Chakra decorative element"
    >
      <title>Ashoka Chakra</title>
      <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="2" />
      <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="1.5" />
      <circle
        cx="100"
        cy="100"
        r="10"
        stroke="white"
        strokeWidth="2"
        fill="white"
        fillOpacity="0.3"
      />
      {SPOKE_ANGLES.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + 10 * Math.cos(rad);
        const y1 = 100 + 10 * Math.sin(rad);
        const x2 = 100 + 70 * Math.cos(rad);
        const y2 = 100 + 70 * Math.sin(rad);
        return (
          <line
            key={angle}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.7"
          />
        );
      })}
    </svg>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="section-reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-saffron" />
              <span className="text-saffron font-semibold text-sm tracking-widest uppercase">
                About VBDF 2047
              </span>
            </div>
            <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-6 leading-tight">
              Shaping India&apos;s Future as a Viksit Bharat
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Viksit Bharat Development Forum 2047 (VBDF 2047) serves as
              India&apos;s premier Apex Advisory and Implementation Agency,
              spearheading the realization of Honorable Prime Minister&apos;s
              visionary mandate to transform India into a fully developed nation
              by 2047 — the centenary of India&apos;s independence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under the distinguished leadership of{" "}
              <strong className="text-navy">Prof. Ripu Ranjan Sinha</strong>,
              VBDF 2047 bridges policy vision with ground-level implementation,
              fostering innovation, sustainability, cultural renaissance,
              economic transformation, and social empowerment across all 28
              states and 8 union territories.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mandate aligns seamlessly with the African Union&apos;s Agenda
              2063 and the United Nations Sustainable Development Goals 2030,
              creating a multilateral framework for South-South cooperation,
              technology transfer, and inclusive growth.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Target size={20} />, label: "Policy Advocacy" },
                { icon: <Leaf size={20} />, label: "Sustainable Dev." },
                { icon: <Globe size={20} />, label: "Global Alliances" },
                { icon: <BookOpen size={20} />, label: "Knowledge Hub" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary"
                >
                  <span className="text-saffron">{item.icon}</span>
                  <span className="text-navy font-semibold text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="section-reveal relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="/assets/generated/hero-viksit-bharat.dim_1920x800.jpg"
                alt="India Development"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center">
                      <Star size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-navy text-sm">
                        Viksit Bharat 2047
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Apex Advisory & Implementation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-saffron/10 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-india-green/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: <TrendingUp size={32} />,
    title: "Economic Transformation",
    desc: "Accelerating GDP growth to $30 trillion by 2047 through manufacturing, exports, and digital economy leadership.",
    color: "text-saffron",
    bg: "bg-saffron/10",
  },
  {
    icon: <Cpu size={32} />,
    title: "Infrastructure & Innovation",
    desc: "World-class infrastructure in transport, energy, digital connectivity, and smart cities driving competitiveness.",
    color: "text-navy",
    bg: "bg-navy/10",
  },
  {
    icon: <Users size={32} />,
    title: "Social Empowerment",
    desc: "Universal health, quality education, women's empowerment, and social equity ensuring no citizen is left behind.",
    color: "text-india-green",
    bg: "bg-india-green/10",
  },
  {
    icon: <Landmark size={32} />,
    title: "Cultural Preservation & Governance",
    desc: "Celebrating India's 5,000-year heritage while building transparent, citizen-centric governance systems.",
    color: "text-saffron",
    bg: "bg-saffron/10",
  },
];

function PillarsSection() {
  return (
    <section id="programs" className="py-24 bg-secondary mandala-bg">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 section-reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-saffron" />
            <span className="text-saffron font-semibold text-sm tracking-widest uppercase">
              Our Focus Areas
            </span>
            <div className="w-12 h-0.5 bg-saffron" />
          </div>
          <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-4">
            Core Development Pillars
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Four integrated pillars forming the foundation of India&apos;s
            transformation journey towards Viksit Bharat 2047
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              data-ocid={`pillars.item.${i + 1}`}
              className="section-reveal bg-white rounded-2xl p-6 shadow-card hover:shadow-nav transition-shadow group"
            >
              <div
                className={`w-16 h-16 ${pillar.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <span className={pillar.color}>{pillar.icon}</span>
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const LEADERS = [
  {
    name: "Prof. Ripu Ranjan Sinha",
    role: "Chairman & Founder",
    bio: "Eminent academician, policy visionary, and development economist leading India's apex advisory mission. Former advisor to multiple Union Ministries with 35+ years of distinguished public service.",
    img: "/assets/generated/prof-ripu-ranjan-sinha.dim_400x400.jpg",
    badge: "FOUNDER",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Vice Chairperson — Social Development",
    bio: "Renowned social scientist and gender equality advocate with expertise in UN SDG implementation frameworks and grassroots development across South Asia.",
    img: "/assets/generated/advisor-dr-priya-sharma.dim_400x400.jpg",
    badge: "ADVISORY",
  },
  {
    name: "Amb. Rajesh Kumar",
    role: "Director — International Affairs",
    bio: "Veteran diplomat with 30 years in India's Foreign Service. Spearheads VBDF's multilateral engagement with African Union, ASEAN, and UN agencies.",
    img: "/assets/generated/advisor-amb-rajesh-kumar.dim_400x400.jpg",
    badge: "DIPLOMAT",
  },
  {
    name: "Dr. Vikram Mehta",
    role: "Chief Economic Advisor",
    bio: "Senior economist and former NITI Aayog member specializing in infrastructure finance, public policy reform, and sustainable development economics.",
    img: "/assets/generated/advisor-dr-vikram-mehta.dim_400x400.jpg",
    badge: "ECONOMIST",
  },
];

function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 section-reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-saffron" />
            <span className="text-saffron font-semibold text-sm tracking-widest uppercase">
              Leadership
            </span>
            <div className="w-12 h-0.5 bg-saffron" />
          </div>
          <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-4">
            Our Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Guided by distinguished statesmen, academics, and development
            experts committed to India&apos;s transformational journey
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERS.map((leader, i) => (
            <div
              key={leader.name}
              data-ocid={`leadership.item.${i + 1}`}
              className="section-reveal text-center group"
            >
              <div className="relative mx-auto w-32 h-32 mb-4">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full rounded-full object-cover shadow-card ring-4 ring-saffron/30 group-hover:ring-saffron transition-all"
                />
                <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-navy text-white text-xs px-2 whitespace-nowrap">
                  {leader.badge}
                </Badge>
              </div>
              <h3 className="font-display font-bold text-navy text-lg mt-4 mb-1">
                {leader.name}
              </h3>
              <p className="text-saffron text-xs font-semibold mb-3 tracking-wide">
                {leader.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PARTNERSHIPS = [
  {
    icon: <Globe size={40} />,
    name: "African Union Agenda 2063",
    abbr: "AU 2063",
    desc: "Strategic partnership with Africa's 55-nation continental blueprint for inclusive growth, infrastructure, and South-South cooperation. VBDF facilitates technology transfer, capacity building, and joint investment frameworks.",
    color: "text-saffron",
    bg: "bg-saffron/10",
  },
  {
    icon: <Target size={40} />,
    name: "United Nations SDG 2030",
    abbr: "UN SDG",
    desc: "Full alignment with all 17 Sustainable Development Goals. VBDF's programs directly contribute to SDG 1 (No Poverty), SDG 4 (Quality Education), SDG 8 (Decent Work), SDG 9 (Industry & Innovation), and SDG 17 (Partnerships).",
    color: "text-navy",
    bg: "bg-navy/10",
  },
  {
    icon: <Sun size={40} />,
    name: "International Solar Alliance",
    abbr: "ISA",
    desc: "Advancing India's clean energy leadership through the ISA framework, deploying 500 GW renewable energy by 2030 and supporting 121 sun-rich nations with solar technology, financing, and knowledge exchange.",
    color: "text-india-green",
    bg: "bg-india-green/10",
  },
];

function PartnershipsSection() {
  return (
    <section id="partnerships" className="py-24 bg-secondary mandala-bg">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 section-reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-india-green" />
            <span className="text-india-green font-semibold text-sm tracking-widest uppercase">
              Global Alliances
            </span>
            <div className="w-12 h-0.5 bg-india-green" />
          </div>
          <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-4">
            Global Strategic Partnerships
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building multilateral coalitions that amplify India&apos;s
            development impact on the world stage
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PARTNERSHIPS.map((p, i) => (
            <div
              key={p.name}
              data-ocid={`partnerships.item.${i + 1}`}
              className="section-reveal bg-white rounded-2xl p-8 shadow-card hover:shadow-nav transition-all group"
            >
              <div
                className={`w-16 h-16 ${p.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <span className={p.color}>{p.icon}</span>
              </div>
              <Badge className="mb-3 bg-secondary text-navy border-navy/20 font-bold">
                {p.abbr}
              </Badge>
              <h3 className="font-display font-bold text-navy text-xl mb-4">
                {p.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const METRICS = [
  {
    icon: <BarChart2 size={28} />,
    value: "$30T",
    label: "GDP Target by 2047",
    sub: "From $3.5T today",
    color: "text-saffron",
    bg: "bg-saffron/10",
    progress: 12,
  },
  {
    icon: <BookOpen size={28} />,
    value: "100%",
    label: "Digital Literacy",
    sub: "Target by 2035",
    color: "text-navy",
    bg: "bg-navy/10",
    progress: 62,
  },
  {
    icon: <Heart size={28} />,
    value: "1:700",
    label: "Doctor-Patient Ratio",
    sub: "WHO Standard by 2040",
    color: "text-india-green",
    bg: "bg-india-green/10",
    progress: 55,
  },
  {
    icon: <Leaf size={28} />,
    value: "500GW",
    label: "Renewable Energy",
    sub: "Clean power by 2030",
    color: "text-saffron",
    bg: "bg-saffron/10",
    progress: 38,
  },
];

function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <AshokaSvg />
      </div>
      <div
        className="container mx-auto px-6 lg:px-16 relative"
        ref={sectionRef}
      >
        <div className="text-center mb-16 section-reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-saffron" />
            <span className="text-saffron font-semibold text-sm tracking-widest uppercase">
              Measuring Progress
            </span>
            <div className="w-12 h-0.5 bg-saffron" />
          </div>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
            Impact Metrics 2024–2047
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Tracking our nation&apos;s progress across key development
            indicators
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              data-ocid={`impact.item.${i + 1}`}
              className="section-reveal bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
            >
              <div
                className={`w-12 h-12 ${m.bg} rounded-xl flex items-center justify-center mb-4`}
              >
                <span className={m.color}>{m.icon}</span>
              </div>
              <div
                className={`font-display font-bold text-3xl ${m.color} mb-1 ${animated ? "animate-count-up" : "opacity-0"}`}
              >
                {m.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">
                {m.label}
              </div>
              <div className="text-white/50 text-xs mb-4">{m.sub}</div>
              <div className="w-full bg-white/20 rounded-full h-1.5">
                <div
                  className="h-1.5 rounded-full bg-saffron transition-all duration-1000"
                  style={{ width: animated ? `${m.progress}%` : "0%" }}
                />
              </div>
              <div className="text-white/40 text-xs mt-1">
                {m.progress}% achieved
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROGRAMS = [
  {
    icon: <Cpu size={24} />,
    title: "Digital India 2.0",
    desc: "Next-generation digital infrastructure including 6G rollout, AI governance frameworks, and digital public goods for 1.4 billion citizens.",
    tag: "Technology",
  },
  {
    icon: <Landmark size={24} />,
    title: "Gram Vikas Mission",
    desc: "Comprehensive rural transformation covering 650,000 villages with modern amenities, skill development, and agri-tech integration.",
    tag: "Rural Dev.",
  },
  {
    icon: <Heart size={24} />,
    title: "Swasthya Bharat 2047",
    desc: "Universal health coverage with AI-powered diagnostics, telemedicine networks, and preventive healthcare for every Indian household.",
    tag: "Healthcare",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Shiksha Unnati Program",
    desc: "Reforming education at every level — from foundational literacy to IIT-level research excellence and industry-aligned skilling.",
    tag: "Education",
  },
  {
    icon: <Leaf size={24} />,
    title: "Green India Initiative",
    desc: "Net-zero emissions by 2070, 33% forest cover, clean Ganga and water bodies, electric mobility, and circular economy models.",
    tag: "Environment",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Aatmanirbhar Bharat 3.0",
    desc: "Self-reliant India with semiconductors, defense manufacturing, pharmaceutical leadership, and space economy worth $44 billion.",
    tag: "Economy",
  },
];

function ProgramsSection() {
  return (
    <section id="policy" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 section-reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-navy" />
            <span className="text-navy font-semibold text-sm tracking-widest uppercase">
              Flagship Initiatives
            </span>
            <div className="w-12 h-0.5 bg-navy" />
          </div>
          <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-4">
            Programs & Initiatives
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flagship programs driving India&apos;s transformation across
            economic, social, and environmental dimensions
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((prog, i) => (
            <div
              key={prog.title}
              data-ocid={`programs.item.${i + 1}`}
              className="section-reveal bg-secondary rounded-2xl p-6 hover:shadow-card transition-all group border border-border hover:border-saffron/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-saffron/20 transition-colors">
                  <span className="text-navy group-hover:text-saffron transition-colors">
                    {prog.icon}
                  </span>
                </div>
                <div>
                  <Badge className="mb-2 bg-saffron/10 text-saffron border-saffron/20 text-xs">
                    {prog.tag}
                  </Badge>
                  <h3 className="font-display font-bold text-navy text-lg mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const submitContact = useSubmitContact();
  const subscribeNewsletter = useSubscribeNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await submitContact.mutateAsync(form);
      toast.success(
        "Your message has been sent! We will get back to you shortly.",
      );
      setForm({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
      });
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    try {
      await subscribeNewsletter.mutateAsync(newsletterEmail);
      toast.success("Successfully subscribed to our newsletter!");
      setNewsletterEmail("");
    } catch {
      toast.error("Failed to subscribe. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary mandala-bg">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 section-reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-saffron" />
            <span className="text-saffron font-semibold text-sm tracking-widest uppercase">
              Connect With Us
            </span>
            <div className="w-12 h-0.5 bg-saffron" />
          </div>
          <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-4">
            Contact / Get Involved
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join the Viksit Bharat movement. Partner with us, contribute your
            expertise, or collaborate on impactful programs.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className="section-reveal bg-white rounded-2xl p-8 shadow-card"
            data-ocid="contact.panel"
          >
            <h3 className="font-display font-bold text-navy text-xl mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="text-navy font-semibold mb-1.5 block"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-email"
                    className="text-navy font-semibold mb-1.5 block"
                  >
                    Email *
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    data-ocid="contact.input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="contact-org"
                  className="text-navy font-semibold mb-1.5 block"
                >
                  Organization
                </Label>
                <Input
                  id="contact-org"
                  data-ocid="contact.input"
                  placeholder="Your organization or institution"
                  value={form.organization}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      organization: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor="contact-subject"
                  className="text-navy font-semibold mb-1.5 block"
                >
                  Subject
                </Label>
                <Input
                  id="contact-subject"
                  data-ocid="contact.input"
                  placeholder="How can we collaborate?"
                  value={form.subject}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, subject: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor="contact-message"
                  className="text-navy font-semibold mb-1.5 block"
                >
                  Message *
                </Label>
                <Textarea
                  id="contact-message"
                  data-ocid="contact.textarea"
                  placeholder="Tell us about your interest in Viksit Bharat 2047..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  rows={4}
                  required
                />
              </div>
              <Button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={submitContact.isPending}
                className="w-full bg-navy text-white hover:bg-navy-dark font-bold py-3"
              >
                {submitContact.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <ChevronRight className="ml-2" size={16} />
                  </>
                )}
              </Button>
            </form>
          </div>
          <div className="section-reveal space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="font-display font-bold text-navy text-xl mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin size={18} />,
                    text: "New Delhi — 110001, India",
                    label: "Headquarters",
                  },
                  {
                    icon: <Mail size={18} />,
                    text: "contact@vbdf2047.org",
                    label: "Email",
                  },
                  {
                    icon: <Phone size={18} />,
                    text: "+91-11-2338-4700",
                    label: "Phone",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-saffron/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-saffron">{item.icon}</span>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                        {item.label}
                      </div>
                      <div className="text-navy font-medium">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-xl mb-2">
                Stay Informed
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Subscribe to the VBDF 2047 newsletter for policy updates,
                program launches, and impact reports.
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-3">
                <Input
                  type="email"
                  data-ocid="newsletter.input"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 flex-1"
                  required
                />
                <Button
                  type="submit"
                  data-ocid="newsletter.submit_button"
                  disabled={subscribeNewsletter.isPending}
                  className="bg-saffron text-navy font-bold hover:bg-saffron/90 whitespace-nowrap"
                >
                  {subscribeNewsletter.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SOCIAL_LINKS = [
  {
    icon: <Facebook size={16} />,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    icon: <Twitter size={16} />,
    label: "Twitter",
    href: "https://twitter.com",
  },
  {
    icon: <Linkedin size={16} />,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: <Youtube size={16} />,
    label: "YouTube",
    href: "https://youtube.com",
  },
];

function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="bg-navy-dark text-white">
      <div className="h-1 tricolor-bar" />
      <div className="container mx-auto px-6 lg:px-16 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center">
                <span className="text-navy font-display font-bold text-sm">
                  VB
                </span>
              </div>
              <div>
                <div className="font-display font-bold text-sm leading-tight">
                  VBDF 2047
                </div>
                <div className="text-white/50 text-xs">
                  Apex Advisory Agency
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Forging India&apos;s path to becoming a Viksit Bharat — a fully
              developed, innovative, and culturally vibrant nation by 2047.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-saffron/20 hover:text-saffron transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 text-saffron uppercase tracking-wide text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-white/60 text-sm hover:text-saffron transition-colors flex items-center gap-1"
                  >
                    <ChevronRight size={12} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 text-saffron uppercase tracking-wide text-sm">
              Key Programs
            </h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {[
                "Digital India 2.0",
                "Gram Vikas Mission",
                "Swasthya Bharat 2047",
                "Shiksha Unnati",
                "Green India Initiative",
                "Aatmanirbhar Bharat 3.0",
              ].map((p) => (
                <li key={p} className="flex items-center gap-1">
                  <ChevronRight size={12} className="text-saffron" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 text-saffron uppercase tracking-wide text-sm">
              Contact
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex gap-2">
                <MapPin
                  size={14}
                  className="text-saffron mt-0.5 flex-shrink-0"
                />{" "}
                Viksit Bharat Development Forum 2047, Connaught Place, New Delhi
                — 110001
              </li>
              <li className="flex gap-2">
                <Mail size={14} className="text-saffron mt-0.5" />{" "}
                contact@vbdf2047.org
              </li>
              <li className="flex gap-2">
                <Phone size={14} className="text-saffron mt-0.5" />{" "}
                +91-11-2338-4700
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-16 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/40 text-xs">
          <span>
            © {year} Viksit Bharat Development Forum 2047. All Rights Reserved.
          </span>
          <span>
            Built with <Heart size={12} className="inline text-saffron" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function AppContent() {
  useScrollReveal();
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PillarsSection />
        <LeadershipSection />
        <PartnershipsSection />
        <ImpactSection />
        <ProgramsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
