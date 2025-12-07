import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const cartProducts = [
  {
    productId: 1,
    name: "T-shirt",
    size: "M",
    color: "Red",
    quantity: 1,
    price: 15,
    image: "https://picsum.photos/200?random=1",
  },
  {
    productId: 2,
    name: "Jeans",
    size: "L",
    color: "Blue",
    quantity: 1,
    price: 25,
    image: "https://picsum.photos/200?random=2",
  },
];

const CartContents = () => {
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b border-[#e5e7eb]"
        >
          {/* Left section */}
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded-sm"
            />

            <div>
              <h3 className="text-[18px] font-semibold">{product.name}</h3>

              <p className="text-[14px] text-[#6b7280]">
                Size: {product.size} | Color: {product.color}
              </p>

              {/* Quantity controls */}
              <div className="flex items-center mt-2">
                <button className="border border-[#d1d5db] rounded-sm px-2 py-1 text-[20px] font-medium">
                  -
                </button>

                <span className="mx-4">{product.quantity}</span>

                <button className="border border-[#d1d5db] rounded-sm px-2 py-1 text-[20px] font-medium">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div>
            <p className="font-bold text-[16px]">
              ${product.price.toLocaleString()}
            </p>

            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-[#dc2626]" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;