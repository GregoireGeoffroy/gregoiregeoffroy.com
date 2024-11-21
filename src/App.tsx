import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "@/pages/home"
import { About } from "@/pages/about"
import { Projects } from "@/pages/projects"
import { Articles } from "@/pages/articles"
import { Contact } from "@/pages/contact"

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="h-screen bg-background text-foreground flex flex-col">
          <Navbar />
          
          <main className="flex-1 flex justify-center">
            <div className="w-full max-w-[800px] px-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
