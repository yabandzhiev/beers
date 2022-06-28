export type beerProps = {
  name: string;
  description: string;
  image_url: string;
  favourite: boolean;
};

export type dataProps = {
  filteredInputData: beerProps[];
};
