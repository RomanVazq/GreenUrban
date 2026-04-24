const Benefits = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Diapositiva: Problemática General */}
          <div className="bg-[#485342] p-10 rounded-[3rem] text-[#F5F0E1]">
            <span className="text-[#D65C4F] font-bold uppercase tracking-widest text-sm">El Desafío</span>
            <h2 className="text-4xl font-black mt-4 mb-6 leading-tight">¿Problema con lo "Ecológico"?</h2>
            <p className="text-xl text-[#F5F0E1]/80 leading-relaxed">
              Muchos productos agrícolas prometen ser ecológicos, pero **no son transparentes** sobre sus procesos de producción. El consumo masivo oculta la realidad de lo que llega a tu mesa.
            </p>
          </div>

          {/* Diapositiva: Reduce tu impacto */}
          <div className="space-y-6">
            <h2 className="text-5xl font-black text-[#485342] leading-[0.9]">
              REDUCE TU <br />
              <span className="text-[#94B086]">IMPACTO AMBIENTAL</span>
            </h2>
            <p className="text-lg text-[#485342]/70 font-medium">
              Al tener tu propia hortaliza, obtienes alimentos naturales en condiciones controladas. 
              Disfruta de productos frescos que superan por mucho la calidad de los generados en masa.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="bg-[#94B086]/10 p-4 rounded-2xl border border-[#94B086]/20">
                <p className="text-[#485342] font-bold">🌿 0 Kilómetros</p>
                <p className="text-xs text-[#485342]/60">De la tierra a tu plato al instante.</p>
              </div>
              <div className="bg-[#94B086]/10 p-4 rounded-2xl border border-[#94B086]/20">
                <p className="text-[#485342] font-bold">💧 Control Total</p>
                <p className="text-xs text-[#485342]/60">Sin químicos ni procesos ocultos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;