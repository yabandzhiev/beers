export type beerProps = {
  name: string;
  description: string;
  image_url: string;
  favorite: boolean;
};

export type dataProps = {
  filteredData: beerProps[];
};
