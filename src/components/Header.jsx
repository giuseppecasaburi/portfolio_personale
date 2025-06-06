import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa';
import { useState } from 'react';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header>
                <nav className="mx-auto flex max-w-7xl items-center justify-between text-white p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img className="h-8 w-auto" src="../logo_gpt.png" alt="logo giuseppe casaburi" />
                        </a>
                    </div>
                    <div className={`flex lg:hidden ${isMenuOpen ? 'invisible' : ''}`}>
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-lg/6 font-semibold hover:text-gray-300 link-hover">Home</a>
                        <a href="#" className="text-lg/6 font-semibold hover:text-gray-300 link-hover">About Me</a>
                        <a href="#" className="text-lg/6 font-semibold hover:text-gray-300 link-hover">Project</a>
                        <a href="#" className="text-lg/6 font-semibold hover:text-gray-300 link-hover">Skills</a>
                        <a href="#" className="text-lg/6 font-semibold hover:text-gray-300 link-hover">Contatti</a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <FaRegLightbulb size={24} color="white" />
                    </div>
                </nav>

                {/* Mobile menu, show/hide based on menu open state */}
                <div className={`lg:hidden text-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} role="dialog" aria-modal="true">
                    {/* Background backdrop */}
                    <div className="fixed inset-0 z-50" onClick={closeMenu}></div>
                    <div id='side-menu' className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <img className="h-8 w-auto" src="../logo_gpt.png" alt="logo giuseppe casaburi" />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5"
                                onClick={closeMenu}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 font-semibold touch-manipulation" onClick={closeMenu}>Home</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 font-semibold touch-manipulation" onClick={closeMenu}>About Me</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 font-semibold touch-manipulation" onClick={closeMenu}>Project</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 font-semibold touch-manipulation" onClick={closeMenu}>Skills</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 font-semibold touch-manipulation" onClick={closeMenu}>Contatti</a>
                                </div>
                                <div className="py-6">
                                    <FaRegLightbulb size={24} color="white" onClick={closeMenu}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;