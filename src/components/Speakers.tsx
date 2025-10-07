'use client'

interface Speaker {
  name: string
  title: string
  company: string
  session?: string
  bio?: string
}

const featuredSpeakers: Speaker[] = [
  {
    name: "Speaker One",
    title: "TBA",
    company: "Coming Soon"
  },
  {
    name: "Speaker Two", 
    title: "TBA",
    company: "Coming Soon"
  },
  {
    name: "Speaker Three",
    title: "TBA", 
    company: "Coming Soon"
  }
]

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-white text-2xl font-bold">
          {speaker.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
      <p className="text-blue-600 font-semibold mb-1">{speaker.title}</p>
      <p className="text-gray-600">{speaker.company}</p>
    </div>
  )
}

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Speakers</h2>
          <p className="text-xl text-gray-700 mb-8">
            Amazing speakers and content coming soon for an unforgettable experience.
          </p>
          <div className="inline-block bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold">
            📢 Speaker announcements coming soon!
          </div>
        </div>

        {/* Featured Speakers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {featuredSpeakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Speak at DevFest Annapolis?</h3>
            <p className="text-gray-700 mb-6">
              Share your expertise with Maryland&apos;s tech community. We&apos;re looking for speakers on AI, cloud technologies, 
              web development, mobile apps, and emerging tech trends.
            </p>
            <a
              href="https://forms.gle/KRDGbMn6m9t4UPdv9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 mr-4"
            >
              Apply to Speak
            </a>
          </div>
          <button
            onClick={() => window.open('https://www.eventbrite.com/e/annapols-devfest-2025-tickets-1766314396909', '_blank')}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold cursor-pointer transition-colors duration-200"
          >
            Get Your Tickets Now
          </button>
        </div>
      </div>
    </section>
  )
}
