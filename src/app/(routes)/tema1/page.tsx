"use client";
import { dataTema1 } from "@/data";
import BoxTems from "./components/box-tems";
import { useRouter } from 'next/navigation';

const Dislexia = () => {
    const router = useRouter();
    return (
        <div className=" flex flex-col pt-8 pb-4 justify-center from-purple-200 via-purple-300 to-purple-500 bg-gradient-to-br ">
            <button className="w-10 mx-auto font-bold leading-tight text-center md:text-4xl md:mb-5" onClick={() => router.push("/")}>🏠</button>
            <h1 className="text-2xl font-bold leading-tight text-center md:text-4xl md:mb-5">Actividades para <span className="text-purple-600 font-bold">Dislexia</span></h1>
            <div className="max-w-6xl relative grid gap-6 mx-auto mt-4 md:grid-cols-4 z-10 mb-40 md:mb-0 ">
                {dataTema1.map((data) => (
                    <BoxTems key={data.id} data={data} />
                ))
                }
            </div>
        </div>
    );
}

export default Dislexia;