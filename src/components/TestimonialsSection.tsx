import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Priya S.', en: 'The marriage compatibility reading was incredibly accurate. Sri Kanaka Astrologer helped us understand our strengths as a couple. Highly recommended!', ta: 'திருமண பொருத்த கணிப்பு நம்பமுடியாத அளவு துல்லியமாக இருந்தது. ஸ்ரீ கனக ஜோதிடர் ஒரு ஜோடியாக எங்கள் பலங்களை புரிந்துகொள்ள உதவினார். மிகவும் பரிந்துரைக்கிறேன்!', stars: 5 },
  { name: 'Rajesh K.', en: 'I was struggling with my career. After the consultation, I got clarity on the right timing for my job change. Within 3 months, I got my dream job!', ta: 'நான் என் தொழிலில் போராடிக் கொண்டிருந்தேன். ஆலோசனைக்குப் பிறகு, வேலை மாற்றத்திற்கான சரியான நேரத்தைப் பற்றிய தெளிவு கிடைத்தது. 3 மாதங்களுக்குள் எனது கனவு வேலை கிடைத்தது!', stars: 5 },
  { name: 'Meena R.', en: 'Very professional and caring. The health astrology session gave me important insights. The remedies suggested were simple and effective.', ta: 'மிகவும் தொழில்முறை மற்றும் அக்கறை. ஆரோக்கிய ஜோதிட அமர்வு எனக்கு முக்கியமான நுண்ணறிவுகளை அளித்தது. பரிந்துரைக்கப்பட்ட பரிகாரங்கள் எளிமையானவை மற்றும் பயனுள்ளவை.', stars: 5 },
  { name: 'Suresh M.', en: 'The Vastu consultation completely transformed the energy in my office. Business has improved significantly. Thank you, Kanakadurga ma\'am!', ta: 'வாஸ்து ஆலோசனை என் அலுவலகத்தில் ஆற்றலை முழுமையாக மாற்றியது. வணிகம் கணிசமாக மேம்பட்டுள்ளது. நன்றி, கனகதுர்கா மேடம்!', stars: 5 },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <span className="inline-block rounded-full bg-accent/20 px-4 py-1 text-xs font-semibold text-accent-foreground">
            {t('Testimonials', 'மதிப்புரைகள்')}
          </span>
        </div>
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          {t('What Our Clients Say', 'எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்')}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((review, i) => (
            <div key={i} className="rounded-xl border border-border bg-background p-6 shadow-card">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-accent" fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 text-sm text-muted-foreground italic">"{t(review.en, review.ta)}"</p>
              <p className="text-sm font-bold text-foreground">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
