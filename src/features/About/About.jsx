import organigrama from '../../assets/organigrama.png';

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-[#F5F0E1] px-6">
      <div className="container mx-auto">
        {/* Encabezado de la Sección */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-black text-[#485342] mb-6 uppercase tracking-tighter">
            Sobre <span className="text-[#94B086]">Nosotros</span>
          </h2>
          <p className="text-xl text-[#485342]/80 leading-relaxed">
            Un equipo multidisciplinario comprometido con la soberanía alimentaria y la educación ambiental.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Columna Izquierda: Misión y Visión */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-[#485342] border-l-4 border-[#94B086] pl-4 mb-4">Nuestra Misión</h3>
              <p className="text-lg text-[#485342]/70">
                Otorgar el mejor servicio y capacitación mediante la creación de hortalizas caseras, 
                fomentando la autosuficiencia alimentaria y el cuidado del medio ambiente.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#485342] border-l-4 border-[#94B086] pl-4 mb-4">Nuestra Visión</h3>
              <p className="text-lg text-[#485342]/70">
                Ser una empresa referente en educación para la agricultura urbana, contribuyendo a que 
                más hogares produzcan parte de sus propios alimentos.
              </p>
            </div>

            {/* Lista de Integrantes */}
            <div className="pt-6">
              <p className="font-bold text-[#485342] mb-4 uppercase text-sm tracking-widest">Equipo Directivo</p>
              <div className="flex flex-wrap gap-3">
                {['Amayia G.', 'Rafael I.', 'Irene C.', 'Karla S.'].map((name) => (
                  <span key={name} className="px-4 py-2 bg-[#485342] text-[#F5F0E1] rounded-lg text-sm font-bold">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Contenedor del Organigrama */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#94B086]/20 rounded-[2rem]  group-hover:bg-[#94B086]/30 transition-all"></div>
            
            <div className="relative bg-white border-2 border-[#485342]/10 rounded-[2rem] p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-xl font-black text-[#485342] uppercase tracking-tight">Organigrama Institucional</h3>
                <p className="text-sm text-[#485342]/50 font-bold">Green Urban Horticulture Services</p>
              </div>

              {/* Espacio para la imagen del organigrama */}
              <div>
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