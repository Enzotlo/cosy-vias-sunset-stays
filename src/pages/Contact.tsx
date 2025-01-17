import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sunset-rose via-sunset-peach to-sunset-yellow">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-sunset-dark text-center mb-12 animate-fade-in">
            Contactez-nous
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg animate-fade-in">
              <form className="space-y-6">
                <div>
                  <Input placeholder="Votre nom" className="border-sunset-peach focus:border-sunset-coral" />
                </div>
                <div>
                  <Input type="email" placeholder="Votre email" className="border-sunset-peach focus:border-sunset-coral" />
                </div>
                <div>
                  <Input placeholder="Sujet" className="border-sunset-peach focus:border-sunset-coral" />
                </div>
                <div>
                  <Textarea
                    placeholder="Votre message"
                    className="min-h-[150px] border-sunset-peach focus:border-sunset-coral"
                  />
                </div>
                <Button className="w-full bg-sunset-coral hover:bg-sunset-accent transition-colors">
                  Envoyer
                </Button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg animate-fade-in">
                <h2 className="text-2xl font-bold text-sunset-dark mb-6">
                  Nos Coordonnées
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="text-sunset-coral" />
                    <p className="text-gray-600">+33 6 12 34 56 78</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-sunset-coral" />
                    <p className="text-gray-600">contact@cosyvias.fr</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-sunset-coral" />
                    <p className="text-gray-600">123 Avenue de la Plage, Vias</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-sunset-coral to-sunset-gold h-64 rounded-lg shadow-lg animate-fade-in" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;