import Image from "next/image";
import { ContactBox } from "@/components/ContactBox";
import { ContactInput } from "@/components/ContactInput";
import { Button } from "@/components/Button";

export default function contato() {
  return (
    <div className="flex flex-col justify-around items-center mx-30 gap-24 min-h-[65vh]">
      <Image
        src="/images/logo_main.png"
        alt="logo astem"
        width={390}
        height={260}
      />
      <div className="flex justify-around ">
        <div className="flex flex-col px-6 gap-2.5 items-center">
          <h3 className="text-3xl">Entre em contato:</h3>
          <ContactBox rounded="lg" className="flex-1">
            <ContactInput rounded="md" label="teste" placeholder="teste"></ContactInput>
            <ContactInput rounded="md" label="teste" placeholder="teste"></ContactInput>
            <ContactInput rounded="md" label="teste" placeholder="teste"></ContactInput>
            <Button color="primary" size="md"> Enviar </Button>
          </ContactBox>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <div className="flex flex-col px-6 gap-2.5 items-center">
            <h3 className="text-3xl">Informações de contato:</h3>
            <ContactBox rounded="lg">
              <ContactInput rounded="md" label="teste" placeholder="teste"></ContactInput>
            </ContactBox>
          </div>
          <div className="flex flex-col px-6 gap-2.5 items-center">
            <h3 className="text-3xl">Localização:</h3>
            <ContactBox rounded="lg">
              <h1>Loc</h1>
            </ContactBox>
          </div>
        </div>
      </div>
    </div>
  );
}
