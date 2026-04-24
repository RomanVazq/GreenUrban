const services = [
  {
    title: "Asesoría Personalizada",
    description: "Evaluación de tu espacio y necesidades específicas para diseñar la huerta perfecta para tu hogar.",
    icon: "🎯"
  },
  {
    title: "Instalación Profesional",
    description: "Montaje completo de tu sistema de agricultura urbana con garantía de funcionamiento.",
    icon: "🔧"
  },
  {
    title: "Capacitación Especializada",
    description: "Entrenamiento completo en técnicas de cultivo urbano, compostaje y mantenimiento sostenible.",
    icon: "📚"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-white via-sage-green/3 to-white px-6 relative">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-leaf-green/10 rounded-full blur-3xl opacity-40 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-carrot-orange/5 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-dark-olive mb-6 uppercase tracking-tight">Nuestros <span className="bg-gradient-to-r from-leaf-green to-sage-green bg-clip-text text-transparent">Servicios</span></h2>
          <div className="h-1 w-24 bg-gradient-to-r from-leaf-green to-sage-green mx-auto rounded-full"></div>
          <p className="text-dark-olive/60 mt-6 text-lg tracking-wide">Acompañamiento integral para tu transformación agrícola</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative p-8 rounded-2xl bg-white border-2 border-dark-olive/5 hover:border-leaf-green/50 shadow-lg hover:shadow-2xl hover:shadow-leaf-green/15 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              {/* Top accent border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-leaf-green to-carrot-orange rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">{service.icon}</div>
              <h3 className="text-2xl font-bold text-dark-olive mb-3 group-hover:text-leaf-green transition-colors duration-300">{service.title}</h3>
              <p className="text-dark-olive/65 leading-relaxed tracking-wide font-medium">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-leaf-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;