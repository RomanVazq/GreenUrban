const Navbar = () => {
  return (
    <nav className="bg-cream/95 backdrop-blur-md border-b border-dark-olive/10 py-5 px-6 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-2">
        {/* Aquí puedes poner el logo después */}
        <span className="font-bold text-2xl text-dark-olive tracking-tight">
          GREEN <span className="text-leaf-green">URBAN</span>
        </span>
      </div>
      
      <div className="hidden md:flex gap-10 text-dark-olive font-medium">
        <a href="#inicio" className="relative hover:text-leaf-green transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-leaf-green after:transition-all after:duration-300 hover:after:w-full">Inicio</a>
        <a href="#servicios" className="relative hover:text-leaf-green transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-leaf-green after:transition-all after:duration-300 hover:after:w-full">Servicios</a>
        <a href="#nosotros" className="relative hover:text-leaf-green transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-leaf-green after:transition-all after:duration-300 hover:after:w-full">Nosotros</a>
      </div>

      <button className="bg-dark-olive text-cream px-6 py-2.5 rounded-full text-sm font-bold hover:bg-leaf-green hover:shadow-lg hover:scale-105 transition-all duration-300">
        Contactar
      </button>
    </nav>
  );
};

export default Navbar;