export type TCategorySpan = "large" | "tall" | "normal";

export type TCategoryItem = {
  id: string;
  title: string;
  itemCount: number;
  image: string;
  href: string; 
  span?: TCategorySpan;
}

export type TCategoriesSectionProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  viewAllHref?: string;
  categories?: TCategoryItem[];
}