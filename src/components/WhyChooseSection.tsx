import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Award, UserCheck, Zap, ShieldCheck } from 'lucide-react';

const reasons = [
  { icon: Target, en: 'Accurate Predictions', ta: 'துல்லியமான கணிப்புகள்', descEn: 'Precise readings backed by deep astrological knowledge.', descTa: 'ஆழமான ஜோதிட அறிவால் ஆதரிக்கப்படும் துல்லியமான கணிப்புகள்.' },
  { icon: Award, en: 'Certified Astrologer', ta: 'சான்றிதழ் பெற்ற ஜோதிடர்', descEn: 'Multiple certifications from reputed institutions.', descTa: 'புகழ்பெற்ற நிறுவனங்களிடமிருந்து பல சான்றிதழ்கள்.' },
  { icon: UserCheck, en: 'Personal Attention', ta: 'தனிப்பட்ட கவனிப்பு', descEn: 'Every client gets dedicated time and personalized guidance.', descTa: 'ஒவ்வொரு வாடிக்கையாளருக்கும் தனிப்பட்ட நேரம் மற்றும் வழிகாட்டல்.' },
  { icon: Zap, en: 'Fast Response', ta: 'விரைவான பதில்', descEn: 'Quick consultations and timely follow-ups.', descTa: 'விரைவான ஆலோசனைகள் மற்றும் சரியான நேரத்தில் பின்தொடர்தல்.' },
  { icon: ShieldCheck, en: 'Trusted by Clients', ta: 'வாடிக்கையாளர்களின் நம்பிக்கை', descEn: 'Hundreds of satisfied clients across India and abroad.', descTa: 'இந்தியா மற்றும் வெளிநாடுகளில் நூற்றுக்கணக்கான திருப்தியான வாடிக்கையாளர்கள்.' },
];

const WhyChooseSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-muted/50">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          {t('Why Choose Sri Kanaka Astrologer?', 'ஸ்ரீ கனக ஜோதிடரை ஏன் தேர்வு செய்ய வேண்டும்?')}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center shadow-card">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 text-sm font-bold text-foreground">{t(r.en, r.ta)}</h3>
                <p className="text-xs text-muted-foreground">{t(r.descEn, r.descTa)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
