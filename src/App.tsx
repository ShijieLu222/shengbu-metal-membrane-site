import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProductGallery } from './components/ProductGallery';
import { ServiceFlow } from './components/ServiceFlow';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <HeroSection />
        <ProductGallery />
        <AboutSection />
        <ServiceFlow />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
