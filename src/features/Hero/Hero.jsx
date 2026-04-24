import logo from '../../assets/logo.png';
const Hero = () => {
  return (
    <section id='inicio' className="relative w-full min-h-screen bg-[#F5F0E1] flex items-center px-6 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Columna Texto */}
        <div className="z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#94B086]/20 text-[#485342] text-xs font-bold uppercase tracking-widest mb-6">
            #ConcienciaAmbiental
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-[#485342] leading-[0.95] mb-2">
            Haz tu propia <br />
            <span className="text-[#94B086] italic font-serif" >hortaliza</span>
          </h1>

          <p className="text-lg md:text-xl text-[#485342]/80 max-w-md mb-10 font-medium">
            Alimentos frescos que superan la calidad de la producción en masa. Controla lo que comes.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#485342] text-[#F5F0E1] px-10 py-5 rounded-2xl font-extrabold hover:bg-[#94B086] transition-all shadow-xl">
              Empezar ahora
            </button>
          </div>
        </div>

        {/* Columna Imagen - El bloque negro/verde de tu captura */}
        <div className="relative h-[500px] md:h-[650px] w-full">
          <div className="absolute inset-0 bg-[#485342] rounded-[3rem] shadow-2xl rotate-2 flex items-center justify-center overflow-hidden">
             {/* Simulación de imagen de hortaliza */}
             <div className="text-9xl"><img src={logo} alt="Hortaliza" /></div>
             
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;