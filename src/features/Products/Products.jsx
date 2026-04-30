import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importar tus imágenes (asegúrate de que estén en src/assets)
import caja from '../../assets/caja.jpeg';
import cajaflores from '../../assets/cajaflores.jpeg';
import kitFlores from '../../assets/kit flores.jpeg';
import kit from '../../assets/kit.jpeg';
import saco from '../../assets/saco.jpeg';

const products = [
  { 
    id: 1, 
    name: "Kit Infantil \n ¡Descubre, planta y diviértete!", 
    description: "Tu aventura verde comienza aquí. Incluye guía ilustrada 'Pequeños Grandes Jardineros', herramientas coloridas y semillas de frijol, rábano y girasol.", 
    tag: "Infantil", 
    price: "Consúltanos", 
    image: kit 
  },
  { 
    id: 2, 
    name: "Kit de Plantas Aromáticas \n ¡Ideal para principiantes!", 
    description: "Cultiva tus propias hierbas frescas en casa: Albahaca, Romero y Menta. Incluye nutrición natural, sustrato y guía rápida de cuidados.", 
    tag: "Aromáticas", 
    price: "Desde $1.250", 
    image: kitFlores 
  },
  { 
    id: 3, 
    name: "Herramientas de Cultivo \n Green Urban Premium", 
    description: "Set de herramientas de alta calidad con mangos de madera grabados. Incluye paleta, bieldo, tijeras de podar y marcadores de madera.", 
    tag: "Profesional", 
    price: "Consúltanos", 
    image: caja 
  },
  { 
    id: 4, 
    name: "Sustrato Orgánico \n Dervico Bas", 
    description: "Sustrato enriquecido con honores de hortaliza. Presentación en costal de yute sustentable, ideal para el crecimiento óptimo de tus plantas.", 
    tag: "Sustrato", 
    price: "Por kilo", 
    image: saco 
  },
  { 
    id: 5, 
    name: "Kit de Plantas Medicinales \n Cultiva bienestar, cosecha salud", 
    description: "Conecta con la naturaleza: Aloe Vera, Manzanilla, Hierbabuena y Lavanda. 100% natural y orgánico, inspirado en la biología.", 
    tag: "Medicinal", 
    price: "Digital/Físico", 
    image: cajaflores 
  }
];

const ProductSlider = () => {
  return (
    <section id="productos" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-[#94B086] mb-3">Catálogo</p>
          <h2 className="text-5xl font-bold text-[#485342] tracking-tight">
            Nuestros <span className="text-[#94B086] italic font-serif">Productos</span>
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          speed={700}
          autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          className="product-swiper !pb-14"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center px-2">
              <article className="flex h-[42rem] w-full max-w-[26rem] flex-col rounded-[2.25rem] border border-[#94B086]/15 bg-gradient-to-br from-[#F8F4E8] to-[#F3EBD9] p-6 shadow-[0_20px_50px_-25px_rgba(148,176,134,0.7)] transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:h-[52rem] sm:max-w-[36rem]">
                <div className="relative mb-6 overflow-hidden rounded-[2rem] bg-white p-5 shadow-inner shadow-[#485342]/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,176,134,0.15),_transparent_35%)]"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
                  />
                </div>

                <div className="mb-4 flex justify-center text-center gap-3 whitespace-pre-line">
                  <h3 className="min-h-[3.5rem] text-xl font-black text-[#485342] transition-colors duration-300 group-hover:text-[#94B086]">
                    {product.name}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-[#485342]/75 tracking-wide flex-1 min-h-[7rem] justify-center text-center">
                  {product.description || 'Producto de alta calidad para tu huerta urbana.'}
                </p>

                <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#485342] px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#F5F0E1] transition-colors duration-300 hover:bg-[#94B086]">
                  
                </button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductSlider;