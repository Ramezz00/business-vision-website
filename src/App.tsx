import { useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { NotFound } from './components/NotFound'
import About from './pages/About'
import Home, { Footer, Header } from './pages/Home'
import Industries from './pages/Industries'
import IndustryDetail from './pages/IndustryDetail'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'

function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

// Inner pages are styled with Tailwind; .bv-scope keeps that away from the Home styles.
function InnerPage() {
  return (
    <div className="bv-scope">
      <Outlet />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<InnerPage />}>
          <Route path="about" element={<About />} />
          <Route path="industries" element={<Industries />} />
          <Route path="industries/:slug" element={<IndustryDetail />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  )
}
