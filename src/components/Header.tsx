import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-around items-center py-6">
      <div className="flex items-center justify-center max-w-5/6 w-full bg-white shadow-lg rounded-md p-6 gap-[3%]">
        <Image
          src="/images/logo_header.jpg"
          alt="logo astem"
          width={72}
          height={72}
        />
        <input
          type="text"
          className="min-w-1/3 bg-gray rounded-sm p-3 text-lg flex-1"
          placeholder="busque um produto"
        />
        <a href="" className="text-xl">
          Inicio
        </a>
        <a href="" className="text-xl">
          Produtos
        </a>
        <a href="" className="text-xl">
          Contato
        </a>
        <a href="" className="text-xl">
          Sobre
        </a>
      </div>
    </header>
  );
}
