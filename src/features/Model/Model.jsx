const Model = () => {
  const features = [
    {
      title: "Insumos Sustentables",
      desc: "Todo lo necesario para montar tu huerta sustentable en casa con materiales de alta calidad y diseño ergonómico.",
      icon: "🌱"
    },
    {
      title: "Material Informativo",
      desc: "Guías especializadas, manuales técnicos y recursos educativos para el cultivo exitoso de hortalizas.",
      icon: "📚"
    },
    {
      title: "Vermicomposta Orgánica",
      desc: "Nutrientes naturales producidos de forma casera y ecológica para un crecimiento óptimo de tus plantas.",
      icon: "🪱"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-cream to-sage-green/5 px-6 border-y border-leaf-green/10">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-leaf-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="mb-4 inline-block">
          <h2 className="text-4xl md:text-6xl font-black text-dark-olive uppercase tracking-tight">
            Nuestro <span className="bg-gradient-to-r from-leaf-green to-sage-green bg-clip-text text-transparent">Modelo</span>
          </h2>
        </div>
        <p className="text-dark-olive/60 mb-16 tracking-wide">Tres pilares fundamentales de nuestro negocio</p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-10 bg-white rounded-[2.5rem] hover:bg-gradient-to-br hover:from-dark-olive hover:to-dark-olive/90 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-dark-olive/20 hover:scale-105 border border-dark-olive/5 hover:border-transparent">
              <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 inline-block">{f.icon}</div>
              <h3 className="text-2xl font-bold text-dark-olive group-hover:text-cream mb-4 transition-colors duration-300">{f.title}</h3>
              <p className="text-dark-olive/60 group-hover:text-cream/90 font-medium leading-relaxed transition-colors duration-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Model;