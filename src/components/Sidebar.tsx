import { gql, useQuery } from "@apollo/client"
import { useGetLessonsQuery } from "../graphql/generated"
import { Lesson } from "./Lesson"

/* Query transferida para o arquivo get-lessons-query.graphql após instalação do graphql-codegen */
/* const GET_LESSONS_QUERY = gql`
    query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        id
        availableAt
        title
        slug
        lessonType
    }
}
` 
interface GetLessonsQueryResponse{
    lessons: {
        id: string
        availableAt: string
        title: string
        slug: string
        lessonType: 'live' | 'class'
    }[]
} */

export function Sidebar() {
    /* substituído pela uso do graphql-codegen */
    /* const{ data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY) */
    const{ data } = useGetLessonsQuery();

    return (
        /* para selecionar um tamanho exato, caso não tenha na pré-seleção do tailwind, inserir
        a classe w-[tamanho px] */
        <aside className="w-[348px] bg-gray-700 p-6 border-l">
            {/* <h1>Sidebar</h1> */}
            <span className="font-bold text-2xl pb-6 mb-6 border-b  border-gray-500 block">
                Cronograma de Aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return(
                        <Lesson
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}
                    />
    
                    )
                })}
            </div>
        </aside>
    )
}