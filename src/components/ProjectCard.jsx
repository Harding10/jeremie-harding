import React from 'react';
import { getYoutubeId, getYoutubeEmbedUrl } from '../utils/youtube';

export default function ProjectCard({ project }) {
    const isYoutube = getYoutubeId(project.video) !== null;
    const embedUrl = isYoutube ? getYoutubeEmbedUrl(project.video, false) : null;

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl bg-[#444056]/30 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(68,104,184,0.3)] hover:border-[#4468b8]/50"
        >
            {/* Média du projet (Vidéo ou Image) */}
            <div className="relative aspect-video w-full overflow-hidden bg-black/50">
                {project.video && project.video !== "#" ? (
                    isYoutube ? (
                        <iframe
                            src={embedUrl}
                            title={project.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                        ></iframe>
                    ) : (
                        <video
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                        />
                    )
                ) : project.image ? (
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                    />
                ) : (
                    <div className="h-full w-full flex items-center justify-center bg-dark-gray/20">
                        <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Image ou Vidéo à venir</span>
                    </div>
                )}


                {/* Overlay gradient pour la lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60"></div>

                {/* Badge Catégorie */}
                <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#dfd7c1] border border-white/10 shadow-lg">
                        {project.category.replace('_', ' ')}
                    </span>
                </div>
            </div>

            {/* Contenu textuel */}
            <div className="relative p-6 pt-4 bg-gradient-to-b from-transparent to-[#0a0a0a]">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4468b8] transition-colors">{project.title}</h3>
                    <p className="text-sm font-light text-[#cbd5e1] line-clamp-2 leading-relaxed">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono font-bold text-[#8d6b5d] uppercase tracking-wider bg-[#8d6b5d]/10 border border-[#8d6b5d]/20 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bordure animée subtile en hover */}
            <div className="absolute inset-0 border-[2px] border-transparent transition-colors duration-500 group-hover:border-[#4468b8]/20 rounded-2xl pointer-events-none"></div>
        </a>
    );
}
