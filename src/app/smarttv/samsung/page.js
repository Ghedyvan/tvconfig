import Header from "@/app/components/Header";
import Buttons from "@/app/components/Buttons";

export default function iphone() {
  return (
    <div className="px-[24px]">
      <h1 className="w-full max-w-[342px] text-center text-[40px] pt-[22px] font-bold">
        TV SAMSUNG
      </h1>
      <p className="mt-9 w-full max-w-[342px] text-center opacity-70">
        Para configurar na TV Samsung o procedimento é muito simples, basta seguir
        os passos abaixo.
      </p>

      <ol>
        <li className="flex gap-4 mt-12">
          <div>1</div>
          Abra as configurações da sua Smart TV
        </li>
        <li className="flex gap-4 mt-8">
          <div>2</div>
          Seleciona GERAL, depois REDE, depois STATUS DA REDE e depois CONFIGURAÇÃO IP
        </li>
        <li className="flex gap-4 mt-4">
          <div>3</div>
          Procure por SERVIDOR DNS e altere de AUTOMÁTICO para MANUAL
        </li>
        <li className="flex gap-4 mt-4">
          <div>4</div>
          Agora você pode alterar o endereço de DNS, coloque exatamente: 168.235.81.205
        </li>
        <li className="flex gap-4 mt-4">
          <div>5</div>
          Confirase está certinho o DNS e confirme para salvar
        </li>
        <li className="flex gap-4 mt-4">
          <div>6</div>
          Abra a loja de aplicativos da sua Samsung
        </li>
        <li className="flex gap-4 mt-4">
          <div>7</div>
          Procure e instale um app chamado Smart UP (somente caso não encontre, procure Smart STB)
        </li>
        <li className="flex gap-4 mt-4">
          <div>8</div>
          Abra o aplicativo instalado e aceite os termos
        </li>
        <li className="flex gap-4 mt-4">
          <div>9</div>
          Preencha seus dados de usuário e senha e fique a vontade para usar
        </li>
      </ol>
    </div>
  );
}
