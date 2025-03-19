"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const fullText = "> $ shashwat_dubey"
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Type out the text character by character
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(typingInterval)
    }
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-mono text-lg md:text-xl flex items-center">
            <span>{displayText}</span>
            <span ref={cursorRef} className="inline-block h-5 w-2 bg-white ml-0.5 animate-blink"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
            <a href="/ShashwatDubeyResume.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full">Download CV</Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col items-center py-8 space-y-6">
            <button
              className="text-white/80 hover:text-white transition-colors text-lg"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="text-white/80 hover:text-white transition-colors text-lg"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              className="text-white/80 hover:text-white transition-colors text-lg"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button
              className="text-white/80 hover:text-white transition-colors text-lg"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
            <Button className="rounded-full">Download CV</Button>
          </nav>
        </div>
      )}

      {/* Add keyframes for blinking cursor */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </header>
  )
}

