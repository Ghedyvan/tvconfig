import Header from "@/app/components/Header";
import Buttons from "@/app/components/Buttons";

export default function iphone() {
  return (
    <div className="px-[24px]">
      <h1 className="w-full max-w-[342px] text-center text-[40px] pt-[22px] font-bold">
        TV LG
      </h1>
      <p className="mt-9 w-full max-w-[342px] text-center opacity-70">
        Para configurar na TV LG o procedimento é muito simples, basta seguir os
        passos abaixo.
      </p>

      <ol>
        <li className="flex gap-4 mt-12">
          <div>1</div>
          Abra a loja de aplicativo da sua TV, ela chama-se APP ou LG CONTENT
          STORE (depende da versão)
        </li>
        <li className="flex gap-4 mt-8">
          <div>2</div>
          Busque por um aplicativo chamado IPTVSmarters PRO e instale
        </li>
        <li className="flex gap-4 mt-4">
          <div>3</div>
          Abra o aplicativo instalado e confirme os termos (caso ele peça)
        </li>
        <li className="flex gap-4 mt-4">
          <div>4</div>
          Preencha os 4 campos com os dados enviados exatamente iguais, sendo
          eles na ordem: NOME QUALQUER, USUÁRIO, SENHA e SERVIDOR
        </li>
        <li className="flex gap-4 mt-4">
          <div>5</div>
          Aperte para entrar e fique a vontade para usar
        </li>
        <p className="mt-9 w-full max-w-[342px] text-center opacity-70">
          Caso tenha algum erro, entre em contato e envie uma foto da tela para
          verificarmos o que houve
        </p>
      </ol>
    </div>
  );
}
