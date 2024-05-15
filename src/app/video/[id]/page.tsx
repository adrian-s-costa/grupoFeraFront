'use client'

import Pfp from "@/app/_components/pfp/pfp";
import { useState, useEffect } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowUndoOutline, IoSend } from "react-icons/io5";
import { getVideoById } from "../../../../api/service";

type Video = {
  id: string;
  views: number;
  url: string;
  name: string;
  authorId: number;
  description: string;
  likes: number;
  dislikes: number;
  thumbnailUrl: string;
};

export default  function Video({ params }: { params: { id: string } }) {
  
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const [video, setVideo] = useState<Video | null>(null);

  const fetchVideoData = async () => {
    try {
      const response = await fetch(`https://1ad6-2804-14c-7582-5093-4765-a75d-5a26-5e1a.ngrok-free.app/videos/${params.id}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420"
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch video');
      }
      const videoData = await response.json();
      setVideo(videoData);
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    setViewportWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    fetchVideoData();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className="w-full min-h-screen h-auto bg-white dark:bg-black relative">
      <video width={viewportWidth} height={(viewportWidth / 16) * 9} controls={true} autoPlay={true} muted={true}>
        {video && <source src={`https://www.googleapis.com/drive/v3/files/${video.url}?alt=media&key=AIzaSyCxKxuTY52AIdq_Lni80Ja9bdTnwBQHfSg`} type="video/mp4"/>}
        Seu navegador não suporta o vídeo
      </video>
      <div className="w-full p-5 min-h-full h-auto ">
        <div className="flex flex-col">
          {video && <span className="font-semibold text-lg">{video.name}</span>}
          <span className="text-xs text-[#6C6C6C]">{video && video.views} views</span>
          <span className="text-xs text-black mt-4">{video && video.description}</span>
        </div>
        <div className="w-full flex justify-around">
          <div className="flex items-center flex-col">
            <FiThumbsUp  className="text-2xl mb-1 mt-5 cursor-pointer"/>
            <span>{video && video.likes}</span>
          </div>
          <div className="flex items-center flex-col">
            <FiThumbsDown className="text-2xl mb-1 mt-5 cursor-pointer"/>
            <span>{video && video.dislikes}</span>
          </div>
          <div className="flex items-center flex-col">
            <FaWhatsapp  className="text-2xl mb-1 mt-5 cursor-pointer"/>
            <span>Tenho interesse</span>
          </div>
          <div className="flex items-center flex-col">
            <IoArrowUndoOutline  className="text-2xl mb-1 mt-5 cursor-pointer"/>
            <span>Voltar</span>
          </div>
        </div>
        <div className="flex items-center pt-5">
          <Pfp pfp={{
            url: "https://res.cloudinary.com/dmo7nzytn/image/upload/v1715734420/8PVCYNRFimUCk9JM9ngn_5vw54GR8bvdMXmpZ_j7fwuv.webp", 
            width: '2.5rem',
            height: '2.5rem',
            mr: 4,
          }}></Pfp>
          <span className="font-semibold text-lg">Felipe Fera</span>
        </div>
        <div className=" min-h-full h-auto pt-5 pl-2 pb-10">
          <div className="mb-5">
            <div className="flex items-center">
              <Pfp pfp={{
                url: "https://res.cloudinary.com/dmo7nzytn/image/upload/v1715734420/8PVCYNRFimUCk9JM9ngn_5vw54GR8bvdMXmpZ_j7fwuv.webp", 
                width: '1.25rem', 
                height: '1.25rem',
                mr: 2,
              }}></Pfp>
              <span className="text-xs mr-1">Nome</span>
              <span className="text-xs"> • </span>
              <span className="text-xs ml-1 text-[#6C6C6C]">Horario</span>
            </div>
            <span className="text-sm">Bom dia cidadão!</span>
          </div>
        </div>
      </div>
      <div className="fixed z-1 bottom-0 flex px-4 h-20 w-full items-center bg-white">
        <Pfp pfp={{
          url: "https://res.cloudinary.com/dmo7nzytn/image/upload/v1715734420/8PVCYNRFimUCk9JM9ngn_5vw54GR8bvdMXmpZ_j7fwuv.webp", 
          width: '2rem', 
          height: '2rem',
          mr: 4,
        }}></Pfp>
        <input type="text" className=" bg-[#CECECE] rounded-full h-[2.15rem] pl-4 pr-10 w-full" placeholder="Adicione um comentário..."/>
        <IoSend className="text-2xl z-2 absolute right-[1.7rem] cursor-pointer"/>
      </div>
    </div>

  );
}
