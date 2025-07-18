import React from 'react'
import Image from 'next/image'

interface cardProps{
    name: string,
    title: string,
    image: string;
}
const Usercard = (props: cardProps) => {
  return (
    <div className="rounded-lg">
        <Image 
          src={props.image} 
          alt={props.name}
          width={100}
          height={100}
          className="w-full h-[60%] object-cover rounded-t-lg"
        />
        <div className="p-2 py-4">
            <p className="text-sm text-gray-600 my-4">{props.title}</p>
            <p className="font-bold text-xl text-black">{props.name}</p>
        </div>
    </div>
  )
}

export default Usercard