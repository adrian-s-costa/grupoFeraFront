"use client"

import { MdArrowBackIos } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState, Suspense, useEffect } from "react";
import ReadMore from "../_components/readMore/readMore";
import { getOneCampaign } from "../../../utils/api/service";
import ModalImage from "react-modal-image";

export default function SpecificOffer(){
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [contact, setContact] = useState<Boolean>(false);
  const [carOffer, setCarOffer] = useState<any>();

  useEffect(() => {
    try {
      getOneCampaign(id).then((res)=>{
        setCarOffer(res);
      })
    } catch (error) {
      console.error(error)
    }
  }, [])
  
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
          descricao: `${localStorage.getItem("user")} quer iniciar uma negociação do produto: ${carOffer.title}`,
          valor: carOffer.price,
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
          <div className="h-full flex items-center">
            <MdArrowBackIos className='text-2xl left-0 cursor-pointer absolute text-black' onClick={() => {router.push("/tab")}} />
          </div>

          <Image 
            src={"https://storage.googleapis.com/videos-grupo-fera/static/logos/logo.webp"} 
            alt={""}
            width={70}
            height={1160}          
          />  
          
        </div>
        
        <Image
          quality={100}
          priority={true}
          className="rounded-md mt-5"
          src={carOffer && carOffer.imgSrc}
          alt={""}
          width={1920}
          height={1}
        ></Image>

        <h1 className="text-2xl xxs:text-md font-bold mt-[1rem] text-black dark:text-black">{carOffer && carOffer.title}</h1>
        {!carOffer ? null : <ReadMore text={carOffer && carOffer.texto!} maxLength={100} />}

        <div className="xs:mt-8 xxs:mt-5">
          <div className="flex overflow-x-scroll gap-3">
            {carOffer && carOffer.secondaryImgs.map((carro: any, index: any)=>{
              return <div
                className="
                  relative
                "
                key={carro.id}
              >
                {/* <Badge color="warning" size="sm">Dolphin Day!</Badge> */}
                <ModalImage
                  className="
                  xxs:w-[202px] xxs:h-[117px] xs:w-[232px] xs:h-[147px]  xs:min-w-[232px] xs:min-h-[147px] xxs:min-w-[202px] xxs:min-h-[117px] rounded-lg mb-2 bg-cover
                  "
                  small={carro.imgSrc!}
                  large={carro.imgSrc!}
                />
              
              </div>
            })}
          </div>
        </div>

        <div className="fixed left-0 bottom-0 w-full flex justify-between p-5 h-20 bg-white">
          <h1 className="xs:text-lg font-bold text-black dark:text-black flex items-center xxs:text-sm">{carOffer && carOffer.price}</h1>
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
  )   
}