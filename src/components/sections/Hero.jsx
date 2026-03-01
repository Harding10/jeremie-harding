import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import hardingImg from '../../assets/Harding_10.png';

export default function Hero() {
    const navigate = useNavigate();
    return (
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-20 overflow-visible">

            {/* --- ANIMATION PLUIE D'ÉTOILES FILANTES --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
            </div>

            {/* --- EFFETS DE LUMIÈRE STATIQUES --- */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#4468b8] rounded-full blur-[150px] opacity-[0.07]"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8d6b5d] rounded-full blur-[150px] opacity-[0.07]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full px-6 relative z-10">

                {/* --- GAUCHE --- */}
                <div className="lg:col-span-7 text-left order-2 lg:order-1">
                    <div className="inline-block mb-4 md:mb-6 px-4 py-1.5 bg-[#444056] border-l-4 border-[#4468b8] rounded-r-md">
                        <p className="text-[9px] md:text-[11px] tracking-[0.4em] text-[#dfd7c1] font-black uppercase">
                            DEVELOPPEUR
                        </p>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-[0.9] lg:leading-[0.8] tracking-tighter text-white mb-6 md:mb-8">
                        HARD<span className="text-transparent stroke-text">ING</span>
                    </h1>

                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <div className="h-[2px] w-12 md:w-20 bg-[#8d6b5d]"></div>
                        <div className="text-lg sm:text-2xl md:text-3xl font-medium text-[#dfd7c1]">
                            <Typewriter
                                words={['Innovation Trainer', 'Fullstack Developer', 'System Designer']}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                            />
                        </div>
                    </div>

                    <p className="max-w-lg text-[#8a9fc4] text-base md:text-xl leading-relaxed font-light mb-10 md:mb-12">
                        Fusionner l'électronique et le code pour bâtir des <span className="text-white font-semibold">écosystèmes intelligents</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <button
                            onClick={() => navigate('/Projet')}
                            className="w-full sm:w-auto px-10 py-4 bg-[#dfd7c1] text-black font-extrabold rounded-sm hover:bg-white transition-all transform hover:-translate-x-1 hover:-translate-y-1 shadow-[8px_8px_0px_#4468b8] active:shadow-none active:translate-x-1 active:translate-y-1"
                        >
                            MES PROJETS
                        </button>
                        <button
                            onClick={() => navigate('/Contact')}
                            className="w-full sm:w-auto px-10 py-4 border-2 border-[#8d6b5d] text-[#dfd7c1] font-extrabold rounded-sm hover:bg-[#8d6b5d]/10 transition-all"
                        >
                            ME CONTACTER
                        </button>
                    </div>
                </div>

                {/* --- DROITE --- */}
                <div className="lg:col-span-5 relative flex justify-center items-center order-1 lg:order-2 mb-12 lg:mb-0">
                    <div className="relative z-10 w-full max-w-[400px] aspect-[4/5] rounded-[2rem] p-3 bg-gradient-to-br from-[#444056] to-black border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                            <img
                                src={hardingImg}
                                alt="Degry Jeremie Harding - Portfolio"
                                fetchpriority="high"
                                loading="eager"
                                width="864"
                                height="1097"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 p-6 bg-[#dfd7c1] rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-black font-black text-xs tracking-tighter">SYSTEM ONLINE</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 border-r-2 border-b-2 border-[#8d6b5d] opacity-30"></div>
                </div>
            </div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 2px #4468b8;
                    text-stroke: 2px #4468b8;
                }

                .shooting-star {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 2px;
                    background: linear-gradient(-45deg, #4468b8, rgba(0, 0, 255, 0));
                    filter: drop-shadow(0 0 6px #4468b8);
                    animation: tail 4s ease-in-out infinite, shooting 4s ease-in-out infinite;
                    opacity: 0;
                }

                /* Distribution aléatoire des étoiles */
                .shooting-star:nth-child(1) { top: -10%; left: 10%; animation-delay: 0s; }
                .shooting-star:nth-child(2) { top: 0%; left: 30%; animation-delay: 1.5s; animation-duration: 3s; }
                .shooting-star:nth-child(3) { top: -5%; left: 50%; animation-delay: 3s; }
                .shooting-star:nth-child(4) { top: 10%; left: 70%; animation-delay: 0.5s; animation-duration: 5s; }
                .shooting-star:nth-child(5) { top: -20%; left: 90%; animation-delay: 4s; }
                .shooting-star:nth-child(6) { top: 15%; left: 25%; animation-delay: 2.2s; }
                .shooting-star:nth-child(7) { top: 5%; left: 45%; animation-delay: 1s; animation-duration: 3.5s; }
                .shooting-star:nth-child(8) { top: -15%; left: 65%; animation-delay: 3.5s; }
                .shooting-star:nth-child(9) { top: 20%; left: 85%; animation-delay: 0.2s; }
                .shooting-star:nth-child(10) { top: 0%; left: 15%; animation-delay: 5s; }
                .shooting-star:nth-child(11) { top: -10%; left: 40%; animation-delay: 2.8s; }
                .shooting-star:nth-child(12) { top: 5%; left: 80%; animation-delay: 1.8s; }

                @keyframes tail {
                    0% { transform: scaleX(0); opacity: 0; }
                    30% { transform: scaleX(1); opacity: 1; }
                    100% { transform: scaleX(0); opacity: 0; }
                }

                @keyframes shooting {
                    0% { transform: translateX(0) translateY(0) rotate(45deg); }
                    100% { transform: translateX(1000px) translateY(1000px) rotate(45deg); }
                }

                .animate-bounce-slow { animation: bounce 4s infinite; }
                @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
            `}</style>
        </div>
    );
}