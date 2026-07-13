import { StaticImageData } from "next/image";

export type TProductSlideShow = {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
};