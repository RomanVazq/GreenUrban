const services = [
  {
    title: "Insumos Sustentables",
    description: "Todo lo necesario para montar tu propia huerta en casa con materiales de alta calidad.",
    icon: "🌱"
  },
  {
    title: "Capacitación Personalizada",
    description: "Te enseñamos paso a paso cómo cuidar tus cultivos según tus necesidades.",
    icon: "📚"
  },
  {
    title: "Vermicomposta Orgánica",
    description: "Nutrientes naturales para tus plantas generados de forma casera y ecológica.",
    icon: "🪱"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-olive mb-4">Nuestros Servicios</h2>
          <div className="h-1 w-20 bg-leaf-green mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-cream border border-sage-green/20 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark-olive mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;