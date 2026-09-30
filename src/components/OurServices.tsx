import { useState, useMemo } from "react";
import {
  ArrowRight,
  Sparkles,
  Search,
  MessageCircle,
  Phone,
  CheckCircle2,
  X,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  fallbackImage: string;
  alt: string;
  tag?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  subtitle: string;
  coverImage: string;
  services: ServiceItem[];
}

const WHATSAPP_BASE = "https://wa.me/917526840100";
const PHONE_HREF = "tel:+917526840100";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "hair-services",
    name: "Hair Services",
    subtitle: "Basin therapy, couture styling, precision blowouts, balayage & color",
    coverImage: "/images/salon/salon-styling-wash.jpg",
    services: [
      {
        id: "shampoo-conditioning",
        name: "Shampoo & Conditioning",
        category: "Hair Services",
        description: "Cleanse, condition and nourish your hair for a healthy finish at our luxury basin.",
        image:
          "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-styling-wash.jpg",
        alt: "Professional salon stylist washing and conditioning hair at salon basin",
        tag: "Essential",
      },
      {
        id: "hairstyling",
        name: "Hairstyling",
        category: "Hair Services",
        description: "Stylish, polished hairstyles created for every special occasion.",
        image:
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-styling-wash.jpg",
        alt: "Beautiful professional hairstyling image showing stylist creating elegant hairstyle",
        tag: "Artistic",
      },
      {
        id: "blowdry",
        name: "Blowdry",
        category: "Hair Services",
        description: "Smooth, polished and frizz-controlled hair with a professional blow-dry.",
        image:
          "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-styling-wash.jpg",
        alt: "Professional salon photograph showing stylist using blow dryer and round brush",
      },
      {
        id: "dry-shampoo",
        name: "Dry Shampoo",
        category: "Hair Services",
        description: "Refresh your hair and revive your look without a traditional wash.",
        image:
          "https://images.unsplash.com/photo-1522337094133-f4cf81b16c21?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-styling-wash.jpg",
        alt: "Modern beauty salon photograph showing dry shampoo being applied to hair",
        tag: "Quick Refresh",
      },
      {
        id: "hair-coloring",
        name: "Hair Coloring",
        category: "Hair Services",
        description: "Beautiful, vibrant and personalized hair color created by professionals.",
        image:
          "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-styling-wash.jpg",
        alt: "Premium hair-coloring salon photograph showing stylist applying professional hair color",
        tag: "Couture Color",
      },
      {
        id: "hair-education",
        name: "Hair Education",
        category: "Hair Services",
        description: "Learn professional hair care, styling techniques and expert tips.",
        image:
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-styling-wash.jpg",
        alt: "Professional salon education image showing stylist teaching hair techniques",
      },
      {
        id: "hair-styling-tailored",
        name: "Hair Styling",
        category: "Hair Services",
        description: "Professional styling tailored to your desired look and personality.",
        image:
          "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-styling-wash.jpg",
        alt: "Distinct premium hairstyling photograph showing finished styled hair",
      },
    ],
  },
  {
    id: "beauty-services",
    name: "Eyebrow & Beauty",
    subtitle: "Artful brow shaping, delicate lash enhancements & radiant bronzing",
    coverImage: "/images/services/eyebrow-threading.jpg",
    services: [
      {
        id: "eyebrow-threading",
        name: "Eyebrow Threading",
        category: "Eyebrow & Beauty",
        description: "Precision threading to shape and define your brows for a clean, polished look.",
        image: "/images/services/eyebrow-threading.jpg",
        fallbackImage:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        alt: "Close-up beauty photography showing precision eyebrow threading in a luxury salon setting",
        tag: "Popular",
      },
      {
        id: "eyebrow-beautification",
        name: "Eyebrow Beautification",
        category: "Eyebrow & Beauty",
        description: "Enhance your natural brow shape with detailed grooming and finishing.",
        image:
          "https://images.unsplash.com/photo-1597225244660-1cd128c64284?auto=format&fit=crop&w=800&q=80",
        fallbackImage:
          "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
        alt: "Beautiful close-up of professionally shaped and groomed eyebrows",
      },
      {
        id: "eyelashes",
        name: "Eyelashes",
        category: "Eyebrow & Beauty",
        description: "Enhance your eyes with beautifully defined, fuller-looking lashes.",
        image:
          "https://images.unsplash.com/photo-1583001800475-527119754f9d?auto=format&fit=crop&w=800&q=80",
        fallbackImage:
          "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
        alt: "Realistic close-up beauty image showing professional eyelash treatment and lashes",
        tag: "Client Favorite",
      },
      {
        id: "tanning-beauty",
        name: "Tanning",
        category: "Eyebrow & Beauty",
        description: "Achieve a warm, radiant and beautifully even-looking glow.",
        image:
          "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
        fallbackImage:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
        alt: "Elegant professional tanning and bronzing beauty image showing healthy glowing skin",
      },
      {
        id: "skincare-beauty",
        name: "Skin Care",
        category: "Eyebrow & Beauty",
        description: "Refresh and nourish your skin with personalized professional care.",
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
        fallbackImage:
          "https://images.unsplash.com/photo-1512290900672-1f5076eb423f?auto=format&fit=crop&w=800&q=80",
        alt: "Luxury facial and skincare treatment image showing professional applying skincare to client",
      },
    ],
  },
  {
    id: "skin-care",
    name: "Skin Care & Facials",
    subtitle: "Customized clinical facials, deep hydration & radiant skin rejuvenation",
    coverImage: "/images/services/skincare-facial.jpg",
    services: [
      {
        id: "facials",
        name: "Facials",
        category: "Skin Care & Facials",
        description: "Deep cleansing and nourishing facial care for fresh, radiant-looking skin.",
        image: "/images/services/skincare-facial.jpg",
        fallbackImage: "/images/salon/salon-reception.jpg",
        alt: "Luxury facial treatment photograph showing professional facial being performed",
        tag: "Rejuvenating",
      },
      {
        id: "skincare-facial",
        name: "Skin Care",
        category: "Skin Care & Facials",
        description: "Customized skincare designed around your skin’s specific needs.",
        image: "/images/services/skincare-facial.jpg",
        fallbackImage: "/images/salon/salon-reception.jpg",
        alt: "Premium skincare treatment image with clean relaxing salon atmosphere",
      },
      {
        id: "tanning-skin",
        name: "Tanning",
        category: "Skin Care & Facials",
        description: "A radiant, even-looking glow with a professional tanning experience.",
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
        fallbackImage:
          "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
        alt: "Sophisticated glowing-skin tanning and bronzing professional treatment image",
      },
    ],
  },
  {
    id: "bridal-makeup",
    name: "Bridal & Makeup",
    subtitle: "High-definition bridal couture looks, occasion glam & photo-ready artistry",
    coverImage: "/images/salon/salon-makeup-studio.jpg",
    services: [
      {
        id: "bridal-services",
        name: "Bridal Services",
        category: "Bridal & Makeup",
        description: "Complete bridal beauty preparation designed for your special day in our private suite.",
        image:
          "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-makeup-studio.jpg",
        alt: "Luxurious Indian bridal beauty photograph showing bride with traditional jewelry and makeup",
        tag: "Exclusive",
      },
      {
        id: "makeup",
        name: "Makeup",
        category: "Bridal & Makeup",
        description: "Flawless makeup looks created to complement your features and occasion.",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-makeup-studio.jpg",
        alt: "High-end professional makeup artist applying makeup to client in salon studio",
      },
      {
        id: "makeup-services",
        name: "Makeup Services",
        category: "Bridal & Makeup",
        description: "Personalized makeup looks for parties, events, celebrations and photoshoots.",
        image:
          "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-makeup-studio.jpg",
        alt: "Premium close-up makeup application image showing professional eye and face makeup",
        tag: "Events & Party",
      },
    ],
  },
  {
    id: "hands-feet",
    name: "Hands & Feet",
    subtitle: "Refined nail couture, therapeutic foot soaks & revitalizing hand care",
    coverImage: "/images/salon/salon-pedicure-basin.jpg",
    services: [
      {
        id: "manicure",
        name: "Manicure",
        category: "Hands & Feet",
        description: "Clean, shaped and beautifully finished nails with professional care.",
        image:
          "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-pedicure-basin.jpg",
        alt: "Luxury salon manicure photograph showing beautifully groomed hands and polished nails",
        tag: "Self-Care",
      },
      {
        id: "pedicure",
        name: "Pedicure",
        category: "Hands & Feet",
        description: "Relaxing foot care designed to leave your feet feeling fresh and refreshed on our walnut deck.",
        image:
          "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-pedicure-basin.jpg",
        alt: "Premium spa pedicure photograph showing foot care in our modern salon",
        tag: "Relaxation",
      },
    ],
  },
  {
    id: "grooming",
    name: "Grooming",
    subtitle: "Modern tailored haircuts, traditional clean shaves, blowouts & skin care",
    coverImage: "/images/services/grooming-shave.jpg",
    services: [
      {
        id: "shaving",
        name: "Shaving",
        category: "Grooming",
        description: "Enjoy a smooth, clean shave with professional attention to detail.",
        image: "/images/services/grooming-shave.jpg",
        fallbackImage: "/images/salon/salon-styling-wash.jpg",
        alt: "Professional close-up barber and salon photograph showing clean shaving treatment",
        tag: "Classic",
      },
      {
        id: "haircut",
        name: "Haircut",
        category: "Grooming",
        description: "Modern and classic haircuts tailored to your personal style.",
        image:
          "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-styling-wash.jpg",
        alt: "Premium salon photograph showing a stylist professionally cutting hair",
        tag: "Signature",
      },
      {
        id: "blowouts",
        name: "Blowouts",
        category: "Grooming",
        description: "Smooth, polished and voluminous hair finished with professional styling.",
        image:
          "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-styling-wash.jpg",
        alt: "Beautiful salon photograph showing stylist creating smooth voluminous blowout",
      },
      {
        id: "body-waxing",
        name: "Body Waxing",
        category: "Grooming",
        description: "Professional waxing care for smooth, clean and comfortable-looking skin.",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        fallbackImage: "/images/salon/salon-pedicure-basin.jpg",
        alt: "Tasteful professional salon waxing care focused on gentle skincare process",
      },
    ],
  },
];

export function OurServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Flatten all services
  const allServices = useMemo(() => {
    return SERVICE_CATEGORIES.flatMap((c) => c.services);
  }, []);

  // Filtered services
  const filteredServices = useMemo(() => {
    let list = allServices;
    if (activeCategory !== "all") {
      list = list.filter((s) => {
        const cat = SERVICE_CATEGORIES.find((c) => c.id === activeCategory);
        return cat ? s.category === cat.name : true;
      });
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [allServices, activeCategory, searchQuery]);

  const getBookingUrl = (serviceName: string) => {
    const text = encodeURIComponent(
      `Hello Habib's Glam Studio, I would like to book an appointment for "${serviceName}".`
    );
    return `${WHATSAPP_BASE}?text=${text}`;
  };

  return (
    <section
      id="services"
      className="scroll-mt-16 bg-[#FFFDFC] py-20 text-[#191716] sm:py-32"
      aria-label="Our Services"
    >
      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
        {/* Section Intro */}
        <div className="border-b border-[#DCCFC0] pb-12 sm:pb-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#9E1F2D]">
                <span className="h-px w-10 bg-[#9E1F2D]" /> Our Services
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.08] text-[#191716] sm:text-6xl lg:text-7xl">
                Beauty, grooming and self-care,{" "}
                <span className="italic text-[#9E1F2D]">thoughtfully designed</span> for you.
              </h2>
              <p className="mt-6 text-base font-light leading-relaxed text-[#75685D] sm:text-lg">
                From precision beauty treatments to professional hair, makeup, skincare and grooming
                services, Habib’s Glam Studio brings everything together in one luxurious salon
                experience.
              </p>
            </div>

            {/* Quick highlights */}
            <div className="flex flex-wrap items-center gap-6 lg:flex-col lg:items-end lg:gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#9E1F2D]/30 bg-[#9E1F2D]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#9E1F2D]">
                <Sparkles className="size-3.5 text-[#9E1F2D]" /> 24 Bespoke Treatments
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#75685D]">
                Unisex Studio • Sangalpura Road, Gurdaspur
              </p>
            </div>
          </div>

          {/* Six Category Overview Cards */}
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {SERVICE_CATEGORIES.map((cat, idx) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(isSelected ? "all" : cat.id);
                  }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-[#9E1F2D] bg-[#F8F1E7] shadow-md ring-2 ring-[#9E1F2D]/20"
                      : "border-[#DCCFC0] bg-[#FFFDFC] hover:border-[#9E1F2D]/50 hover:bg-[#F8F1E7]/50"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#EFE2D2]">
                    <img
                      src={cat.coverImage}
                      alt={cat.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/images/salon/salon-reception.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#FFFDFC]">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="font-display text-base font-semibold text-[#191716] group-hover:text-[#9E1F2D] transition-colors">
                      {cat.name}
                    </p>
                    <p className="mt-1 text-[0.72rem] text-[#75685D] line-clamp-1">
                      {cat.services.length} services
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls: Filter Tabs & Search */}
          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Filter Tabs */}
            <div
              className="no-scrollbar -mx-5 flex items-center gap-2 overflow-x-auto px-5 py-1 sm:mx-0 sm:flex-wrap sm:px-0"
              role="tablist"
              aria-label="Filter services"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === "all"}
                onClick={() => setActiveCategory("all")}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.14em] transition-all duration-300 ${
                  activeCategory === "all"
                    ? "bg-[#9E1F2D] text-[#FFFDFC] font-semibold shadow-sm"
                    : "border border-[#DCCFC0] bg-[#FFFDFC] text-[#75685D] hover:border-[#9E1F2D] hover:text-[#191716]"
                }`}
              >
                All Services
                <span
                  className={`rounded-full px-2 py-0.5 text-[0.65rem] ${
                    activeCategory === "all"
                      ? "bg-white/20 text-[#FFFDFC]"
                      : "bg-[#EFE2D2] text-[#75685D]"
                  }`}
                >
                  {allServices.length}
                </span>
              </button>

              {SERVICE_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.14em] transition-all duration-300 ${
                      isSelected
                        ? "bg-[#9E1F2D] text-[#FFFDFC] font-semibold shadow-sm"
                        : "border border-[#DCCFC0] bg-[#FFFDFC] text-[#75685D] hover:border-[#9E1F2D] hover:text-[#191716]"
                    }`}
                  >
                    {cat.name}
                    <span
                      className={`rounded-full px-2 py-0.5 text-[0.65rem] ${
                        isSelected
                          ? "bg-white/20 text-[#FFFDFC]"
                          : "bg-[#EFE2D2] text-[#75685D]"
                      }`}
                    >
                      {cat.services.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full sm:max-w-xs">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#75685D]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treatments..."
                className="w-full rounded-full border border-[#DCCFC0] bg-[#FFFDFC] py-2.5 pl-10 pr-9 text-xs text-[#191716] placeholder:text-[#75685D] focus:border-[#9E1F2D] focus:outline-none focus:ring-1 focus:ring-[#9E1F2D]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#75685D] hover:text-[#191716]"
                  aria-label="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Services Grid Content */}
        {filteredServices.length === 0 ? (
          <div className="py-24 text-center">
            <SlidersHorizontal className="mx-auto size-12 text-[#9E1F2D]/40" />
            <p className="mt-4 font-display text-2xl text-[#191716]">No matching services found</p>
            <p className="mt-2 text-sm text-[#75685D]">
              Try searching with a different term or reset your category filter.
            </p>
            <Button
              variant="salonOutline"
              size="salon"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-6"
            >
              Reset Filters
            </Button>
          </div>
        ) : activeCategory === "all" && !searchQuery.trim() ? (
          // Grouped by Category with headers
          <div className="space-y-20 pt-14">
            {SERVICE_CATEGORIES.map((cat, catIdx) => (
              <div key={cat.id} className="space-y-8">
                {/* Category Header */}
                <div className="flex flex-col justify-between gap-2 border-b border-[#DCCFC0] pb-4 sm:flex-row sm:items-baseline">
                  <div>
                    <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[#9E1F2D] font-medium">
                      Category 0{catIdx + 1}
                    </span>
                    <h3 className="mt-1 font-display text-3xl sm:text-4xl text-[#191716]">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#75685D]">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {cat.services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onSelect={() => setSelectedService(service)}
                      bookingUrl={getBookingUrl(service.name)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Filtered Grid View
          <div className="pt-12">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-[#9E1F2D] font-medium">
                Showing {filteredServices.length}{" "}
                {filteredServices.length === 1 ? "Service" : "Services"}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onSelect={() => setSelectedService(service)}
                  bookingUrl={getBookingUrl(service.name)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Booking Callout Banner */}
        <div className="mt-20 rounded-3xl border border-[#DCCFC0] bg-gradient-to-br from-[#F8F1E7] via-[#FFFDFC] to-[#EFE2D2] p-8 text-center sm:p-12 lg:p-16 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#9E1F2D]/30 bg-[#9E1F2D]/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#9E1F2D] font-medium">
            <Sparkles className="size-3.5 text-[#9E1F2D]" /> Personalized Consultations
          </span>
          <h3 className="mx-auto mt-5 max-w-2xl font-display text-3xl leading-snug sm:text-5xl text-[#191716]">
            Looking for a customized beauty package or personalized bridal consultation?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-[#75685D] sm:text-base">
            Our expert unisex stylists and beauty therapists in Gurdaspur are ready to guide you.
            Connect directly on WhatsApp or call our reception desk for appointment availability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="salon" size="salon">
              <a href={WHATSAPP_BASE} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> Enquire on WhatsApp
              </a>
            </Button>
            <Button asChild variant="salonOutline" size="salon">
              <a href={PHONE_HREF}>
                <Phone className="size-4" /> Call 075268 40100
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#191716]/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={selectedService.name}
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-[#DCCFC0] bg-[#FFFDFC] p-6 text-[#191716] shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-[#DCCFC0] bg-[#FFFDFC] p-2 text-[#75685D] transition-colors hover:border-[#9E1F2D] hover:text-[#9E1F2D]"
              aria-label="Close service modal"
            >
              <X className="size-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#DCCFC0]">
              <img
                src={selectedService.image}
                alt={selectedService.alt}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = selectedService.fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-[#9E1F2D] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#FFFDFC]">
                  {selectedService.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="mt-6">
              <h4 className="font-display text-3xl sm:text-4xl text-[#191716]">
                {selectedService.name}
              </h4>
              <p className="mt-3 text-sm font-light leading-relaxed text-[#75685D] sm:text-base">
                {selectedService.description}
              </p>

              <div className="mt-6 rounded-2xl border border-[#DCCFC0] bg-[#F8F1E7] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#9E1F2D] font-medium">
                  The Habib’s Glam Studio Standard
                </p>
                <ul className="mt-3 space-y-2 text-xs text-[#191716]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#9E1F2D]" /> Personalized consultation
                    tailored to your style
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#9E1F2D]" /> Premium professional salon
                    products & hygienic care
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#9E1F2D]" /> Experienced unisex stylists &
                    beauty therapists
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="salon" size="salon" className="flex-1">
                  <a
                    href={getBookingUrl(selectedService.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="size-4" /> Book on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="salonOutline" size="salon">
                  <a href={PHONE_HREF} className="flex items-center justify-center gap-2">
                    <Phone className="size-4" /> Call Studio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/**
 * Individual Visual Service Card
 */
function ServiceCard({
  service,
  onSelect,
  bookingUrl,
}: {
  service: ServiceItem;
  onSelect: () => void;
  bookingUrl: string;
}) {
  const [imgSrc, setImgSrc] = useState(service.image);

  return (
    <article
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DCCFC0] bg-[#FFFDFC] p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#9E1F2D]/60 hover:shadow-[0_12px_30px_-6px_rgba(158,31,45,0.12)]"
    >
      <div>
        {/* Top Service Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#DCCFC0] bg-[#EFE2D2]">
          <img
            src={imgSrc}
            alt={service.alt}
            loading="lazy"
            decoding="async"
            width={600}
            height={450}
            onError={() => setImgSrc(service.fallbackImage)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-50" />

          {/* Tag badge if any */}
          {service.tag && (
            <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-[#9E1F2D] px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-[#FFFDFC] shadow-sm">
              {service.tag}
            </span>
          )}

          {/* Quick Preview trigger */}
          <button
            type="button"
            onClick={onSelect}
            className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full border border-white/30 bg-[#FFFDFC]/90 text-[#191716] opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-[#9E1F2D] hover:text-[#FFFDFC] group-hover:opacity-100"
            aria-label={`Preview ${service.name}`}
            title="Quick view"
          >
            <Eye className="size-3.5" />
          </button>
        </div>

        {/* Content Section */}
        <div className="mt-5 space-y-2">
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#9E1F2D] font-medium">
            {service.category}
          </span>

          <h3 className="font-display text-2xl text-[#191716] transition-colors duration-300 group-hover:text-[#9E1F2D]">
            {service.name}
          </h3>

          <p className="line-clamp-2 text-xs font-light leading-relaxed text-[#75685D] sm:text-[0.82rem]">
            {service.description}
          </p>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-[#DCCFC0] pt-4">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#9E1F2D] transition-all duration-300 hover:text-[#821823]"
        >
          <span>Book Now</span>
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1.5" />
        </a>

        <button
          type="button"
          onClick={onSelect}
          className="text-xs uppercase tracking-[0.12em] text-[#75685D] transition-colors hover:text-[#191716]"
        >
          Details
        </button>
      </div>
    </article>
  );
}
