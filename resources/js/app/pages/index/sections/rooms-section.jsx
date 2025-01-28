import React from "react"

const products = [
    {
      id: 1,
      name: 'Room A',
      href: '#',
      price: '₱1500/night',
      description: 'Perfect for small groups or families, each room is designed to comfortably accommodate up to 4 guests. Relax in a cozy space featuring double-deck beds and air conditioning for your comfort.',
      options: 'Good for 4 Persons',
      imageSrc: '/images/ROOMS (2pcs)/ROOM B/B.jpeg',
      imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
      id: 2,
      name: 'Room B',
      href: '#',
      price: '₱1500/night',
      description: 'Perfect for small groups or families, each room is designed to comfortably accommodate up to 4 guests. Relax in a cozy space featuring double-deck beds and air conditioning for your comfort.',
      options: 'Good for 4 Persons',
      imageSrc: '/images/ROOMS (2pcs)/ROOM B/B.jpeg',
      imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 3,
        name: 'Family Room',
        href: '#',
        price: '₱6500/night',
        description: 'Enjoy the ultimate group getaway in our spacious Family Room, perfect for up to 5 guests. This room is thoughtfully designed for comfort, featuring air conditioning and refrigerator to keep you cool and a vibrant ambiance to set the mood.',
        options: 'Good for 5 Persons',
        imageSrc: '/images/Family Room/C.jpeg',
        imageAlt: 'Front of plain black t-shirt.',
      },
      {
        id: 3,
        name: 'Family Room',
        href: '#',
        price: '₱6500/night',
        description: 'Enjoy the ultimate group getaway in our spacious Family Room, perfect for up to 5 guests. This room is thoughtfully designed for comfort, featuring air conditioning and refrigerator to keep you cool and a vibrant ambiance to set the mood.',
        options: 'Good for 5 Persons',
        imageSrc: '/images/Family Room/C.jpeg',
        imageAlt: 'Front of plain black t-shirt.',
      },
    // More products...
  ]
  
  export default function RoomSection() {
    return (
      <div className="bg-white">
        <div className="mx-8 max-w-full px-4 py-16 sm:px-6 sm:py-12 border-b border-gray-300">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">Our Rooms</h2> */}
      
            <div className="py-24 text-center border-b border-gray-300">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Our Blissful Rooms</h1>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
              Whether you're seeking a cozy retreat or a spacious escape for the whole family, our rooms are designed to provide comfort, convenience, and a touch of seaside charm. Relax, unwind, and make memories by the ocean—your perfect getaway starts here.
              </p>
            </div>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8 border-t border-gray-300 pt-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg"
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-[3/4] w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
                />
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500 text-justify">{product.description}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">{product.options}</p>
                    <p className="text-base font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  