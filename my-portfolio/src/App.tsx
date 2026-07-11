
import { Routes,Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ScrollToTop from "./components/ScrollToTop"
import { useTheme } from "./hooks/useTheme"
import Skills from "./components/Skills"
import Contact from "./components/Contact"


function HomePage(){
  return (
    <>
    <Hero/>
    <Skills/>
    </>
  )
}

export default function App() {

const {theme , toggle} = useTheme()

  return (
    <>
      <ScrollToTop/>
      <Header theme = {theme} onThemeToggle = {toggle} />
        <main>
          <Routes>
            <Route path = "/" element = {<HomePage/>} />
          </Routes>
        </main>
      <Footer/>
    </>
  )
}