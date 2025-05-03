import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center'>
            <div className="py-16 bg-white w-270">
        <div className="container mx-auto px-4 md:px-6 " >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
                About Us
              </h2>
              <p className="text-gray-700 mb-6">
              Our company, which was established as Hasmar Foreign Trade in 1999, started production in Istanbul Sefakoy in 2003 with the aim of meeting the increasing international order demands and ensuring customer satisfaction. Our company, which primarily produces heaters used in industrial kitchen appliances, then increased its product range and started to produce heating elemennts for electrical home appliances, built-in appliances etc... Our company moved to its factory with a closed area of 2500m2 in Istanbul Avcilar in 2010, where it produces stainless pipes and kettle heaters. Our company continues its investments in order to provide better service to our valued customers.
              </p>
              <a 
                href="#" 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-sm"
              >
                Daha Fazla
              </a>
            </div>
            
            {/* Image Area */}
            <div className="md:w-1/2 relative">
              {/* Decorative Background */}
              

              {/* Child image */}
              <Image
                src="/image.png" 
                alt="Eğitici oyuncaklarla gülümseyen çocuk" 
                className="relative z-0 w-full max-w-md h-auto rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-16">
            {/* Image Area */}
            <div className="md:w-1/2 relative order-2 md:order-1">
              {/* Decorative Background */}
              <div className="absolute -z-10 left-0 bottom-0 w-3/4 h-3/4 bg-purple-400 rounded-full opacity-70"></div>
              
              {/* Child image */}
              <Image 
                src="/image.png" 
                alt="Eğitici oyuncaklarla gülümseyen çocuk" 
                className="relative z-0 w-full max-w-md h-auto rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
            
            {/* Text Content */}
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
              Mission and Vission
              </h2>
              <p className="text-gray-700 mb-6">
              Our Mission;

To meet customer needs in the most effective way and to produce high quality products by producing fast solutions.
Our vision;

To provide permanent advantages by creating differences in heaters production
              </p>
              <a 
                href="#" 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-sm"
              >
                Daha Fazla
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
