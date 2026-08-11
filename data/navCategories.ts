export type NavCategory = {
  title: string;
  slug: string;
  image: string;
  branding_img: string;
  alt: string;
};

export const navCategories: NavCategory[] = [
  {
    title: "Dump Truck",
    slug: "dump-trucks",
    image: "/nav-dumptruck.png",
    branding_img: "/dump-truck.jpeg",
    alt: "Dump trucks for sale in Kano Nigeria",
  },
  {
    title: "Tractor Head",
    slug: "tractor-heads",
    image: "/nav-tractor-head.png",
    branding_img: "/tractor-head.png",
    alt: "Tractor heads for heavy logistics",
  },
  {
    title: "LPG Tank Trailer",
    slug: "lpg-tank-trailers",
    image: "/nav-lpg.png",
    branding_img: "/lpg-tank.png",
    alt: "LPG tank trailers for energy operations",
  },
  {
    title: "Tractor",
    slug: "tractors",
    image: "/nav-tracotr.png",
    branding_img: "/tractor-2.png",
    alt: "Farm tractors for agriculture",
  },
  {
    title: "Car",
    slug: "cars",
    image: "/nav-car.png",
    branding_img: "/car.jpg",
    alt: "Passenger cars for sale in Nigeria",
  },
];
