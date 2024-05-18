'use client'

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdArrowBackIos } from "react-icons/md";
import { useRouter, useSearchParams } from 'next/navigation';
import PasswordInput from '../_components/passwordInput/passInput';
import { config } from '../../../config';
import Loader from '../loader/page';

export default function PinCode(){

  const [registerInfo, setRegisterInfo] = useState<any>({credential: "", code: "", password: "123456789", confirmPassword: "123456789"})
  const router = useRouter();
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const [passwordInfo, setPasswordInfo] = useState<any>({first: "", second: ""})
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setRegisterInfo({...registerInfo, credential: email})
  }, []);

  const notify = (message: string) => toast.error(message, {
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

  const verifyPassword = async (e: any) => {
    setLoading(true);

    e.preventDefault();

    if (passwordInfo.first !== passwordInfo.second){
      setLoading(false);
      return notify('As senhas não coincidem')
    }

    try {
      const response = await fetch(`${config.API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420"
        },
        body: JSON.stringify({ credential: email, password: passwordInfo.first, confirmPassword: passwordInfo.second })
      });
  
      if (!response.ok) {
        setLoading(false);
        throw new Error('Failed to log in');
      }

      notify2();

      setTimeout(()=>{
        setLoading(false);
        router.push(`/tab`)
      }, 1000)
  
    } catch (error) {
      setLoading(false);
      console.error('Error logging in:', error);
    }
  };
  
  return (
    <>{loading ? <Loader /> : null}<div className="w-full h-screen bg-white p-5">

      <MdArrowBackIos className='text-2xl cursor-pointer' onClick={() => { router.back(); } } />

      <h1 className="text-3xl font-bold mb-2 mt-[2.5rem]">Criar uma senha</h1>

      <span className='text-sm text-[#838383]'>Para proteger melhor a segurança da sua conta, crie uma senha para {email}</span>
      <form onSubmit={(e) => { verifyPassword(e); } } className='mt-5'>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <PasswordInput setPasswordInfo={setPasswordInfo} passwordInfo={passwordInfo} specificVar={'first'} />
          </div>
          <div>
            <PasswordInput setPasswordInfo={setPasswordInfo} passwordInfo={passwordInfo} specificVar={'second'} />
          </div>
        </div>
        <button type="submit" className="text-white mt-5 h-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entrar</button>
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



  