'use client'

import Link from 'next/link'

export default function SponsorsPartnersNew() {
  const allPartners = [
    { name: "Google", logo: "/sponsors/google.png", width: 200, height: 64, url: "https://www.google.com/" },
    { name: "AbleSpark", logo: "/sponsors/ablespark.png", width: 280, height: 100, url: "https://www.ablespark.com" },
    { name: "MLof Strategies", logo: "/sponsors/MLoS.png", width: 280, height: 100, url: "https://www.mlofstrategies.com/" },
    { name: "ShannonAI", logo: "/sponsors/shannoai.jpeg", width: 280, height: 100, url: "https://www.shannoncyber.ai/" },
    { name: "Virgent AI", logo: "/sponsors/virgentai.png", width: 320, height: 120, url: "https://www.virgent.ai/" }
  ]

  const sponsorshipBenefits = [
    { tier: "Platinum", price: "$5,000+", benefits: ["Logo on all materials", "Keynote opportunity", "Premium booth space", "5 tickets"] },
    { tier: "Gold", price: "$2,500+", benefits: ["Logo on website", "Speaking slot", "Booth space", "3 tickets"] },
    { tier: "Silver", price: "$1,000+", benefits: ["Logo recognition", "Table space", "2 tickets", "Social media mention"] },
    { tier: "Community", price: "$500+", benefits: ["Logo on website", "1 ticket", "Social media mention", "Swag table"] }
  ]

  return (
    <section id="partners" className="bg-green-600 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-green-600 text-center mb-6">
            Partners
          </h2>
          
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Thank you to our amazing partners who make DevFest Annapolis possible!
          </p>

          {/* All Partners */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {allPartners.map((partner, index) => (
                <Link
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}