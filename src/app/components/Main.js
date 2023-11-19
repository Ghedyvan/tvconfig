import Buttons from "./Buttons";
import "../styles/main.scss"

export default function Main() {
  return (
    <div className="px-[24px] mainClass flex flex-col justify-center items-center ">
       <h1 className="w-full text-center text-[40px] pt-[22px] font-bold items-center flex justify-center">
       Configure seu APP sem dificuldades
        </h1>
      <p className="mt-9 w-full max-w-[400px] flex text-center opacity-70 justify-center">
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
