import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/footer'
import Home from './Pages/Home'
import Projets from './Pages/Projets'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      {/* Conteneur principal avec fond sombre pour tout le site */}
      <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/20 flex flex-col">

        <Navbar />

        {/* Le contenu principal s'étire pour prendre le reste de l'écran */}
        <main className="flex-grow w-full flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projets" element={<Projets />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </>
  )
}

export default App