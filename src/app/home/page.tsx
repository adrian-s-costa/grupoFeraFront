"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "flowbite-react";
import Loader from "../loader/page";
import { getHomeCategories, getCampaigns } from "../../../api/service";

export default function Home({setTabIndex}: any){
  const [ homeCategories, setHomeCategories ] = useState<any>()
  const [ campaigns, setCampaigns ] = useState<any>()
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const router = useRouter()

  useEffect(() => {
    try {
      getHomeCategories().then((res)=>{
        setHomeCategories(res);
      })
    } catch (error) {
      console.error(error)
    }

    try {
      getCampaigns().then((res)=>{
        setCampaigns(res);
      })
    } catch (error) {
      console.error(error)
    }

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
    <div className="w-full min-h-screen h-auto bg-white p-5 text-black dark:text-black xxs:mb-0 xs:mb-14">
      <h1 className="xs:text-3xl xxs:text-2xl font-bold ">Fala, {!fullName ? '' : firstName}</h1>
      <span className="xxs:text-sm xs:text-base">ou devo te chamar de Fera?</span>
      <div className="my-5 h-auto relative">
        <video className="rounded-lg" width={viewportWidth} autoPlay={true} muted={true} loop={true} controls={true} playsInline>
          <source src={`https://res.cloudinary.com/dmo7nzytn/video/upload/v1715727314/fera_hv10wj.mp4`} type="video/mp4"/>  
        </video>
        <div className="absolute bg-gray-400/50 p-2 rounded-md bottom-4 left-4 z-10 cursor-pointer" onClick={()=>{setTabIndex(1)}}>
          <span className="opacity-100 text-white">Mais videos</span>
        </div>
      </div>
      <div className="flex justify-between mb-3">
        <h1 className="xs:text-xl xxs:text-base font-bold">Categorias</h1>
        <h1 className="xs:text-xl xxs:text-base font-semibold text-red-600" onClick={()=>{router.push(`/allCategoryList`)}}>Ver todas</h1>
      </div>
      <div className="flex overflow-x-scroll gap-2 pb-3">
        {homeCategories && homeCategories.map((category: any, index: number)=>{
          return <div className="max-w-20 flex flex-col gap-2 cursor-pointer" onClick={()=>{router.push(`/categoryList?name=${category.name}`)}} key={index}>
          <div className="xs:w-20 xxs:w-[3.5rem] xxs:h-[3.5rem] xs:h-20 flex justify-center items-center max-w-20 bg-[#F3F5F7] rounded-lg">
            <Image
            src={category.imgSrc}
            priority={true}
            width={50}
            height={50}
            className="xxs:w-[2rem] xxs:h-[2rem] xs:w-[3.125rem] xs:h-[3.125rem]"

            alt="category"
            ></Image>
          </div>
          <span className="xxs:text-[0.6rem] xs:max-w-20 xxs:max-w-10 xs:text-[0.9rem] break-words">{category.name}</span>
        </div>
        })}     
      </div>
      
      <div className="xs:mt-5 xxs:mt-2">
        <h1 className="xxs:text-sm xs:text-lg font-bold mb-4">Compre seu VE</h1>
        <div className="flex overflow-x-scroll gap-3">
          {campaigns && campaigns.map((carro: any, index: number)=>{
            return <Link
              href={{
                pathname: '/offer',
                query: { id: carro.id },
              }}
              key={index}
              className="relative"
            >
              <Badge color="warning" size="sm" className={ carro.title.includes('Dolphin') ? `block absolute right-2 top-2` : `hidden`}>Dolphin Day!</Badge>
              <Image quality={100} priority={true} className="xxs:w-[202px] xxs:h-[117px] xs:w-[232px] xs:h-[147px] rounded-lg mb-2 xs:min-w-[232px] xs:min-h-[147px] xxs:min-w-[202px] xxs:min-h-[117px] bg-cover" src={carro.imgSrc!} alt={""} width={230} height={125}/>
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