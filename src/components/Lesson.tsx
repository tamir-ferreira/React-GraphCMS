/* necessário para adicionar ícones ao projeto usando a biblioteca phosphor-react */
import { CheckCircle, Lock } from 'phosphor-react'

/* A biblioteca dayjs ou date-fns é necessária para trabalharmos com datas
No Terminal: npm i date-fns */
import { isPast, format } from 'date-fns'
/* formatação em pt-BR importar aqui e adicionar como 3º parâmetro do format*/
import ptBR from 'date-fns/locale/pt-BR'

/* Aqui iremos listar os elementos que serão carregados dinamicamente em cada Aula */
interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}


export function Lesson(props: LessonProps) {
    /* formatar conforme documentação em https://date-fns.org/v2.28.0/docs/format
     (o que estiver dentro de aspas simples não será formatado) */
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm",{
        locale: ptBR
    });
    const isLessonAvailable = isPast(props.availableAt);
    
    return (
        <a href="#">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            <div className="border rounded border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">

                    {isLessonAvailable ? (
                        <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )

                    }

                    <span className="text-xs border rounded px-2 py-[2px] text-white border-green-300 font-bold ">
                        {props.type === 'live' ? 'AO VIVO' : "AULA PRÁTICA"}
                    </span>
                </header>
                <strong className="text-gray-200 block mt-4">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}