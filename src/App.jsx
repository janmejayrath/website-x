import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Software from './pages/Software'

const routes = {
  '/': Home,
  '/about': About,
  '/products': Products,
  '/services': Services,
  '/software': Software,
  '/contact': Contact,
}

function normalizePath(pathname) {
  const trimmedPath = pathname.replace(/\/+$/, '') || '/'
  return routes[trimmedPath] ? trimmedPath : '/'
}

function App() {
  const [currentPath, setCurrentPath] = useState(() =>
    normalizePath(window.location.pathname),
  )

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [currentPath])

  const navigate = (nextPath) => {
    const normalizedPath = normalizePath(nextPath)

    if (normalizedPath !== currentPath) {
      window.history.pushState({}, '', normalizedPath)
      setCurrentPath(normalizedPath)
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const ActivePage = routes[currentPath] || Home

  return (
    <div className="site-shell">
      <Navbar currentPath={currentPath} navigate={navigate} />
      <main className="site-main">
        <ActivePage navigate={navigate} />
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}

export default App
