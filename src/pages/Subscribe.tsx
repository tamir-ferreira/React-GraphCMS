import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

/* Query transferida para o arquivo create-subscriber-mutation.graphql após instalação do graphql-codegen */
/* criando a query para enviar os dados do formulário para o GraphCMS */
/* String! - o ! siginifica que o campo é obrigatório */
/* const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
` */

export function Subscribe() {
    const navigate = useNavigate();

    /* usando o useState, a cada mudança dessa variável o componente reflete esse novo valor visualmente */
    /* fazendo um desestruturação */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    /* o loading tem nas queries e nas mutations - vai estar como true enquanto estiver sendo processada a solicitação */

    /* substituído pela uso do graphql-codegen */
    /* const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION); */
    const [createSubscriber, { loading }] = useCreateSubscriberMutation();

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        if (name === "") {
            alert('Digite seu nome');
        } else if (email === "") {
            alert('Digite seu email');
        } else {
            await createSubscriber({
                variables: {
                    name,
                    email,
                }
            });
            navigate('/event');
        }
    }

    return (
        <div className="min-h-screen bg-cyan-300 bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight"> {/* leading-tight junta mais as letras */}
                        Construa uma <strong className="text-blue-500"> aplicação completa</strong>, do zero, com
                        <strong className="text-blue-500"> React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed"> {/* leading-relaxed afasta mais as letras */}
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com
                        alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Digite seu e-mail"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <button
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm
                                       hover:bg-green-700 transition-colors disabled:opacity-50"
                            type="submit"
                            disabled={loading} //vai ficar desabilitado enquanto a solicitação (mutation) estiver em processamento
                                               /*evitando assim do usuário dar vários clicks durante esse processo  */
                        >
                            Garantir minha vaga
                        </button>
                    </form>

                </div>
            </div>
            <img src="./src/assets/code-mockup.png" className="mt-10" alt="" />
        </div>
    );
};