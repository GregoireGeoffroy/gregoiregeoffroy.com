import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ErrorBoundary from '@/components/ui/error-boundary'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div 
          className="flex flex-col min-h-[100vh] relative bg-background text-foreground"
          style={{ "--space-navHeightMobile": "110px" } as React.CSSProperties}
        >
          <Navbar />
          
          <main className="flex-1 flex justify-center items-center py-16 sm:py-[110px]">
            <div className="w-full max-w-[800px] px-4">
              <Outlet />
            </div>
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
