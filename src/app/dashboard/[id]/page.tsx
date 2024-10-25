"use client"

import { MdArrowBackIos } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import { getOneCategoryContent } from "../../../../utils/api/service";
import { Table, Tabs } from "flowbite-react";
import Tables from "@/app/_components/table/table";

export default function Campaign({ params }: { params: { id: string } }){
  const searchParams = useSearchParams();
  const [contact, setContact] = useState<Boolean>(false)
  const [content, setContent] = useState<any>()
  
  const router = useRouter();

  useEffect(() => {
    try {
      getOneCategoryContent(params.id).then((res)=>{
        setContent(res);
      })    
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <div className="w-full min-h-screen h-full bg-gray-100 p-5 pb-20">
        <div className="w-full flex justify-center relative">
          <MdArrowBackIos className='text-2xl left-0 cursor-pointer absolute text-black' onClick={() => {router.back()} } />
          
          <Image 
            src={"https://api.grupofera.app.br/profile/logo-1.png"} 
            alt={""}
            width={70}
            height={1160}          
          />  
          
        </div>
        
        {/* <div className="xxs:h-[15rem] my-5">
          <Carousel draggable={true}>
            {
              content && content.secondaryImgs.map((img: any, index: any)=>{
                return <img src={img.imgSrc} alt="..." key={index} />
              })
            }
          </Carousel>
        </div> */}
        <div className="w-full relative pt-5">
          <div className="bg-white w-full w-full p-2 mb-5 rounded-md">
          <p className="font-medium text-black dark:text-black">
            Relátorio
          </p>

          </div>
          <div className="bg-white absolute w-full w-full h-[50px] rounded-md">{" "}</div>
          <Tabs aria-label="Pills" style="pills" className="justify-between">
            <Tabs.Item active title="Dia" className="enabled:bg-black">
              <Tables impressions={content && content.measures && content.measures.day.dayChangePercentage} CTR={content && content.measures && content.measures.day.dayChangeCTR} clicks={content && content.measures && content.measures.day.dayChangeClick}/>
            </Tabs.Item>
            <Tabs.Item title="Semana">
              <Tables impressions={content && content.measures && content.measures.week.weekChangePercentage} CTR={content && content.measures && content.measures.week.weekChangeCTR} clicks={content && content.measures && content.measures.week.weekChangeClick}/>
            </Tabs.Item>
            <Tabs.Item title="Mês">
              <Tables impressions={content && content.measures && content.measures.month.monthChangePercentage} CTR={content && content.measures && content.measures.month.monthChangeCTR} clicks={content && content.measures && content.measures.month.monthChangeClick}/>
            </Tabs.Item>
            <Tabs.Item title="Ano">
              <Tables impressions={content && content.measures && content.measures.year.yearChangePercentage} CTR={content && content.measures && content.measures.year.yearChangeCTR} clicks={content && content.measures && content.measures.year.yearChangeClick}/>
            </Tabs.Item>
          </Tabs>
          </div>
        </div>
    </>
  )   
}