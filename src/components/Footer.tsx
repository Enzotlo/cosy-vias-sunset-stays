const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sunset-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Cosy Vias. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;