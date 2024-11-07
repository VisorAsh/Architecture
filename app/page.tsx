import { DesignGrid } from '@/components/DesignGrid';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <DesignGrid
      columns={12}
      gutter={24}
      columnColor="#6366F1"
      opacity={0.1}
    >
      {/* Votre contenu ici */}
      <div className="">
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div>
    </DesignGrid>
    // <div className="">
    //     <Navbar />
    //     <Hero />
    //     <About />
    //     <Footer />
    // </div>
  );
}
