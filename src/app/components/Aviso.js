'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Aviso() {
    const [isActive, setIsActive] = useState(false);

    const accept = () => {
        const mainElements = document.querySelectorAll('.mainClass');
        const aviso = document.querySelector('.aviso');
        mainElements.forEach(element => {
            element.classList.add('is-active');
        });
        aviso.classList.add('hidden');
    };

    return (
        <div className="bg-black aviso transition-opacity duration-3000  opacity-100 w-screen z-999 h-screen absolute flex overflow-hidden justify-center items-center">
            {/* <Image src={  } /> */}
            <div className="px-6 relative top-0 flex-col w-full">
                <h1 className="text-justify">
                    Eu reconheço que o desenvolvedor desta plataforma não trabalha com
                    venda ou contribui qualquer atividade presente nesse site, e declaro que
                    JAMAIS irei entrar em contato com ele para solicitar quaisquer dados de
                    configuração ou acesso a este tipo de serviço.
                </h1>
                <div className="w-full justify-center flex flex-col items-center mt-8">
                    <button onClick={accept} className="max-w-[180px] flex justify-center rounded-3xl w-full py-[12px] bg-red-600">EU ACEITO</button>
                    {" "}
                    <Link className="underline text-center mt-6 opacity-70" href={"http://google.com.br"}>
                        {" "}
                        Eu não concordo com os termos acima, quero sair do site
                    </Link>
                </div>
            </div>
        </div>
    );
}
