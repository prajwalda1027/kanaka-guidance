import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', en: 'Home', ta: 'முகப்பு' },
    { href: '#about', en: 'About', ta: 'பற்றி' },
    { href: '#certifications', en: 'Certifications', ta: 'சான்றிதழ்கள்' },
    { href: '#services', en: 'Services', ta: 'சேவைகள்' },
    { href: '#testimonials', en: 'Testimonials', ta: 'மதிப்புரைகள்' },
    { href: '#contact', en: 'Contact', ta: 'தொடர்பு' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#home" className="flex flex-col">
          <span className="text-lg font-bold text-foreground">
            {t('Sri Kanaka Astrologer', 'ஸ்ரீ கனக ஜோதிடர்')}
          </span>
          <span className="text-xs text-muted-foreground">
            {t('M. Kanakadurga', 'எம். கனகதுர்கா')}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t(item.en, item.ta)}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
            className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
          >
            {lang === 'en' ? 'தமிழ்' : 'EN'}
          </button>

          {/* Phone */}
          <a
            href="tel:+918867713329"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105 sm:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            +91 8867713329
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="text-foreground md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t(item.en, item.ta)}
              </a>
            ))}
            <a
              href="tel:+918867713329"
              className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" />
              +91 8867713329
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
