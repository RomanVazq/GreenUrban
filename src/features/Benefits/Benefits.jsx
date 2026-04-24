const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sage-green/5 to-white px-6 relative">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-leaf-green/5 rounded-br-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Diapositiva: Problemática General */}
          <div className="group bg-gradient-to-br from-dark-olive to-dark-olive/95 p-10 rounded-[2rem] text-cream shadow-xl hover:shadow-2xl transition-all duration-500">
            <span className="text-tomato-red font-bold uppercase tracking-widest text-sm flex items-center gap-2"> El Desafío</span>
            <h2 className="text-4xl font-black mt-4 mb-6 leading-tight">¿Problema con lo "Ecológico"?</h2>
            <p className="text-lg text-cream/85 leading-relaxed tracking-wide">
              Muchos productos agrícolas prometen ser ecológicos, pero <span className="font-bold text-tomato-red">no son transparentes</span> sobre sus procesos de producción. El consumo masivo oculta la realidad de lo que llega a tu mesa.
            </p>
          </div>

          {/* Diapositiva: Reduce tu impacto */}
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-dark-olive leading-tight tracking-tight">
              REDUCE TU <br />
              <span className="bg-gradient-to-r from-leaf-green to-sage-green bg-clip-text text-transparent">IMPACTO AMBIENTAL</span>
            </h2>
            <p className="text-lg text-dark-olive/70 leading-relaxed tracking-wide font-medium">
              Al tener tu propia hortaliza, obtienes alimentos naturales en condiciones controladas. 
              Disfruta de productos frescos que superan por mucho la calidad de los generados en masa.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="group/card bg-gradient-to-br from-leaf-green/15 to-leaf-green/5 p-6 rounded-2xl border border-leaf-green/30 hover:border-leaf-green/60 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <p className="text-2xl mb-2 group-hover/card:scale-110 transition-transform">🌿</p>
                <p className="text-dark-olive font-bold text-sm">0 Kilómetros</p>
                <p className="text-xs text-dark-olive/60 mt-1">De la tierra a tu plato.</p>
              </div>
              <div className="group/card bg-gradient-to-br from-leaf-green/15 to-leaf-green/5 p-6 rounded-2xl border border-leaf-green/30 hover:border-leaf-green/60 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <p className="text-2xl mb-2 group-hover/card:scale-110 transition-transform">💧</p>
                <p className="text-dark-olive font-bold text-sm">Control Total</p>
                <p className="text-xs text-dark-olive/60 mt-1">Sin químicos ni ocultos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;