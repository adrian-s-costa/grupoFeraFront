'use client'

import React, { useState } from 'react';
import PricingToggle from "./_components/tab/tab"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import PasswordInput from './_components/passwordInput/passInput';

export default function Login(){

  const [isAnnual, setIsAnnual] = useState(true);
  const [loginInfo, setLoginInfo] = useState<any>({credential: "", password: ""})
  const [registerInfo, setRegisterInfo] = useState<any>({credential: "", register: true})
  const [userData, setUserData] = useState<any>(null)
  const [error, setError] = useState<boolean>(false)

  const router = useRouter(); 

  const notify = () => toast.error('Credenciais inválidas tente novamente', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });


  const postUser = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://90c6-2804-14c-7582-5093-4765-a75d-5a26-5e1a.ngrok-free.app/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });
  
      if (!response.ok) {
        notify()
        throw new Error('Failed to log in');
      }
  
      const userData = await response.json();
      setUserData(userData);
      router.push('/home')
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  
  const sendEmailCode = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://90c6-2804-14c-7582-5093-4765-a75d-5a26-5e1a.ngrok-free.app/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerInfo)
      });
  
      if (!response.ok) {
        notify()
        throw new Error('Failed to log in');
      }
  
      const userData = await response.json();
      setUserData(userData);
      router.push(`/code?email=${registerInfo.credential}`)

    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const forgotPassword = async () => {
    try {
      const response = await fetch(`https://90c6-2804-14c-7582-5093-4765-a75d-5a26-5e1a.ngrok-free.app/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({credential: loginInfo.credential, register: false})
      });
  
      if (!response.ok) {
        notify()
        throw new Error('Failed to log in');
      }
  
      const userData = await response.json();
      setUserData(userData);
      router.push(`/code?email=${loginInfo.credential}`)

    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  
  return (
    <div className="w-full h-screen bg-white p-5">
      <h1 className="text-3xl font-bold mb-4">{isAnnual ? "Entrar" : "Registrar"}</h1>   
      <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual}/>
      {isAnnual ? (
        <form onSubmit={(e)=>{postUser(e)}}>
          <div className="grid gap-6 md:grid-cols-2">  
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="mail" id="email" onChange={(event)=>{setLoginInfo({ ...loginInfo, credential: event.target.value }); setRegisterInfo({ ...registerInfo, credential: event.target.value })}} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite seu email" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <PasswordInput setPasswordInfo={setLoginInfo} passwordInfo={loginInfo} specificVar={'password'}/>              
            </div>
          </div>
          <span className="pt-2 text-sm w-full flex justify-end cursor-pointer font-medium" onClick={()=>{forgotPassword()}}>Esqueceu a senha?</span>
          <button type="submit" className="text-white mt-5 h-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entrar</button>
        </form>
      ) : (
        <form onSubmit={(e)=>{sendEmailCode(e)}}>
          <div className="grid gap-6 md:grid-cols-2">  
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="mail" id="email" onChange={(event)=>{setRegisterInfo({ ...registerInfo, credential: event.target.value }); setLoginInfo({ ...loginInfo, credential: event.target.value })}} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite seu email" required />
            </div>
          </div>
          <button type="submit" className="text-white mt-5 h-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
        </form>
      )}

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
        theme="light"
      />

    </div>
  );
}  
