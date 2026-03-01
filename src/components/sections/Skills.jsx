import React from 'react';

// Importation des icônes (Adapte les noms de fichiers si nécessaire)
import htmlIcon from '../../assets/icon/html5-css3-hd.jpg';
import jsIcon from '../../assets/icon/js.svg';
import reactIcon from '../../assets/icon/react-original.svg';
import tailwindIcon from '../../assets/icon/tailwind.png';
import tsIcon from '../../assets/icon/typescript-original.svg';

import laravelIcon from '../../assets/icon/Laravel.svg.png';
import sqlIcon from '../../assets/icon/sql-1.png';
import mysqlIcon from '../../assets/icon/mysql.jpg';
import firebaseIcon from '../../assets/icon/firebase.png';
import pythonIcon from '../../assets/icon/python-original.svg';

import figmaIcon from '../../assets/icon/Figma.png';
import dockerIcon from '../../assets/icon/docker-original.svg';
import gitIcon from '../../assets/icon/git.svg';
import postmanIcon from '../../assets/icon/postman.png';
import vercelIcon from '../../assets/icon/vercel.jpg';

const SkillCarousel = ({ title, icons }) => (
    <div className="flex flex-col items-center w-full max-w-[400px]">
        <h3 className="text-xl md:text-2xl font-bold mb-10 md:mb-16 text-[#dfd7c1] relative inline-block group uppercase tracking-widest text-center">
            {title.split('').map((char, i) => (
                <span key={i} className="inline-block hover:animate-bounce hover:text-[#4468b8] transition-colors" style={{ animationDelay: `${i * 0.1}s` }}>
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#4468b8] rounded-full"></div>
        </h3>

        <div className="w-[280px] h-[220px] sm:w-[400px] sm:h-[300px] relative perspective-[1000px] md:perspective-[1500px]">
            <div className="carousel-3d">
                {icons.map((icon, index) => {
                    const angle = index * (360 / icons.length);
                    // On réduit la translation Z sur mobile pour éviter que les icônes ne sortent de l'écran
                    const translateZ = window.innerWidth < 640 ? 110 : 160;
                    const size = window.innerWidth < 640 ? 80 : 120;

                    return (
                        <figure
                            key={index}
                            className="absolute left-1/2 top-1/2 flex justify-center items-center"
                            style={{
                                transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                                width: `${size}px`,
                                height: `${size}px`,
                                marginLeft: `-${size / 2}px`,
                                marginTop: `-${size / 2}px`
                            }}
                        >
                            <div className="w-full h-full bg-[#444056]/40 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(68,104,184,0.6)] hover:scale-110 transition-all duration-300">
                                <img
                                    src={icon}
                                    alt={`Icône de compétence - ${icon.split('/').pop().split('-')[0]}`}
                                    loading="lazy"
                                    width="95"
                                    height="95"
                                    className="w-full h-full object-contain drop-shadow-md"
                                />
                            </div>
                        </figure>
                    );
                })}
            </div>
        </div>
    </div>
);

export default function Skills() {
    const frontendIcons = [htmlIcon, jsIcon, reactIcon, tailwindIcon, tsIcon];
    const backendIcons = [laravelIcon, sqlIcon, mysqlIcon, firebaseIcon, pythonIcon];
    const toolsIcons = [gitIcon, dockerIcon, postmanIcon, figmaIcon, vercelIcon];

    return (
        <section id="skills" className="relative w-full max-w-7xl mx-auto px-6 py-24 lg:py-32 overflow-hidden">

            {/* Titre de section discret */}
            <div className="flex items-center gap-4 mb-32">
                <h2 className="text-[#8d6b5d] font-mono text-xl tracking-[0.3em] uppercase">02. Mes Compétences</h2>
                <div className="h-[1px] w-48 bg-[#444056]"></div>
            </div>

            <div className="flex flex-col xl:flex-row justify-center items-center gap-32 lg:gap-24 flex-wrap">
                <SkillCarousel title="Frontend" icons={frontendIcons} />
                <SkillCarousel title="Backend" icons={backendIcons} />
                <SkillCarousel title="Outils" icons={toolsIcons} />
            </div>

            <style>{`
                .carousel-3d {
                    width: 100%; 
                    height: 100%; 
                    position: absolute; 
                    transform-style: preserve-3d;
                    animation: rotateCarousel 20s linear infinite;
                }
                .carousel-3d:hover { 
                    animation-play-state: paused; 
                }
                @keyframes rotateCarousel { 
                    from { transform: rotateY(0deg); } 
                    to { transform: rotateY(360deg); } 
                }
            `}</style>
        </section>
    );
}