import React from 'react';

export default function About() {
    return (
        <section id="about" className="relative w-full max-w-7xl mx-auto px-6 py-16 lg:py-20 overflow-hidden">

            {/* Titre de section discret */}
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-[#8d6b5d] font-mono text-sm tracking-[0.3em] uppercase">01. À propos de moi</h2>
                <div className="h-[1px] w-32 bg-[#444056]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                {/* --- GAUCHE : LA NARRATION --- */}
                <div className="lg:col-span-7">
                    <h3 className="text-4xl md:text-5xl font-black text-[#dfd7c1] leading-tight mb-8">
                        Transformer la complexité en <span className="text-[#4468b8]">solutions élégantes</span>.
                    </h3>

                    <div className="space-y-6 text-[#cbd5e1] text-lg leading-relaxed font-light">
                        <p>
                            Étudiant en deuxième année de <span className="text-white font-medium text-lg">Licence Génie Informatique</span> à l'Institut Universitaire d'Abidjan (IUA), je me positionne à l'intersection du logiciel et du matériel.
                        </p>
                        <p>
                            Développeur full-stack par choix, je suis profondément passionné par <span className="text-[#dfd7c1] border-b border-[#8d6b5d]">l'IA, la Data et les systèmes embarqués (IoT)</span>. Pour moi, le code n'est pas qu'une suite d'instructions, c'est un outil de création capable de relever des défis techniques avec rigueur.
                        </p>
                        <p>
                            Curieux de nature et en apprentissage permanent, je considère chaque projet comme une opportunité d'innover et de progresser. Mon enthousiasme me pousse à chercher l'efficacité dans chaque ligne de code et chaque circuit conçu.
                        </p>
                    </div>
                </div>

                {/* --- DROITE : INFOS RAPIDES (Bento Style) --- */}
                <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                    <div className="p-8 bg-[#444056]/30 border border-white/5 rounded-2xl backdrop-blur-sm">
                        <h4 className="text-[#dfd7c1] font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#4468b8] rounded-full"></span>
                            Formation actuelle
                        </h4>
                        <p className="text-[#cbd5e1] text-sm leading-relaxed italic">
                            L2 Génie Informatique - IUA (Abidjan)
                        </p>
                    </div>

                    <div className="p-8 bg-[#444056]/30 border border-white/5 rounded-2xl backdrop-blur-sm">
                        <h4 className="text-[#dfd7c1] font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#8d6b5d] rounded-full"></span>
                            Mes Obsessions
                        </h4>
                        <ul className="grid grid-cols-2 gap-3">
                            {['Full-stack Dev', 'Data Analysis', 'IoT Systems', 'Intelligence Artificielle'].map((item) => (
                                <li key={item} className="text-[#cbd5e1] text-xs font-mono bg-black/40 p-2 rounded border border-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Petite citation ou devise */}
                    <div className="p-6 border-l-2 border-[#4468b8] bg-[#4468b8]/5">
                        <p className="text-[#dfd7c1] italic text-sm">
                            "Chaque défi technique est une opportunité de redéfinir le possible."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}