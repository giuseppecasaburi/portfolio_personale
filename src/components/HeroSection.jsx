import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub, FaRegFilePdf } from "react-icons/fa";

function HeroSection() {
    return (
        <>
            <section id="hero" className="py-20 px-10">
                <div id="title" className="flex py-15 px-10 justify-between">
                    <div className="w-4/6">
                        <h2 className="text-3xl pb-5">Righe di codice, non slogan.<span className="text-5xl block pt-2">Ciao, sono Giuseppe,</span></h2>
                        <div className="typewriter">
                            <p className="text-2xl">Full-Stack Web Developer.</p>
                        </div>
                    </div>
                    <div className="content-center text-center w-2/6">
                        <p className="ms-button rounded-full my-2 w-100">
                            <span id="disponibile"></span>
                            Disponibile per lavorare
                        </p>
                        <br />
                        <a href="" className="ms-button rounded-full my-2 w-49 me-2"><CiMail /> Contattami</a>
                        <a href="" className="ms-button rounded-full my-2 w-49"><FaRegFilePdf /> Curriculum Vitea</a>
                    </div>
                </div>
                <div id="social">
                    <span><FaGithub /></span>
                    <span><CiLinkedin /></span>
                </div>
                <div>
                    <a href="">Scopri di più</a>
                </div>
            </section>
        </>
    )
}

export default HeroSection;