import React, { useState, useEffect } from 'react';
import InstagramGallery from '../components/sections/instagram_gallery';

import meedeo from '../assets/glry/meedeo.mp4';
import meedeooo from '../assets/glry/meedeooo.mp4';
import meeee11111 from '../assets/glry/meeee11111.mp4';
// Gardons quelques vidéos de projets significatives si besoin, ou on remplace tout.
// Le client demande d'utiliser les fichiers dans src/assets/glry.


// Fonction unitaire pour détecter si un lien est une vidéo YouTube et extraire son ID
const getYoutubeId = (url) => {
    // Si c'est un lien local importé, ce n'est pas une URL string classique au format youtube
    if (typeof url !== 'string') return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

// Tableau avec vos vidéos locales ajoutées
const galleryItems = [
    {
        id: 1,
        url: meedeo,
        title: 'Session Focus'
    },
    {
        id: 2,
        url: meedeooo,
        title: 'Project Demo'
    },
    {
        id: 3,
        url: meeee11111,
        title: 'Tech Overview'
    }
];

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(Math.floor(galleryItems.length / 2));
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Gérer la navigation clavier pour le carrousel (flèches droite/gauche)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isModalOpen) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, isModalOpen]);

    const handleNext = () => {
        if (activeIndex < galleryItems.length - 1) setActiveIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (activeIndex > 0) setActiveIndex(prev => prev - 1);
    };

    // Helper pour générer l'Iframe YouTube
    const renderYoutubeIframe = (url, isModal = false) => {
        const videoId = getYoutubeId(url);
        // Paramètres pour l'Iframe : Autoplay actif en modal, muet en carrousel
        const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0${isModal ? '&autoplay=1' : '&autoplay=1&mute=1&controls=0'}`;

        return (
            <iframe
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={`w-full h-full object-cover rounded-xl ${!isModal && 'pointer-events-none'}`}
            ></iframe>
        );
    };

    return (
        <main className="min-h-screen bg-[#050505] pt-32 pb-20 overflow-hidden relative font-sans">

            {/* Background Ambience Layers */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#4468b8]/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#8d6b5d]/10 rounded-full blur-[150px]"></div>

                {/* Subtle Tech Grid */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            </div>

            {/* Hero Header */}
            <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-16 relative z-10 text-center">
                <h2 className="text-[#8d6b5d] font-mono text-sm tracking-[0.4em] uppercase mb-4">En immersion</h2>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                    MES <span className="text-[#4468b8] italic">VIDÉOS</span>
                </h1>
                <p className="mt-4 text-[#8a9fc4] max-w-2xl mx-auto font-light leading-relaxed">
                    Plongez dans mon environnement de travail. Découvrez en vidéo mes sessions de code, des démos d'applications et l'architecture de mes projets.
                </p>
            </div>

            {/* 3D COVERFLOW GALLERY INTERACTIVE (Style CodePen) */}
            <div className="relative w-full h-[60vh] md:h-[65vh] flex justify-center items-center perspective-[1500px] z-20 overflow-visible mb-20 md:mb-32">

                {galleryItems.map((item, index) => {
                    const diff = index - activeIndex;
                    const isCenter = diff === 0;

                    // Paramètres CSS magiques pour plier la galerie en 3D
                    const translateX = diff * 80;         // Espacement horizontal entre les cartes (en px ou %)
                    const translateZ = Math.abs(diff) * -250; // Profondeur (z-axis)
                    const rotateY = diff * -25;           // Angle d'inclinaison
                    const scale = 1 - Math.abs(diff) * 0.05;
                    const zIndex = galleryItems.length - Math.abs(diff);
                    const opacity = Math.abs(diff) > 2 ? 0 : 1 - (Math.abs(diff) * 0.25);

                    const isYoutube = getYoutubeId(item.url) !== null;

                    return (
                        <div
                            key={item.id}
                            onClick={() => {
                                if (isCenter) setIsModalOpen(true);
                                else setActiveIndex(index);
                            }}
                            className={`absolute top-1/2 left-1/2 w-[85%] sm:w-[500px] md:w-[750px] aspect-[16/10] md:aspect-video -translate-y-1/2 transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] select-none cursor-pointer rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl origin-center ${isCenter
                                ? 'ring-2 ring-[#4468b8]/70 shadow-[0_30px_60px_rgba(0,0,0,0.8),_0_0_40px_rgba(68,104,184,0.3)] hover:scale-[1.02]'
                                : 'hover:opacity-100 ring-1 ring-white/10'
                                }`}
                            style={{
                                transform: `translateX(calc(-50% + ${translateX}%)) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                                zIndex: zIndex,
                                opacity: opacity,
                                pointerEvents: Math.abs(diff) > 2 ? 'none' : 'auto',
                            }}
                        >
                            {/* Rendering du Media (Vidéos uniquement) */}
                            {isYoutube
                                ? renderYoutubeIframe(item.url, false)
                                : <video src={item.url} className="w-full h-full object-cover select-none pointer-events-none" loop muted autoPlay playsInline draggable="false"></video>
                            }

                            {/* Assombrissement sur les cartes non centrales (et blocage des iframes) */}
                            {!isCenter && <div className="absolute inset-0 bg-black/60 transition-colors duration-500 z-10"></div>}

                            {/* Couverture invisible sur le centre pour absorber le clic sur l'iframe YouTube */}
                            {isCenter && isYoutube && <div className="absolute inset-0 z-10 cursor-pointer"></div>}

                            {/* Dégradé permanent sur la carte active pour lisibilité du titre */}
                            {isCenter && <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-20"></div>}

                            {/* Badge Lecture en direct*/}
                            {isCenter && (
                                <div className="absolute top-6 right-6 bg-red-600/90 text-white rounded-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 backdrop-blur-sm border border-red-400/50 shadow-[0_0_15px_rgba(220,38,38,0.5)] z-30">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> En lecture
                                </div>
                            )}

                            {/* Bloc Titre de la carte */}
                            <div className={`absolute bottom-6 left-6 md:bottom-10 md:left-10 transition-all duration-700 delay-100 flex flex-col items-start z-30 ${isCenter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <span className="bg-[#4468b8]/20 backdrop-blur-md px-4 py-1.5 border border-[#4468b8]/50 rounded-full text-[#dfd7c1] font-black tracking-[0.2em] uppercase text-xs mb-3 shadow-[0_0_10px_rgba(68,104,184,0.3)]">
                                    {item.title}
                                </span>
                                <h3 className="text-white text-lg md:text-2xl font-light tracking-wide max-w-sm">
                                    Cliquer pour ouvrir le lecteur vidéo complet.
                                </h3>

                                {/* Bouton fictif d'action */}
                                {isCenter && (
                                    <div className="mt-5 flex items-center text-[#4468b8] text-xs font-bold uppercase tracking-widest gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors pointer-events-auto">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        Lancer la vidéo
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}

                {/* CONTROLES DE NAVIGATION (Boutons précédents/suivants) */}
                <div className="absolute bottom-2 sm:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-10 z-30">
                    <button
                        onClick={handlePrev}
                        disabled={activeIndex === 0}
                        className="w-14 h-14 rounded-full border border-white/10 bg-[#111111]/80 backdrop-blur-xl flex items-center justify-center text-white hover:bg-[#4468b8] hover:border-[#4468b8] hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none group"
                    >
                        <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <div className="font-mono text-white/50 tracking-[0.3em] text-sm font-bold flex gap-2 items-end">
                        <span className="text-white text-xl leading-none">0{activeIndex + 1}</span>
                        <span className="text-white/20 text-xl leading-none">/</span>
                        <span className="leading-none pb-[2px]">0{galleryItems.length}</span>
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={activeIndex === galleryItems.length - 1}
                        className="w-14 h-14 rounded-full border border-white/10 bg-[#111111]/80 backdrop-blur-xl flex items-center justify-center text-white hover:bg-[#4468b8] hover:border-[#4468b8] hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none group"
                    >
                        <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>

            {/* FULLSCREEN LIGHTBOX MODAL (Quand on clique sur la carte active) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-4 sm:p-8 animate-fade-in" onClick={() => setIsModalOpen(false)}>
                    {/* Bouton de Fermeture Animé */}
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
                        className="absolute top-6 right-6 sm:top-10 sm:right-10 w-14 h-14 bg-white/5 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:scale-110 z-[110] group"
                    >
                        <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    {/* Conteneur principal de la Lightbox */}
                    <div className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>

                        {/* Media rendering (Video grand format) */}
                        <div className="relative p-2 w-full max-w-5xl aspect-video bg-[#111] border border-white/10 rounded-2xl shadow-[0_0_100px_rgba(68,104,184,0.15)] overflow-hidden flex justify-center items-center">
                            {getYoutubeId(galleryItems[activeIndex].url)
                                ? renderYoutubeIframe(galleryItems[activeIndex].url, true)
                                : <video src={galleryItems[activeIndex].url} controls autoPlay className="max-w-full max-h-[75vh] object-contain rounded-xl outline-none"></video>
                            }
                        </div>

                        {/* Informations sous la vidéo */}
                        <div className="mt-8 text-center flex flex-col items-center">
                            <span className="text-[#8d6b5d] font-mono text-[10px] tracking-widest uppercase mb-2 border border-[#8d6b5d]/30 px-3 py-1 rounded-full">Lecteur Vidéo</span>
                            <h3 className="text-white font-black text-3xl sm:text-4xl uppercase tracking-widest">
                                {galleryItems[activeIndex].title}
                            </h3>
                        </div>
                    </div>
                </div>
            )}

            {/* INTEGRATION DE LA GALERIE INSTAGRAM EN DESSOUS DES VIDEOS */}
            <InstagramGallery />

            {/* Propriétés CSS magiques pour la 3D et les animations de base */}
            <style>{`
        .perspective-[1500px] {
            perspective: 1500px;
        }
        .animate-fade-in {
            animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
        }
      `}</style>

        </main>
    );
}