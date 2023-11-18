import Buttons from "./Buttons";
import "../styles/main.scss"

export default function Main() {
  return (
    <div className="px-[24px] mainClass ">
       <h1 className="w-full max-w-[342px] text-center text-[40px] pt-[22px] font-bold">
       Configure seu APP sem dificuldades
        </h1>
      <p className="mt-9 w-full max-w-[342px] text-center opacity-70">
        Para fazer a configuração completa do seu dispositivo basta selecionar o
        tipo de dispositivo abaixo e seguir as instruções
      </p>
      <div className="w-full justify-center items-center flex mt-[38px] flex-col gap-5">
        <Buttons link="/iphone" text="CELULAR - IPHONE"></Buttons>
        <Buttons link="/android" text="CELULAR - ANDROID"></Buttons>
        <Buttons link="/tvbox" text="TV BOX"></Buttons>
        <Buttons link="/smarttv" text="SMART TV"></Buttons>
        <Buttons link="/computador" text="COMPUTADOR"></Buttons>
      </div>
    </div>
  );
}
