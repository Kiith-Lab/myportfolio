'use client';
import Image from "next/image";
import { ArrowRight } from "lucide-react"
import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Portfolio() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [showSplash, setShowSplash] = useState(true)

  const topRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000) // Splash screen will show for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    toast({
      title: "Success",
      description: "Message sent successfully! We will get back to you soon.",
    })
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  if (showSplash) {
    return (
      <div className="fixed inset-0 w-screen h-screen bg-[#111111] flex justify-center items-center z-50">
        <Image
          src="/assets/images/cksa.png"
          alt="Splash Logo"
          layout="fill"
          objectFit="cover"
          className="animate-pulse"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      <div ref={topRef}></div>
      <header className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        {/* <Image
          src="/assets/images/cksa.png"
          alt="Logo"
          width={100}
          height={40}
          className="rounded-full mb-4 sm:mb-0"
        /> */}
       
      </header>

      <main className="container mx-auto px-4">
        <section className="flex flex-col md:flex-row items-center py-20">
          <div className="flex-1 mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">I'm Keith<br />Website Developer</h1>
            <p className="text-gray-400 mb-8 max-w-md">
            a passionate website developer specializing in creating responsive, user-friendly websites. With skills in HTML, CSS, JavaScript, and frameworks like React, I turn ideas into functional web experiences. I love tackling new challenges and continuously learning to stay ahead in the ever-evolving world of web development.
            </p>
            
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="rounded-full overflow-hidden w-[250px] h-[250px] sm:w-[500px] sm:h-[500px]">
              <Image
                src="/assets/images/Main.jpg"
                alt="Visual Designer"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold">Featured Projects</h2>
            <a href="#" className="text-red-600 text-sm flex items-center hover:text-red-400 transition-colors duration-300">

            </a>
          </div>

          {/* Mobile Applications Category */}
          <h3 className="text-lg font-semibold mb-4">Mobile Applications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#1A1A1A] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center items-center h-64">
                <Image
                  src="/assets/images/3.png"
                  alt="Math For Kids Mobile Application"
                  width={250}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Math For Kids Mobile Application</h3>
                <a href="#" className="text-red-600 text-sm flex items-center hover:text-red-400 transition-colors duration-300">

                </a>
              </div>
            </div>
            <div className="bg-[#1A1A1A] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center items-center h-64">
                <Image
                  src="/assets/images/4.png"
                  alt="Design Thinking Mobile Application"
                  width={250}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Design Thinking Mobile Application</h3>
                <a href="#" className="text-red-600 text-sm flex items-center hover:text-red-400 transition-colors duration-300">

                </a>
              </div>
            </div>
            <div className="bg-[#1A1A1A] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center items-center h-64">
                <Image
                  src="/assets/images/2.png"
                  alt="Healthy Cars Mobile Application"
                  width={250}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Healthy Cars Mobile Application</h3>
                <a href="#" className="text-red-600 text-sm flex items-center hover:text-red-400 transition-colors duration-300">

                </a>
              </div>
            </div>
          </div>

          {/* Web Apps Category */}
          <h3 className="text-lg font-semibold mb-4 mt-8">Web App</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#1A1A1A] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center items-center h-64">
                <Image
                  src="/assets/images/1.png"
                  alt="El Salvador Water Work Water Billing System"
                  width={600}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">El Salvador Water Work Water Billing System</h3>
                <a href="#" className="text-red-600 text-sm flex items-center hover:text-red-400 transition-colors duration-300">

                </a>
              </div>
            </div>
            <div className="bg-[#1A1A1A] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center items-center h-64">
                <Image
                  src="/assets/images/5.png"
                  alt="Interactive E-Book Library"
                  width={600}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Interactive E-Book Library</h3>
                <a href="#" className="text-red-600 text-sm flex items-center hover:text-red-400 transition-colors duration-300">

                </a>
              </div>
            </div>
            <div className="bg-[#1A1A1A] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex justify-center items-center h-64">
                <Image
                  src="/assets/images/6.png"
                  alt="Eduquest INC."
                  width={600}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Eduquest INC.</h3>
                <a href="#" className="text-red-600 text-sm flex items-center hover:text-red-400 transition-colors duration-300">

                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-wider mb-2">My Services</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">Stand Out from Crowd</h3>
            <h3 className="text-3xl sm:text-4xl font-bold">Ignite Creativity</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
           
            <div className="bg-[#1A1A1A] p-6 rounded-lg text-center">
              <div className="w-12 h-12 mb-4 mx-auto">
                <Image src="/assets/images/web.png" width={48} height={48} alt="Web Design Icon" className="mx-auto" />
              </div>
              <h4 className="text-xl font-bold mb-2">Web Design</h4>
              <p className="text-sm mb-4">I break down complex user experience problems to create integrity</p>
     
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-lg text-center">
              <div className="w-12 h-12 mb-4 mx-auto">
                <Image src="/assets/images/grap.jpg" width={48} height={48} alt="Graphic Design Icon" className="mx-auto" />
              </div>
              <h4 className="text-xl font-bold mb-2">Graphic Design</h4>
              <p className="text-sm mb-4">I break down complex user experience problems to create integrity</p>
         
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-lg text-center">
              <div className="w-12 h-12 mb-4 mx-auto">
                <Image src="/assets/images/web.png" width={48} height={48} alt="Web Develop Icon" className="mx-auto" />
              </div>
              <h4 className="text-xl font-bold mb-2">Web Develop</h4>
              <p className="text-sm mb-4">I break down complex user experience problems to create integrity</p>
         
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div className="text-center transition-transform hover:scale-110">
              <Image src="/assets/images/vscode.png" width={48} height={48} alt="VS Studio Icon" className="mx-auto mb-2" />
              <p className="text-sm font-semibold">VS STUDIO</p>
            </div>
            <div className="text-center transition-transform hover:scale-110">
              <Image src="/assets/images/Figma.png" width={48} height={48} alt="Figma Icon" className="mx-auto mb-2" />
              <p className="text-sm font-semibold">FIGMA</p>
            </div>
            <div className="text-center transition-transform hover:scale-110">
              <Image src="/assets/images/flutter.png" width={48} height={48} alt="Sketch Icon" className="mx-auto mb-2" />
              <p className="text-sm font-semibold">FLUTTER</p>
            </div>
            <div className="text-center transition-transform hover:scale-110">
              <Image src="/assets/images/php.png" width={48} height={48} alt="Framer Icon" className="mx-auto mb-2" />
              <p className="text-sm font-semibold">PHP</p>
            </div>
            <div className="text-center transition-transform hover:scale-110">
              <Image src="/assets/images/html.png" width={48} height={48} alt="Webflow Icon" className="mx-auto mb-2" />
              <p className="text-sm font-semibold">HTML</p>
            </div>
            <div className="text-center transition-transform hover:scale-110">
              <Image src="/assets/images/js.png" width={48} height={48} alt="Wordpress Icon" className="mx-auto mb-2" />
              <p className="text-sm font-semibold">JS</p>
            </div>
            <div className="text-center transition-transform hover:scale-110">
              <Image src="/assets/images/css.png" width={48} height={48} alt="Wordpress Icon" className="mx-auto mb-2" />
              <p className="text-sm font-semibold">CSS</p>
            </div>
            <div className="text-center transition-transform hover:scale-110">
              <Image src="/assets/images/ts.png" width={48} height={48} alt="Wordpress Icon" className="mx-auto mb-2" />
              <p className="text-sm font-semibold">TYPESCRIPT</p>
            </div>
            <div className="text-center transition-transform hover:scale-110">
              <Image src="/assets/images/React.png" width={100} height={48} alt="Wordpress Icon" className="mx-auto mb-2" />
              <p className="text-sm font-semibold">REACT</p>
            </div>
            <div className="text-center transition-transform hover:scale-110">
              <Image src="/assets/images/dart.png" width={48} height={48} alt="Wordpress Icon" className="mx-auto mb-2" />
              <p className="text-sm font-semibold">DART</p>
            </div>
          </div>

        </section>

        <section className="bg-[#1A1A1A] rounded-lg p-4 sm:p-8 mb-20 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Let's work together on your next project</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          <section className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Hire Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-[#1A1A1A] border-gray-700 focus:border-red-600"
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-[#1A1A1A] border-gray-700 focus:border-red-600"
            />
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="bg-[#1A1A1A] border-gray-700 focus:border-red-600"
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="bg-[#1A1A1A] border-gray-700 focus:border-red-600"
            />
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Send Message <ArrowRight className="ml-2" />
            </Button>
          </form>
        </section>
        </section>

        
      </main>

      <footer className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center border-t border-gray-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/cksa.png"
            alt="Logo"
            layout="fill"
            objectFit="cover"
            className="opacity-5"
          />
        </div>
        <div className="relative z-10 mb-4 sm:mb-0">
          {/* Footer content goes here */}
        </div>
        <div className="text-gray-400 text-sm">© 2023 All rights reserved.</div>
      </footer>
    </div>
  )
}