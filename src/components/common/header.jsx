const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-pink-600">
          Flores UNAB 🌹
        </h1>

        {/* Navegación */}
        <nav className="space-x-6 hidden md:block">
          <a
            href="#"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            Comprar
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-pink-600 transition"
          >
            Contacto
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
