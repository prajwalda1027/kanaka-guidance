import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/918867713329?text=Hello%20Sri%20Kanaka%20Astrologer%2C%20I%20need%20astrology%20consultation."
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default FloatingWhatsApp;
