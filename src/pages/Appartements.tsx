import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const apartments = [
  {
    id: 1,
    title: "Appartement Vue Mer",
    description: "Magnifique T2 avec vue panoramique sur la Méditerranée",
    price: "90€/nuit",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
    ],
    fullDescription: "Un appartement lumineux avec une vue imprenable sur la mer Méditerranée. Profitez d'un séjour confortable dans ce T2 entièrement équipé.",
  },
  {
    id: 2,
    title: "Studio Cosy",
    description: "Studio moderne et confortable, idéal pour un couple",
    price: "70€/nuit",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1630699144867-37acec97df5a",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d",
    ],
    fullDescription: "Studio rénové avec goût, parfait pour un couple. Cuisine équipée, salle de bain moderne et lit confortable.",
  },
  {
    id: 3,
    title: "T3 Familial",
    description: "Grand appartement parfait pour les familles",
    price: "120€/nuit",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224",
      "https://images.unsplash.com/photo-1613545325268-f24b0cae1224",
    ],
    fullDescription: "Spacieux T3 idéal pour les familles. Trois chambres, grand salon, cuisine équipée et deux salles de bain.",
  },
];

const Appartements = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedApartment, setSelectedApartment] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleContact = (id: number) => {
    navigate("/contact", { state: { apartmentId: id } });
  };

  const handleMoreInfo = (id: number) => {
    setSelectedApartment(id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sunset-peach to-sunset-yellow">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-sunset-dark text-center mb-12 animate-fade-in">
            Nos Appartements
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apt) => (
              <div
                key={apt.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in hover:shadow-xl transition-shadow duration-300"
              >
                <Carousel className="w-full max-w-full">
                  <CarouselContent>
                    {apt.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="h-64 w-full relative">
                          <img
                            src={image}
                            alt={`${apt.title} - Vue ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>

                <div className="p-6 bg-gradient-to-br from-white to-sunset-peach/10">
                  <h3 className="text-xl font-bold text-sunset-dark mb-2">
                    {apt.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{apt.description}</p>
                  <p className="text-lg font-semibold text-sunset-accent mb-4">
                    {apt.price}
                  </p>
                  
                  {selectedApartment === apt.id ? (
                    <div className="space-y-4">
                      <p className="text-gray-700">{apt.fullDescription}</p>
                      <Button
                        onClick={() => handleContact(apt.id)}
                        className="w-full bg-sunset-coral hover:bg-sunset-accent transition-colors"
                      >
                        Nous contacter
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setSelectedApartment(null)}
                        className="w-full border-sunset-accent text-sunset-accent hover:bg-sunset-accent hover:text-white"
                      >
                        Retour
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Button
                        onClick={() => handleMoreInfo(apt.id)}
                        variant="outline"
                        className="w-full border-sunset-accent text-sunset-accent hover:bg-sunset-accent hover:text-white"
                      >
                        Plus d'informations
                      </Button>
                      <Button
                        onClick={() => handleContact(apt.id)}
                        className="w-full bg-sunset-coral hover:bg-sunset-accent transition-colors"
                      >
                        Nous contacter
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-sunset-dark mb-6">
              Calendrier des disponibilités
            </h2>
            <div className="bg-white rounded-lg">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border border-sunset-peach"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Appartements;