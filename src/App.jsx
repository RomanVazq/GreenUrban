import Navbar from './components/layout/Navbar';
import Hero from './features/Hero/Hero';
import Benefits from './features/Benefits/Benefits'; 
import Model from './features/Model/Model';
import Services from './features/Services/Services';      
import About from './features/About/About';
import './index.css';
function App() {
  return (
    <main className="antialiased min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Model />
      <About />
      
      <footer className="bg-gradient-to-r from-dark-olive to-dark-olive/95 py-16 text-center border-t border-leaf-green/20">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <p className="text-2xl font-bold text-cream tracking-tight mb-2">
              GREEN <span className="text-leaf-green">URBAN</span>
            </p>
            <p className="text-cream/60 text-sm tracking-wide">Agricultura Urbana Sustentable</p>
          </div>
          
          <div className="h-0.5 w-16 bg-gradient-to-r from-leaf-green to-sage-green mx-auto mb-8 rounded-full"></div>
          
          <p className="text-cream/70 font-medium tracking-widest text-xs mb-6 uppercase">
            Transformando espacios urbanos en huertos productivos
          </p>
          
          <p className="text-cream/50 font-bold tracking-widest text-xs uppercase">
            Green Urban • 2026 • Jalisco, México
          </p>
          
          <div className="mt-8 pt-8 border-t border-cream/10 text-cream/40 text-xs tracking-widest">
            <p>© 2026 Green Urban Horticulture Services. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;