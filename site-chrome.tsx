import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, Menu, X } from "lucide-react";

/* Scroll-reveal wrapper (IntersectionObserver) */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out will-change-transform ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
import fineledLogo from "@/assets/fineled-logo.png.asset.json";
import { useLang } from "@/lib/i18n";

/* -------- Shared primitives -------- */

export function Btn({
  children,
  variant = "primary",
  href,
  to,
  className = "",
  onClick,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost-light";
  href?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 h-14 px-9 rounded-[14px] text-[15px] font-medium tracking-tight transition-all duration-300 will-change-transform";
  const styles = {
    primary:
      "bg-secondary text-white hover:bg-primary shadow-[0_1px_2px_rgba(86,28,36,0.06)] hover:shadow-[0_18px_40px_rgba(86,28,36,0.18)]",
    secondary:
      "bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-white",
    "ghost-light":
      "bg-transparent text-white border border-white/40 hover:bg-white hover:text-primary",
  }[variant];
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href ?? "#"} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

/* -------- Nav -------- */

export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

function BrandLogo({ onDark, className = "" }: { onDark: boolean; className?: string }) {
  const maskStyle = {
    WebkitMask: `url(${fineledLogo.url}) center / contain no-repeat`,
    mask: `url(${fineledLogo.url}) center / contain no-repeat`,
  };
  return (
    <span className={`relative block h-7 lg:h-8 aspect-[1315/265] shrink-0 ${className}`}>
      <img
        src={fineledLogo.url}
        alt="FineLED"
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-200 ${
          onDark ? "opacity-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]" : "opacity-0"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute inset-0 bg-primary transition-opacity duration-200 ${
          onDark ? "opacity-0" : "opacity-100"
        }`}
        style={maskStyle}
      />
    </span>
  );
}

export function Nav({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onDark = transparentOnTop && !scrolled;
  const solid = !transparentOnTop || scrolled;
  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[color:var(--ivory)] backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_rgba(86,28,36,0.04)]"
          : "bg-gradient-to-b from-black/40 via-black/15 to-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="container-editorial flex h-[72px] lg:h-[80px] items-center justify-between gap-6">
        <Link to="/" aria-label="FineLED home" className="flex items-center gap-2.5 min-w-0">
          <BrandLogo onDark={onDark} />
        </Link>
        <nav className="hidden lg:flex items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`text-[13px] font-medium tracking-wide transition-colors duration-500 ${
                onDark ? "text-white/85 hover:text-white" : "text-foreground/75 hover:text-primary"
              }`}
              activeProps={{
                className: `text-[13px] font-medium tracking-wide ${
                  onDark ? "!text-white" : "!text-primary"
                }`,
              }}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className={`inline-flex items-center justify-center h-9 min-w-[48px] px-3.5 rounded-full text-[11px] font-semibold tracking-[0.25em] uppercase transition-all duration-500 ${
              onDark
                ? "bg-white/15 border border-white/50 text-white shadow-[0_0_0_3px_rgba(255,255,255,0.06)] hover:bg-white hover:text-primary hover:shadow-[0_0_0_5px_rgba(255,255,255,0.12)]"
                : "bg-primary/10 border border-primary/40 text-primary shadow-[0_0_0_3px_rgba(86,28,36,0.06)] hover:bg-primary hover:text-white hover:shadow-[0_0_0_5px_rgba(86,28,36,0.10)]"
            }`}
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>

          <Link
            to="/quote"
            className={`inline-flex items-center gap-2 h-10 px-5 rounded-full text-[13px] font-medium transition-all duration-500 ${
              onDark
                ? "border border-white/40 text-white hover:bg-white hover:text-primary"
                : "bg-primary text-white border border-primary hover:bg-secondary"
            }`}
          >
            {t("Get Quote")} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className={`inline-flex items-center justify-center h-9 min-w-[44px] px-3 rounded-full text-[11px] font-semibold tracking-[0.25em] uppercase transition-all ${
              onDark
                ? "bg-white/15 border border-white/50 text-white"
                : "bg-primary/10 border border-primary/40 text-primary"
            }`}
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            aria-label={t("Menu")}
            onClick={() => setOpen(true)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              onDark ? "border border-white/40 text-white" : "border border-border text-foreground"
            }`}
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-[color:var(--ivory)] animate-fade-in lg:hidden">
          <div className="container-editorial flex h-[80px] items-center justify-between">
            <BrandLogo onDark={false} className="lg:h-7" />
            <button
              aria-label={t("Close")}
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="container-editorial flex flex-col gap-5 pt-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-medium tracking-tight text-foreground"
              >
                {t(item.label)}
              </Link>
            ))}
            <Btn to="/quote" onClick={() => setOpen(false)} className="mt-8 self-start">
              {t("Get Quote")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Btn>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------- Footer -------- */

export function Footer() {
  const { t } = useLang();
  const cols: { title: string; items: { label: string; to?: string; href?: string }[] }[] = [
    {
      title: "Solutions",
      items: [
        { label: "Indoor LED", to: "/products" },
        { label: "Outdoor LED", to: "/products" },
        { label: "Creative & Curved", to: "/products" },
        { label: "Transparent", to: "/products" },
        { label: "Rental", to: "/products" },
        { label: "Control", to: "/products" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Consultation & Design", to: "/services" },
        { label: "Installation", to: "/services" },
        { label: "Content & Control", to: "/services" },
        { label: "Maintenance & Support", to: "/services" },
        { label: "Industries Served", to: "/services" },
        { label: "GCC Coverage", to: "/services" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About", to: "/about" },
        { label: "Projects", to: "/projects" },
        { label: "Contact", to: "/contact" },
        { label: "Get Quote", to: "/quote" },
      ],
    },
  ];
  return (
    <footer className="bg-primary text-white">
      <div className="container-editorial pt-[120px] pb-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <img src={fineledLogo.url} alt="FineLED" className="h-8 w-auto" />
            </div>
            <p className="mt-8 text-[15px] leading-[1.75] text-white/70 max-w-[360px]">
              {t("Premium LED display solutions, engineered and supported across the GCC for landmark architecture, retail, hospitality and infrastructure.")}
            </p>
            <form className="mt-10 max-w-[360px]" onSubmit={(e) => e.preventDefault()}>
              <label className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--taupe)]">
                {t("Mini quote")}
              </label>
              <div className="mt-3 flex items-center gap-2 border-b border-white/30 pb-3">
                <input
                  type="email"
                  placeholder={t("Your work email")}
                  className="flex-1 bg-transparent text-[15px] text-white placeholder:text-white/40 outline-none"
                />
                <button
                  type="submit"
                  className="h-9 w-9 grid place-items-center rounded-full bg-[color:var(--taupe)] text-primary hover:bg-white transition-colors"
                  aria-label={t("Send")}
                >
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </button>
              </div>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--taupe)]">
                {t(c.title)}
              </div>
              <ul className="mt-6 space-y-3">
                {c.items.map((i) => (
                  <li key={i.label}>
                    {i.to ? (
                      <Link to={i.to} className="text-[15px] text-white/80 hover:text-white">
                        {t(i.label)}
                      </Link>
                    ) : (
                      <a href={i.href ?? "#"} className="text-[15px] text-white/80 hover:text-white">
                        {t(i.label)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--taupe)]">
              {t("Reach us")}
            </div>
            <ul className="mt-6 space-y-3 text-[14px] text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {t("Dubai · Muscat")}
              </li>
              <li>
                <a href="mailto:contact@fineledscreen.com" className="hover:text-white inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" /> contact@fineledscreen.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" /> {t("24/7 Engineering Support")}
              </li>
              <li>
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 mt-2 text-[13px] font-medium text-white hover:text-[color:var(--taupe)]"
                >
                  {t("Request Proposal")} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px] text-white/50 border-t border-white/20 pt-8">
          <div>© {new Date().getFullYear()} FineLED. {t("All rights reserved.")}</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">{t("Privacy")}</a>
            <a href="#" className="hover:text-white">{t("Terms")}</a>
            <a href="#" className="hover:text-white inline-flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5" /> {t("ISO 9001 Certified")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------- Layout wrapper -------- */

export function SiteLayout({
  children,
  transparentNav = false,
}: {
  children: ReactNode;
  transparentNav?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav transparentOnTop={transparentNav} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

/* -------- Page hero (for interior pages) -------- */

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image: string;
}) {
  return (
    <section
      className="relative isolate overflow-hidden pt-[180px] pb-24 lg:pt-[240px] lg:pb-32 text-white"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(12,6,6,0.75), rgba(12,6,6,0.85)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-70 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(60% 55% at 20% 80%, rgba(109,41,50,0.5), transparent 70%)",
        }}
      />
      <div className="container-editorial relative">
        <div className="eyebrow !text-[color:var(--taupe)]">{eyebrow}</div>
        <h1 className="display-xl mt-6 text-white max-w-[900px]">{title}</h1>
        {intro && (
          <p className="mt-8 max-w-[640px] text-[18px] leading-[1.7] text-white/85">{intro}</p>
        )}
      </div>
    </section>
  );
}
