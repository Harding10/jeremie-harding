import React, { useState } from 'react';

// Importation des images de certifications

import certificationsList from '../../constants/certificationsList';



export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  return (
    <section id="certifications" className="relative w-full max-w-7xl mx-auto px-6 py-24 lg:py-32 bg-[#0a0a0a]">

      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#4468b8] to-[#8d6b5d] rounded-full blur-[200px] opacity-[0.05] pointer-events-none transition-all duration-1000"></div>

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 gap-3 relative z-10">
        <h2 className="text-[#8d6b5d] font-mono text-sm tracking-[0.4em] uppercase">Validations & Acquis</h2>
        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase relative">
          Mes <span className="text-transparent" style={{ WebkitTextStroke: '2px #4468b8' }}>Certificats</span>
        </h3>
        <p className="max-w-2xl text-[#cbd5e1] font-light text-sm md:text-base mt-2">
          Découvrez la collection de mes attestations, reflétat mon engagement dans une veille technologique constante. Cliquez sur une carte pour la déployer et sur l'image pour l'agrandir.
        </p>
      </div>

      {/* EXPANDING CARDS CAROUSEL */}
      <div className="relative z-10 flex w-full h-[75vh] md:h-[65vh] gap-3 flex-col md:flex-row transition-all duration-700 mx-auto max-w-6xl overflow-hidden">
        {certificationsList.map((cert, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={cert.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-[2rem] overflow-hidden cursor-pointer bg-[#111] border transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-center items-center ${isActive
                ? 'flex-[6] md:flex-[5] border-[#4468b8]/50 shadow-[0_0_40px_rgba(68,104,184,0.3)]'
                : 'flex-[1] border-white/5 opacity-60 hover:opacity-100 hover:flex-[1.2]'
                }`}
            >
              {/* Blurred Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cert.image}
                  alt={`Fond flou - ${cert.title}`}
                  loading="lazy"
                  width="1000"
                  height="700"
                  className={`w-full h-full object-cover transition-all duration-[800ms] ${isActive ? 'scale-110 blur-xl opacity-30' : 'blur-sm opacity-40 grayscale group-hover:grayscale-0'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-20 mix-blend-overlay`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none"></div>
              </div>

              {/* ACTIVE CONTENT : Image & Details */}
              <div
                className={`absolute inset-0 z-10 flex flex-col p-6 md:p-10 transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
                  }`}
              >
                {/* Header Tag */}
                <div className="flex justify-between items-start w-full mb-4">
                  <span className="bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-white tracking-widest uppercase border border-white/10">
                    {cert.issuer}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex flex-col items-center justify-center border border-white/20">
                    <span className="text-white text-xs font-mono font-bold">0{idx + 1}</span>
                  </div>
                </div>

                {/* Certificate Image Centered */}
                <div 
                  onClick={(e) => { e.stopPropagation(); openLightbox(cert.image); }}
                  className="flex-1 w-full flex items-center justify-center my-4 overflow-hidden rounded-xl bg-black/40 border border-white/5 shadow-inner cursor-zoom-in group/img"
                >
                  <img
                    src={cert.image}
                    alt={`Certificat officiel ${cert.title} par ${cert.issuer}`}
                    loading="lazy"
                    width="1754"
                    height="242"
                    className="max-w-full max-h-full object-contain p-2 md:p-4 drop-shadow-2xl transition-transform duration-500 group-hover/img:scale-105"
                  />
                  {/* Overlay hover subtil */}
                  <div className="absolute inset-0 bg-[#4468b8]/10 opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none"></div>
                </div>

                {/* Footer Title */}
                <div className="text-center w-full mt-auto">
                  <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter drop-shadow-lg">{cert.title}</h3>
                </div>
              </div>

              {/* INACTIVE CONTENT : Narrow Title */}
              <div className={`absolute inset-0 z-10 flex items-center justify-center p-4 transition-all duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}>
                {/* Mobile: Horizontal Title, Desktop: Vertical Title */}
                <h3 className="text-white font-bold tracking-widest uppercase text-xs sm:text-sm whitespace-nowrap md:-rotate-90 origin-center transition-transform">
                  {cert.title}
                </h3>
              </div>

            </div>
          );
        })}
      </div>

      {/* LIGHTBOX MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-12 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Fermeture */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[1001]"
            onClick={() => setIsModalOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image grand format */}
          <div 
            className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Certificat Agrandi" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>


    </section>
  );
}
