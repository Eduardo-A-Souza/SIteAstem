import Image from "next/image";
import { SideBox } from "@/components/SideBox";

export default function sobre() {
  return (
    <div className="flex justify-around items-center mx-30 gap-24 min-h-[65vh]">
      <div className="flex flex-col items-center justify-around gap-10">
        <Image
          src="/images/logo_main.png"
          alt="logo astem"
          width={390}
          height={260}
        />
        <div className="flex items-center w-full px-4 py-12 gap-8">
          <h2 className="text-6xl">teste:</h2>
          <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            voluptates, accusamus recusandae voluptatum id aperiam, officiis
            maiores placeat perspiciatis cupiditate quisquam, sequi omnis odio.
            Culpa eligendi soluta consequatur eos totam!
          </p>
        </div>
        <div className="flex items-center w-full px-4 py-12 gap-8">
          <h2 className="text-6xl">teste:</h2>
          <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            voluptates, accusamus recusandae voluptatum id aperiam, officiis
            maiores placeat perspiciatis cupiditate quisquam, sequi omnis odio.
            Culpa eligendi soluta consequatur eos totam!
          </p>
        </div>
      </div>
      <SideBox
        links={[
          { href: "/pages/sobre", label: "Quem somos", className: "" },
          {
            href: "/pages/missao-visao-valores",
            label: "Missão, visão e valores",
            className: "",
          },
          {
            href: "/pages/politica-privacidade",
            label: "Proteção de dados",
            className: "",
          },
        ]}
      ></SideBox>
    </div>
  );
}
