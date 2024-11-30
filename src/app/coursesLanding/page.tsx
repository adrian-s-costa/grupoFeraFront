"use client"

import { Rating } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { teste2 } from "../../../utils/api/service";
import axios from 'axios';

export default function CoursesLandpage() {

  const options = {
    method: 'POST',
    url: 'https://sandbox.asaas.com/api/v3/paymentLinks',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      access_token: '$aact_MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OjRkNzhlNjgyLWY4YWItNGZhNC1hODQ5LWY4N2IwMTdhN2E0Zjo6JGFhY2hfZDBjMzQ5YjEtYTlmNy00M2UwLThlNzQtZmI4MmRiMTM5M2Q1'
    },
    data: {
      billingType: 'UNDEFINED',
      chargeType: 'DETACHED',
      name: 'Venda',
      value: 5,
      dueDateLimitDays: 1,
      callback: {autoRedirect: false, successUrl: 'https://grupo-fera-front.vercel.app/'}
    }
  };
  
  axios
    .request(options)
    .then(res => console.log(res.data))
    .catch(err => console.error(err));

  const router = useRouter();

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

            <a onClick={()=>teste2()} className="w-[240px] text-[16px] font-medium text-white text-center mt-3 mb-[47px]">Quer adquirir? <b className="text-[#EB4335]">Clique aqui!</b></a>
          </div>
        </div>
    </div>
  );
}