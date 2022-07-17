import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { Footer } from "../components/Footer";

export function Event() {
    const { slug } = useParams<{ slug: string}>()

    return (
        /* min-h-screen = altura mínima de 100VH */
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <div className="flex flex-col flex-1">
                    { slug 
                      ? <Video lessonSlug={slug} />
                      : <div className="flex-1" />
                    }
                    <div className="flex justify-center flex-1">
                        <Footer />
                    </div>
                </div>
                <Sidebar />
            </main>
        </div>
    )
}