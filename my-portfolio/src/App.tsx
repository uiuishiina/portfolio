
import { Routes,Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ScrollToTop from "./components/ScrollToTop"
import { useTheme } from "./hooks/useTheme"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import About from "./components/About"
import WorkDetail from "./pages/WorkDetail"
import Works from "./components/Works"


function HomePage(){
  return (
    <>
    <Hero/>
    <About/>
    <Skills/>
    <Works/>
    <Contact/>
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
            <Route path = "/works/:id" element = {<WorkDetail/>} />
          </Routes>
        </main>
      <Footer/>
    </>
  )
}