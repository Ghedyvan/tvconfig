import Header from "../components/Header";
import Buttons from "../components/Buttons";

export default function iphone() {
  return (
    <div className="px-[24px] flex flex-col justify-center items-center">
      <h1 className="w-full max-w-[342px] text-center text-[40px] pt-[22px] font-bold">
        COMPUTADOR
      </h1>
      <p className="mt-9 w-full max-w-[342px] text-center opacity-70">
        Para configurar no celular Android o procedimento é muito simples, basta seguir
        os passos abaixo.
      </p>
      <ol>
        <li className="flex gap-4 mt-12">
          <div>1</div>
           Abra o player do Smarters Pro direto pelo site oficial ou aperte no botão abaixo para ser direcionado automaticamente
        </li>
        <div className="w-full justify-center items-center flex mt-4 flex-col gap-5">
        <Buttons link="http://webtv-new.iptvsmarters.com/" text="ACESSAR PLAYER"></Buttons>
      </div>
        <li className="flex gap-4 mt-8">
          <div>2</div>
          Selecione a opção PLAYER API
        </li>
        <li className="flex gap-4 mt-4">
          <div>3</div>
          Preencha os 4 dados na ordem: NOME QUALQUER, USUARIO, SENHA, SERVIDOR
        </li>
        <li className="flex gap-4 mt-4">
          <div>4</div>
          No menu superior do aplicativo você poderá escolher se deseja assistir filme, série ou canais ao vivo.
        </li>
        <li className="flex gap-4 mt-4">
          <div>7</div>
          Fique a vontade para assistir, o aplicativo foi configurado com sucesso.
        </li>
      </ol>
    </div>
  );
}
