import { NavItem } from "@/types/nav.type";

export const NAV_LINKS: NavItem[] = [
  {
    title: "Shop",
    href: "/collections/all",
    hasMegaMenu: true,
    megaMenuCols: [
      {
        title: "New Arrivals",
        links: [
          { name: "T-Shirts", href: "/collections/t-shirts" },
          { name: "Sets", href: "/collections/sets" },
          { name: "Sweaters", href: "/collections/sweaters" },
        ],
      },
      {
        title: "Best Sellers",
        links: [
          { name: "Outerwear", href: "/collections/outerwear" },
          { name: "Accessories", href: "/collections/accessories" },
          { name: "Pants", href: "/collections/pants" },
        ],
      },
    ],
    promotions: [
      {
        title: "The Cozy Crew",
        subtitle: "New collection",
        image: "/images/menu-banner-1.webp",
        href: "/collections",
      },
    ],
  },
  {
    title: "Collections",
    href: "/collections",
    hasMegaMenu: true,
    megaMenuCols: [
      {
        title: "By Season",
        links: [
          { name: "Summer", href: "/collections/summer" },
          { name: "Winter", href: "/collections/winter" },
          { name: "Spring", href: "/collections/spring" },
        ],
      },
      {
        title: "By Style",
        links: [
          { name: "Casual", href: "/collections/casual" },
          { name: "Formal", href: "/collections/formal" },
          { name: "Streetwear", href: "/collections/streetwear" },
        ],
      },
    ],
    promotions: [
      {
        title: "Explore All",
        subtitle: "Featured",
        image: "/images/menu-banner-2.webp",
        href: "/collections",
      },
    ],
  },
  {
    title: "Pages",
    href: "/pages/our-story",
    hasMegaMenu: false,
  },
];
