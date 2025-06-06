import HomePage from "../pages/HomePage";
import BackgroundSky from "./BackgroundSky";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
    return (
        <BackgroundSky>
            <Header/>
            <HomePage/>
            <Footer/>
        </BackgroundSky>
    )
}

export default Layout;