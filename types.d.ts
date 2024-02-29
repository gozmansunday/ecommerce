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