"use client"

import { MdArrowBackIos } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import { getOneCategoryContent } from "../../../../utils/api/service";
import { Table } from "flowbite-react";

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
      <div className="w-full min-h-screen h-full bg-white p-5 pb-20">
        <div className="w-full flex justify-center relative">
          <MdArrowBackIos className='text-2xl left-0 cursor-pointer absolute text-black' onClick={() => {router.back()} } />
          
          <Image 
            src={"https://api.grupofera.app.br/profile/logo-1.png"} 
            alt={""}
            width={70}
            height={1160}          
          />  
          
        </div>
        
        <div className="xxs:h-[15rem] my-5">
          <Carousel draggable={true}>
            {
              content && content.secondaryImgs.map((img: any, index: any)=>{
                return <img src={img.imgSrc} alt="..." key={index} />
              })
            }
          </Carousel>
        </div>
        <div className="w-full">
            <Table>
                <Table.Head>
                <Table.HeadCell>Propriedade</Table.HeadCell>
                <Table.HeadCell>Valor</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Nome'}
                    </Table.Cell>
                    <Table.Cell>{content && content.title}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Visualizações
                    </Table.Cell>
                    <Table.Cell>{content && content.views}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Interações</Table.Cell>
                    <Table.Cell>{content && content.views}</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            </div>
        </div>
    </>
  )   
}