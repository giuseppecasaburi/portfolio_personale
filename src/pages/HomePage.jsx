import Footer from "../components/Footer";
import Header from "../components/Header";

function HomePage() {
    return (
        <>
        <Header/>
        <div className="text-center min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">Sono il portfolio</h1>
        </div>
        <Footer/>
        </>
    )
}

export default HomePage;