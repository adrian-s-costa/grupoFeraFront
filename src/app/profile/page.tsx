"use client"

import { IoExit, IoTrashOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { config } from "../../../config";

export default function Profile (){
  const deleteUser = async () => {
    try {
      const response = await fetch(`${config.API_URL}/auth/delete-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420"
        },
        body: JSON.stringify({ credential: userMail })
      });
  
      if (!response.ok) {
        throw new Error('Failed to log in');
      }
      localStorage.clear();
      router.push('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const userName = typeof window !== "undefined" ? window.localStorage.getItem("user") : false;
  const userMail = typeof window !== "undefined" ? window.localStorage.getItem("email") : false;
  const cep = typeof window !== "undefined" ? window.localStorage.getItem("cep") : false;

  const router = useRouter();

  return (
    <div className="w-full h-screen bg-white p-5 overflow-y-hidden">
      <div className="flex items-center">
        <FaUserCircle className="text-gray-400 mr-4 text-6xl"/>
        <div className="flex flex-col">
          <p className="text-black dark:text-black font-bold">{userName}</p>
          <p className="text-black dark:text-black text-xs font">{userMail}</p>
          <p className="text-black dark:text-black text-xs font">{cep}</p>
        </div>
      </div>
      <div className=" border-[1px] w-full h-36 mt-5 rounded-lg px-2 flex flex-col justify-around">
        <div className="flex items-center h-10 w-full justify-between cursor-pointer" onClick={()=>{localStorage.clear(); router.push('/login')}}>
          <div className="flex items-center ">
            <IoExit className="text-2xl text-slate-400 mr-2"/>
            <span className="text-black dark:text-black">Sair</span>
          </div>
          <IoIosArrowForward className="text-2xl"/>
        </div>
        <hr className="mx-5"/>
        <div className="flex items-center h-10 w-full justify-between cursor-pointer" onClick={()=>{deleteUser()}}>
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