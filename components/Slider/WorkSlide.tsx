import Image from "next/image";

type Props = {
  step: number;
  img: any;
  title?: string;
  text?: string;
};

const WorkSlide = ({ step, img, title, text }: Props) => {
  return (
    <>
      <div className="grid h-full justify-items-center">
        <div className="py-8">
          <p className="py-8 text-base font-apercu400 text-[#27272766]">
            {text}
          </p>
        </div>
        <div className="relative">
          <Image
            src={img}
            alt="Slide"
            className="w-[400px] h-[400px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default WorkSlide;
