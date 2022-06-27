import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    return (
        /* min-h-screen = altura mínima de 100VH */
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex justify-between">
                <div className="flex flex-col flex-1">
                    <Video />
                    <div className="flex justify-center flex-1">
                        <Footer />
                    </div>
                </div>
                <Sidebar />
            </main>
        </div>
    )
}