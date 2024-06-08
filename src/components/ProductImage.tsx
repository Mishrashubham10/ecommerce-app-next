'use client';

import Image from 'next/image';
import { useState } from 'react';

// TEMPORARY
const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/3123950/pexels-photo-3123950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/2418598/pexels-photo-2418598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/9704384/pexels-photo-9704384.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/900097/pexels-photo-900097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function ProductImage() {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt="Product Image"
          fill
          className="object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt="Product Image"
              fill
              className="object-cover rounded-md"
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}