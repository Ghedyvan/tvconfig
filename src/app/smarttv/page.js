import Buttons from "../components/Buttons";

export default function Main() {
  return (
    <div className="px-[24px] flex flex-col justify-center items-center bg-gray-900 text-white pb-[160px]">
      <h1 className="w-full max-w-[342px] text-center text-[40px] pt-[22px] font-bold">
        Selecione a marca da sua SmartTV
      </h1>
      <div className="w-full justify-center items-center flex mt-[38px] flex-col gap-5">
        <Buttons link="./smarttv/samsung" text="SAMSUNG"></Buttons>
        <Buttons link="/smarttv/lg" text="LG"></Buttons>
        <Buttons link="/smarttv/roku" text="OUTRA - Roku"></Buttons>
        <Buttons link="../tvbox" text="OUTRA - Android"></Buttons>
      </div>
      <p className="mt-9 w-full max-w-[342px] text-center opacity-70">
        Se você não souber se o sistema da sua TV é Roku ou Android, abra a loja
        de aplicativos dela e me envie uma foto para que te ajude a identificar
      </p>
    </div>
  );
}
