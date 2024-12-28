import { useState, useEffect } from 'react'

export default function BasicInfo({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [autoplayInterval, setAutoplayInterval] = useState(null)
  const priceRange = "$2,207 - $2,702"
  const pricePerUnit = "$2.70M - $3.49M"
  const BASE = "http://127.0.0.1:8000"

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      )
    }, 5000) // Change image every 5 seconds

    setAutoplayInterval(interval)
    return () => clearInterval(interval)
  }, [project.images.length])

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
    // Reset autoplay timer
    if (autoplayInterval) {
      clearInterval(autoplayInterval)
      setAutoplayInterval(null)
    }
  }

  // Navigation buttons handler
  const handleNavigation = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      )
    } else {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        New Launch &gt; CCR &gt; West Region &gt; D5 - Buona Vista / West Coast / Clementi New Town
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2">
          <div className="relative mb-4">
            {/* Main large image */}
            <img 
              src={BASE + project.images[currentImageIndex].image}
              alt="Main project view"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            
      
          </div>
          
          {/* Thumbnail images */}
          <div className="grid grid-cols-5 gap-2">
            {project.images.slice(0,5).map((img, index) => (
              <div 
                key={img.id}
                className={`relative cursor-pointer ${
                  currentImageIndex === index ? 'ring-2 ring-grey-500' : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img 
                  src={BASE + img.image}
                  alt={`Project thumbnail ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Information */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Lentor Mansion</h1>
          
          <div className="flex gap-8 mb-8">
            <div>
              <p className="text-red-500 text-2xl font-bold">{priceRange}</p>
              <p className="text-gray-500">Est.PSF</p>
            </div>
            <div>
              <p className="text-red-500 text-2xl font-bold">{pricePerUnit}</p>
              <p className="text-gray-500">/unit</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              ['Street Address:', 'Slim Barracks Rise'],
              ['Property Type:', 'Private Condominimum'],
              ['Developer:', 'Hoi Hup Sunway Jurong Pte Ltd'],
              ['Expected TOP:', 'Dec, 31st, 2027'],
              ['Land Tenure:', '99 Years Leasehold'],
              ['Unit Mix:', '2B + Study(56) 3B(38) 3B + Study(26) 4B(6)'],
              ['Development Size:', '142 units - Small']
            ].map(([label, value], index) => (
              <div key={index} className="flex">
                <p className="text-gray-600 w-36">{label}</p>
                <p className={`font-semibold ${label === 'Unit Mix:' ? 'underline' : ''}`}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}