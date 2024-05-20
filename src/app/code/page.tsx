'use client'

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { MdArrowBackIos } from "react-icons/md";
import { useRouter, useSearchParams } from 'next/navigation';
import { config } from '../../../config';
import Loader from '../loader/page';

export default function PinCode(){

  const [registerInfo, setRegisterInfo] = useState<any>({credential: "", code: "", password: "123456789", confirmPassword: "123456789"})
  const router = useRouter();
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState<boolean>(false)
  const email = searchParams.get('email')

  useEffect(() => {
    setRegisterInfo({...registerInfo, credential: email})
  }, []);

  const notify = () => toast.error('Código inválido, tente novamente', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notify2 = () => toast('Sucesso', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const verifyPinCode = async (e: string) => {
    setLoading(true) 
    try {
      const response = await fetch(`${config.API_URL}/auth/check-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420"
        },
        body: JSON.stringify({ code: e, credential: email })
      });
  
      if (!response.ok) {
        setLoading(false)
        notify()
        throw new Error('Failed to log in');
      }
      
      notify2();

      setTimeout(()=>{
        setLoading(false)
        router.push(`/password?email=${email}`)
      }, 3000)

    } catch (error) {
      setLoading(false)
      console.error('Error logging in:', error);
    }
  };
  
  return (
    <>{loading ? <Loader /> : null }<div className="w-full h-screen bg-white p-5">
      <MdArrowBackIos className='text-2xl cursor-pointer' onClick={() => { router.back(); } } />
      <h1 className="text-3xl font-bold mb-2 mt-[2.5rem] dark:text-black">Código Validação</h1>
      <span className='text-sm text-[#838383]'>Enviamos um código de ativação para o seu email {email}</span>

      <form>
        <HStack className='w-full flex justify-between mt-5'>
          <PinInput autoFocus onComplete={(e) => { verifyPinCode(e); } }>
            <PinInputField className='h-[4.5rem] w-[4rem] border-solid border-[#D8DADC] border-[1px] text-center dark:text-black items-center rounded-md text-4xl' />
            <PinInputField className='h-[4.5rem] w-[4rem] border-solid border-[#D8DADC] border-[1px] text-center dark:text-black items-center rounded-md text-4xl' />
            <PinInputField className='h-[4.5rem] w-[4rem] border-solid border-[#D8DADC] border-[1px] text-center dark:text-black items-center rounded-md text-4xl' />
            <PinInputField className='h-[4.5rem] w-[4rem] border-solid border-[#D8DADC] border-[1px] text-center dark:text-black items-center rounded-md text-4xl' />
            <PinInputField className='h-[4.5rem] w-[4rem] border-solid border-[#D8DADC] border-[1px] text-center dark:text-black items-center rounded-md text-4xl' />
          </PinInput>
        </HStack>
      </form>

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

    </div></>
  );
}  
