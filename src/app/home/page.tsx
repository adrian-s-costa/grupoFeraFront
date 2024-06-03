"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home(){
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const router = useRouter()

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

  const fullName =  typeof window !== "undefined" ? window.localStorage.getItem('user') : false;
  const firstName = fullName ? fullName.split(' ')[0] : '';

  return(
    <div className="w-full min-h-screen h-auto bg-white p-5 text-black dark:text-black">
      <h1 className="xs:text-3xl xxs:text-2xl font-bold ">Fala, {firstName}</h1>
      <span className="xxs:text-sm xs:text-base">ou devo te chamar de Fera?</span>
      <div className="my-5 h-auto relative">
        <video className="rounded-lg" width={viewportWidth} autoPlay={true} muted={true} loop={true} controls={false} playsInline>
          <source src={`https://res.cloudinary.com/dmo7nzytn/video/upload/v1715727314/fera_hv10wj.mp4`} type="video/mp4"/>  
        </video>
        <div className="absolute bg-gray-400/50 p-2 rounded-md bottom-4 left-4 z-10 cursor-pointer">
          <span className="opacity-100 text-white" onClick={()=>{router.push('/tab?options=1')}}>Mais videos</span>
        </div>
      </div>
      <div className="flex justify-between mb-3">
        <h1 className="xs:text-xl xxs:text-base font-bold">Categorias</h1>
        <h1 className="xs:text-xl xxs:text-base font-semibold text-red-600">Ver todas</h1>
      </div>
      <div className="flex justify-between">
        <div className="max-w-20 flex flex-col gap-2">
          <div className="xs:w-20 xxs:w-[3.5rem] xxs:h-[3.5rem] xs:h-20 flex justify-center items-center max-w-20 bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726211/eletric_p4x05f.png"}
            width={50}
            height={50}
            className="xxs:w-[2rem] xxs:h-[2rem] xs:w-12 xs:h-12"

            alt="category"
            ></Image>
          </div>
          <span className="xxs:text-[0.6rem] xs:max-w-20 xxs:max-w-10 xs:text-[0.9rem] ">Acessórios Automotivos</span>
        </div>
        
        <div className="max-w-20 flex flex-col gap-2">
          <div className="xs:w-20 xxs:w-[3.5rem] xxs:h-[3.5rem] xs:h-20 flex justify-center items-center  bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726211/gasoline_bauvwp.png"}
            width={50}
            height={50}
            className="xxs:w-[2rem] xxs:h-[2rem] xs:w-12 xs:h-12"
            alt="category"
            ></Image>
          </div>
          <span className="xxs:text-[0.6rem] xs:max-w-20 xxs:max-w-10 xs:text-[0.9rem]  " >Blindagem</span>
        </div>
        
        <div className="max-w-20 flex flex-col gap-2">
          <div className="xs:w-20 xxs:w-[3.5rem] xxs:h-[3.5rem] xs:h-20 flex justify-center items-center bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726210/acessory_hyzyjb.png"}
            width={50}
            height={50}
            className="xxs:w-[2rem] xxs:h-[2rem] xs:w-12 xs:h-12"
            alt="category"
            ></Image>
          </div>
          <span className="xxs:text-[0.6rem] xs:max-w-20 xxs:max-w-10 xs:text-[0.9rem]  " >BYD por Assinatura</span>
        </div>
        
        <div className="max-w-20 flex flex-col gap-2">
          <div className="xs:w-20 xxs:w-[3.5rem] xxs:h-[3.5rem] xs:h-20 flex justify-center items-center bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726211/service_e6kz4v.png"}
            width={50}
            height={50}
            className="xxs:w-[2rem] xxs:h-[2rem] xs:w-12 xs:h-12"
            alt="category"
            ></Image>
          </div>
          <span className="xxs:text-[0.6rem] xs:max-w-20 xxs:max-w-10 xs:text-[0.9rem]  " >Proteção Veícular</span>
        </div>      
      </div>
      
      <div className="xs:mt-8 xxs:mt-5">
        <h1 className="xxs:text-sm xs:text-lg font-bold mb-4">Compre seu BYD com o Felipe Fera</h1>
        <div className="flex overflow-x-scroll gap-3">
          <Link
            href={{
              pathname: '/offer',
              query: { title: 'BYD SEAL', desc: "BYD SEAL 2024: Desbloqueie a adrenalina", price: "296.800,00", imageSrc: 'https://res.cloudinary.com/dmo7nzytn/image/upload/v1715732181/IMG_0195_mbuwuz.jpg'},
            }}
          >
            <Image quality={100} className="xxs:w-[202px] xxs:h-[117px] xs:w-[232px] xs:h-[147px] rounded-lg mb-2 xs:min-w-[232px] xs:min-h-[147px] xxs:min-w-[202px] xxs:min-h-[117px] bg-cover" src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715732181/IMG_0195_mbuwuz.jpg"} alt={""} width={230} height={125}/>
            <div className="flex flex-col gap-1">
              <span className="xs:text-base xxs:text-sm font-semibold">BYD SEAL</span>
              <span className="xs:text-sm xxs:text-xs">BYD SEAL 2024: Desbloqueie a adrenalina</span>
              <span className="text-[#838383] xs:text-base xxs:text-sm dark:text-black">R$ 296.800,00</span>
            </div>
          </Link>
          <Link
            href={{
              pathname: '/offer',
              query: { title: 'BYD Yuan Plus', desc: "BYD Yuan Plus: O SUV elétrico", price: "30.000,00", imageSrc: 'https://res.cloudinary.com/dmo7nzytn/image/upload/v1715727136/cc_t8pro-hybrid_design_4_2_immwzg.png'},
            }}
          >
            <Image quality={100} className="xxs:w-[202px] xxs:h-[117px] xs:w-[232px] xs:h-[147px] rounded-lg mb-2 xs:min-w-[232px] xs:min-h-[147px] xxs:min-w-[202px] xxs:min-h-[117px] bg-cover" src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715727136/cc_t8pro-hybrid_design_4_2_immwzg.png"} alt={""} width={230} height={125}/>
            <div className="flex flex-col gap-1">
              <span className="xs:text-base xxs:text-sm font-semibold">BYD Yuan Plus</span>
              <span className="xs:text-sm xxs:text-xs">BYD Yuan Plus: O SUV elétrico</span>
              <span className="text-[#838383] xs:text-base xxs:text-sm dark:text-black">R$ 30.000,00</span>
            </div>
          </Link>
          <Link
            href={{
              pathname: '/offer',
              query: { title: 'BYD Song Plus', desc: "BYD se supera mais uma vez e apresenta", price: "40.000,00", imageSrc: "https://res.cloudinary.com/dmo7nzytn/image/upload/v1717340102/grupo-fera/images/i645504_mqpkqx.jpg"},
            }}
          >
            <Image quality={100} className="xxs:w-[202px] xxs:h-[117px] xs:w-[232px] xs:h-[147px] rounded-lg mb-2 xs:min-w-[232px] xs:min-h-[147px] xxs:min-w-[202px] xxs:min-h-[117px] bg-cover" src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1717340102/grupo-fera/images/i645504_mqpkqx.jpg"} alt={""} width={230} height={125}/>
            <div className="flex flex-col gap-1">
              <span className="xs:text-base xxs:text-sm font-semibold">BYD Song Plus</span>
              <span className="xs:text-sm xxs:text-xs">BYD se supera mais uma vez e apresenta</span>
              <span className="text-[#838383] xs:text-base xxs:text-sm dark:text-black">R$ 40.000,00</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}