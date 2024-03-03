type Billboard = {
  id: string;
  label: string;
  imageUrl: string;
};

type Category = {
  id: string;
  name: string;
  billboard: Billboard;
};

type Image = {
  id: string;
  url: string;
};

type Size = {
  id: string;
  name: string;
  value: string;
};

type Color = {
  id: string;
  name: string;
  value: string;
};

type Product = {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
};