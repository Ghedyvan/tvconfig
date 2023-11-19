import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Image from "next/image";
import downImg from "@/app/assets/downloaderApp.png";

export default function iphone() {
  return (
    <div className="px-[24px] flex flex-col justify-center items-center">
      <h1 className="w-full max-w-[342px] text-center text-[40px] pt-[22px] font-bold">
        TV BOX <span className="opacity-60">ou </span>TV ANDROID
      </h1>
      <p className="mt-9 w-full max-w-[342px] text-center opacity-70">
        Para configurar em TV Android ou TVBox o procedimento é muito simples, basta seguir
        os passos abaixo.
      </p>
      <ol>
        <li className="flex gap-4 mt-12">
          <div>1</div>
           Abra a PlayStore (loja de aplicativos do aprelho que quer configurar), procure pelo aplciativo Downloader e instale
        </li>
        <Image className="mt-3" src={ downImg } alt="Imagem do app"/>
        <li className="flex gap-4 mt-8">
          <div>2</div>
          Abra o aplicativo instalado e dê todas as permissões (caso ele solicite)
        </li>
        <li className="flex gap-4 mt-4">
          <div>3</div>
          Dentro do Downloader, deve ter um campo para digitar, digite o código: 555340 e confirme
        </li>
        <li className="flex gap-4 mt-4">
          <div>4</div>
          Aperte no botão azul que fica no meio da tela para baixar o aplicativo Smarters Player
        </li>
        <li className="flex gap-4 mt-4">
          <div>5</div>
          Após concluir o download, instale o arquivo baixado (caso peça permissão de instalação, autorize para continuar)
        </li>
        <li className="flex gap-4 mt-4">
          <div>6</div>
          Abra o Smarters Player que foi instalado e confirme qualquer termo que solicite até que chegue a tela com 4 botões
        </li>
        <li className="flex gap-4 mt-4">
          <div>7</div>
          Selecione a opção: ENTRAR COM A API 
        </li>
        <li className="flex gap-4 mt-4">
          <div>8</div>
          Preencha os 4 campos com seus dados de acesso, na ordem: NOME QUALQUER, USUARIO, SENHA, SERVIDOR
        </li>
        <li className="flex gap-4 mt-4">
          <div>9</div>
          Pronto, agora você já pode usar o app normalmente
        </li>
        
      </ol>
    </div>
  );
}
