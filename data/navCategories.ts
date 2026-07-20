export type NavCategory = {
  title: string;
  slug: string;
  image: string;
  alt: string;
};

export const navCategories: NavCategory[] = [
  {
    title: "Dump Truck",
    slug: "dump-trucks",
    image: "/nav-dumptruck.png",
    alt: "Dump trucks for sale in Kano Nigeria",
  },
  {
    title: "Tractor Head",
    slug: "tractor-heads",
    image: "/nav-tractor-head.png",
    alt: "Tractor heads for heavy logistics",
  },
  {
    title: "LPG Tank Trailer",
    slug: "lpg-tank-trailers",
    image: "/nav-lpg.png",
    alt: "LPG tank trailers for energy operations",
  },
  {
    title: "Tractor",
    slug: "tractors",
    image: "/nav-tracotr.png",
    alt: "Farm tractors for agriculture",
  },
  {
    title: "Car",
    slug: "cars",
    image: "/nav-car.png",
    alt: "Passenger cars for sale in Nigeria",
  },
];
