import Header from "../components/Header";
import Buttons from "../components/Buttons";

export default function iphone() {
  return (
    <div className="px-[24px]">
      <h1 className="w-full max-w-[342px] text-center text-[40px] pt-[22px] font-bold">
        IPHONE
      </h1>
      <p className="mt-9 w-full max-w-[342px] text-center opacity-70">
        Para configurar no iPhone o procedimento é muito simples, basta seguir
        os passos abaixo.
      </p>

      <ol>
        <li className="flex gap-4 mt-12">
          <div>1</div>
          Na AppStore (loja de aplicativos) do iPhone procure um app chamado
          Smarters Player Lite ou aperte no botão abaixo
        </li>
        <div className="w-full justify-center items-center flex mt-4 flex-col gap-5">
        <Buttons link="https://apps.apple.com/br/app/smarters-player-lite/id1628995509?l=en-GB" text="BAIXE AQUI"></Buttons>
      </div>
        <li className="flex gap-4 mt-8">
          <div>2</div>
          Aperte no botão BAIXAR e aguarde aplicativo ser instalado
        </li>
        <li className="flex gap-4 mt-4">
          <div>3</div>
          Abra o aplicativo instalado e selecione a opção ADD YOUR PLAYLIST
        </li>
        <li className="flex gap-4 mt-4">
          <div>4</div>
          Aperte em ACCEPT
        </li>
        <li className="flex gap-4 mt-4">
          <div>5</div>
          Preencha os 4 campos com seus dados de acesso, na ordem que irei enviar no WhatsApp
        </li>
        <li className="flex gap-4 mt-4">
          <div>6</div>
          Pronto, agora você já pode usar o app
        </li>
      </ol>
    </div>
  );
}
