"use client"

import Image from "next/image"
import { useState } from "react"
import { IoExit, IoTrashOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Pfp from "../_components/pfp/pfp";

export default function Profile (){
  
  return (
    <div className="w-full h-screen bg-white p-5 overflow-y-hidden">
      <div className="flex items-center">
        <Pfp pfp={{
          url: "https://res.cloudinary.com/dmo7nzytn/image/upload/v1715734420/8PVCYNRFimUCk9JM9ngn_5vw54GR8bvdMXmpZ_j7fwuv.webp",
          width: "2.5rem",
          mr: 4,
        }}
        >


        </Pfp>
        <div className="flex flex-col">
          <p className=" font-bold">Teste Teste</p>
          <p className=" text-xs font">email@teste.com</p>
        </div>
      </div>
      <div className=" border-[1px] w-full h-36 mt-5 rounded-lg px-2 flex flex-col justify-around">
        <div className="flex items-center h-10 w-full justify-between">
          <div className="flex items-center">
            <IoExit className="text-2xl text-slate-400 mr-2"/>
            <span>Sair</span>
          </div>
          <IoIosArrowForward className="text-2xl"/>
        </div>
        <hr className="mx-5"/>
        <div className="flex items-center h-10 w-full justify-between">
          <div className="flex items-center">
            <IoTrashOutline className="text-2xl text-red-600 mr-2"/>
            <span className="text-red-600">Excluir minha conta</span>
          </div>
          <IoIosArrowForward className="text-2xl"/>
        </div>
      </div>
      
    </div>
  )
}