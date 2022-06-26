import { Logo } from "./Logo";

export function Header() {
    return (
        /* Incluir cores personalidas no arquivo tailwind.config.js */
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
            <Logo />
        </header>
    )
}