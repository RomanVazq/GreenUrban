import Navbar from './components/layout/Navbar';
import Hero from './features/Hero/Hero';
import Services from './features/Services/Services';
import About from './features/About/About';
import './index.css';

function App() {
  return (
    <main className="antialiased min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Services />
      <About />
      
      {/* Footer sencillo */}
      <footer className="bg-dark-olive py-10 text-center text-cream/60 text-sm">
        <p>© 2026 Green Urban - Horticulture Services</p>
        <p className="mt-2 italic">Amayia G. • Rafael I. • Irene C. • Karla S.</p>
      </footer>
    </main>
  );
}

export default App;