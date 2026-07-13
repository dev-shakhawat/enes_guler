import { StaticImageData } from "next/image";

export type TOutfitProduct = {
  id: number;
  title: string;
  price: number;
  image: StaticImageData | string;
};

export type TOutfitInspirationProps = {
  mainImage: StaticImageData | string;
  mainImageAlt?: string;
  currentItemLabel?: string;
  itemTitle: string;
  itemPrice: number;
  products: TOutfitProduct[];
  itemsPerPage?: number;
};