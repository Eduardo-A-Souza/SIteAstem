import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-w-3/4 py-14">
      <div className="flex flex-row justify-around w-full pb-18">
        <Image
          src="/images/logo_main.png"
          alt="logo astem"
          width={390}
          height={260}
        />
        <h1 className="text-5xl font-medium">Lorem ipsum dolor</h1>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <h2 className="text-4xl pb-16">Quem nós representamos:</h2>
        <ul className="flex justify-around w-4/5 items-center">
          <li>
            <a href="#">
              <Image
                className="duration-500 scale-100 hover:scale-110"
                src="/images/logo_fanem.png"
                alt="logo fanem"
                width={260}
                height={230}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                className="duration-500 scale-100 hover:scale-110"
                src="/images/logo_magnamed.png"
                alt="logo magnamed"
                width={290}
                height={230}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                className="duration-500 scale-100 hover:scale-110"
                src="/images/logo_protec.png"
                alt="logo protec"
                width={200}
                height={230}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
