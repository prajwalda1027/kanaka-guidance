import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/30 px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="mb-2 text-lg font-bold text-foreground">
            {t('Sri Kanaka Astrologer', 'ஸ்ரீ கனக ஜோதிடர்')}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t(
              'Trusted Astrology Guidance for Life',
              'உங்கள் வாழ்க்கைக்கு நம்பிக்கையான ஜோதிட வழிகாட்டி'
            )}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-bold text-foreground">{t('Contact', 'தொடர்பு')}</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="tel:+918867713329" className="inline-flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" /> +91 8867713329
            </a>
            <a
              href="https://wa.me/918867713329"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-whatsapp"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {t('Bangalore & Tamil Nadu, India', 'பெங்களூரு & தமிழ்நாடு, இந்தியா')}
            </span>
          </div>
        </div>

        {/* Language */}
        <div>
          <h4 className="mb-3 text-sm font-bold text-foreground">{t('Language', 'மொழி')}</h4>
          <div className="flex gap-2">
            <button
              onClick={() => setLang('en')}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${lang === 'en' ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:bg-muted'}`}
            >
              English
            </button>
            <button
              onClick={() => setLang('ta')}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${lang === 'ta' ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:bg-muted'}`}
            >
              தமிழ்
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sri Kanaka Astrologer. {t('All rights reserved.', 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.')}
      </div>
    </footer>
  );
};

export default Footer;
