import { url } from "inspector";
import Image from "next/image";

interface BoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        url: string;
    };
}
const BoxTems = ({ data }: BoxProps) => {
    const { id, title, image, url } = data;
    return (
        <div className="p-4 border border-purple-600  hover:shadow-lg  hover:shadow-purple-600/50 rounded-3xl">
            <h3 className="mb-4 text-xl">
                {title}
            </h3>
            <Image src={image} alt={title} width={200} height={200}
                className="w-full md:w-[200px] rounded-2xl md:h-[150px]  " />
            <div className="flex justify-center gap-5 mt-5">
                <a className="p-2 transition duration-150 rounded-lg border hover:shadow-lg border-pur hover:shadow-white/50 "
                    href={url} target="_blank"  >
                    Descargar
                </a>
            </div>

        </div>
    );
}

export default BoxTems;