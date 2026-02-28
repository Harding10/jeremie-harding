import React, { useState } from 'react';
import { motion } from 'framer-motion';
import mee from '../../assets/glry/mee.jpeg';
import mee11 from '../../assets/glry/mee11.jpeg';
import mee11111 from '../../assets/glry/mee11111.jpeg';
import meee1111 from '../../assets/glry/meee1111.jpeg';
import meeee from '../../assets/glry/meeee.jpeg';
import meeeea from '../../assets/glry/meeeea.jpeg';


// Mock data pour les posts
const instagramPosts = [
    {
        id: 1,
        image: mee,
        caption: "Formateur A la deuxieme Atelier de Formation Organiser  par GHOSTEC en partenariat avec IUA(nstitut Universitaire d'Abidjan)(21/02/2026).💻",
    },
    {
        id: 2,
        image: mee11,
        caption: "Formateur A la 1er  Atelier de Formation Organiser  par GHOSTEC (28/11/2025).💻",
    },
    {
        id: 3,
        image: mee11111,
        caption: "Formateur A la 1er  Atelier de Formation Organiser  par GHOSTEC (28/11/2025).💻",
    },
    {
        id: 4,
        image: meee1111,
        caption: 'VIE. ✨'
    },
    {
        id: 5,
        image: meeee,
        caption: "Formateur A la deuxieme Atelier de Formation Organiser  par GHOSTEC en partenariat avec IUA(nstitut Universitaire d'Abidjan)(21/02/2026).💻",

    },
    {
        id: 6,
        image: meeeea,
        caption: "Formateur A la 1er  Atelier de Formation Organiser  par GHOSTEC (28/11/2025).💻",

    }
];

export default function InstagramGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-24 lg:pt-32 pb-12 relative z-20">
            {/* Titre */}
            <h2 className="text-[#dfd7c1] font-mono text-sm tracking-[0.4em] uppercase mb-10 text-center">
                Photos & Découvertes
            </h2>

            {/* Grid des Photos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:px-12">
                {instagramPosts.map((post, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={post.id}
                        onClick={() => setSelectedImage(post)}
                        className="group relative aspect-square bg-[#111] overflow-hidden rounded-md border border-white/5 cursor-pointer"
                    >
                        {/* Image principale */}
                        <img
                            src={post.image}
                            alt={`Post ${post.id}`}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Bouton Load More */}
            <div className="mt-12 flex justify-center">
                <button className="px-8 py-3 outline-none border border-white/20 text-white hover:bg-[#4468b8] hover:border-[#4468b8] hover:text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300">
                    Plus de photos
                </button>
            </div>

            {/* MODALE FULLSCREEN */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-4 sm:p-8 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Bouton de Fermeture */}
                    <button
                        onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        className="absolute top-6 right-6 sm:top-10 sm:right-10 w-14 h-14 bg-white/5 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:scale-110 z-[210] group"
                    >
                        <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    {/* Conteneur de l'image */}
                    <div className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
                        <div className="relative p-2 w-full max-w-5xl bg-[#111] border border-white/10 rounded-2xl shadow-[0_0_100px_rgba(68,104,184,0.15)] overflow-hidden flex justify-center items-center">
                            <img src={selectedImage.image} alt="fullscreen" className="max-w-full max-h-[75vh] object-contain rounded-xl" />
                        </div>

                        {/* Optionnel: Légende en dessous de l'image */}
                        <div className="mt-8 text-center max-w-2xl">
                            <h3 className="text-white text-lg md:text-xl font-light tracking-wide leading-relaxed">
                                {selectedImage.caption}
                            </h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}