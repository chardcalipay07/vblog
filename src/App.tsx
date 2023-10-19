import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Activity from "./components/Activity"

function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="contact" element={ <Contact/> } />
          <Route path="activity" element={ <Activity /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
