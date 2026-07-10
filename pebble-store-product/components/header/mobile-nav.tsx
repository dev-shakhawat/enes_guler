"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/constants/nav-data";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="text-gray-700 hover:text-black">
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="p-4 flex flex-col gap-1">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex-grow py-3 text-sm font-medium text-gray-800 hover:text-black"
                >
                  {link.title}
                </Link>
                {link.hasMegaMenu && (
                  <button onClick={() => setOpenItem(openItem === index ? null : index)}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openItem === index ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>

              {link.hasMegaMenu && openItem === index && (
                <ul className="pl-4 pb-2 flex flex-col gap-2">
                  {link.megaMenuCols?.flatMap((col) =>
                    col.links.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-sm text-gray-500 hover:text-black"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
