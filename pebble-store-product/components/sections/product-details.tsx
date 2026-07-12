"use client";

import { LuWaves, LuShirt, LuCircle } from "react-icons/lu";
import Accordion from "../common/accordian";
import Container from "../common/container";
import { PiUmbrellaSimple } from "react-icons/pi";

export default function ProductDetails() {
  return (
    <Container>
      <div className="py-24">
        <div className="grid gap-16 md:grid-cols-[580px_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
              Style & Comfort
            </p>

            <h2 className="mt-8 text-4xl font-bold leading-tight lg:text-6xl">
              Elastic waistband
              <br />
              for a comfortable,
              <br />
              adjustable fit.
            </h2>
          </div>

          <div>
            <Accordion
              defaultOpen
              title="Specific Features"
              icon={<LuWaves size={28} />}
            >
              <p className="text-lg leading-8 text-neutral-700">
                The elastic waistband ensures a snug fit, while the playful
                ruffles at the hems add a fun, girly touch that makes them stand
                out. Designed to pair perfectly with the matching toweling top,
                these shorts create a cute, coordinated look that's perfect for
                any summer adventure.
              </p>

              <ul className="mt-8 list-disc space-y-3 pl-6 text-lg text-neutral-700 ml-10 ">
                <li>Playful ruffled hems for a fun touch.</li>
                <li>
                  Crafted from 85% organic cotton and 15% recycled polyester.
                </li>
                <li>
                  Available in sizes from toddlers (2Y) to older girls (12Y).
                </li>
                <li>Part of Cozmo's terry cloth clothing collection.</li>
              </ul>
            </Accordion>

            <Accordion title="Care & Cleaning" icon={<PiUmbrellaSimple size={28} />}>
              <p className="text-lg leading-8 text-neutral-700">
                Designed for everyday wear, these pieces are easy to maintain
                and crafted to stay soft and vibrant wash after wash. Gentle on
                skin and simple to care for, they’re made to support an active,
                playful lifestyle.
              </p>

              <ul className="mt-8 list-disc s xace-y-3 pl-6 text-lg text-neutral-700">
                <li>Machine-washable for hassle-free cleaning.</li>
                <li>Retains softness and shape after repeated washes.</li>
                <li>Quick-drying fabric ideal for daily use.</li>
                <li>Made to withstand active kids’ routines.</li>
              </ul>
            </Accordion>

            <Accordion title="Materials" icon={<LuCircle size={28} />}>
              <p className="text-lg leading-8 text-neutral-700">
                Crafted from high-quality, kid-friendly fabrics that balance comfort, durability, and breathability. Each piece is thoughtfully made to feel gentle on the skin while offering long-lasting wear.
              </p>

              <ul className="mt-8 list-disc s xace-y-3 pl-6 text-lg text-neutral-700">
                <li>Soft, breathable blend for all-day comfort.</li>
                <li>Durable fibers designed to resist wear.</li>
                <li>Skin-friendly materials suitable for sensitive kids.</li>
                <li>Responsibly sourced for better everyday basics.</li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </Container>
  );
}
