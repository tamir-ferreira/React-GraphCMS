import { LogoFooter } from "./LogoFooter";

export function Footer() {
    return (
        /* Incluir cores personalidas no arquivo tailwind.config.js */
        <footer className="text-gray-300 px-6 mt-12 flex-1 max-w-[1400px]">
            <div className="flex justify-between border-gray-600 border-t pt-6">
                <div className="flex items-center gap-6 mb-6 ">
                    <LogoFooter />
                    <span>
                        Rocketseat - Todos os direitos reservados
                    </span>
                </div>
                <span>
                    Políticas de privacidade
                </span>
            </div>
        </footer>
    )
}