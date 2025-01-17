import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-sunset-dark">
            Cosy Vias
          </Link>
          <div className="flex gap-8">
            <Link
              to="/"
              className={`text-lg transition-colors hover:text-sunset-accent ${
                isActive("/") ? "text-sunset-accent" : "text-sunset-dark"
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/appartements"
              className={`text-lg transition-colors hover:text-sunset-accent ${
                isActive("/appartements") ? "text-sunset-accent" : "text-sunset-dark"
              }`}
            >
              Appartements
            </Link>
            <Link
              to="/contact"
              className={`text-lg transition-colors hover:text-sunset-accent ${
                isActive("/contact") ? "text-sunset-accent" : "text-sunset-dark"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;