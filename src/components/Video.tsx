/* necessário para adicionar ícones ao projeto usando a biblioteca phosphor-react */
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'

export function Video() {
    return (
        /* flex1 = flex: 1 1 0%; do css. Não vai ter tamanho fixo, pode esticar ou reduzir conforme necessário */
        <div className="flex-1 ">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1400px] max-h-[60vh] aspect-video bg-slate-500"></div>
            </div>
            {/* mx-auto faz com que a DIV seja centralizada horizontalmente */}
            <div className="p-8 max-w-[1400px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        {/* Título da Aula */}
                        <h1 className="text-2xl font-bold">Aula 01 - Criando o projeto e realizando o setup inicial</h1>
                        {/* Descrição da Aula - leading-relaxer aumenta o espaçamento entre as linhas*/}
                        <p className="mt-4 text-gray-200 text-justify leading-relaxed">Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS,
                            Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades
                            da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                        </p>
                        <div className='flex items-center gap-4 mt-6 mb-20'>
                            <img
                                className='h-16 w-16 rounded-full border-2 border-blue-500'
                                src="https://github.com/diego3g.png"
                                alt="" />

                            <div className='leading-relaxed'>
                                <strong className='text-2xl block'>Diego Fernandes</strong>
                                <span className='text-gray-200 text-sm block'>CTO @Rocketseat</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 text-gray-100">
                        {/* Botão Comunidade */}
                        <a href='#' className="flex justify-evenly items-center uppercase text-sm font-bold w-[237px] h-[56px]
                         bg-green-500 rounded hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade no Discord
                        </a>
                        {/* Botão Desafio */}
                        <a href='#' className="flex items-center uppercase gap-[10px] justify-center w-[237px] h-[56px]
                         text-blue-500 border rounded border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            Acesse o Desafio
                        </a>
                    </div>

                </div>
                {/* CARDS MATERIAL E WALLPAPERS */}
                <div className='grid grid-cols-2 gap-8'>
                    {/* overflow-hidden para que todas as bordas do container fiquem arredondadas,
                     mesmo que tenha outros elementos com bordas retas */}
                    <a href='#' className='flex items-stretch gap-6 bg-gray-700 rounded overflow-hidden hover:bg-gray-600 transition-colors'>
                        <div className='flex items-center w-[86px] h-full bg-green-700 p-6' >
                            <FileArrowDown size={39} />
                        </div>

                        <div className='py-6 leading-relaxed'>
                            <strong className='text-2xl text-gray-100'>
                                Material complementar
                            </strong>
                            <p className='text-sm mt-2 text-gray-200'>
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>

                        <div className="text-blue-500 mr-6 h-full flex items-center" >
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href='#' className='flex items-stretch gap-6 bg-gray-700 rounded overflow-hidden hover:bg-gray-600 transition-colors'>
                        <div className='flex items-center w-[86px] h-full bg-green-700 p-6' >
                            <Image size={39} />
                        </div>

                        <div className='py-6 leading-relaxed'>
                            <strong className='text-2xl text-gray-100'>
                                Wallpapers exclusivos
                            </strong>
                            <p className='text-sm mt-2 text-gray-200'>
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>

                        <div className="text-blue-500 mr-6 h-full flex items-center" >
                            <CaretRight size={24} />
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}