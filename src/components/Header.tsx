import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown"

export function Header() {
  return (
    <header className="flex justify-around items-center py-6">
      <div className="flex items-center justify-center max-w-5/6 w-full bg-white shadow-lg rounded-md p-6 gap-[3%]">
      <Link href="/">
        <Image
          src="/images/logo_header.jpg"
          alt="logo astem"
          width={72}
          height={72}
        />
      </Link>
        <input
          type="text"
          className="min-w-1/3 bg-gray rounded-sm p-3 text-lg flex-1"
          placeholder="busque um produto"
        />
        <Link href="/" className="text-xl">
          Inicio
        </Link>
        <DropDown />
        <Link href="/contato" className="text-xl">
          Contato
        </Link>
        <Link href="/sobre" className="text-xl">
          Sobre
        </Link>
      </div>
    </header>
  );
}
