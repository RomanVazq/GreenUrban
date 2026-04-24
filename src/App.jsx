import Navbar from './components/layout/Navbar';
import Hero from './features/Hero/Hero';
import Benefits from './features/Benefits/Benefits'; 
import Model from './features/Model/Model';      
import About from './features/About/About';
import './index.css';
function App() {
  return (
    <main className="antialiased min-h-screen bg-[#F5F0E1]">
      <Navbar />
      <Hero />
      <Benefits />
      <Model />
      <About />
      
      <footer className="bg-[#485342] py-12 text-center">
        <p className="text-[#F5F0E1] font-bold tracking-widest text-sm opacity-50 uppercase">
          Green Urban • 2026 • Jalisco, México
        </p>
      </footer>
    </main>
  );
}

export default App;