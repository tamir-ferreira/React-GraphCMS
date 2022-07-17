/* necessário para adicionar ícones ao projeto usando a biblioteca phosphor-react */
import { CheckCircle, Lock } from 'phosphor-react'
/* A biblioteca dayjs ou date-fns é necessária para trabalharmos com datas
No Terminal: npm i date-fns */
import { isPast, format } from 'date-fns'
/* formatação em pt-BR importar aqui e adicionar como 3º parâmetro do format*/
import ptBR from 'date-fns/locale/pt-BR'
/* para utilizarmos o Link to do Router-dom no lugar do a href*/
import { Link, useParams } from "react-router-dom";
/* instalar a biblioteca classnames para trabalhar com classes condicionais
npm i classNames --force */
import classNames from 'classnames';

/* Aqui iremos listar os elementos que serão carregados dinamicamente em cada Aula */
interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}


export function Lesson(props: LessonProps) {
    /* aqui temos acesso ao slug da aula ativa (url) */
    const { slug } = useParams<{ slug: string }>();

    const isLessonAvailable = isPast(props.availableAt);
    /* formatar conforme documentação em https://date-fns.org/v2.28.0/docs/format
     (o que estiver dentro de aspas simples não será formatado) */
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    });

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group"> {/* aqui temos ao acesso ao slug de cada aula (graphCMS) */}
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            {/* classNames -  1º parâmetro são as classes que nunca mudam, como 2º parâmetro, entre {}
             são passadas as classe condicionais, quando isActiveLesson for true, vai ser aplicado o bg-gree-500 */}
            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
                'bg-green-500': isActiveLesson,
            })}
            >
                <header className="flex items-center justify-between">

                    {isLessonAvailable ? (
                        <span className={classNames('flex items-center gap-2 text-sm text-blue-500 font-medium', {
                            'text-white': isActiveLesson
                        })}>
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

                    <span className={classNames("text-xs border rounded px-2 py-[2px] text-white border-green-300 font-bold",{
                        'border-white': isActiveLesson
                    })} >
                        {props.type === 'live' ? 'AO VIVO' : "AULA PRÁTICA"}
                    </span>
                </header>

                <strong className={classNames('block mt-4', {
                    'text-white': isActiveLesson,
                    'text-gray-200': !isActiveLesson,
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}