import About from "./components/About"
import Albums from "./components/Albums"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Story from "./components/Story"

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Story />
      <Albums />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
