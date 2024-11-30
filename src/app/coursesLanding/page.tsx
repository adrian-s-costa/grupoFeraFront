"use client";

import { Rating } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function CoursesLandpage() {
  const [isLoading, setIsLoading] = useState(false); // Estado para controle de carregamento
  const linkRef = useRef<HTMLAnchorElement>(null); // Referência para a tag <a>

  const router = useRouter();

  const createLink = async () => {
    setIsLoading(true); // Inicia o estado de carregamento
    const url = 'https://sandbox.asaas.com/api/v3/paymentLinks';
    const options = {
      method: 'POST',
      headers: {
        cors: 'no-cors',
        accept: 'application/json',
        'content-type': 'application/json',
        access_token: '$aact_MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6Ojg0MDg0MDk0LWNlYTgtNDM1Ni04NDUzLWIwMDRiMzdhZTdmMjo6JGFhY2hfNDNiMjNhZmMtMzIyOC00MzI4LWFmNjItMWJkZTNmMmQ1YTVl'
      },
      body: JSON.stringify({
        billingType: 'UNDEFINED',
        chargeType: 'DETACHED',
        name: 'Assinatura Grupo Fera Cursos',
        value: 5,
        callback: { successUrl: 'https://grupo-fera-front.vercel.app/', autoRedirect: false },
        dueDateLimitDays: 1
      })
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);

      if (linkRef.current && json && json.url) {
        // Atualiza o atributo href da tag <a>
        linkRef.current.href = json.url;

        // Simula um clique na tag <a>
        linkRef.current.click();
      } else {
        console.error('Link não encontrado na resposta:', json);
      }
    } catch (error) {
      console.error('Erro ao criar link:', error);
    } finally {
      setIsLoading(false); // Finaliza o estado de carregamento
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-black dark:text-black xxs:mb-0 relative">
      <Image
        quality={100}
        src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1730779961/Pa%CC%81gina_curso_Fera_1_g9bxub.png"}
        className="w-full h-screen z-0 absolute pb-[50px]"
        alt={""}
        width={500}
        height={900}
      />
      <div className="w-full flex justify-center z-10 absolute bottom-10">
        <div className="w-full flex flex-col items-center">
          <p className="w-[270px] text-[24px] font-bold text-white text-center">
            Dominando o Mercado de Carros Híbridos
          </p>
          <p className="w-[240px] text-[16px] font-medium text-gray-400 text-center mt-3">
            Conhecendo a Tecnologia Híbrida para uma Venda Eficaz
          </p>

          <button
            className="font-bold text-white bg-[#04377B] px-[32px] py-[12px] w-[234px] rounded-[30px] mt-[47px]"
            onClick={() => {
              router.push('/courses');
            }}
          >
            Já tenho acesso!
          </button>

          <a
            href="#"
            ref={linkRef}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[240px] text-[16px] font-medium text-white text-center mt-3 mb-[47px] ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={(e) => {
              e.preventDefault(); // Impede o redirecionamento imediato
              if (!isLoading) createLink(); // Gera o link se não estiver carregando
            }}
          >
            {isLoading ? 'Gerando link...' : 'Quer adquirir? '}
            <b className="text-[#EB4335]">Clique aqui!</b>
          </a>
        </div>
      </div>
    </div>
  );
}
