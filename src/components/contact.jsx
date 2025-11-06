import React from "react"
// 
export default function Contact(){
  return(
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6"   action="https://formspree.io/f/xyzbrorj" method="POST">
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
  