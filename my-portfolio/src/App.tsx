import {Route,Routes} from "react-router-dom"
import Header from "./components/Header"
import ScrolltoTop from "./components/ScrollToTop"
import { useTheme } from "./hooks/useTheme"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Works from "./components/Works"
import WorkDetail from "./pages/WorkDetail"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

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

  const {theme,toggle}=useTheme();
  return (
        <>
          <ScrolltoTop/>
          <Header theme={theme}onThemeToggle={toggle}/>
          <main>
            <Routes>
                <Route path = "/"element = {<HomePage/>}/>
                <Route path = "/works/:id" element = {<WorkDetail/>}/>
            </Routes>
          </main>
          <Footer/>
        </>   
  )
}