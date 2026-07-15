"use client"
import Link from "next/link"
import { BsTiktok, BsYoutube } from "react-icons/bs"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import Container from "../common/container"
import { PiPinterestLogo } from "react-icons/pi"

type FooterLink = {
  label: string
  href: string
}

type FooterColumn = {
  title: string
  links: FooterLink[]
}

const shopLinks: FooterColumn = {
  title: "Shop",
  links: [{ label: "Search", href: "/search" }],
}

const customerCareLinks: FooterColumn = {
  title: "Customer care",
  links: [{ label: "Search", href: "/search" }],
}

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", Icon: FaFacebook },
  { label: "X", href: "https://x.com", Icon: FaTwitter },
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "TikTok", href: "https://tiktok.com", Icon: BsTiktok },
  { label: "Pinterest", href: "https://pinterest.com", Icon: PiPinterestLogo },
  { label: "YouTube", href: "https://youtube.com", Icon: BsYoutube },
]

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-slate-50 pt-20 text-slate-900">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Newsletter */}
          <div className="lg:pr-8">
            <h3 className="text-xl font-medium tracking-tight text-slate-900">
              Subscribe to get 10% OFF
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Subscribe for store updates and discounts.
            </p>

            <form
              className="mt-4"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription"
            >
              <div className="relative w-full max-w-sm">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  className="w-full rounded-md border border-slate-200 bg-white py-3 pr-12 pl-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-md p-1.5 text-slate-500 transition hover:text-slate-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </form>

            <p className="mt-4 text-xs text-slate-500">
              By subscribing you agree to the{" "}
              <Link href="/terms" className="underline hover:text-slate-800">
                Terms of Use
              </Link>{" "}
              &{" "}
              <Link href="/privacy" className="underline hover:text-slate-800">
                Privacy Policy.
              </Link>
            </p>
          </div>

          {/* Shop */}
          <FooterColumnBlock column={shopLinks} />

          {/* Customer care */}
          <FooterColumnBlock column={customerCareLinks} />

          {/* About */}
          <div>
            <h4 className="text-base font-medium text-slate-900">About</h4>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              We only carry designs we believe in ethically and aesthetically —
              original, authentic pieces that are made to last.
            </p>
            <Link
              href="/about"
              className="mt-2 inline-block border-b border-slate-900 text-sm font-medium text-slate-900 hover:opacity-70"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-12 flex items-center gap-4">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-6 text-sm text-slate-600">
          <p>
            © {new Date().getFullYear()} My Store 2.{" "}
            <a
              href="https://www.shopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-900"
            >
              Powered by Shopify
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}

function FooterColumnBlock({ column }: { column: FooterColumn }) {
  return (
    <div>
      <h4 className="text-base font-medium text-slate-900">{column.title}</h4>
      <ul className="mt-3 space-y-2">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group relative inline-block text-sm text-slate-600 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-in-out hover:text-slate-900 hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
