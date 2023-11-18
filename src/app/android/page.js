import Header from "../components/Header";
import Buttons from "../components/Buttons";

export default function iphone() {
  return (
    <div className="px-[24px]">
      <h1 className="w-full max-w-[342px] text-center text-[40px] pt-[22px] font-bold">
        ANDROID
      </h1>
      <p className="mt-9 w-full max-w-[342px] text-center opacity-70">
        Para configurar no celular Android o procedimento é muito simples, basta seguir
        os passos abaixo.
      </p>
      <ol>
        <li className="flex gap-4 mt-12">
          <div>1</div>
          Baixe o aplicativo IPTV Smarters Player no site oficial, ou clique no link abaixo para iniciar o download automaticamente
        </li>
        <div className="w-full justify-center items-center flex mt-4 flex-col gap-5">
        <Buttons link="https://www.iptvsmarters.com/smarters4-0.apk" text="BAIXE AQUI"></Buttons>
      </div>
        <li className="flex gap-4 mt-8">
          <div>2</div>
          Vá até o arquivo baixado e aperte nele para instalar
        </li>
        <li className="flex gap-4 mt-4">
          <div>3</div>
          Após instalar, abra o aplicativo e confirme os termos que irão aparecer
        </li>
        <li className="flex gap-4 mt-4">
          <div>4</div>
          Quando chegar em uma tela com 6 botões, selecione: XTREME CODES
        </li>
        <li className="flex gap-4 mt-4">
        <div>5</div>
          Preencha os 4 campos com os seus dados de acesso, sendo na ordem: QUALQUER NOME, USUARIO, SENHA, SERVIDOR
        </li>
        <li className="flex gap-4 mt-4">
          <div>6</div>
          Agora o seu aplicativo já está configurado, fique a vontade para usar
        </li>
      </ol>
    </div>
  );
}
