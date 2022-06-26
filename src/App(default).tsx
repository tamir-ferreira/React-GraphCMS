import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

/* montando a query para ser consultada */
const GET_LESSONS_QUERY = gql`
  query {
    lessons{
      id
      title

      teacher{
        name
      }
    }
  }
`
/* criar interface para orientar o tipo dos dados no lessons */
interface Lesson{
  id: string;
  title: string;
}

function App() {
  /* basicamente temos 2 maneiras de consumir as APIs */
  
  /* Primeiro modo*/
  useEffect(() =>{
    client.query({
      query: GET_LESSONS_QUERY,
    }).then(response => {
      /* console.log(response.data) */
    })
  }, [])
  /* -------------------------------------------------  */

  /* Segundo modo (mais indicado) - para utilizarmos, devemos inserir umas linhas no main.tsx conforme explicado por lá */
  /* const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY) //chamada desta função - 1 alternativa */
  const { data } = useQuery(GET_LESSONS_QUERY) //chamada desta função - 2 alternativa
  
  /* console.log(data); */

  return (
    /* Podemos utilizar a estilização de 2 maneiras:
    - passando direto aqui no App.tsx, como no H1, utilizando o className="" e apertando Ctrl + barra de espaço
    - passando um nome qualquer aqui na classe e no usando as classes no global.css */
    /* <h1 className="nomeDaClasse font-extrabold">React em Ação</h1> */

    /* exibindo o retorno da query no HTML em formato de lista */
    <ul>
      {/* {data?.lessons.map(lesson => { //chamada desta função - 1 alternativa */}
        {data.lessons.map((lesson: Lesson) => { //chamada desta função - 2 alternativa
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App

