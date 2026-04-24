import logo from '../../assets/logo.png';
const Hero = () => {
  return (
    <section id='inicio' className="relative w-full min-h-screen bg-gradient-to-br from-cream via-cream to-cream/80 flex items-center px-6 overflow-hidden py-20">
      {/* Decorative circles background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-leaf-green/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage-green/5 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Columna Texto */}
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-leaf-green/20 to-leaf-green/10 text-dark-olive text-xs font-bold uppercase tracking-widest border border-leaf-green/20 hover:border-leaf-green/50 transition-all">
            ✨ #ConcienciaAmbiental
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-dark-olive leading-tight tracking-tight">
            Haz tu propia <br />
            <span className="bg-gradient-to-r from-leaf-green to-sage-green bg-clip-text text-transparent italic font-serif" >hortaliza</span>
          </h1>

          <p className="text-lg md:text-xl text-dark-olive/75 max-w-md leading-relaxed tracking-wide font-medium">
            Alimentos frescos que superan la calidad de la producción en masa. Controla lo que comes.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group bg-dark-olive text-cream px-8 py-4 rounded-2xl font-bold hover:bg-leaf-green hover:shadow-2xl hover:shadow-leaf-green/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Empezar ahora</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="bg-transparent border-2 border-dark-olive text-dark-olive px-8 py-4 rounded-2xl font-bold hover:bg-dark-olive/5 hover:border-leaf-green hover:text-leaf-green transition-all duration-300">
              Ver más
            </button>
          </div>
        </div>

        {/* Columna Imagen */}
        <div className="relative h-[500px] md:h-[600px] w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-olive to-dark-olive/90 rounded-[3rem] shadow-2xl hover:shadow-3xl rotate-2 flex items-center justify-center overflow-hidden transition-all duration-500 group hover:rotate-1">
             {/* Simulación de imagen de hortaliza */}
             <div className="text-9xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500"><img src={logo} alt="Hortaliza" className="filter drop-shadow-2xl" /></div>
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-leaf-green/20 rounded-full blur-2xl"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;