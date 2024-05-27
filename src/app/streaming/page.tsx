"use client"

import Image from "next/image"
import logo from './Logo.png'
import { GoBell, GoSearch } from "react-icons/go";
import { IoCompassOutline } from "react-icons/io5";
import { getVideos, getVideoById } from "../../../api/service";
import Thumbs from "./components/thumbs";
import { useEffect, useState } from "react";


export default function Streaming(){

  const [videos, setVideos] = useState<any>()

  async function getVideosFunc() {
    return await getVideos();
  }

  useEffect(()=>{
    try {
      getVideosFunc().then((res)=>{
        setVideos(res)
      })
    } catch (error){
      console.log(error)
    }
  }, [])


  return (
    <div className=" min-h-screen h-auto bg-white dark:bg-black overflow-y-hidden pb-[2.5rem]">
    <div className=" flex px-1 h-16 justify-between items-center">
      <Image 
        className="mt-[]"
        src={'https://res.cloudinary.com/dmo7nzytn/image/upload/v1716220481/playlist_aemh69.png'}
        alt="Logo"
        width={160}
        height={40}
      ></Image>

      <div className="flex gap-4">
        <GoBell className="text-2xl text-black dark:text-black"/>
        <GoSearch className="text-2xl text-black dark:text-black" />
        <div
          className={`rounded-full w-[1.875rem] h-[1.875rem] bg-cover`}
          style={{ backgroundImage: `url(https://res.cloudinary.com/dmo7nzytn/image/upload/v1715983820/felipe_fera_to4xne.jpg)` }}
        ></div>
      </div>
    </div>
    <div className="h-[40px] bg-[#ECECEC] flex items-center px-2">
      <div className="flex items-center overflow-x-scroll w-auto">
        <IoCompassOutline className="text-6xl text-black dark:text-black"></IoCompassOutline>
        <span className="ml-2 font-semibold text-black dark:text-black">Explorar</span>

        <div className="border-r-2 border-[#CECECE] mx-2"/>

        <div className="overflow-x-scroll flex gap-4 w-auto items-center">
          <button className="border-2 border-[#CECECE] rounded-full w-auto whitespace-nowrap px-5 text-black dark:text-black">Todos</button>
          <button className="border-2 border-[#CECECE] rounded-full w-auto whitespace-nowrap px-5 text-black dark:text-black">Baterias</button>
          <button className="border-2 border-[#CECECE] rounded-full w-auto whitespace-nowrap px-5 text-black dark:text-black">Peças reposição</button>
        </div>
      </div>
    </div>

    <div className="w-full flex flex-col">
    {videos && videos.map((video: any, indice: number)=>{
      return <Thumbs props={videos[indice]} key={indice}/>
    })}
    </div>

  </div>
  )
}