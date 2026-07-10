import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/constants/nav-data";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-8" role="navigation">
      <ul className="flex items-center gap-6">
        {NAV_LINKS.map((link, index) => (
          <li key={index} className="group relative py-6">
            <Link
              href={link.href}
              className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-black transition-colors"
            >
              {link.title}
              {link.hasMegaMenu && (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              )}
            </Link>

            {link.hasMegaMenu && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[80vw] max-w-7xl bg-white shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="p-8 flex gap-8">
                  <div className="flex-grow grid grid-cols-2 gap-8">
                    {link.megaMenuCols?.map((col, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-4">
                        <h4 className="font-semibold text-gray-900">{col.title}</h4>
                        <ul className="flex flex-col gap-3">
                          {col.links.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                className="text-gray-500 hover:text-black transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {link.promotions && (
                    <div className="w-[35%] shrink-0">
                      {link.promotions.map((promo, promoIdx) => (
                        <Link
                          key={promoIdx}
                          href={promo.href}
                          className="block relative group/promo overflow-hidden rounded-xl"
                        >
                          <img
                            src={promo.image}
                            alt={promo.title}
                            className="w-full h-[300px] object-cover transition-transform duration-700 group-hover/promo:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20" />
                          <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-sm uppercase tracking-wider mb-2">{promo.subtitle}</p>
                            <h3 className="text-2xl font-semibold mb-4">{promo.title}</h3>
                            <span className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-medium">
                              Shop Now
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
