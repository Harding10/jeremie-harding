import React, { useState, useMemo } from 'react';
import { projectsData } from '../constants/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function Projet() {
    const [activeTab, setActiveTab] = useState('Tous');

    const tabs = ['Tous', 'dev_web', 'Mobile', 'Api', 'Data', 'Arduino', 'Figma'];

    const filteredProjects = useMemo(() => {
        return activeTab === 'Tous' 
            ? projectsData 
            : projectsData.filter(p => p.category === activeTab);
    }, [activeTab]);

    // Fonction pour compter les projets par catégorie
    const getCount = (cat) => {
        if (cat === 'Tous') return projectsData.length;
        return projectsData.filter(p => p.category === cat).length;
    };

    return (
        <main className="min-h-screen bg-black pt-32 pb-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h2 className="text-[#8d6b5d] font-mono text-sm tracking-[0.4em] uppercase mb-4">Portfolio</h2>
                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                    MES <span className="text-[#4468b8]">PROJETS</span>
                </h1>
            </div>

            {/* SECOUND NAVBAR (Filtrage) */}
            <div className="sticky top-20 z-40 w-full border-y border-white/5 bg-black/90 backdrop-blur-md mb-16">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-start md:justify-center gap-4 py-4 overflow-x-auto no-scrollbar">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-300 border ${
                                activeTab === tab 
                                ? "bg-[#4468b8] border-[#4468b8] text-white" 
                                : "border-white/10 text-[#cbd5e1] hover:border-[#dfd7c1] hover:text-[#dfd7c1]"
                            }`}
                        >
                            {tab.replace('_', ' ')} <span className="ml-2 opacity-50">[{getCount(tab)}]</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Grille de projets */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </main>
    );
}