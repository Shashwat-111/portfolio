"use client"

import type React from "react"
import { useEffect } from "react";
import { useRef } from "react"
import Image from "next/image"
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  const projectsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const video = document.getElementById("traceToSketchVideo") as HTMLVideoElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 } // Play when 50% visible
    );

    if (video) observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Mobile App Developer</h1>
        <p className="text-xl text-white/90 max-w-2xl mb-8">
          Crafting exceptional mobile experiences with clean code and beautiful design
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="rounded-full" onClick={() => scrollToSection(projectsRef)}>
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full text-white border-white hover:bg-white/10"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact Me
          </Button>
        </div>
        <div className="absolute bottom-8 animate-bounce cursor-pointer" onClick={() => scrollToSection(projectsRef)}>
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </section>

      {/* Featured Project */}
      <section
        ref={projectsRef}
        id="projects"
        className="min-h-screen bg-gray-100 text-black flex flex-col md:flex-row"
      >
        <div className="flex-1 flex items-center justify-center p-8 md:p-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trace to Sketch</h2>
            <p className="text-lg text-black/80 mb-6">
              Generate images with AI and trace them easily using your phone camera. Convert any image into a stunning pencil sketch with precision and ease.
            </p>
            <ul className="mb-8 space-y-2 text-black/70">
              <li>• Built with Flutter and Supabase</li>
              <li>• Free unlimited AI-powered image generation</li>
              <li>• Camera-assisted tracing with various tools</li>
              <li>• Intuitive and beginner-friendly interface</li>
            </ul>

            <Button
              className="rounded-full bg-white text-black hover:bg-white/80"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.lunatictech.tracetosketch', '_blank')}
            >
              Playstore
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 relative min-h-[50vh] md:min-h-full flex items-center justify-center p-4">
          <div className="relative h-[500px] w-full">
            <video
              id="traceToSketchVideo"
              src="/FinalTraceDemo.mp4"
              width={250}
              height={450}
              className="rounded-xl border-0 border-gray-800"
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>
      </section>

      {/* Ampiy - Crypto UI Kit */}
      <section className="min-h-screen bg-black text-white flex flex-col md:flex-row-reverse">
        <div className="flex-1 flex items-center justify-center p-8 md:p-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ampiy - Crypto UI Kit</h2>
            <p className="text-lg text-white/80 mb-6">
              A modern UI kit designed for a cryptocurrency buy/sell application, integrating real-time price updates using Binance API WebSockets.
            </p>
            <ul className="mb-8 space-y-2 text-white/70">
              <li>• Built with Flutter</li>
              <li>• WebSocket integration for live crypto prices</li>
              <li>• Custom UI components for seamless trading</li>
              <li>• Optimized for performance and responsiveness</li>
            </ul>
            <Button
              className="rounded-full bg-white text-black hover:bg-white/80"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.lunatictech.tracetosketch', '_blank')}
            >
              View on GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 relative min-h-[50vh] md:min-h-full flex items-center justify-center p-4">
          <div className="relative h-[500px] w-full">
            <Image
              src="/amphy_1.png"
              alt="Ampiy Flutter Homepage"
              width={300}
              height={500}
              className="absolute object-contain left-[10%] top-1/2 -translate-y-1/2 rounded-xl border-0 border-gray-800"
            />
            <Image
              src="/amphy_2.png"
              alt="Ampiy Flutter Price Page"
              width={300}
              height={500}
              className="absolute object-contain right-[10%] top-1/2 -translate-y-1/2 rounded-xl border-0 border-gray-800"
            />
          </div>
        </div>
      </section>

      {/* Third Project */}
      <section className="min-h-screen bg-gray-100 text-black flex flex-col md:flex-row">
        <div className="flex-1 flex items-center justify-center p-8 md:p-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Historical Options</h2>
            <p className="text-lg text-black/80 mb-6">
              A trading dashboard that allows users to input OHLC data in the backend and visualize it
              with candlestick charts.
            </p>
            <ul className="mb-8 space-y-2 text-black/70">
              <li>• Built with Flutter, Python, and Firebase</li>
              <li>• Supports candlestick charts with multiple technical indicators</li>
              <li>• Interactive features like annotations, zoom, and pan</li>
              <li>• Fully responsive for both mobile and desktop</li>
            </ul>
            <Button
              className="rounded-full bg-black text-white hover:bg-black/80"
              onClick={() => window.open("https://shashwat-111.github.io/HistoricalOptions.in/", "_blank")}>
              Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 relative min-h-[50vh] md:min-h-full flex items-center justify-center p-4">
          <div className="relative h-[500px] w-full">
            <Image
              src="/HistoricalMobileApp.png"
              alt="Historical Flutter Mobile"
              width={200}
              height={450}
              className="absolute object-contain left-[0%] top-1/2 -translate-y-1/2 rounded-xl border-0 border-gray-800"
            />
            <Image
              src="/HistoricalLaptop.png"
              alt="Historical Flutter Laptop"
              width={450}
              height={580}
              className="absolute object-contain right-[0%] top-1/2 -translate-y-1/2 rounded-xl border-0 border-gray-800"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="min-h-screen bg-black text-white p-8 md:p-16 flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                I'm Shashwat Dubey, a Mobile App Developer passionate about creating high-performance, user-friendly applications with seamless experiences.
              </p>
              <p className="text-lg mb-6">
                With expertise in Flutter, Firebase, Supabase, and AI integrations, I focus on building scalable, optimized, and intuitive mobile apps.
              </p>
              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white text-white hover:bg-white/10"
                  onClick={() => window.open("https://github.com/Shashwat-111", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white text-white hover:bg-white/10"
                  onClick={() => window.open("https://www.linkedin.com/in/shashwatdubey15/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white text-white hover:bg-white/10"
                  onClick={() => window.open("https://x.com/debugDubey", "_blank")}
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div ref={skillsRef} id="skills" className="space-y-6">
              <div className="border border-white/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Flutter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Firebase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Supabase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>SQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>AI ML</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>REST API</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>GraphQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="min-h-[70vh] bg-gray-100 text-black p-8 md:p-16 flex items-center justify-center"
      >
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Let's Work Together</h2>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            I'm currently available for freelance projects and consulting. If you have a project in mind or just want to
            chat, feel free to reach out.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-black/70">shashwatdubey111@gmail.com</p>
            </div>
            <div className="text-center">
              <Linkedin className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-black/70">shashwatdubey15/</p>
            </div>
            <div className="text-center">
              <Github className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-black/70">Shashwat-111</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white/70 p-6 text-center">
        <p>© {new Date().getFullYear()} Shashwat Dubey. All rights reserved.</p>
      </footer>
    </main>
  )
}

