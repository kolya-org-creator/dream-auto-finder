import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PopularCars from "@/components/PopularCars";
import Catalog from "@/components/Catalog";
import Promos from "@/components/Promos";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import CarModal from "@/components/CarModal";
import { cars } from "@/data/cars";

const Index = () => {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);

  const car = selectedCar !== null ? cars.find((c) => c.id === selectedCar) ?? null : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <PopularCars onCarClick={setSelectedCar} />
      <Catalog onCarClick={setSelectedCar} />
      <Promos />
      <About />
      <Contacts />
      <Footer />
      <CarModal car={car} onClose={() => setSelectedCar(null)} />
    </div>
  );
};

export default Index;
