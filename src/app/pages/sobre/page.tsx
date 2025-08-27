import Image from "next/image";
import Link from "next/link";

export default function sobre() {
  return (
    <div className="flex justify-around items-center mx-8">
      <div className="flex flex-col items-center">
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
      <div className="flex flex-col items-center min-w-2/8 bg-backgroundBox gap-8 py-12 rounded-lg mx-4">
        <Link href="#" className="text-lg rounded-tr-lg rounded-bl-lg bg-bgSelected px-6 py-2 text-gray">Quem somos</Link>
        <Link href="#" className="text-lg">Missão visão e valores</Link>
      </div>
    </div>
  );
}
