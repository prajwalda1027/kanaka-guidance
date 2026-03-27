import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CertificationsSection from '@/components/CertificationsSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default Index;
