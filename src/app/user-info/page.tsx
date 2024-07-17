'use client'

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdArrowBackIos } from "react-icons/md";
import { useRouter, useSearchParams } from 'next/navigation';
import { config } from '../../../config';
import Loader from '../loader/page';
import {useForm} from 'react-hook-form'
import { normalizeCepNumber, normalizePhoneNumber } from '../../../utils/api/masks/masks';
import InputMask from 'react-input-mask';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';

export default function UserInfo(){

  const [additionalInfo, setAdditionalInfo] = useState<any>({id: "", name: "", secName: "", tel: "", bornDate: "", cep: ""})
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter();

  useEffect(() => {
    setAdditionalInfo({...additionalInfo, id: localStorage.getItem('id')})
  }, []);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'O nome precisa ter mais de 2 caracteres')
      .max(50, 'Too Long!')
      .required('Required'),
    cep: Yup.string()
      .min(8, 'Digite um cep válido')
      .required('Required'),
    tel: Yup.number().required('Required').max(2),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      cep: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(formik.errors)
    },
  });

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

  const verifyUserData = async (e: any) => {

    setLoading(true);
    e.preventDefault();
    
    try {
      const response = await fetch(`${config.API_URL}/auth/update-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420"
        },
        body: JSON.stringify(additionalInfo)
      });
  
      if (!response.ok) {
        setLoading(false)
        throw new Error('Failed to log in');
      }

      const newUser = await response.json()

      localStorage.setItem('user', newUser.name);
      localStorage.setItem('id', newUser.id);
      localStorage.setItem('email', newUser.email);
      localStorage.setItem('bornDate', newUser.bornDate);
      localStorage.setItem('number', newUser.cellphone);
      localStorage.setItem('cep', normalizeCepNumber(newUser.cep));

      notify2();

      setLoading(false)

      router.push('/tab')
  
    } catch (error) {
      setLoading(false)
      console.error('Error logging in:', error);
    }
  };
  
  return (
    <>{ loading ? <Loader /> : null }<div className="w-full h-screen bg-white p-5">

      <MdArrowBackIos className='text-2xl cursor-pointer' onClick={() => { router.back(); } } />

      <h1 className="text-3xl font-bold mb-2 mt-[2.5rem] text-black dark:text-gray-900">Estamos quase lá!</h1>

      <span className='text-sm text-[#838383]'>Para podermos nos comunicar melhor informe nome e sobrenome</span>
      <form onSubmit={(e) => { verifyUserData(e) }} className='mt-5'>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Nome</label>
            <input type="text" id="name" onChange={(event) => { setAdditionalInfo({ ...additionalInfo, name: event.target.value }); } } className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite seu nome" required />
          </div>
          <div>
            <label htmlFor="secName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Sobrenome</label>
            <input type="text" id="secName" onChange={(event) => { setAdditionalInfo({ ...additionalInfo, secName: event.target.value }); } } className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite seu sobrenome" required />
          </div>
          <div>
            <label 
              htmlFor="tel" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              Telefone
            </label>
            <input type="text" minLength={11} maxLength={11} id="tel" onChange={(event) => { setAdditionalInfo({ ...additionalInfo, tel: event.target.value }); } } className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="(99) 9 9999-9999" required />
          </div>
          <div>
            <label htmlFor="cep" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">CEP</label>
            <input type="text" minLength={8} maxLength={8} id="date" onChange={(event) => { setAdditionalInfo({ ...additionalInfo, cep: event.target.value }); } } className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="79300030" required />
          </div>
          <div>
            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 placeholder:text-black">Data de nascimento</label>
            <input type="date" id="date" onChange={(event) => { setAdditionalInfo({ ...additionalInfo, bornDate: event.target.value }); } } className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DD/MM/AAAA" required />
          </div>
        </div>
        <button type="submit" className="text-white mt-5 h-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirma</button>
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