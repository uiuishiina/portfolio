import {Route,Routes} from "react-router-dom"
import Header from "./components/Header"
import ScrolltoTop from "./components/ScrollToTop"
import { useTheme } from "./hooks/useTheme"
import Hero from "./components/Hero"
import About from "./components/About"

function HomePage(){
  return (
    <>
    <Hero/>
    <About/>
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
              <Route path="/"element={<HomePage/>}/>
          </Routes>
        </main>
        </>   
  )
}