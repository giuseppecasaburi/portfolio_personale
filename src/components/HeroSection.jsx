import { useEffect, useState } from "react";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaArrowDown, FaGithub, FaRegFilePdf } from "react-icons/fa";
import TextTyping from "./TextTyping";

function HeroSection() {
    // stato che memorizza se siamo in “mobile” (sotto 768px)
    const [isMobile, setIsMobile] = useState(() => {
        // al primo render (client-side), controlliamo subito window.innerWidth
        return window.innerWidth < 768;
    });

    useEffect(() => {
        // handler per aggiornare lo stato quando cambia la larghezza
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // aggiungo listener
        window.addEventListener("resize", handleResize);
        // facciamo una chiamata a handleResize anche subito, 
        // così da coprire il caso in cui il component venga montato
        // dopo un ridimensionamento o da dischiudersi in funzioni di SSR
        handleResize();

        // cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <section id="hero" className="py-20 px-10 relative">
                <div id="title" className="flex flex-row max-lg:flex-col max-lg:py-0 max-lg:content-center max-lg:flex-wrap max-md:px-0 py-15 px-10 justify-between">
                    <div className="w-3/6 max-lg:w-4/6 max-lg:text-center">
                        <h2 className="text-3xl pb-5"><span className={isMobile ? "d-none" : ""}>Righe di codice, non slogan.</span><span className="text-3xl block pt-2">Ciao, sono Giuseppe</span></h2>
                        <div className={isMobile ? "p-tablet" : "typewriter"}>
                            <TextTyping/>
                        </div>
                        
                    </div>
                    <div className="content-center text-end w-3/6 max-lg:w-4/6 max-lg:text-center max-lg:py-5">
                        <p className="ms-button rounded-full text-center my-2 w-100">
                            <span id="disponibile"></span>
                            Disponibile per lavorare
                        </p>
                        <br />
                        <div className="max-[425px]:flex max-[425px]:flex-col">
                            <a href="" className="ms-button text-center rounded-full my-2 w-49  me-2"><CiMail /> Contatti</a>
                            <a href="" className="ms-button text-center rounded-full my-2 w-49"><FaRegFilePdf /> CV</a>
                        </div>
                    </div>
                </div>
                <div id="social" className="flex justify-center gap-5 py-5">
                    <a href="" className="link-hover"><FaGithub size={30} /></a>
                    <a href="" className="link-hover"><CiLinkedin size={30} /></a>
                </div>
                <a href="" className="mb-5 absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center show-more rounded-full text-center scroll-button">
                    Scopri di più <br /><FaArrowDown size={20} />
                </a>
            </section>
        </>
    )
}

export default HeroSection;