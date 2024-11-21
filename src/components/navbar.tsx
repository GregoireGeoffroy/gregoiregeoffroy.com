import { useState } from 'react'
import { ModeToggle } from "@/components/mode-toggle"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

export function Navbar() {
  const location = useLocation()
  const [hovered, setHovered] = useState('')
  
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold no-underline">
              G
            </Link>
          </div>

          <div className="hidden sm:flex sm:space-x-1 flex-1 justify-center">
            {pages.map(({ name, path }) => {
              const isActive = location.pathname === path
              const isHovered = hovered === name

              return (
                <div key={name} className="relative">
                  {isHovered && (
                    <motion.div
                      layoutId="nav"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-muted rounded-md -z-10"
                    />
                  )}
                  <Link
                    to={path}
                    className={`px-5 py-2 text-sm font-medium uppercase tracking-wider transition-colors relative
                      ${isActive ? 'text-foreground' : 'text-muted-foreground'}
                      hover:text-foreground
                    `}
                    onMouseEnter={() => setHovered(name)}
                    onMouseLeave={() => setHovered('')}
                  >
                    {name}
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-5 h-px bg-foreground" />
                    )}
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
} 