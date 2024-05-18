"use client"

import Image from "next/image"
import Link from "next/link"

export default function Thumbs({props}: any){
  return (
    <Link href={`/video/${props.id}`}>
      <div className="flex flex-col cursor-pointer">
        <Image
          src={props.thumbnailUrl}
          width={1000}
          height={700} 
          alt={props.name}
          className="w-full bg-slate-300 h-[240px]"></Image>
        <div className="p-5 flex">
          <div
            className={`rounded-full w-[2.5rem] h-[2.5rem] bg-cover mr-4`}
            style={{ backgroundImage: `url(https://res.cloudinary.com/dmo7nzytn/image/upload/v1715983820/felipe_fera_to4xne.jpg)` }}
          />
          <div className="flex flex-col">
            <span>{props.name}</span>
            <span className="text-xs text-[#6C6C6C]">{props.views} views</span>
          </div>
        </div>
      </div>
    </Link>
  )
}