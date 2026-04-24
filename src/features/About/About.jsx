import organigrama from '../../assets/organigrama.png';

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-gradient-to-br from-cream via-white to-sage-green/5 px-6 relative">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-leaf-green/10 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Encabezado de la Sección */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-dark-olive mb-6 uppercase tracking-tight">
            Sobre <span className="bg-gradient-to-r from-leaf-green to-sage-green bg-clip-text text-transparent">Nosotros</span>
          </h2>
          <p className="text-xl text-dark-olive/75 leading-relaxed tracking-wide">
            Un equipo multidisciplinario comprometido con la soberanía alimentaria y la educación ambiental.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-leaf-green to-sage-green mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Columna Izquierda: Misión y Visión */}
          <div className="space-y-12">
            <div className="group p-8 bg-white rounded-2xl border-l-4 border-leaf-green shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-dark-olive mb-4 flex items-center gap-2">🎯 Nuestra Misión</h3>
              <p className="text-lg text-dark-olive/70 leading-relaxed tracking-wide">
                Otorgar el mejor servicio y capacitación mediante la creación de hortalizas caseras, 
                fomentando la autosuficiencia alimentaria y el cuidado del medio ambiente.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl border-l-4 border-sage-green shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-dark-olive mb-4 flex items-center gap-2">🌟 Nuestra Visión</h3>
              <p className="text-lg text-dark-olive/70 leading-relaxed tracking-wide">
                Ser una empresa referente en educación para la agricultura urbana, contribuyendo a que 
                más hogares produzcan parte de sus propios alimentos.
              </p>
            </div>

            {/* Lista de Integrantes */}
            <div className="pt-4">
              <p className="font-bold text-dark-olive mb-6 uppercase text-sm tracking-widest">👥 Equipo Directivo</p>
              <div className="flex flex-wrap gap-3">
                {['Amayia G.', 'Rafael I.', 'Irene C.', 'Karla S.'].map((name) => (
                  <span key={name} className="px-4 py-3 bg-gradient-to-br from-dark-olive to-dark-olive/90 text-cream rounded-xl text-sm font-bold hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Contenedor del Organigrama */}
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-br from-leaf-green/20 to-sage-green/10 rounded-[2.5rem] group-hover:from-leaf-green/30 group-hover:to-sage-green/20 transition-all duration-500 blur-xl"></div>
            
            <div className="relative bg-white border-2 border-dark-olive/10 rounded-[2rem] p-10 shadow-2xl hover:shadow-3xl hover:border-leaf-green/30 transition-all duration-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-dark-olive uppercase tracking-tight">📊 Organigrama</h3>
                <p className="text-sm text-dark-olive/60 font-medium mt-1">Green Urban Horticulture Services</p>
                <div className="h-0.5 w-12 bg-gradient-to-r from-leaf-green to-sage-green mx-auto mt-4 rounded-full"></div>
              </div>

              {/* Espacio para la imagen del organigrama */}
              <div className="rounded-lg overflow-hidden">
                <img src={organigrama} alt="Organigrama" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;