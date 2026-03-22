import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import canvaList from '../../constants/canvaList';

export default function Canva() {
    const [selectedDesign, setSelectedDesign] = useState(null);

    return (
        <section id="canva" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C4CC]/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7D2AE8]/5 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16 relative z-10">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#00C4CC] font-mono text-xs tracking-[0.5em] uppercase mb-4"
                >
                    Design Graphique
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase"
                >
                    Créations <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00C4CC] to-[#7D2AE8]">Canva</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl text-gray-400 mt-6 font-light leading-relaxed"
                >
                    Une sélection de mes travaux graphiques réalisés sur Canva, allant de l'identité visuelle aux supports marketing pour les réseaux sociaux.
                </motion.p>
            </div>

            {/* Design Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10">
                {canvaList.map((design, index) => (
                    <motion.div
                        key={design.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedDesign(design)}
                        className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
                    >
                        {/* Aspect Ratio Box */}
                        <div className="aspect-auto overflow-hidden">
                            <img 
                                src={design.image} 
                                alt={design.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-bold tracking-widest uppercase text-xs">
                                    Agrandir l'image
                                </div>
                            </div>
                        </div>

                        {/* Minimalist Info */}
                        <div className="p-6 bg-[#111]">
                            <p className="text-gray-400 text-sm font-medium tracking-wide">
                                {design.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Fullscreen Modal (Lightbox) */}
            <AnimatePresence>
                {selectedDesign && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-200 flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 md:p-8"
                        onClick={() => setSelectedDesign(null)}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 w-14 h-14 bg-white/5 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 z-210 group"
                            onClick={() => setSelectedDesign(null)}
                        >
                            <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="relative max-w-5xl w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                            <motion.img 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                src={selectedDesign.image} 
                                alt={selectedDesign.title} 
                                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_100px_rgba(0,196,204,0.2)]"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
