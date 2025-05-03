import React from 'react'

const Intro = () => {
  return (
    <div>
          <div 
        className="relative overflow-hidden pt-16 pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/resistances4.png')" }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 to-blue-800/50"></div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Headline */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Hasmar'a
              <br /> 
              Hoş Geldiniz!
            </h1>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 min-w-36 text-center shadow-md">
                İletişim
              </a>
              <a href="#" className="flex items-center justify-center gap-2 text-white font-medium hover:text-indigo-200 transition-colors duration-200">
                <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-8 h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </span>
                Urunlerimiz
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
