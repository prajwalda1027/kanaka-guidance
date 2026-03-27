import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, CalendarCheck, Star } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/918867713329?text=Hello%20Sri%20Kanaka%20Astrologer%2C%20I%20need%20astrology%20consultation.';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="gradient-hero relative overflow-hidden pt-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16 text-center md:py-28">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 shadow-card">
          <Star className="h-4 w-4 text-accent" fill="currentColor" />
          <span className="text-xs font-medium text-muted-foreground">
            {t('Trusted by 1000+ Clients', '1000+ வாடிக்கையாளர்களின் நம்பிக்கை')}
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-4 max-w-3xl text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          {t(
            'Accurate Astrology Guidance for Your Life',
            'உங்கள் வாழ்க்கைக்கு துல்லியமான ஜோதிட வழிகாட்டல்'
          )}
        </h1>

        {/* Subtext */}
        <p className="mb-4 text-base text-muted-foreground sm:text-lg">
          {t(
            'Love • Marriage • Career • Business • Health • Future Predictions',
            'காதல் • திருமணம் • தொழில் • வணிகம் • ஆரோக்கியம் • எதிர்கால கணிப்புகள்'
          )}
        </p>

        {/* Phone */}
        <p className="mb-8 text-lg font-bold text-primary sm:text-xl">
          📞 +91 8867713329
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            {t('WhatsApp Now', 'WhatsApp இப்போது')}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:scale-105"
          >
            <CalendarCheck className="h-5 w-5" />
            {t('Book Consultation', 'ஆலோசனை பெறுங்கள்')}
          </a>
        </div>

        {/* Decorative stars */}
        <div className="pointer-events-none absolute -top-10 left-10 text-6xl opacity-[0.04]">✦</div>
        <div className="pointer-events-none absolute bottom-10 right-10 text-8xl opacity-[0.04]">✧</div>
      </div>
    </section>
  );
};

export default HeroSection;
