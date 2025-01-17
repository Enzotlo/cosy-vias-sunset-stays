import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apartments = [
  {
    id: 1,
    title: "Appartement Vue Mer",
    description: "Magnifique T2 avec vue panoramique sur la Méditerranée",
    price: "90€/nuit",
    image: "bg-sunset-yellow",
  },
  {
    id: 2,
    title: "Studio Cosy",
    description: "Studio moderne et confortable, idéal pour un couple",
    price: "70€/nuit",
    image: "bg-sunset-peach",
  },
  {
    id: 3,
    title: "T3 Familial",
    description: "Grand appartement parfait pour les familles",
    price: "120€/nuit",
    image: "bg-sunset-orange",
  },
];

const Appartements = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const navigate = useNavigate();

  const handleContact = (id: number) => {
    navigate("/contact", { state: { apartmentId: id } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-sunset-dark text-center mb-12">
            Nos Appartements
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apt) => (
              <div
                key={apt.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in"
              >
                <div className={`${apt.image} h-48`} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sunset-dark mb-2">
                    {apt.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{apt.description}</p>
                  <p className="text-lg font-semibold text-sunset-accent mb-4">
                    {apt.price}
                  </p>
                  <Button
                    onClick={() => handleContact(apt.id)}
                    className="w-full bg-sunset-accent hover:bg-sunset-dark transition-colors"
                  >
                    Nous contacter
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-sunset-dark mb-6">
              Calendrier des disponibilités
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
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