import React from 'react'

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "A stylish jacket perfect for all occasions!",
    brand: "FashionCo",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Stylish jacket image",
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Stylish jacket image",
        },
    ],
};

export const ProductDetails = () => {
  return (
    <div className='p-6'>
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
            <div className="flex flex-col md:flex-row">
                {/* Left thumbnails */}
                <div className="hidden md:flex flex-col space-y-4 mr-6">
                    {selectedProduct.images.map((image, index) => (
                        <img src={image.url} key={index} alt={image.altText || `Thumbnail ${index + 1}`} className='w-20 h-20 object-cover rounded-lg cursor-pointer border'/>
                    ))}
                </div>
                {/* Main image */}
                <div className="md:w-1/2">
                    <div className="mb-4">
                        <img src={selectedProduct.images[0]?.url} alt="Main product" className='w-full h-auto object-cover rounded-lg'/>
                    </div>
                </div>
                {/* Mobile thumbnail */}
                <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
                    {selectedProduct.images.map((image, index) => (
                        <img src={image.url} key={index} alt={image.altText || `Thumbnail ${index + 1}`} className='w-20 h-20 object-cover rounded-lg cursor-pointer border'/>
                    ))}
                </div>
                {/* Right side */}
                <div className="md:w-1/2 md:ml-10">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                        {selectedProduct.name}
                    </h1>
                    <p className="text-lg text-gray-600 mb-1 line-through">
                        {selectedProduct.originalPrice && `$${selectedProduct.originalPrice}`}
                    </p>
                    <p className="text-xl text-gray-500 mb-2">
                        ${selectedProduct.price}
                    </p>
                    <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
