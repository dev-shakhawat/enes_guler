import ProductBanner from "@/components/sections/product-banner";
import ProductDetails from "@/components/sections/product-details";

export default function Home() {
  return (
    <main className=" relative z-1! pt-20 ">
      {/* banner */}
      <ProductBanner />

      {/* product details */}
      <ProductDetails/>
      
    </main>
  );
}
