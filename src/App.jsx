import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/footer'

// Chargement différé des pages pour améliorer le pack initial (Performance Lighthouse)
const Home = lazy(() => import('./Pages/Home'))
const Projets = lazy(() => import('./Pages/Projets'))
const Gallery = lazy(() => import('./Pages/Gallery'))
const Contact = lazy(() => import('./Pages/Contact'))

// Composant de chargement simple
const PageLoader = () => (
  <div className="flex-grow flex items-center justify-center bg-[#0a0a0a]">
    <div className="w-12 h-12 border-4 border-[#4468b8]/20 border-t-[#4468b8] rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <>
      {/* Conteneur principal avec fond sombre pour tout le site */}
      <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/20 flex flex-col">

        <Navbar />

        {/* Le contenu principal s'étire pour prendre le reste de l'écran */}
        <main className="flex-grow w-full flex flex-col">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projets" element={<Projets />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

      </div>
    </>
  )
}

export default App