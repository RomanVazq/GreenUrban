const Model = () => {
  const features = [
    {
      title: "Insumos",
      desc: "Todo lo necesario para montar tu huerta sustentable.",
      icon: "🌱"
    },
    {
      title: "Material Informativo",
      desc: "Guías claras para que tu huerta prospere.",
      icon: "📖"
    },
    {
      title: "Vermicomposta",
      desc: "Nutrición orgánica y casera para tus plantas.",
      icon: "🪱"
    }
  ];

  return (
    <section className="py-24 bg-[#F5F0E1] px-6 border-y border-[#485342]/5">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black text-[#485342] mb-16 uppercase tracking-tighter">
          Nuestro <span className="text-[#94B086]">Modelo</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className=" group p-10 bg-white rounded-[2.5rem] hover:bg-[#485342] transition-all duration-500 shadow-xl hover:shadow-[#485342]/20">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-2xl font-bold text-[#485342] group-hover:text-[#F5F0E1] mb-4">{f.title}</h3>
              <p className="text-[#485342]/60 group-hover:text-[#F5F0E1]/80 font-medium">
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