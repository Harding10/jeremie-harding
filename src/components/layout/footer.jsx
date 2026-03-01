import React from 'react';

function Footer() {
    return (
        <footer className="bg-[#0a0a0a] py-20 px-6 md:px-20 border-t border-white/5 relative overflow-hidden">
            {/* Effets de lumière en fond pour le footer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4468b8] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">

                <div className="space-y-4 md:space-y-6 mb-16 px-4">
                    <h2 className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[1.1] md:leading-none uppercase">
                        Construisons <br /> <span className="stroke-text-footer italic">L'Avenir.</span>
                    </h2>
                    <p className="text-[#8a9fc4] text-xs sm:text-sm md:text-xl font-light tracking-[0.2em] md:tracking-[0.4em] max-w-2xl mx-auto uppercase mt-6">
                        Transformer l'imagination en <span className="text-[#4468b8] font-bold">réalité connectée</span>.
                    </p>
                </div>

                <div className="mb-24 md:mb-32">
                    <a href="mailto:behdegryjeremieharding@gmail.com" className="relative group inline-block">
                        <div className="absolute inset-0 bg-[#4468b8] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <button className="relative px-10 py-5 bg-[#444056]/50 backdrop-blur-md border border-[#4468b8]/30 text-[#dfd7c1] font-black text-sm md:text-base uppercase tracking-[0.2em] rounded-sm hover:bg-[#4468b8] hover:text-white transition-all transform hover:-translate-y-1 shadow-[8px_8px_0px_rgba(141,107,93,0.3)] hover:shadow-[10px_10px_0px_rgba(141,107,93,0.8)] active:shadow-none active:translate-x-1 active:translate-y-1">
                            Me Contacter
                        </button>
                    </a>
                </div>

                <div className="w-full pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 px-4 text-left">
                    <div className="flex flex-col items-start gap-4 max-w-md">
                        <span className="text-white font-black text-3xl tracking-tighter">
                            HARD<span className="text-[#4468b8]">ING</span>
                        </span>
                        <div className="space-y-2">
                            <p className="text-[#8a9fc4] text-[10px] md:text-[11px] uppercase tracking-widest font-bold">
                                © {new Date().getFullYear()} Degry Jeremie Harding Beh. Tous droits réservés.
                            </p>
                            <a href="mailto:behdegryjeremieharding@gmail.com" className="block text-[#8d6b5d] text-xs font-mono hover:text-[#dfd7c1] transition-colors">
                                behdegryjeremieharding@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full md:w-auto items-start md:items-center">
                        <ul className="flex flex-col md:flex-row gap-6 md:gap-10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#8a9fc4]">
                            <li className="hover:text-[#dfd7c1] transition-colors cursor-pointer">Home</li>
                            <li className="hover:text-[#dfd7c1] transition-colors cursor-pointer">Projets</li>
                            <li className="hover:text-[#dfd7c1] transition-colors cursor-pointer">Gallery</li>
                            <li className="hover:text-[#dfd7c1] transition-colors cursor-pointer">Contact</li>
                        </ul>

                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/jeremie-harding/" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full border border-white/10 bg-[#444056]/30 flex items-center justify-center hover:bg-[#4468b8] hover:border-transparent hover:text-white transition-all cursor-pointer text-sm text-[#dfd7c1]" aria-label="Visiter mon profil LinkedIn">
                                in
                            </a>
                            <a href="https://github.com/Harding10" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full border border-white/10 bg-[#444056]/30 flex items-center justify-center hover:bg-white hover:text-black hover:border-transparent transition-all cursor-pointer text-sm text-[#dfd7c1] font-bold" aria-label="Visiter mon profil GitHub">
                                GH
                            </a>
                            <a href="#" className="size-12 rounded-full border border-white/10 bg-[#444056]/30 flex items-center justify-center hover:bg-[#8d6b5d] hover:border-transparent hover:text-white transition-all cursor-pointer text-sm text-[#dfd7c1]" aria-label="Me suivre sur X (Twitter)">
                                X
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .stroke-text-footer {
                    -webkit-text-stroke: 2px #8d6b5d;
                    color: transparent;
                }
            `}</style>
        </footer>
    );
}

export default Footer;
