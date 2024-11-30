"use client"

import { Rating } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CoursesLandpage() {

  const router = useRouter();

  const teste = () => {
    const url = 'https://api.asaas.com/v3/paymentLinks';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        access_token: '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDA1MTM4MDU6OiRhYWNoX2ZkNTcyYzRjLWUxNGUtNDkyYi04ZDg1LTE2NTk5ODFmMmIxMA=='
      },
      body: JSON.stringify({
        billingType: 'UNDEFINED',
        chargeType: 'DETACHED',
        name: 'alamo',
        value: 5,
        dueDateLimitDays: 1,
        callback: {autoRedirect: false, successUrl: 'https://grupo-fera-front.vercel.app/'}
      })
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error(err));
  }

  return (
    <div className="w-full min-h-screen bg-white text-black dark:text-black xxs:mb-0  relative">
        <Image 
          quality={100}
          src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1730779961/Pa%CC%81gina_curso_Fera_1_g9bxub.png"}
          className="w-full h-screen z-0 absolute pb-[50px]"
          alt={""}
          width={500}
          height={900} 
          >
        </Image>
        <div className="w-full flex justify-center z-10 absolute bottom-10">
          <div className="w-full flex flex-col items-center">
            <p className="w-[270px] text-[24px] font-bold text-white text-center">Dominando o Mercado de Carros Híbridos</p>
            <p className="w-[240px] text-[16px] font-medium text-gray-400 text-center mt-3">Conhecendo a Tecnologia Híbrida para uma Venda Eficaz</p>

            <button className="font-bold text-white bg-[#04377B] px-[32px] py-[12px] w-[234px] rounded-[30px] mt-[47px]" onClick={()=>{router.push('/courses')}}>Já tenho acesso!</button>

            <a onClick={()=>teste()} className="w-[240px] text-[16px] font-medium text-white text-center mt-3 mb-[47px]">Quer adquirir? <b className="text-[#EB4335]">Clique aqui!</b></a>
          </div>
        </div>
    </div>
  );
}