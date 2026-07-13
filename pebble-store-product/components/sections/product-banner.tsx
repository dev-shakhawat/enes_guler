import productImage from "@/public/images/productimage.jpg";
import ImageZoomViewer from "./product-image-viewer";
import Container from "../common/container";
import ProductInfo from "./product-info";

export default function ProductBanner({}: {}) {
  const productInfo = {
    name: "Pebble Smartwatch",
    image: productImage,
    price: 199.99,
    isInStock: true,
  };

  return (
<Container>
  <div className="mt-10 grid items-start gap-4 md:gap-8 lg:gap-12 md:grid-cols-2 pb-10 md:pb-16 lg:pb-20   ">
    <div className="sticky top-22 self-start">
      <ImageZoomViewer
        imageSrc={productInfo.image.src}
        className="w-full"
      />
    </div>

    <ProductInfo
      name="Apple  "
      price={278}
      description="dfngh"
    />
  </div>
</Container>
  );
}
