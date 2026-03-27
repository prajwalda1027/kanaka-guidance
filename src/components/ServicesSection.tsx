import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Users, Briefcase, TrendingUp, Sun, Home, Activity, DollarSign, Plane, MessageCircle } from 'lucide-react';

const WHATSAPP_BASE = 'https://wa.me/918867713329?text=';

const services = [
  { icon: Heart, en: 'Love Problem Solution', ta: 'காதல் பிரச்சனை தீர்வு', descEn: 'Expert astrological guidance for love-related challenges and relationship harmony.', descTa: 'காதல் சார்ந்த சிக்கல்கள் மற்றும் உறவு நல்லிணக்கத்திற்கான நிபுணத்துவ ஜோதிட வழிகாட்டல்.' },
  { icon: Users, en: 'Marriage Compatibility', ta: 'திருமண பொருத்தம்', descEn: 'Kundali matching and marriage compatibility analysis for a successful union.', descTa: 'வெற்றிகரமான திருமணத்திற்கான குண்டலி பொருத்தம் & திருமண பொருத்த பகுப்பாய்வு.' },
  { icon: Briefcase, en: 'Career Guidance', ta: 'தொழில் வழிகாட்டல்', descEn: 'Discover the right career path aligned with your planetary positions.', descTa: 'உங்கள் கிரக நிலைகளுக்கு ஏற்ற சரியான தொழில் பாதையை கண்டறியுங்கள்.' },
  { icon: TrendingUp, en: 'Business Growth', ta: 'வணிக வளர்ச்சி', descEn: 'Astrological strategies for business growth, timing, and investment decisions.', descTa: 'வணிக வளர்ச்சி, நேரம் மற்றும் முதலீட்டு முடிவுகளுக்கான ஜோதிட உத்திகள்.' },
  { icon: Sun, en: 'Horoscope Reading', ta: 'ஜாதக வாசிப்பு', descEn: 'Detailed birth chart analysis revealing your life path and potential.', descTa: 'உங்கள் வாழ்க்கை பாதை மற்றும் திறனை வெளிப்படுத்தும் விரிவான ஜாதக பகுப்பாய்வு.' },
  { icon: Home, en: 'Vastu Consultation', ta: 'வாஸ்து ஆலோசனை', descEn: 'Vastu Shastra consultation for home, office, and commercial spaces.', descTa: 'வீடு, அலுவலகம் மற்றும் வணிக இடங்களுக்கான வாஸ்து சாஸ்திர ஆலோசனை.' },
  { icon: Activity, en: 'Health Astrology', ta: 'ஆரோக்கிய ஜோதிடம்', descEn: 'Medical astrology insights for health awareness and preventive care.', descTa: 'ஆரோக்கிய விழிப்புணர்வு மற்றும் தடுப்பு பராமரிப்புக்கான மருத்துவ ஜோதிட நுண்ணறிவுகள்.' },
  { icon: DollarSign, en: 'Financial Solutions', ta: 'நிதி தீர்வுகள்', descEn: 'Overcome financial challenges with astrological remedies and timing.', descTa: 'ஜோதிட பரிகாரங்கள் மற்றும் நேரத்துடன் நிதி சவால்களை சமாளிக்கவும்.' },
  { icon: Plane, en: 'Foreign Travel Astrology', ta: 'வெளிநாட்டு பயண ஜோதிடம்', descEn: 'Know the right time for overseas travel, settlement, and opportunities.', descTa: 'வெளிநாட்டு பயணம், குடியேற்றம் மற்றும் வாய்ப்புகளுக்கான சரியான நேரத்தை அறிக.' },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
            {t('Our Services', 'எங்கள் சேவைகள்')}
          </span>
        </div>
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          {t('Astrology Services We Offer', 'நாங்கள் வழங்கும் ஜோதிட சேவைகள்')}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            const waMsg = encodeURIComponent(`Hello Sri Kanaka Astrologer, I'm interested in ${s.en}. Please guide me.`);
            return (
              <div
                key={i}
                className="group flex flex-col rounded-xl border border-border bg-background p-6 shadow-card transition-all hover:shadow-elevated"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{t(s.en, s.ta)}</h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{t(s.descEn, s.descTa)}</p>
                <a
                  href={WHATSAPP_BASE + waMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-whatsapp transition-colors hover:underline"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  {t('Chat on WhatsApp', 'WhatsApp இல் அரட்டை')}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
