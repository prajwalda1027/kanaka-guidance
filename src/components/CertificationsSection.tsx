import { useLanguage } from '@/contexts/LanguageContext';
import { Award } from 'lucide-react';

const certs = [
  { en: 'Jyotish Praveena', ta: 'ஜோதிஷ் பிரவீணா', org: { en: 'Indian Council of Astrological Sciences', ta: 'இந்திய ஜோதிட அறிவியல் கவுன்சில்' } },
  { en: 'Jyotish Visharada', ta: 'ஜோதிஷ் விஷாரதா', org: { en: 'Advanced Vedic Astrology', ta: 'மேம்பட்ட வேத ஜோதிடம்' } },
  { en: 'Vastu Praveena', ta: 'வாஸ்து பிரவீணா', org: { en: 'Vastu Shastra Certification', ta: 'வாஸ்து சாஸ்திர சான்றிதழ்' } },
  { en: 'International Astrology Award 2023', ta: 'சர்வதேச ஜோதிட விருது 2023', org: { en: 'International Astrology Federation', ta: 'சர்வதேச ஜோதிட கூட்டமைப்பு' } },
  { en: 'Medical Astrology Certification', ta: 'மருத்துவ ஜோதிட சான்றிதழ்', org: { en: 'Health & Astrology Institute', ta: 'ஆரோக்கிய & ஜோதிட நிறுவனம்' } },
  { en: 'Tarot Certification', ta: 'டாரட் சான்றிதழ்', org: { en: 'Certified Tarot Reader', ta: 'சான்றிதழ் பெற்ற டாரட் ரீடர்' } },
  { en: 'ALP Astrology Certification', ta: 'ALP ஜோதிட சான்றிதழ்', org: { en: 'Advanced Level Program', ta: 'மேம்பட்ட நிலை திட்டம்' } },
];

const CertificationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="section-padding bg-muted/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <span className="inline-block rounded-full bg-accent/20 px-4 py-1 text-xs font-semibold text-accent-foreground">
            {t('Certifications', 'சான்றிதழ்கள்')}
          </span>
        </div>
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          {t('Professional Certifications & Awards', 'தொழில்முறை சான்றிதழ்கள் & விருதுகள்')}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl border border-border bg-background p-6 shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{t(cert.en, cert.ta)}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{t(cert.org.en, cert.org.ta)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
