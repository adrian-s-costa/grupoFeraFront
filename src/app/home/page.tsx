"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { carrosInfo } from "../../../content";
import { Badge } from "flowbite-react";
import Loader from "../loader/page";

export default function Home(){
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const router = useRouter()

  const categories = [
    {
      categoryName: "Acessórios Automotivos"
    },
    {
      categoryName: "Blindagem"
    },
    {
      categoryName: "BYD por Assinatura"
    },
    {
      categoryName: "Proteção Veícular"
    }
  ]

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

  const fullName = typeof window !== "undefined" ? window.localStorage.getItem('user') : false;
  if (fullName == "Sem Nome") router.push(`/user-info`)
  const firstName = fullName ? fullName.split(' ')[0] : '';

  return(
    <>
    { !fullName || firstName == '' ? <Loader/> : null }
    <div className="w-full min-h-screen h-auto bg-white p-5 text-black dark:text-black xxs:mb-0 xs:mb-10">
      <h1 className="xs:text-3xl xxs:text-2xl font-bold ">Fala, {!fullName ? '' : firstName}</h1>
      <span className="xxs:text-sm xs:text-base">ou devo te chamar de Fera?</span>
      <div className="my-5 h-auto relative">
        <video className="rounded-lg" width={viewportWidth} autoPlay={true} muted={true} loop={true} controls={true} playsInline>
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
        <div className="max-w-20 flex flex-col gap-2 cursor-pointer" onClick={()=>{router.push(`/category?name=${categories[0].categoryName}`)}}>
          <div className="xs:w-20 xxs:w-[3.5rem] xxs:h-[3.5rem] xs:h-20 flex justify-center items-center max-w-20 bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726211/grupo-fera/icons/eletric_p4x05f.png"}
            priority={true}
            width={50}
            height={50}
            className="xxs:w-[2rem] xxs:h-[2rem] xs:w-[3.125rem] xs:h-[3.125rem]"

            alt="category"
            ></Image>
          </div>
          <span className="xxs:text-[0.6rem] xs:max-w-20 xxs:max-w-10 xs:text-[0.9rem] ">Acessórios Automotivos</span>
        </div>
        
        <div className="max-w-20 flex flex-col gap-2 cursor-pointer" onClick={()=>{router.push(`/category?name=${categories[1].categoryName}`)}}>
          <div className="xs:w-20 xxs:w-[3.5rem] xxs:h-[3.5rem] xs:h-20 flex justify-center items-center  bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726211/grupo-fera/icons/gasoline_bauvwp.png"}
            priority={true}
            width={50}
            height={50}
            className="xxs:w-[2rem] xxs:h-[2rem] xs:w-[3.125rem] xs:h-[3.125rem]"
            alt="category"
            ></Image>
          </div>
          <span className="xxs:text-[0.6rem] xs:max-w-20 xxs:max-w-10 xs:text-[0.9rem]">Blindagem</span>
        </div>
        
        <div className="max-w-20 flex flex-col gap-2 cursor-pointer" onClick={()=>{router.push(`/category?name=${categories[2].categoryName}`)}}>
          <div className="xs:w-20 xxs:w-[3.5rem] xxs:h-[3.5rem] xs:h-20 flex justify-center items-center bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726210/grupo-fera/icons/acessory_hyzyjb.png"}
            priority={true}
            width={50}
            height={50}
            className="xxs:w-[2rem] xxs:h-[2rem] xs:w-[3.125rem] xs:h-[3.125rem]"
            alt="category"
            ></Image>
          </div>
          <span className="xxs:text-[0.6rem] xs:max-w-20 xxs:max-w-10 xs:text-[0.9rem]">BYD por Assinatura</span>
        </div>
        
        <div className="max-w-20 flex flex-col gap-2 cursor-pointer" onClick={()=>{router.push(`/category?name=${categories[3].categoryName}`)}}>
          <div className="xs:w-20 xxs:w-[3.5rem] xxs:h-[3.5rem] xs:h-20 flex justify-center items-center bg-[#F3F5F7] rounded-lg">
            <Image
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1715726211/grupo-fera/icons/service_e6kz4v.png"}
            priority={true}
            width={50}
            height={50}
            className="xxs:w-[2rem] xxs:h-[2rem] xs:w-[3.125rem] xs:h-[3.125rem]"
            alt="category"
            ></Image>
          </div>
          <span className="xxs:text-[0.6rem] xs:max-w-20 xxs:max-w-10 xs:text-[0.9rem]">Proteção Veícular</span>
        </div>      
      </div>
      
      <div className="xs:mt-8 xxs:mt-5">
        <h1 className="xxs:text-sm xs:text-lg font-bold mb-4">Compre seu BYD com o Felipe Fera</h1>
        <div className="flex overflow-x-scroll gap-3">
          {carrosInfo.map((carro, index)=>{
            return <Link
              href={{
                pathname: '/offer',
                query: { index },
              }}
              key={index}
              className="relative"
            >
              <Badge color="warning" size="sm" className={ carro.title.includes('Dolphin') ? `block absolute right-2 top-2` : `hidden`}>Dolphin Day!</Badge>
              <Image quality={100} priority={true} className="xxs:w-[202px] xxs:h-[117px] xs:w-[232px] xs:h-[147px] rounded-lg mb-2 xs:min-w-[232px] xs:min-h-[147px] xxs:min-w-[202px] xxs:min-h-[117px] bg-cover" src={carro.imageScr!} alt={""} width={230} height={125}/>
              <div className="flex flex-col gap-1 xxs:w-[202px] xs:w-[232px]">
                <span className="xs:text-base xxs:text-sm font-semibold">{carro.title}</span>
                <span className="xs:text-sm xxs:text-xs">{carro.desc}</span>
                <span className="text-[#838383] xs:text-base xxs:text-sm dark:text-black">{carro.price}</span>
              </div>
            </Link>
          })}
        </div>
      </div>
    </div>
    </>
  )
}