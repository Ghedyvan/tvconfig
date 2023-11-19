import Header from "@/app/components/Header";
import Buttons from "@/app/components/Buttons";

export default function rok() {
  return (
    <div className="px-[24px] flex flex-col justify-center items-center">
      <h1 className="w-full max-w-[342px] text-center text-[40px] pt-[22px] font-bold">
        TV ROKU
      </h1>
      <p className="mt-9 w-full max-w-[342px] text-center opacity-70">
        Para configurar na TV Roku o procedimento é muito simples, basta seguir
        os passos abaixo.
      </p>
      <ol>
        <li className="flex gap-4 mt-12">
          <div>1</div>
          <div>Abra a loja de aplicativos da sua TV Roku e procure por: Rivolut, Meta Player ou Lumina <span className="opacity-70">(caso não econtre nenhum, procura por IPTV e me envia foto da tela)</span></div>
        </li>
        <li className="flex gap-4 mt-8">
          <div>2</div>
          Abra o app instalado e aceite todos os termos que serão solicitados
        </li>
        <li className="flex gap-4 mt-4">
          <div>3</div>
          Será mostrado o MAC do seu aparelho para configurar direto pelo site, me envie este código MAC por mensagem, sem pontos para que eu configure para você
        </li>
        <li className="flex gap-4 mt-4">
          <div>4</div>
          Após te confirmar na nossa conversa que o app já foi configurado, basta continuar e utilizar
        </li>
       
      </ol>
      <p className="mt-9 w-full flex justify-center items-center max-w-[342px] text-center opacity-70">
          Todos os aplicativos para ROKU tem uma tarifa que o próprio app cobra, mas seu app irá funcionar normalmente durante os primeiros 7 dias e só depois precisará ativar
        </p>
    </div>
  );
}
