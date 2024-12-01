'use client'

import { Payment } from '@mercadopago/sdk-react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

initMercadoPago('APP_USR-8f6a300a-b0ba-4e33-a08a-87b0b8d6614c');

export default function BrickTsx() {

    const [paymentResult, setPaymentResult] = useState<any>(null)

    const initialization = {
        amount: 100,
        preferenceId: "<PREFERENCE_ID>",
       };
       const customization = {
        paymentMethods: {
            creditCard: "all",
            debitCard: "all",
            ticket: "all",
            bankTransfer: "all",
            mercadoPago: "all",
            atm: "all",
          },
       };
       const onSubmit = async (
        { selectedPaymentMethod, formData } : any
       ) => {
        // callback chamado ao clicar no botão de submissão dos dados
        return new Promise<void>((resolve, reject) => {
          fetch("https://delicate-sharing-fawn.ngrok-free.app/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setPaymentResult(response);
                window.location.href = response.point_of_interaction.transaction_data.ticket_url
                resolve();
            })
            .catch((error) => {
              // lidar com a resposta de erro ao tentar criar o pagamento
              reject();
            });
        });
       };
       const onError = async (error: any) => {
        // callback chamado para todos os casos de erro do Brick
        console.log(error);
       };
       const onReady = async () => {
        /*
          Callback chamado quando o Brick estiver pronto.
          Aqui você pode ocultar loadings do seu site, por exemplo.
        */
       };

    return (
        <Payment
            initialization={initialization}
            customization={customization}
            onSubmit={onSubmit}
            onReady={onReady}
            onError={onError}
        />
    )

}






   