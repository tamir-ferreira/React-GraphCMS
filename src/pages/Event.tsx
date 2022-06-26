import { Header } from "../components/Header";
import { Lesson } from "../components/Lesson";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    return (
        /* min-h-screen = altura mínima de 100VH */
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Video />
                <Sidebar />
            </main>
        </div>
    )
}