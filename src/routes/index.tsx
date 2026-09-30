import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ExternalLink,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  Star,
  X,
  Clock,
  ShieldCheck,
  Award,
  HeartHandshake,
  CheckCircle2,
  Instagram,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { OurServicesSection } from "@/components/OurServices";

// Real salon interior images
import receptionImg from "@/assets/salon/salon-reception.jpg";
import waitingLoungeImg from "@/assets/salon/salon-waiting-lounge.jpg";
import pedicureBasinImg from "@/assets/salon/salon-pedicure-basin.jpg";
import makeupStudioImg from "@/assets/salon/salon-makeup-studio.jpg";
import stylingWashImg from "@/assets/salon/salon-styling-wash.jpg";

// ====================================================
// CONFIGURATION VARIABLES (EASILY CUSTOMIZABLE)
// ====================================================
export const WHATSAPP_NUMBER = "917526840100";
export const PHONE_NUMBER = "075268 40100";
export const PHONE_HREF = "tel:+917526840100";
export const INSTAGRAM_HANDLE = "@habibsglamstudio";
export const INSTAGRAM_URL = "https://www.instagram.com/habibsglamstudio/";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Habib%27s%20Glam%20Studio%2C%20I%27d%20like%20to%20enquire%20about%20a%20salon%20visit.`;
export const DIRECTIONS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Habib%27s%20Glam%20Studio%20Sangalpura%20Road%20Tibri%20Road%20Gurdaspur";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Offers", href: "#offers" },
  { name: "Contact", href: "#contact" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Habib's Glam Studio | Unisex Salon Gurdaspur" },
      {
        name: "description",
        content:
          "Experience Habib's Glam Studio, a premium unisex salon on Tibri Road in Gurdaspur. Modern hair, bridal makeup, skincare, and luxury grooming care.",
      },
      { property: "og:title", content: "Habib's Glam Studio | Unisex Salon Gurdaspur" },
      {
        property: "og:description",
        content:
          "Luxury unisex salon in Gurdaspur, Punjab. Hair styling, beauty treatments, bridal suites, and relaxation care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  aspect: string;
}

const SALON_GALLERY: GalleryItem[] = [
  {
    id: "reception",
    image: receptionImg,
    title: "Grand Reception & Product Showcase",
    category: "Lobby & Reception",
    description:
      "A welcoming entrance featuring our signature illuminated 'H' brand wall, crystal chandelier, and floor-to-ceiling salon product retail display.",
    aspect: "col-span-1 md:col-span-2 lg:col-span-2 aspect-[16/10]",
  },
  {
    id: "styling-wash",
    image: stylingWashImg,
    title: "Hair Styling & Wash Lounge",
    category: "Hair Studio",
    description:
      "Modern styling chair with backlit warm walnut-framed mirror, custom pop-art mural wall, and elevated shampoo basin station.",
    aspect: "col-span-1 md:col-span-1 lg:col-span-1 aspect-[4/3] md:aspect-auto",
  },
  {
    id: "makeup-studio",
    image: makeupStudioImg,
    title: "Dedicated Bridal & Makeup Suite",
    category: "Bridal Studio",
    description:
      "Private makeup studio featuring twin Hollywood vanity mirrors, rich walnut ceiling cove, and swivel styling chairs.",
    aspect: "col-span-1 md:col-span-1 lg:col-span-1 aspect-[4/3] md:aspect-auto",
  },
  {
    id: "pedicure-basin",
    image: pedicureBasinImg,
    title: "Reclining Basin & Spa Pedicure Deck",
    category: "Spa & Basin Deck",
    description:
      "Elevated rich walnut wood platform with golden ambient underglow, luxury pedicure foot spa chair, and ergonomic hair wash basin.",
    aspect: "col-span-1 md:col-span-1 lg:col-span-1 aspect-[4/3] md:aspect-auto",
  },
  {
    id: "waiting-lounge",
    image: waitingLoungeImg,
    title: "Consultation & Waiting Lounge",
    category: "Lounge Area",
    description:
      "Comfortable black leather seating, consultation desk, framed nail couture gallery, and authentic Jawed Habib brand presentation.",
    aspect: "col-span-1 md:col-span-2 lg:col-span-1 aspect-[4/3] md:aspect-auto",
  },
];

const SALON_PACKAGES = [
  {
    id: "bridal",
    title: "Bridal & Occasion Couture",
    badge: "Most Requested",
    description:
      "Complete pre-bridal and wedding-day radiance in our private makeup suite with specialized makeup artists.",
    features: [
      "HD Bridal Makeup & Hair Styling",
      "Pre-bridal Skin Rejuvenation Facial",
      "Deluxe Pedicure & Nail Polish Finish",
      "Private Studio Suite Access",
    ],
  },
  {
    id: "grooming",
    title: "Gentleman's Signature Grooming",
    badge: "Classic Routine",
    description:
      "Precision styling tailored to your personal aesthetic, combining modern cut with traditional pampering.",
    features: [
      "Precision Scissor/Fade Haircut",
      "Traditional Hot-Towel Shave",
      "Invigorating Basin Scalp Wash",
      "Skin Clarifying Refresh",
    ],
  },
  {
    id: "hair-revive",
    title: "Keratin & Hair Spa Ritual",
    badge: "Hair Therapy",
    description:
      "Deep moisture infusion, fiber repair, and glossy frizz control performed at our reclining basin deck.",
    features: [
      "Deep Nourishing Hair Spa Mask",
      "Aromatherapy Scalp Massage",
      "Frizz-Control Protein Treatment",
      "High-Gloss Volume Blowdry",
    ],
  },
];

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!activeLightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeLightbox]);

  return (
    <div className="min-h-dvh bg-[#F8F1E7] text-[#191716] antialiased selection:bg-[#9E1F2D] selection:text-[#FFFDFC]">
      {/* ==================================================== */}
      {/* 1. STICKY HEADER */}
      {/* ==================================================== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
          scrolled || menuOpen
            ? "border-b border-[#DCCFC0] bg-[#F8F1E7]/95 py-3.5 shadow-sm backdrop-blur-md"
            : "border-b border-[#DCCFC0]/60 bg-[#F8F1E7]/80 py-5 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo Brand */}
          <a href="#home" className="group flex flex-col">
            <span className="font-display text-xl tracking-wide text-[#191716] sm:text-2xl">
              HABIB’S <span className="text-[#9E1F2D] font-normal">GLAM STUDIO</span>
            </span>
            <span className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#75685D] group-hover:text-[#9E1F2D] transition-colors">
              Unisex Salon • Gurdaspur
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-[0.16em] text-[#191716]/80 transition-colors hover:text-[#9E1F2D] font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Instagram Handle & Burgundy CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Habib's Glam Studio on Instagram"
              className="inline-flex items-center gap-2 rounded-full border border-[#DCCFC0] bg-[#FFFDFC] px-3.5 py-2 text-xs font-medium text-[#191716] transition-all hover:border-[#9E1F2D] hover:text-[#9E1F2D] shadow-2xs"
            >
              <Instagram className="size-3.5 text-[#9E1F2D]" />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>

            <Button asChild variant="salon" size="salon">
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 rounded-full text-[#191716] hover:bg-[#EFE2D2] hover:text-[#9E1F2D] lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <nav
            className="absolute inset-x-0 top-full flex min-h-[calc(100dvh-70px)] flex-col justify-between border-b border-[#DCCFC0] bg-[#F8F1E7] px-6 py-8 lg:hidden shadow-xl"
            aria-label="Mobile Navigation"
          >
            <div className="space-y-2">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-[#DCCFC0]/60 py-3.5 font-display text-2xl text-[#191716]"
                >
                  <span>{item.name}</span>
                  <span className="font-sans text-xs text-[#9E1F2D]">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-[#DCCFC0]/80">
              {/* Instagram link in Mobile Menu */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#DCCFC0] bg-[#FFFDFC] p-3.5 text-xs font-medium text-[#191716] shadow-sm hover:border-[#9E1F2D]"
              >
                <span className="flex items-center gap-2.5">
                  <Instagram className="size-4 text-[#9E1F2D]" />
                  <span>Follow {INSTAGRAM_HANDLE}</span>
                </span>
                <ExternalLink className="size-3.5 text-[#75685D]" />
              </a>

              <Button asChild variant="salon" size="salon" className="w-full">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="size-4 fill-current shrink-0" /> Book on WhatsApp
                </a>
              </Button>
              <div className="flex justify-center gap-6 pt-2 text-xs uppercase tracking-[0.14em] text-[#75685D]">
                <a href={PHONE_HREF}>Call Us</a>
                <span>•</span>
                <a href={DIRECTIONS_HREF} target="_blank" rel="noreferrer">
                  Get Directions
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* ==================================================== */}
        {/* 2. HERO SECTION */}
        {/* ==================================================== */}
        <section
          id="home"
          className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28"
        >
          <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Editorial Typography */}
              <div className="lg:col-span-6 xl:col-span-5">
                <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9E1F2D]">
                  <span className="h-px w-8 bg-[#9E1F2D]" /> BEAUTY • HAIR • CARE • CONFIDENCE
                </p>

                <h1 className="mt-5 font-display text-[clamp(2.75rem,5.5vw,5.5rem)] leading-[0.98] tracking-tight">
                  <span className="block text-[#191716]">LOOK GOOD</span>
                  <span className="block text-[#9E1F2D] italic">FEEL AMAZING</span>
                </h1>

                <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-[#75685D] sm:text-lg">
                  Premium hair, beauty and grooming services designed to help you look and feel your
                  best in a warm, luxurious unisex salon setting.
                </p>

                {/* Hero Action Buttons: Booking & Direct WhatsApp */}
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 sm:mt-10">
                  <Button asChild variant="salon" size="salon">
                    <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                      Book Your Appointment <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="salonOutline" size="salon">
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                    >
                      <WhatsAppIcon className="size-4 text-[#25D366] fill-current" /> Chat on WhatsApp →
                    </a>
                  </Button>
                </div>

                {/* Quick Trust Stat */}
                <div className="mt-12 flex items-center gap-6 border-t border-[#DCCFC0] pt-6 text-xs text-[#75685D]">
                  <div>
                    <p className="font-display text-2xl font-semibold text-[#191716]">4.9★</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.14em]">400+ Google Reviews</p>
                  </div>
                  <div className="h-8 w-px bg-[#DCCFC0]" />
                  <div>
                    <p className="font-display text-2xl font-semibold text-[#191716]">100%</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.14em]">Unisex Experience</p>
                  </div>
                  <div className="h-8 w-px bg-[#DCCFC0]" />
                  <div>
                    <p className="font-display text-2xl font-semibold text-[#191716]">7 Days</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.14em]">9:30 AM – 8:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Salon Photo */}
              <div className="relative lg:col-span-6 xl:col-span-7">
                <div className="relative mx-auto overflow-hidden rounded-3xl border border-[#DCCFC0] bg-[#FFFDFC] p-3 shadow-xl sm:p-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#EFE2D2] sm:aspect-[16/11]">
                    <img
                      src={receptionImg}
                      alt="Habib's Glam Studio luxury reception lobby with glowing red logo, crystal chandelier and product showcase"
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-102"
                      fetchPriority="high"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[#FFFDFC]">
                      <div>
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#D8B98A]">
                          Actual Salon Interior
                        </p>
                        <p className="font-display text-lg sm:text-xl">Main Reception & Retail Lounge</p>
                      </div>
                      <span className="rounded-full bg-[#9E1F2D] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]">
                        Gurdaspur
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtle decorative gold badge floating */}
                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#DCCFC0] bg-[#FFFDFC] p-4 shadow-lg sm:flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#9E1F2D]/10 text-[#9E1F2D]">
                    <Award className="size-5" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-[#191716]">Jawed Habib Heritage</p>
                    <p className="text-[0.65rem] text-[#75685D]">World-class salon protocols</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 3. FEATURE STRIP */}
        {/* ==================================================== */}
        <section
          aria-label="Salon highlights"
          className="border-y border-[#DCCFC0] bg-[#EFE2D2] py-8 sm:py-10"
        >
          <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
              <FeatureItem
                icon={<Scissors className="size-5 text-[#9E1F2D]" />}
                title="Expert Stylists"
                desc="Trained professionals with modern precision"
              />
              <FeatureItem
                icon={<Sparkles className="size-5 text-[#9E1F2D]" />}
                title="Premium Products"
                desc="Authentic professional hair & skincare range"
              />
              <FeatureItem
                icon={<ShieldCheck className="size-5 text-[#9E1F2D]" />}
                title="Hygienic Environment"
                desc="Sanitized stations, fresh linens & clean care"
              />
              <FeatureItem
                icon={<HeartHandshake className="size-5 text-[#9E1F2D]" />}
                title="Unisex Salon"
                desc="Thoughtfully designed comfort for everyone"
              />
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 4. ABOUT SECTION */}
        {/* ==================================================== */}
        <section id="about" className="scroll-mt-20 py-20 sm:py-32">
          <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Side: Real Salon Waiting Area Image */}
              <div className="relative lg:col-span-6">
                <div className="relative overflow-hidden rounded-3xl border border-[#DCCFC0] bg-[#FFFDFC] p-3 shadow-md sm:p-4">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#EFE2D2] sm:aspect-[5/4]">
                    <img
                      src={waitingLoungeImg}
                      alt="Habib's Glam Studio consultation and waiting lounge with leather seating and framed brand gallery"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between px-2 text-xs text-[#75685D]">
                    <span className="font-medium text-[#191716]">Waiting Lounge & Consultation Desk</span>
                    <span>Tibri Road, Gurdaspur</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Narrative & Highlights */}
              <div className="lg:col-span-6">
                <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9E1F2D]">
                  <span className="h-px w-8 bg-[#9E1F2D]" /> ABOUT HABIB’S GLAM STUDIO
                </p>

                <h2 className="mt-4 font-display text-4xl leading-[1.08] text-[#191716] sm:text-6xl">
                  WHERE BEAUTY MEETS <span className="italic text-[#9E1F2D]">CONFIDENCE.</span>
                </h2>

                <p className="mt-6 text-base font-light leading-relaxed text-[#75685D] sm:text-lg">
                  Located on Tibri Road in Gurdaspur, Habib’s Glam Studio brings together expert hair
                  design, couture bridal beauty, relaxing skincare therapies, and grooming services in
                  a sophisticated unisex atmosphere.
                </p>

                <p className="mt-4 text-sm font-light leading-relaxed text-[#75685D]">
                  Every service is delivered with high-grade professional products, detailed personal
                  consultation, and unwavering attention to hygiene—ensuring you feel relaxed,
                  cherished, and confident with every visit.
                </p>

                {/* 3 Highlights */}
                <div className="mt-8 grid gap-4 border-t border-[#DCCFC0] pt-6 sm:grid-cols-3">
                  <div className="rounded-xl border border-[#DCCFC0] bg-[#FFFDFC] p-4">
                    <p className="font-display text-lg font-semibold text-[#191716]">Professional Care</p>
                    <p className="mt-1 text-xs text-[#75685D]">Certified stylists and beauticians</p>
                  </div>
                  <div className="rounded-xl border border-[#DCCFC0] bg-[#FFFDFC] p-4">
                    <p className="font-display text-lg font-semibold text-[#191716]">Premium Experience</p>
                    <p className="mt-1 text-xs text-[#75685D]">Warm interiors, Italian marble & walnut wood</p>
                  </div>
                  <div className="rounded-xl border border-[#DCCFC0] bg-[#FFFDFC] p-4">
                    <p className="font-display text-lg font-semibold text-[#191716]">Personalized Styling</p>
                    <p className="mt-1 text-xs text-[#75685D]">Tailored to your facial features and style</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild variant="salon" size="salon">
                    <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                      Discover Our Story <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="salonOutline" size="salon">
                    <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <WhatsAppIcon className="size-4 text-[#25D366] fill-current" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 5. SERVICES SECTION & INDIVIDUAL SERVICES */}
        {/* ==================================================== */}
        <OurServicesSection />

        {/* ==================================================== */}
        {/* 6. GALLERY SECTION: “OUR SALON” */}
        {/* ==================================================== */}
        <section id="gallery" className="scroll-mt-16 bg-[#EFE2D2]/60 py-20 sm:py-32">
          <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9E1F2D]">
                  <span className="h-px w-8 bg-[#9E1F2D]" /> OUR SALON INTERIOR
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-[#191716] sm:text-6xl">
                  Step Inside The Studio
                </h2>
              </div>
              <p className="max-w-md text-sm font-light text-[#75685D]">
                Take a look at our real salon space in Gurdaspur. Every zone has been crafted for
                serenity, luxury, and exceptional self-care.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SALON_GALLERY.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveLightbox(item)}
                  className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-[#DCCFC0] bg-[#FFFDFC] p-3 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#9E1F2D]/50 hover:shadow-lg ${item.aspect}`}
                >
                  <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-2xl bg-[#EFE2D2]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                    <div className="absolute inset-x-0 bottom-0 p-5 text-[#FFFDFC]">
                      <span className="rounded-full bg-[#9E1F2D] px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em]">
                        {item.category}
                      </span>
                      <h3 className="mt-2 font-display text-xl sm:text-2xl">{item.title}</h3>
                      <p className="mt-1 text-xs text-white/80 line-clamp-2">{item.description}</p>
                    </div>

                    <div className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/20 text-[#FFFDFC] backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100">
                      <ExternalLink className="size-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 7. WHY CHOOSE US */}
        {/* ==================================================== */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <p className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9E1F2D]">
                <Sparkles className="size-3.5" /> WHY HABIB’S GLAM STUDIO?
              </p>
              <h2 className="mt-3 font-display text-4xl text-[#191716] sm:text-6xl">
                The Distinction of True Care
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm font-light text-[#75685D] sm:text-base">
                We combine industry-leading styling methods with high hygiene standards and
                attentive personal service.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <WhyCard
                num="01"
                title="EXPERT STYLING"
                desc="Trained professionals certified in modern scissor work, advanced color balancing, and high-fashion styling."
              />
              <WhyCard
                num="02"
                title="PREMIUM PRODUCTS"
                desc="We exclusively use authentic, dermatologically tested salon-grade hair and skin formulations."
              />
              <WhyCard
                num="03"
                title="MODERN SALON"
                desc="Italian marble floors, ambient backlit mirrors, elevated wash platforms, and private vanity rooms."
              />
              <WhyCard
                num="04"
                title="COMPLETE BEAUTY CARE"
                desc="Everything under one roof: from precision threading to bridal couture, nail spa, and men's grooming."
              />
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 8. SALON EXPERIENCE SECTION (WIDE IMMERSIVE) */}
        {/* ==================================================== */}
        <section className="relative overflow-hidden bg-[#3A241C] py-24 sm:py-36 text-[#FFFDFC]">
          <div className="absolute inset-0">
            <img
              src={stylingWashImg}
              alt="Habib's Glam Studio Hair wash and styling platform"
              className="h-full w-full object-cover object-center opacity-30 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A241C] via-[#3A241C]/85 to-[#3A241C]/90" />
          </div>

          <div className="relative mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12 text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#D8B98A]">
              ELEVATE YOUR ROUTINE
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">
              YOUR BEAUTY. <br />
              <span className="italic text-[#D8B98A]">YOUR STYLE.</span> <br />
              YOUR EXPERIENCE.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base font-light text-[#F8F1E7]/80 sm:text-lg">
              Step into a warm, modern and professional salon environment designed around you.
              Where every detail is curated for comfort and aesthetic excellence.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button asChild variant="salon" size="salon">
                <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                  Book An Appointment <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="salonLight" size="salon">
                <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <WhatsAppIcon className="size-4 text-[#25D366] fill-current" /> Chat on WhatsApp →
                </a>
              </Button>
              <Button
                asChild
                variant="salonOutline"
                size="salon"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white"
              >
                <a href={PHONE_HREF}>
                  <Phone className="size-4" /> Call 075268 40100
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 9. OFFERS / CURATED PACKAGES */}
        {/* ==================================================== */}
        <section id="offers" className="scroll-mt-16 bg-[#FFFDFC] py-20 sm:py-32">
          <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9E1F2D]">
                EXCLUSIVE EXPERIENCE
              </p>
              <h2 className="mt-3 font-display text-4xl text-[#191716] sm:text-6xl">
                Curated Salon Packages
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm font-light text-[#75685D]">
                Thoughtfully bundled sessions for brides, groom styling, and deep revitalizing salon
                treatments.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {SALON_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="flex flex-col justify-between rounded-3xl border border-[#DCCFC0] bg-[#F8F1E7] p-8 shadow-sm transition-all duration-300 hover:border-[#9E1F2D]/50 hover:shadow-md"
                >
                  <div>
                    <span className="rounded-full bg-[#9E1F2D]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#9E1F2D]">
                      {pkg.badge}
                    </span>
                    <h3 className="mt-4 font-display text-2xl text-[#191716] sm:text-3xl">
                      {pkg.title}
                    </h3>
                    <p className="mt-3 text-xs font-light leading-relaxed text-[#75685D]">
                      {pkg.description}
                    </p>

                    <div className="mt-6 space-y-2.5 border-t border-[#DCCFC0] pt-6">
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-xs text-[#191716]/85">
                          <CheckCircle2 className="size-4 shrink-0 text-[#9E1F2D]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[#DCCFC0] pt-6">
                    <Button asChild variant="salon" size="salon" className="w-full">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Habib%27s%20Glam%20Studio%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}.`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Enquire Package
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 10. BOOKING CTA (RICH BURGUNDY SECTION) */}
        {/* ==================================================== */}
        <section className="bg-[#9E1F2D] py-20 sm:py-28 text-[#FFFDFC] text-center">
          <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#D8B98A]">
              <Clock className="size-3.5" /> Bookings & Walk-ins Welcome
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">
              YOUR BEST LOOK STARTS HERE.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-light text-[#FFFDFC]/85 sm:text-lg">
              Ready for your next salon experience? Our stylists in Gurdaspur are ready to welcome you.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                variant="salonLight"
                size="salon"
                className="bg-[#FFFDFC] text-[#9E1F2D] hover:bg-[#F8F1E7] border-transparent font-semibold shadow-lg"
              >
                <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                  Book Your Appointment →
                </a>
              </Button>
              <Button
                asChild
                variant="salonOutline"
                size="salon"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white flex items-center gap-2"
              >
                <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-4 fill-current text-[#25D366]" /> Chat on WhatsApp →
                </a>
              </Button>
              <Button
                asChild
                variant="salonOutline"
                size="salon"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white"
              >
                <a href={PHONE_HREF}>
                  <Phone className="size-4" /> Call 075268 40100
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ==================================================== */}
        {/* 11. CONTACT & LOCATION */}
        {/* ==================================================== */}
        <section id="contact" className="scroll-mt-16 bg-[#F8F1E7] py-20 sm:py-32">
          <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Info */}
              <div className="lg:col-span-6">
                <p className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9E1F2D]">
                  <span className="h-px w-8 bg-[#9E1F2D]" /> CONTACT HABIB’S GLAM STUDIO
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-[#191716] sm:text-6xl">
                  Visit Us in <span className="italic text-[#9E1F2D]">Gurdaspur.</span>
                </h2>

                <div className="mt-8 space-y-6 text-sm text-[#75685D]">
                  <div className="flex items-start gap-4">
                    <MapPin className="size-5 shrink-0 text-[#9E1F2D] mt-1" />
                    <div>
                      <p className="font-semibold text-[#191716]">Studio Location</p>
                      <address className="not-italic leading-relaxed mt-1">
                        Sangalpura Road, Tibri Road,
                        <br />
                        Opp. J.K Specialist Hospital, Chownk,
                        <br />
                        Police Line, Gurdaspur, Punjab 143521
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="size-5 shrink-0 text-[#9E1F2D] mt-1" />
                    <div>
                      <p className="font-semibold text-[#191716]">Direct Phone</p>
                      <a href={PHONE_HREF} className="hover:text-[#9E1F2D] transition-colors mt-1 block">
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="size-5 shrink-0 text-[#9E1F2D] mt-1" />
                    <div>
                      <p className="font-semibold text-[#191716]">Opening Hours</p>
                      <p className="mt-1">Monday – Sunday: 9:30 AM – 8:30 PM</p>
                      <p className="text-xs text-[#75685D]/75">Open all 7 days for your convenience</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Button asChild variant="salon" size="salon">
                    <a href={PHONE_HREF}>
                      <Phone className="size-4" /> Call Now
                    </a>
                  </Button>
                  <Button asChild variant="salonOutline" size="salon">
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                    >
                      <WhatsAppIcon className="size-4 text-[#25D366] fill-current" /> WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="salonLight" size="salon">
                    <a href={DIRECTIONS_HREF} target="_blank" rel="noreferrer">
                      <MapPin className="size-4" /> Get Directions
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Side: Map Card / Directions Box */}
              <div className="lg:col-span-6">
                <a
                  href={DIRECTIONS_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex min-h-[380px] sm:min-h-[460px] flex-col justify-between overflow-hidden rounded-3xl border border-[#DCCFC0] bg-[#3A241C] p-8 text-[#FFFDFC] shadow-md transition-all duration-500 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#191716]/60">
                    <img
                      src={receptionImg}
                      alt="Habib's Glam Studio Gurdaspur"
                      className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3A241C] via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex size-14 items-center justify-center rounded-full bg-[#9E1F2D] text-[#FFFDFC] shadow-xl group-hover:scale-110 transition-transform">
                        <MapPin className="size-7" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[#D8B98A]">
                      Sangalpura Road • Tibri Road
                    </span>
                    <h3 className="mt-1 font-display text-3xl sm:text-4xl text-[#FFFDFC]">
                      Gurdaspur, Punjab
                    </h3>
                    <p className="mt-2 text-xs font-light text-[#F8F1E7]/70">
                      Opposite J.K Specialist Hospital, Police Line Chownk. Easy parking available.
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#D8B98A] group-hover:text-[#FFFDFC] transition-colors">
                      Open in Google Maps <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* ==================================================== */}
            {/* FOLLOW & CONNECT (INSTAGRAM + WHATSAPP SOCIAL CARDS) */}
            {/* ==================================================== */}
            <div className="mt-20 border-t border-[#DCCFC0] pt-16">
              <div className="mb-10 text-center sm:text-left">
                <p className="flex items-center justify-center sm:justify-start gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9E1F2D]">
                  <span className="h-px w-8 bg-[#9E1F2D]" /> FOLLOW & CONNECT
                </p>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl text-[#191716]">
                  Connect With Habib’s Glam Studio
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Instagram Card */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#DCCFC0] bg-[#FFFDFC] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9E1F2D]/50 hover:shadow-md">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#9E1F2D]/10 text-[#9E1F2D] transition-transform duration-300 group-hover:scale-110">
                      <Instagram className="size-6" />
                    </div>
                    <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9E1F2D]">
                      Instagram
                    </p>
                    <h4 className="mt-1 font-display text-2xl sm:text-3xl text-[#191716]">
                      Follow Our Journey
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-[#9E1F2D]">
                      {INSTAGRAM_HANDLE}
                    </p>
                    <p className="mt-3 text-xs font-light leading-relaxed text-[#75685D]">
                      Follow us for latest looks, offers, transformations and salon updates.
                    </p>
                  </div>

                  <div className="mt-8 border-t border-[#DCCFC0]/60 pt-6">
                    <Button asChild variant="salon" size="salon" className="w-full">
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Instagram className="size-4" /> Follow On Instagram →
                      </a>
                    </Button>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#DCCFC0] bg-[#FFFDFC] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9E1F2D]/50 hover:shadow-md">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366] transition-transform duration-300 group-hover:scale-110">
                      <WhatsAppIcon className="size-6 fill-current" />
                    </div>
                    <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9E1F2D]">
                      WhatsApp
                    </p>
                    <h4 className="mt-1 font-display text-2xl sm:text-3xl text-[#191716]">
                      Chat with our team
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-[#75685D]">
                      Direct Booking & Consultation
                    </p>
                    <p className="mt-3 text-xs font-light leading-relaxed text-[#75685D]">
                      Connect directly with our team for service enquiries, bridal packages, and fast appointment bookings.
                    </p>
                  </div>

                  <div className="mt-8 border-t border-[#DCCFC0]/60 pt-6">
                    <Button asChild variant="salon" size="salon" className="w-full">
                      <a
                        href={WHATSAPP_HREF}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <WhatsAppIcon className="size-4 fill-current shrink-0" /> Chat On WhatsApp →
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================== */}
      {/* 12. FOOTER (RICH WALNUT BROWN) */}
      {/* ==================================================== */}
      <footer className="border-t border-[#DCCFC0] bg-[#3A241C] text-[#F8F1E7] pb-24 sm:pb-12 pt-16">
        <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 pb-14 border-b border-white/10 lg:grid-cols-12 lg:gap-14">
            {/* Col 1: Brand */}
            <div className="lg:col-span-4">
              <p className="font-display text-2xl tracking-wide text-[#FFFDFC] sm:text-3xl">
                HABIB’S <span className="text-[#D8B98A]">GLAM STUDIO</span>
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#D8B98A]">
                Unisex Salon — Gurdaspur
              </p>
              <p className="mt-5 max-w-sm text-xs font-light leading-relaxed text-[#F8F1E7]/70">
                A warm, refined salon experience blending modern hairdressing, bridal luxury, and
                personalized grooming under one roof.
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D8B98A] font-semibold">
                Explore
              </p>
              <nav className="mt-4 grid grid-cols-2 gap-2.5 text-xs text-[#F8F1E7]/80">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-[#D8B98A] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Col 3: Studio Timings */}
            <div className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D8B98A] font-semibold">
                Studio Hours
              </p>
              <div className="mt-4 space-y-1.5 text-xs text-[#F8F1E7]/70">
                <p className="font-medium text-[#FFFDFC]">Monday – Sunday</p>
                <p>9:30 AM – 8:30 PM</p>
                <p className="text-[0.68rem] text-[#D8B98A]">Open 7 Days a Week</p>
              </div>
            </div>

            {/* Col 4: Quick Contact & Socials */}
            <div className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D8B98A] font-semibold">
                Connect With Us
              </p>
              <div className="mt-4 space-y-2.5 text-xs text-[#F8F1E7]/80">
                <p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#D8B98A] transition-colors font-medium text-[#FFFDFC]"
                  >
                    <Instagram className="size-4 text-[#D8B98A]" />
                    <span>{INSTAGRAM_HANDLE}</span>
                  </a>
                </p>
                <p>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#D8B98A] transition-colors"
                  >
                    <WhatsAppIcon className="size-4 fill-current text-[#25D366]" />
                    <span>WhatsApp Chat</span>
                  </a>
                </p>
                <p>
                  <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-[#D8B98A] transition-colors">
                    <Phone className="size-4 text-[#D8B98A]" />
                    <span>{PHONE_NUMBER}</span>
                  </a>
                </p>
                <p>
                  <a
                    href={DIRECTIONS_HREF}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#D8B98A] transition-colors"
                  >
                    <MapPin className="size-4 text-[#D8B98A]" />
                    <span>Sangalpura Road, Gurdaspur</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-8 text-[0.68rem] uppercase tracking-[0.16em] text-[#F8F1E7]/50 sm:flex-row sm:items-center">
            <p>© 2026 Habib’s Glam Studio – Unisex Salon. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 text-xs text-[#F8F1E7]/70">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFFDFC] flex items-center gap-1.5"
              >
                <Instagram className="size-3.5" /> Instagram
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFFDFC] flex items-center gap-1.5"
              >
                <WhatsAppIcon className="size-3.5 fill-current" /> WhatsApp
              </a>
              <a href={PHONE_HREF} className="hover:text-[#FFFDFC] flex items-center gap-1.5">
                <Phone className="size-3.5" /> Call
              </a>
              <a
                href={DIRECTIONS_HREF}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFFDFC] flex items-center gap-1.5"
              >
                <MapPin className="size-3.5" /> Directions
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Quick Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-[#DCCFC0] bg-[#F8F1E7]/95 pb-[env(safe-area-inset-bottom)] text-[#191716] backdrop-blur-lg sm:hidden shadow-lg">
        <a
          href={PHONE_HREF}
          className="flex min-h-16 flex-col items-center justify-center gap-1 text-[0.62rem] uppercase tracking-[0.12em] hover:text-[#9E1F2D]"
        >
          <Phone className="size-4 text-[#9E1F2D]" />
          <span>Call</span>
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-16 flex-col items-center justify-center gap-1 text-[0.62rem] uppercase tracking-[0.12em] bg-[#9E1F2D] text-[#FFFDFC]"
        >
          <WhatsAppIcon className="size-4 fill-current" />
          <span>WhatsApp</span>
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-16 flex-col items-center justify-center gap-1 text-[0.62rem] uppercase tracking-[0.12em] hover:text-[#9E1F2D]"
        >
          <Instagram className="size-4 text-[#9E1F2D]" />
          <span>Instagram</span>
        </a>
      </div>

      {/* ==================================================== */}
      {/* DUAL FLOATING SOCIAL ACTION BUTTONS: INSTAGRAM & WHATSAPP */}
      {/* ==================================================== */}
      <aside
        aria-label="Floating social contact buttons"
        className="fixed bottom-20 sm:bottom-7 right-4 sm:right-7 z-50 flex flex-col items-end gap-3 pointer-events-none"
      >
        {/* 1. Instagram Floating Action Button */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Habib’s Glam Studio on Instagram"
          className="pointer-events-auto group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#851623] via-[#9E1F2D] to-[#BA2656] text-[#FFFDFC] p-3 sm:px-5 sm:py-3.5 shadow-[0_8px_25px_rgba(158,31,45,0.4)] border border-[#D8B98A]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(158,31,45,0.6)] focus-visible:outline-2 focus-visible:outline-[#9E1F2D]"
        >
          <Instagram className="size-5 sm:size-5.5 shrink-0 transition-transform duration-300 group-hover:rotate-6" />
          <span className="hidden sm:inline font-sans text-xs font-semibold uppercase tracking-[0.14em]">
            Follow Us <span className="font-normal text-[#D8B98A] lowercase">@habibsglamstudio</span>
          </span>
        </a>

        {/* 2. WhatsApp Floating Action Button */}
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Habib’s Glam Studio on WhatsApp"
          className="pointer-events-auto group flex items-center gap-2.5 rounded-full bg-[#25D366] text-[#FFFDFC] p-3 sm:px-5 sm:py-3.5 shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] focus-visible:outline-2 focus-visible:outline-[#25D366]"
        >
          <WhatsAppIcon className="size-5 sm:size-5.5 fill-current shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span className="hidden sm:inline font-sans text-xs font-semibold uppercase tracking-[0.14em]">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* ==================================================== */}
      {/* 13. GALLERY LIGHTBOX MODAL */}
      {/* ==================================================== */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-[#191716]/95 p-4 sm:p-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={activeLightbox.title}
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-[#DCCFC0]/40 bg-[#1E1B19] text-[#FFFDFC] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveLightbox(null)}
              className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full bg-black/60 text-[#FFFDFC] backdrop-blur-md transition-colors hover:bg-[#9E1F2D]"
              aria-label="Close viewer"
            >
              <X className="size-5" />
            </button>

            {/* Large Image */}
            <div className="relative max-h-[68vh] w-full overflow-hidden bg-black">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Details Footer */}
            <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center bg-[#25211E]">
              <div>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#D8B98A]">
                  {activeLightbox.category}
                </span>
                <h4 className="font-display text-2xl text-[#FFFDFC]">{activeLightbox.title}</h4>
                <p className="mt-1 text-xs text-[#F8F1E7]/75 max-w-xl">
                  {activeLightbox.description}
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <Button asChild variant="salon" size="salon">
                  <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" /> Book Visit
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#9E1F2D]/20 bg-[#FFFDFC]">
        {icon}
      </div>
      <div>
        <p className="font-display text-base font-semibold text-[#191716]">{title}</p>
        <p className="mt-0.5 text-xs text-[#75685D] leading-snug">{desc}</p>
      </div>
    </div>
  );
}

function WhyCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="group rounded-3xl border border-[#DCCFC0] bg-[#FFFDFC] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9E1F2D]/50 hover:shadow-md">
      <span className="font-display text-3xl font-semibold text-[#9E1F2D]">{num}</span>
      <h3 className="mt-4 font-display text-xl text-[#191716] group-hover:text-[#9E1F2D] transition-colors">
        {title}
      </h3>
      <p className="mt-3 text-xs font-light leading-relaxed text-[#75685D]">{desc}</p>
    </div>
  );
}