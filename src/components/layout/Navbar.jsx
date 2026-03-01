import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import logoHarding from '../../assets/logo.jpg'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import cvAnimation from '../../assets/cv-icon.json'
import handleDownload from '../../constants/handleDownload'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [dotLottie, setDotLottie] = useState(null);
    const toggleMenu = () => setIsOpen(!isOpen);

    const dotLottieRefCallback = useCallback((dotLottieInstance) => {
        setDotLottie(dotLottieInstance);
    }, []);

    const handleCVClick = () => {
        handleDownload();
        if (dotLottie) {
            dotLottie.play();
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projets', path: '/Projets' },
        { name: 'Gallery', path: '/Gallery' },
        { name: 'Contact', path: '/Contact' },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 flex justify-center z-[100] px-4">
            <div className="relative w-full max-w-fit mx-auto">
                {/* La barre style "pilule" */}
                <nav className="flex items-center bg-[#1a1a1acc] backdrop-blur-md rounded-full px-2 py-2 shadow-2xl border border-white/5 relative z-20">
                    {/* Logo */}
                    <Link to="/" className="bg-black p-2 rounded-full flex items-center justify-center h-10 w-10 ml-1" aria-label="Retour à l'accueil">
                        <img src={logoHarding} alt="Logo Degry Jeremie Harding" width="42" height="42" className="w-6 h-6 object-contain" />
                    </Link>

                    {/* Liens centraux (Desktop) */}
                    <ul className="hidden md:flex items-center gap-8 px-8 text-sm font-medium text-gray-300">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="hover:text-white transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Bouton Menu (Mobile) */}
                    <button
                        onClick={toggleMenu}
                        className="flex md:hidden items-center justify-center h-10 w-10 text-white ml-2 mr-2"
                        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Bouton CV (Email) */}
                    <button
                        onClick={handleCVClick}
                        className="hidden sm:flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all active:scale-95 mr-1"
                        aria-label="Télécharger mon Curriculum Vitae"
                    >
                        <span>CV</span>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <DotLottieReact
                                data={cvAnimation}
                                loop={false}
                                dotLottieRef={dotLottieRefCallback}
                            />
                        </div>
                    </button>
                </nav>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="absolute top-16 left-0 right-0 md:hidden bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 shadow-2xl animate-in slide-in-from-top-4 fade-in z-10">
                        <ul className="flex flex-col gap-4 text-center">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-lg font-medium block py-2 hover:bg-white/5 rounded-xl transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-white/5">
                                <button
                                    onClick={() => { handleCVClick(); setIsOpen(false); }}
                                    className="w-full bg-white text-black py-3 rounded-2xl font-bold flex items-center justify-center gap-2"
                                >
                                    <span>TÉLÉCHARGER CV</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}