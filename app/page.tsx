import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Service from '@/components/Service';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Service />
        <Footer />
    </div>
  );
}
