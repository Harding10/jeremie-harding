import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Certifications from '../components/sections/Certifications';

export default function Home() {
    return (
        <div className="grow flex flex-col w-full relative overflow-x-hidden">
            <div className="min-h-screen flex items-center justify-center pt-24 pb-12 relative">
                <Hero />
            </div>

            {/* SECTION ABOUT */}
            <div className="w-full flex items-center justify-center py-12">
                <About />
            </div>

            {/* SECTION SKILLS */}
            <div className="w-full flex items-center justify-center py-12">
                <Skills />
            </div>

            {/* SECTION CERTIFICATIONS */}
            <div className="w-full flex items-center justify-center py-12">
                <Certifications />
            </div>
        </div>
    );
}