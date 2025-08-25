import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-bgFooter text-sky-100 flex">
      <ul className="flex justify-around py-8 w-full">
        <li className="flex flex-col items-center gap-2">
          <Phone size={28}/>
          Telefone:
          <a href="#">(61) 9 9903-7164</a>
        </li>
        <li className="flex flex-col items-center gap-2">
          <Mail size={28}/>
          E-mail:
          <a href="#">email@email.com</a>
        </li>
        <li className="flex flex-col items-center gap-2">
          <Instagram size={28}/>
          Instagram:
          <a href="#">@astembsbs</a>
        </li>
        <li className="flex flex-col items-center gap-2">
          <FaWhatsapp size={28}/>
          Whatsapp:
          <a href="#">(61) 9 9999-9999</a>
        </li>
      </ul>
    </footer>
  );
}
