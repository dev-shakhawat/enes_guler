import Image from "next/image";
import product2 from "@/public/images/product_image_2.png";
import { CgClose } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";

export default function StickyUp({}: {}) {
  return (
    <div
      onClick={() => {
        document
          .getElementById("Product_show")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      style={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      className={`max-w-xl w-full p-4 rounded-2xl shadow-lg flex  bg-white ml-auto    `}
    >
      <Image
        src={product2}
        alt="Product Image"
        width={100}
        height={100}
        className="w-25 h-25 object-contain rounded-lg"
      />

      <div className="ml-4 ">
        <p className="">Sample</p>
        <h2 className="font-semibold   ">Tk 268.00</h2>
      </div>

      <div className="ml-auto flex flex-col justify-between items-center  ">
        <button>
          <CgClose size={22} />
        </button>

        <button className="w-10 h-10 bg-black rounded-full grid place-items-center text-white  ">
          <BsHandbag />
        </button>
      </div>
    </div>
  );
}
