"use client"

import { MdArrowBackIos } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState, Suspense } from "react";

export default function CategoryPage(){
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';
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
          'Authorization': '2047EFFE-4A85-BD7D-A918-E28C2AC780A8'
        },
        body: JSON.stringify({
          id_usuario: 35185,
          id_origem: 313,
          razao_cliente: localStorage.getItem('user'),
          fantasia: localStorage.getItem('user'),
          email_cliente: localStorage.getItem('email'), 
          celular_cliente: localStorage.getItem('number'), 
          descricao: `${localStorage.getItem("user")} quer iniciar uma negociação do produto: `,
          valor: ''
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
        
        <h1 className="text-2xl xxs:text-md font-bold mt-[1rem] text-black dark:text-black">{name}</h1>
        <div className="fixed left-0 bottom-0 w-full flex justify-between p-5 h-20 bg-white">
          <h1 className="xs:text-lg font-bold text-black dark:text-black flex items-center xxs:text-sm">Teste</h1>
          <button className="rounded-full xxs:text-[0.6rem] bg-blue-600 font-bold text-white xs:text-sm xs:py-[0.3rem] xs:px-[0.5rem] xxs:px-[0.5rem]" onClick={()=>{}}>Teste</button>
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
  )   
}