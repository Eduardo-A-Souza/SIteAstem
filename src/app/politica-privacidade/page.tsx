import Image from "next/image";
import { SideBox } from "@/app/SideBox";

export default function politicaPrivacidade() {
  return (
    <div className="flex justify-around items-center mx-30 gap-24 min-h-[65vh] pb-10">
      <div className="flex flex-col items-center gap-8">
        <Image
          src="/images/logo_main.png"
          alt="logo astem"
          width={390}
          height={260}
          className="mb-6"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl">Proteção de dados:</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            in est illum beatae earum unde, eaque sequi labore! Cupiditate
            facere
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl">
            I. Como são coletaodos os dados do usuário:
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            optio dignissimos facere nihil veniam illo velit id commodi soluta
            molestias fuga alias similique tempore quisquam ad sit, earum
            excepturi. Modi!
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl">
            II. Como são tratados os dados do usuário:
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            optio dignissimos facere nihil veniam illo velit id commodi soluta
            molestias fuga alias similique tempore quisquam ad sit, earum
            excepturi. Modi!
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl">
            III. Em quais situações os dados do usuário podem ser
            compartilhados:
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            optio dignissimos facere nihil veniam illo velit id commodi soluta
            molestias fuga alias similique tempore quisquam ad sit, earum
            excepturi. Modi!
          </p>
        </div>
      </div>
      <SideBox
        title="Navegação rapida:"
        links={[
          {
            href: "#",
            label: "I.Como são coletados os dados...",
            className: "",
          },
          {
            href: "#",
            label: "II. como são tratados os dados...",
            className: "",
          },
          {
            href: "#",
            label: "III. Em quais situações os dados ...",
            className: "",
          },
        ]}
      />
    </div>
  );
}
