import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    { en: 'Experienced & Certified Astrologer', ta: 'அனுபவம் & சான்றிதழ் பெற்ற ஜோதிடர்' },
    { en: 'Personalized Readings for Every Client', ta: 'ஒவ்வொரு வாடிக்கையாளருக்கும் தனிப்பயன் கணிப்புகள்' },
    { en: 'Trusted by Clients Across India', ta: 'இந்தியா முழுவதும் வாடிக்கையாளர்களின் நம்பிக்கை' },
    { en: 'Focused on Accuracy & Honest Guidance', ta: 'துல்லியம் & நேர்மையான வழிகாட்டல்' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
            {t('About', 'பற்றி')}
          </span>
        </div>
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          {t('About M. Kanakadurga', 'எம். கனகதுர்கா பற்றி')}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          {t(
            'With years of dedicated practice in Vedic astrology, M. Kanakadurga provides accurate, compassionate guidance to help you navigate life\'s most important decisions. Every reading is personalized with deep analysis of planetary positions and their influence on your life.',
            'வேத ஜோதிடத்தில் பல வருட அர்ப்பணிப்பான பயிற்சியுடன், எம். கனகதுர்கா உங்கள் வாழ்க்கையின் மிக முக்கியமான முடிவுகளை வழிநடத்த துல்லியமான, அன்பான வழிகாட்டலை வழங்குகிறார். ஒவ்வொரு கணிப்பும் கிரக நிலைகளின் ஆழமான பகுப்பாய்வுடன் தனிப்பயனாக்கப்பட்டது.'
          )}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-background p-5 shadow-card">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">{t(item.en, item.ta)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
