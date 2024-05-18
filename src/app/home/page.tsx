"use client"

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home(){

  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    setViewportWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  return(
    <div className="w-full min-h-screen h-auto bg-white p-5 dark:bg-black mb-10">
      <h1 className="text-3xl font-bold dark:text-white">Fala, Nome</h1>
      <span className="dark:text-white">Ou devo te chamar de Fera?</span>
      <div className="my-5 h-auto relative">
        <video className="rounded-lg" width={viewportWidth} autoPlay={true} muted={true} loop={true} controls={false} playsInline>
          <source src={`https://res.cloudinary.com/dmo7nzytn/video/upload/v1715727314/fera_hv10wj.mp4`} type="video/mp4"/>  
        </video>
        <div className="absolute bg-gray-400/50 p-2 rounded-md bottom-4 left-4 z-10">
          <span className="opacity-100 text-white">Mais videos</span>
        </div>
      </div>
      <div className="flex justify-between mb-3">
        <h1 className="text-xl font-bold">Categorias</h1>
        <h1 className=" font-semibold text-red-600">Ver todas</h1>
      </div>
      <div className="flex justify-between">
        <div className="max-w-20 flex flex-col gap-2">
          <div className="w-20 h-20 flex justify-center items-center max-w-20 bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726211/eletric_p4x05f.png"}
            width={50}
            height={50}
            alt="category"
            ></Image>
          </div>
          <span className="max-w-20">Acessórios Automotivos</span>
        </div>
        
        <div className="max-w-20 flex flex-col gap-2">
          <div className="w-20 h-20 flex justify-center items-center  bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726211/gasoline_bauvwp.png"}
            width={50}
            height={50}
            alt="category"
            ></Image>
          </div>
          <span>Blindagem</span>
        </div>
        
        <div className="max-w-20 flex flex-col gap-2">
          <div className="w-20 h-20 flex justify-center items-center bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726210/acessory_hyzyjb.png"}
            width={50}
            height={50}
            alt="category"
            ></Image>
          </div>
          <span>BYD por Assinatura</span>
        </div>
        
        <div className="max-w-20 flex flex-col gap-2">
          <div className="w-20 h-20 flex justify-center items-center bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726211/service_e6kz4v.png"}
            width={50}
            height={50}
            alt="category"
            ></Image>
          </div>
          <span>Proteção Veícular</span>
        </div>      
      </div>
      
      <div className="mt-10">
        <h1 className="text-xl font-bold mb-4">Compre seu BYD com o Felipe Fera</h1>
        <div className="flex overflow-x-scroll gap-3">
          <div>
            <Image quality={100} className="w-[232px] h-[147px] rounded-lg mb-2 min-w-[232px] min-h-[147px] bg-cover" src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715732181/IMG_0195_mbuwuz.jpg"} alt={""} width={230} height={125}/>
            <div className="flex flex-col gap-1">
              <span className="font-semibold">BYD SEAL</span>
              <span className="text-sm">BYD SEAL 2024: Desbloqueie a adrenalina</span>
              <span className="text-[#838383]">R$ 296.800,00</span>
            </div>
          </div>
          <div>
            <Image quality={100} className="w-[232px] h-[147px] rounded-lg mb-2 min-w-[232px] min-h-[147px] bg-cover" src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715727136/cc_t8pro-hybrid_design_4_2_immwzg.png"} alt={""} width={230} height={125}/>
            <div className="flex flex-col gap-1">
              <span className="font-semibold">BYD Yuan Plus</span>
              <span className="text-sm">BYD Yuan Plus: O SUV elétrico</span>
              <span className="text-[#838383]">R$ 30.000,00</span>
            </div>
          </div>
          <div>
            <Image quality={100} className="w-[232px] h-[147px] rounded-lg mb-2 min-w-[232px] min-h-[147px] bg-cover " src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726432/home_xkpl2q.png"} alt={""} width={230} height={125}/>
            <div className="flex flex-col gap-1">
              <span className="font-semibold">Song Plus</span>
              <span className="text-sm">BYD se supera mais uma vez e apresenta</span>
              <span className="text-[#838383]">R$ 40.000,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}