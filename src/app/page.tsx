
import { useRouter } from "next/navigation";
import ItemsTable from "./components/items-table";

export default function Home() {
  return (
    <>
      <div className='flex min-h-screen items-center justify-center  from-purple-200 via-purple-300 to-purple-500 bg-gradient-to-br'>
        <div className="flex items-center justify-center min-h-[450px]">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6 text-purple-500">Tema</th>
                    <th scope="col" className="py-3 px-6 text-purple-500">Nombre del tema</th>
                  </tr>
                </thead>
                <tbody>
                  <ItemsTable title="Tema 1" description="Actividades para Dislexia" url="/tema1" />
                  <ItemsTable title="Tema 2" description="Actividad para digrafia" url="/tema2" />
                  <ItemsTable title="Tema 3" description="Actividades para discalculia" url="/tema3" />
                  <ItemsTable title="Tema 4" description="Actividades para atencion dispersa" url="/tema4" />
                  <ItemsTable title="Tema 5" description="Actividades para concentracion" url="/tema5" />
                  <ItemsTable title="Tema 6" description="Actividades para memoria a corto plazo" url="/tema6" />
                  <ItemsTable title="Tema 7" description="Actividades para TDA deficit de atencion con hiperactividad" url="/tema7" />
                  <ItemsTable title="Tema 8" description="Actividades para inteligencia emocional" url="/tema8" />
                  <ItemsTable title="Tema 9" description="Actividades para nin@s con altas capacidades cognitivas" url="/tema9" />
                  <ItemsTable title="Tema 10" description="Actividades para ninos con autismo y asperger" url="/tema10" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
