export type Product = {
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  creationAt: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  slug: string;
  title: string;
  updatedAt: string;
};
