import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="h-screen relative flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gradient-to-br from-sunset-rose via-sunset-peach to-sunset-gold"
          style={{
            opacity: 0.9,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Bienvenue à Cosy Vias
          </h1>
          <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto animate-fade-in">
            Découvrez nos appartements de charme pour des vacances inoubliables
          </p>
        </div>
      </div>

      {/* Présentation Section */}
      <section className="py-20 bg-gradient-to-br from-white to-sunset-peach/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sunset-dark text-center mb-12 animate-fade-in">
            Notre Résidence
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 animate-fade-in">
                Située dans le charmant village de Vias, notre résidence vous offre
                le parfait mélange entre confort moderne et authenticité
                méditerranéenne.
              </p>
              <p className="text-lg text-gray-700 animate-fade-in">
                À quelques pas de la plage et des commerces, profitez d'un
                emplacement idéal pour vos vacances en famille ou entre amis.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sunset-coral to-sunset-gold h-80 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;