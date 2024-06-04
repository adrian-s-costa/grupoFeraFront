"use client"

import { MdArrowBackIos } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState, Suspense } from "react";
import { carrosInfo } from "../../../content";

export default function SpecificOffer(){

  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '';
  const price = searchParams.get('price') || '';
  const imageSrc = searchParams.get('imageSrc') || '';
  const index = Number(searchParams.get('index'))
  const [contact, setContact] = useState<Boolean>(false)
  
  const router = useRouter();

  const notify = () => toast.success('Recebemos o seu contato e em breve um vendedor entrará em contato!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const handleContact = async () => {
    if (contact) return null;
    setContact(true);
    try {
      const response = await fetch(`https://acesso.meets.com.br/oportunidade/salvar`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '8F0E1C73-859A-3602-FCAE-89A4FB2F9BA7'
        },
        body: JSON.stringify({
          id_usuario: "34949",
          id_origem: localStorage.getItem('id'),
          razao_cliente: localStorage.getItem('user'),
          fantasia: localStorage.getItem('user'),
          email_cliente: localStorage.getItem('email'), 
          celular_cliente: localStorage.getItem('number'), 
          descricao: `${localStorage.getItem("user")} quer iniciar uma negociação do produto: ${carrosInfo[index].title}`,
          valor: price,
        })
      });
      if (!response.ok) {
        throw new Error('Failed to fetch video');
      }
      const responseData = await response.json();
      notify();
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  }

  return (
    <Suspense>
      <div className="w-full min-h-screen h-full bg-white p-5 pb-20">
        <div className="w-full flex justify-center relative">
          <MdArrowBackIos className='text-2xl left-0 cursor-pointer absolute text-black' onClick={() => {router.push("/tab")} } />
          
          <Image 
            src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1716225168/lferabck_i6wp0c.png"} 
            alt={""}
            width={70}
            height={1160}          
          />  
          
        </div>
        
        <Image
          quality={100}
          priority={true}
          className="rounded-md mt-5"
          src={carrosInfo[index].imageScr}
          alt={""}
          width={1920}
          height={1}
        ></Image>

        <h1 className="text-2xl xxs:text-md font-bold mt-[1rem] text-black dark:text-black">{carrosInfo[index].title}</h1>
        <pre className='text-sm text-black whitespace-pre-wrap break-words'>
          {carrosInfo[index].texto}
        </pre>
        <div className="fixed left-0 bottom-0 w-full flex justify-between p-5 h-20 bg-white">
          <h1 className="xs:text-lg font-bold text-black dark:text-black flex items-center xxs:text-sm">{carrosInfo[index].price}</h1>
          <button className="rounded-full xxs:text-[0.6rem] bg-blue-600 font-bold text-white xs:text-sm xs:py-[0.3rem] xs:px-[0.5rem] xxs:px-[0.5rem]" onClick={()=>{handleContact()}}>Comece uma negociação</button>
        </div>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      
      </div>
    </Suspense>
  )   
}