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
import { ChartComponent } from "@/app/_components/chart/Chart";
import Loader from "@/app/loader/page";
import { Skeleton } from "@/components/ui/skeleton"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectComponent } from "@/app/_components/select/select";
import FixedDate from "@/app/_components/fixedDate/fixedDate";
import { PickDate } from "@/app/_components/pickDate/pickDate";
import React from "react";
import { ChartBarComponent } from "@/app/_components/chart/ChartBar";

export default function Campaign({ params }: { params: { id: string } }){
  const searchParams = useSearchParams();
  const [contact, setContact] = useState<Boolean>(false)
  const [content, setContent] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true);
  const [modoDash, setModoDash] = useState<string>("fixo");
  const [date, setDate] = React.useState<Date>()
  const [ activeValues, setActiveValues ] = useState<any>(
  [
    {
      valores: "Valores",
      impressions: 0,
      click: 0,
      ctr: 0
    }
  ])

  const router = useRouter();

  useEffect(() => {
    setLoading(true)
    try {
      getOneCategoryContent(params.id).then((res)=>{
        setContent(res);
        setLoading(false);
      })    
    } catch (error) {
      console.error(error)
    }
  }, [])

    
  return (
    <div className="w-full min-h-screen h-full bg-gray-100 p-5 pb-20">
      <div className="w-full flex justify-center relative">
        <MdArrowBackIos
          className="text-2xl left-0 cursor-pointer absolute text-black"
          onClick={() => {
            router.back();
          }}
        />
  
        <Image
          src={"https://api.grupofera.app.br/profile/logo-1.png"}
          alt={""}
          width={70}
          height={1160}
        />
      </div>
  
      {/* 
      <div className="xxs:h-[15rem] my-5">
        <Carousel draggable={true}>
          {
            content && content.secondaryImgs.map((img: any, index: any)=>{
              return <img src={img.imgSrc} alt="..." key={index} />
            })
          }
        </Carousel>
      </div> 
      */}
  
      <div className="w-full relative pt-5">
        <div className="bg-white w-full p-2 mb-5 flex justify-between items-center rounded-md">
          <p className="font-medium text-black dark:text-black">Relatório</p>
          <SelectComponent setMode={setModoDash}/>
        </div>
        
        {
          modoDash === "fixo" ? 
            <>
              <FixedDate loading={loading} content={content} setActiveValues={setActiveValues}/>
              <ChartBarComponent activeValues={activeValues}/>
            </>
          :
          <>
            <PickDate date={date} setDate={setDate}/>
            <Tables
              impressions={"-"}
              CTR={"-"}
              clicks={"-"}
              
            />
            <ChartComponent />
          </>
        }
      </div>
    </div>
  )}