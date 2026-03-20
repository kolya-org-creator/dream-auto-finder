import bmwX5 from "@/assets/bmw-x5.jpg";
import mercedesE from "@/assets/mercedes-e.jpg";
import audiA6 from "@/assets/audi-a6.jpg";
import bmw3 from "@/assets/bmw-3.jpg";
import toyotaCamry from "@/assets/toyota-camry.jpg";
import mercedesGlc from "@/assets/mercedes-glc.jpg";
import porscheCayenne from "@/assets/porsche-cayenne.jpg";
import lexusRx from "@/assets/lexus-rx.jpg";
import audiQ7 from "@/assets/audi-q7.jpg";
import bmw7 from "@/assets/bmw-7.jpg";
import mercedesS from "@/assets/mercedes-s.jpg";
import toyotaLc from "@/assets/toyota-lc.jpg";

export interface Car {
  id: number;
  brand: string;
  title: string;
  price: string;
  year: string;
  engine: string;
  power: string;
  transmission: string;
  mileage: string;
  color: string;
  body: string;
  image: string;
}

export const cars: Car[] = [
  {
    id: 0, brand: "bmw", title: "BMW X5 xDrive30d", price: "4 500 000 ₽",
    year: "2023", engine: "3.0 дизель", power: "249 л.с.", transmission: "Автомат",
    mileage: "15 000 км", color: "Чёрный", body: "Внедорожник", image: bmwX5,
  },
  {
    id: 1, brand: "mercedes", title: "Mercedes-Benz E 200", price: "3 800 000 ₽",
    year: "2022", engine: "2.0 бензин", power: "197 л.с.", transmission: "Автомат",
    mileage: "25 000 км", color: "Серебристый", body: "Седан", image: mercedesE,
  },
  {
    id: 2, brand: "audi", title: "Audi A6 45 TFSI", price: "3 200 000 ₽",
    year: "2021", engine: "2.0 бензин", power: "249 л.с.", transmission: "Автомат",
    mileage: "35 000 км", color: "Белый", body: "Седан", image: audiA6,
  },
  {
    id: 3, brand: "bmw", title: "BMW 3 Series 320i", price: "2 800 000 ₽",
    year: "2022", engine: "2.0 бензин", power: "184 л.с.", transmission: "Автомат",
    mileage: "20 000 км", color: "Синий", body: "Седан", image: bmw3,
  },
  {
    id: 4, brand: "toyota", title: "Toyota Camry 3.5", price: "2 500 000 ₽",
    year: "2023", engine: "3.5 бензин", power: "249 л.с.", transmission: "Автомат",
    mileage: "10 000 км", color: "Красный", body: "Седан", image: toyotaCamry,
  },
  {
    id: 5, brand: "mercedes", title: "Mercedes-Benz GLC 300", price: "3 600 000 ₽",
    year: "2022", engine: "2.0 бензин", power: "258 л.с.", transmission: "Автомат",
    mileage: "18 000 км", color: "Белый", body: "Внедорожник", image: mercedesGlc,
  },
  {
    id: 6, brand: "porsche", title: "Porsche Cayenne S", price: "7 900 000 ₽",
    year: "2023", engine: "2.9 бензин", power: "440 л.с.", transmission: "Автомат",
    mileage: "8 000 км", color: "Зелёный", body: "Внедорожник", image: porscheCayenne,
  },
  {
    id: 7, brand: "lexus", title: "Lexus RX 350", price: "4 200 000 ₽",
    year: "2023", engine: "3.5 бензин", power: "295 л.с.", transmission: "Автомат",
    mileage: "12 000 км", color: "Серый", body: "Внедорожник", image: lexusRx,
  },
  {
    id: 8, brand: "audi", title: "Audi Q7 55 TFSI", price: "5 600 000 ₽",
    year: "2022", engine: "3.0 бензин", power: "340 л.с.", transmission: "Автомат",
    mileage: "22 000 км", color: "Чёрный", body: "Внедорожник", image: audiQ7,
  },
  {
    id: 9, brand: "bmw", title: "BMW 7 Series 740i", price: "6 800 000 ₽",
    year: "2023", engine: "3.0 бензин", power: "333 л.с.", transmission: "Автомат",
    mileage: "5 000 км", color: "Белый", body: "Седан", image: bmw7,
  },
  {
    id: 10, brand: "mercedes", title: "Mercedes-Benz S 450", price: "8 500 000 ₽",
    year: "2023", engine: "3.0 бензин", power: "367 л.с.", transmission: "Автомат",
    mileage: "3 000 км", color: "Серебристый", body: "Седан", image: mercedesS,
  },
  {
    id: 11, brand: "toyota", title: "Toyota Land Cruiser 300", price: "5 900 000 ₽",
    year: "2023", engine: "3.5 бензин", power: "415 л.с.", transmission: "Автомат",
    mileage: "7 000 км", color: "Красный", body: "Внедорожник", image: toyotaLc,
  },
];

export const brands = [
  { key: "all", label: "Все" },
  { key: "bmw", label: "BMW" },
  { key: "mercedes", label: "Mercedes" },
  { key: "audi", label: "Audi" },
  { key: "toyota", label: "Toyota" },
  { key: "porsche", label: "Porsche" },
  { key: "lexus", label: "Lexus" },
];
