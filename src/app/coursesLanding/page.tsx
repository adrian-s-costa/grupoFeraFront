"use client"

import { Rating } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { teste2 } from "../../../utils/api/service";
import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import Loader from "../loader/page";
import { getUser } from "../../../utils/api/service";
import { ToastContainer, toast } from 'react-toastify';

export default function CoursesLandpage() {
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>();

  const notify = (text: string) => toast.error(text , {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const userMail = typeof window !== "undefined" ? window.localStorage.getItem("email") : false;
  const userName = typeof window !== "undefined" ? window.localStorage.getItem("user") : false;

  useEffect(()=>{
    !userMail ? null :
    getUser(userMail)
    .then((res)=>{
      console.log(res);
      setUser(res)
      if (res.lastPaymentStaus == "approved") router.push("/courses")
    })
    .catch((err)=>{
      console.error(err)
    })
  }, [userMail])
  
  useEffect(()=>{
    fetch("https://delicate-sharing-fawn.ngrok-free.app/process_payment/preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userMail, userName }),
    })
    .then((response) => response.json())
    .then((response) => {
      setResponse(response);
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(()=>{
      setLoading(false);
    })
  }, [])

  const router = useRouter();

  function redirectLogic() {

    const link = document.querySelector('a');

    if (!user.lastPaymentStaus) {
      link!.click();
    }

    if (user.lastPaymentStatus == "reproved" || user.lastPaymentStaus == "pending") {
      router.push(`status/${user.lastPaymentId}`)
    }

    if (user.lastPaymentStaus == "approved"){
      router.push("/courses")
    }
  }

  return (<>
    { loading || typeof window == "undefined" || !user ? <Loader/> : null }
    <div className="w-full min-h-screen bg-white text-black dark:text-black xxs:mb-0  relative">
        <Image 
          quality={100}
          src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1730779961/Pa%CC%81gina_curso_Fera_1_g9bxub.png"}
          className="w-full h-screen z-0 absolute pb-[50px]"
          alt={""}
          width={500}
          height={900} 
          priority
          >
        </Image>
        <div className="w-full flex justify-center z-10 absolute bottom-10">
          <div className="w-full flex flex-col items-center">
            <p className="w-[270px] text-[24px] font-bold text-white text-center">Dominando o Mercado de Carros Híbridos</p>
            <p className="w-[240px] text-[16px] font-medium text-gray-400 text-center mt-3">Conhecendo a Tecnologia Híbrida para uma Venda Eficaz</p>

            <button className="font-bold text-white bg-[#04377B] px-[32px] py-[12px] w-[234px] rounded-[30px] mt-[47px]" onClick={()=>{redirectLogic()}}>Já tenho acesso!</button>

            <a href={response && response.init_point} className="w-[240px] text-[16px] font-medium text-white text-center mt-3 mb-[47px]">Quer adquirir? <b className="text-[#EB4335]">Clique aqui!</b></a>
          </div>
        </div>
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </div>
    </>
  );
}