"use client";

import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Carousel() {

  const [counter, setCounter] = useState<number>(0)
  const router = useRouter();

  const handleChange = () =>{
    if (counter < 2 ) setCounter(counter + 1)
  }

  const pages = [
    {
      id: 1,
      imageUrl: "https://res.cloudinary.com/dmo7nzytn/image/upload/v1715983918/intro3_o1hr9c.png",
      title: 'Conecte-se com pessoas incriveis'
    },
    {
      id: 2,
      imageUrl: "https://res.cloudinary.com/dmo7nzytn/image/upload/v1715983918/intro2_cr0hhy.png",
      title: 'Faça compras inteligentes'
    },
    {
      id: 3,
      imageUrl: "https://res.cloudinary.com/dmo7nzytn/image/upload/v1715983918/intro1_lfezp0.png",
      title: 'E aproveite benefícios exclusivos que só nossos membros tem acesso'
    }
  ]
  

  return (
    <div className="h-screen w-full bg-[#202226] relative">
      <Image className="w-full" src={pages[counter].imageUrl} alt={"intro"} width={428} height={545} ></Image>
      <p className="text-white text-[1.8rem] font-bold mt-10 ml-5">{pages[counter].title}</p>
      
      <div className="flex ml-5 gap-2 mt-10">
        <div className={`${counter == 0 ? 'w-14' : 'w-2'} h-2 ${counter == 0 ? 'bg-white' : 'bg-slate-600'} rounded-full`}></div>
        <div className={`${counter == 1 ? 'w-14' : 'w-2'} h-2 ${counter == 1 ? 'bg-white' : 'bg-slate-600'} rounded-full`}></div>
        <div className={`${counter == 2 ? 'w-14' : 'w-2'} h-2 ${counter == 2 ? 'bg-white' : 'bg-slate-600'} rounded-full`}></div>
      </div>

      <button onClick={()=>{ handleChange() }} className={`absolute ${counter == 2 ? 'hidden' : null} right-5 bottom-5 w-[3.5rem] h-[3.5rem] bg-white rounded-full flex justify-center items-center`}><IoIosArrowForward className="text-3xl"/></button>

      {counter == 2 ? <div className="absolute bottom-10 w-full h-[2.80rem] flex justify-center px-8"><button onClick={()=>{router.push('/login')}} className="bg-white rounded-3xl w-full">Vamos?</button></div> : null}
    </div>

  );
}
