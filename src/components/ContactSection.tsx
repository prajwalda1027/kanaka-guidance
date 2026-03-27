import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, Send } from 'lucide-react';

const ContactSection = () => {
  const { lang, t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedMsg = message.trim();

    if (!trimmedName || !trimmedPhone) return;

    const waText =
      lang === 'ta'
        ? `வணக்கம் ஸ்ரீ கனக ஜோதிடர்,\n\nஎன் பெயர்: ${trimmedName}\nதொலைபேசி: ${trimmedPhone}\n${trimmedMsg ? `செய்தி: ${trimmedMsg}\n` : ''}\nஎனக்கு ஜோதிட ஆலோசனை தேவை.`
        : `Hello Sri Kanaka Astrologer,\n\nMy name is ${trimmedName}\nPhone: ${trimmedPhone}\n${trimmedMsg ? `Message: ${trimmedMsg}\n` : ''}\nI need astrology consultation.`;

    window.open(`https://wa.me/918867713329?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding gradient-warm">
      <div className="mx-auto max-w-xl">
        <div className="mb-4 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
            {t('Contact Us', 'தொடர்பு கொள்ளுங்கள்')}
          </span>
        </div>
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground sm:text-3xl">
          {t('Get Your Consultation Today', 'இன்றே உங்கள் ஆலோசனையைப் பெறுங்கள்')}
        </h2>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          {t(
            'Fill in your details and we\'ll connect with you on WhatsApp instantly.',
            'உங்கள் விவரங்களை நிரப்பவும், நாங்கள் WhatsApp இல் உடனடியாக தொடர்பு கொள்வோம்.'
          )}
        </p>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-background p-6 shadow-elevated sm:p-8">
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-foreground">
              {t('Your Name', 'உங்கள் பெயர்')} *
            </label>
            <input
              type="text"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              placeholder={t('Enter your name', 'உங்கள் பெயரை உள்ளிடவும்')}
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-foreground">
              {t('Phone Number', 'தொலைபேசி எண்')} *
            </label>
            <input
              type="tel"
              required
              maxLength={15}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-foreground">
              {t('Message (Optional)', 'செய்தி (விரும்பினால்)')}
            </label>
            <textarea
              maxLength={500}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              placeholder={t('Describe your concern...', 'உங்கள் கவலையை விவரிக்கவும்...')}
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" />
            {t('Chat on WhatsApp', 'WhatsApp இல் அரட்டை')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
