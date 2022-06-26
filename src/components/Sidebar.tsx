import { Lesson } from "./Lesson"

export function Sidebar(){
    return(
        /* para selecionar um tamanho exato, caso não tenha na pré-seleção do tailwind, inserir
        a classe w-[tamanho px] */
        <aside className="w-[348px] bg-gray-700 p-6 border-l">
            {/* <h1>Sidebar</h1> */}
            <span className="font-bold text-2xl pb-6 mb-6 border-b  border-gray-500 block">
                Cronograma de Aulas
            </span>
            <div className="flex flex-col gap-8">
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
            </div>
        </aside>
    )
}