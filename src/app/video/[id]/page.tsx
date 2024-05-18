'use client'

import Pfp from "@/app/_components/pfp/pfp";
import { useState, useEffect } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaWhatsapp, FaUserCircle } from "react-icons/fa";
import { IoArrowUndoOutline, IoSend } from "react-icons/io5";
import { IoMdThumbsUp } from "react-icons/io";
import { getVideoById } from "../../../../api/service";
import { config } from "../../../../config";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Video = {
  comments: any;
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
  const [comment, setComment] = useState<string | null>(null);
  const [like, setLike] = useState<Boolean>(false);
  const [contact, setContact] = useState<Boolean>(false)

  const notify = () => toast.success('Recebemos o seu contato e em breve um vendedor entrará em contato!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const userName = localStorage.getItem('user')

  const handleLike = async (action: string) => {
    try {
      const response = await fetch(`${config.API_URL}/videos/${params.id}/like/${action}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420"
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch video');
      }
      const videoData = await response.json();
      if (action == "add"){
        setLike(true);
      }
      else{
        setLike(false)
      }
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  }

  const handleView = async () => {
    try {
      const response = await fetch(`${config.API_URL}/videos/${params.id}/view`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420"
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch view');
      }
    } catch (error) {
      console.error('Error fetching view:', error);
    }
  }

  const fetchVideoData = async () => {
    try {
      const response = await fetch(`${config.API_URL}/videos/${params.id}`,{
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

  const postComment = async () => {
    try {
      const response = await fetch(`${config.API_URL}/videos/${params.id}/comment`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420"
        },
        body: JSON.stringify({name: userName, time: 'notNull', comment})
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

    handleView();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className="w-full h-screen bg-white dark:bg-black relative overflow-y-hidden">
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
            { !like ? <FiThumbsUp
              className={`text-2xl mb-1 mt-5 cursor-pointer`}
              onClick={()=>{
                handleLike('add')
              }}
            /> 
            :
            <IoMdThumbsUp className={`text-[1.60rem] mb-1 mt-5 cursor-pointer`} 
              onClick={()=>{
                handleLike('remove')
              }}
            />}
            <span>{video && video.likes + (like ? 1 : 0)}</span>
          </div>
          <div className="flex items-center flex-col">
            <FiThumbsDown className="text-2xl mb-1 mt-5 cursor-pointer"/>
            <span>{video && video.dislikes}</span>
          </div>
          <div className={`flex items-center flex-col ${contact ? 'text-green-500' : 'text-black'}`} onClick={()=>{setContact(true); if (!contact) notify()}}>
            <FaWhatsapp  className="text-2xl mb-1 mt-5 cursor-pointer"/>
            <span>Tenho interesse</span>
          </div>
          <Link href={'/tab?options=1'}>
            <div className="flex items-center flex-col">
              <IoArrowUndoOutline  className="text-2xl mb-1 mt-5 cursor-pointer"/>
              <span>Voltar</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center pt-5 mb-5">
          <div
            className={`rounded-full w-[2.5rem] h-[2.5rem] bg-cover mr-4`}
            style={{ backgroundImage: `url(https://res.cloudinary.com/dmo7nzytn/image/upload/v1715983820/felipe_fera_to4xne.jpg)` }}
          ></div>
          <span className="font-semibold text-lg">Felipe Fera</span>
        </div>
        <div className=" h-[17rem] pl-2 overflow-y-scroll">
          {video && video.comments && video.comments.map((comment: any, indice: number)=>{
            return <div className="mb-5" key={indice}>
            <div className="flex items-center">
              <FaUserCircle className="text-gray-400 mr-2"/>
              <span className="text-xs mr-1">{comment.name}</span>
              <span className="text-xs"> • </span>
              <span className="text-xs ml-1 text-[#6C6C6C]">{comment.time}</span>
            </div>
            <span className="text-sm">{comment.comment}</span>
          </div>
          })}
        </div>
      </div>
      <div className="fixed z-1 bottom-0 flex px-4 h-20 w-full items-center bg-white">
        <FaUserCircle className="text-gray-400 mr-4 text-4xl"/>
        <input type="text" className=" bg-[#CECECE] rounded-full h-[2.15rem] pl-4 pr-10 w-full" value={ comment! } placeholder="Adicione um comentário..." onChange={(e)=>{setComment(e.target.value)}}/>
        <IoSend className="text-2xl z-2 absolute right-[1.7rem] cursor-pointer" onClick={()=>{postComment(); setComment('')}}/>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}