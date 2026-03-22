import React, { useState, useMemo } from 'react';
import { projectsData } from '../constants/projectsData';
import ProjectCard from '../components/ProjectCard';
import Canva from '../components/sections/Canva';
import canvaList from '../constants/canvaList';

export default function Projet() {
    const [activeTab, setActiveTab] = useState('Tous');

    const tabs = ['Tous', 'dev_web', 'Mobile', 'Api', 'Data', 'Arduino', 'Figma', 'Canva'];

    const filteredProjects = useMemo(() => {
        return activeTab === 'Tous' 
            ? projectsData 
            : projectsData.filter(p => p.category === activeTab);
    }, [activeTab]);

    // Fonction pour compter les projets par catégorie
    const getCount = (cat) => {
        if (cat === 'Tous') return projectsData.length;
        if (cat === 'Canva') return canvaList.length;
        return projectsData.filter(p => p.category === cat).length;
    };

    return (
        <main className="min-h-screen bg-black pt-32 pb-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h2 className="text-wood font-mono text-sm tracking-[0.4em] uppercase mb-4">Portfolio</h2>
                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                    MES <span className="text-accent-blue">PROJETS</span>
                </h1>
            </div>

            {/* SECOUND NAVBAR (Filtrage) */}
            <div className="sticky top-20 z-40 w-full border-y border-white/5 bg-black/90 backdrop-blur-md mb-16 px-4 md:px-0">
                <div className="max-w-7xl mx-auto relative group">
                    {/* Indicateurs de scroll (Dégradés sur les côtés pour mobile) */}
                    <div className="md:hidden absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
                    <div className="md:hidden absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-black via-black/80 to-transparent z-10 pointer-events-none flex items-center justify-end pr-1">
                        <div className="w-4 h-4 text-accent-blue animate-pulse">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5-5 5M6 7l5 5-5 5" /></svg>
                        </div>
                    </div>

                    <div className="flex items-center justify-start md:justify-center gap-4 py-4 overflow-x-auto no-scrollbar scroll-smooth px-2">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-300 border whitespace-nowrap ${
                                    activeTab === tab 
                                    ? "bg-accent-blue border-accent-blue text-white" 
                                    : "border-white/10 text-soft-blue hover:border-sable hover:text-sable"
                                }`}
                            >
                                {tab.replace('_', ' ')} <span className="ml-2 opacity-50">[{getCount(tab)}]</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grille de projets ou Section Canva */}
            <div className="max-w-7xl mx-auto px-6">
                {activeTab === 'Canva' ? (
                    <Canva />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>

            <style>
{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </main>
    );
}