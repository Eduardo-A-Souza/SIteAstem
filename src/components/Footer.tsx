import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-bgFooter text-sky-100 flex">
      <ul className="flex justify-around py-8 w-full">
        <li className="flex flex-col items-center gap-2">
          <Phone size={28}/>
          Telefone:
          <Link href="#">(61) 9 9903-7164</Link>
        </li>
        <li className="flex flex-col items-center gap-2">
          <Mail size={28}/>
          E-mail:
          <Link href="#">email@email.com</Link>
        </li>
        <li className="flex flex-col items-center gap-2">
          <Instagram size={28}/>
          Instagram:
          <Link href="#">@astembsbs</Link>
        </li>
        <li className="flex flex-col items-center gap-2">
          <FaWhatsapp size={28}/>
          Whatsapp:
          <Link href="#">(61) 9 9999-9999</Link>
        </li>
      </ul>
    </footer>
  );
}
