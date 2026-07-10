export type NavLink = {
  name: string;
  href: string;
};

export type MegaMenuCol = {
  title: string;
  links: NavLink[];
};

export type Promotion = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export type NavItem = {
  title: string;
  href: string;
  hasMegaMenu: boolean;
  megaMenuCols?: MegaMenuCol[];
  promotions?: Promotion[];
};
