const Navbar = () => {
  return (
    <nav className="bg-cream border-b border-dark-olive/10 py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2">
        {/* Aquí puedes poner el logo después */}
        <span className="font-bold text-xl text-dark-olive tracking-tight">
          GREEN <span className="text-leaf-green">URBAN</span>
        </span>
      </div>
      
      <div className="hidden md:flex gap-8 text-dark-olive font-medium">
        <a href="#inicio" className="hover:text-leaf-green transition-colors">Inicio</a>
        <a href="#servicios" className="hover:text-leaf-green transition-colors">Servicios</a>
        <a href="#nosotros" className="hover:text-leaf-green transition-colors">Nosotros</a>
      </div>

      <button className="bg-dark-olive text-cream px-5 py-2 rounded-full text-sm font-bold hover:bg-leaf-green transition-all">
        Contactar
      </button>
    </nav>
  );
};

export default Navbar;