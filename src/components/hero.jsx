import React from "react"
// 
export default function Hero(){
  return(
    <section id="hero" className="pt-24 pb-16 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Ben</h1>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer | Web Designer
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Download CV
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="/hero-image.png"
            alt="Hero Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
  