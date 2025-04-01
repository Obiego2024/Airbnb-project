import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function MainFooter() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm p-10 mx-8 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h2 className="text-xl font-semibold mb-4">Inspiration for future getaways</h2>
        <div className="flex space-x-4 mb-6 border-b pb-2">
          <span className="font-semibold text-black border-b-2 border-black">Popular</span>
          <span>Historic</span>
          <span>Coastal</span>
          <span>Islands</span>
          <span>Lakes</span>
          <span>Unique stays</span>
          <span>Categories</span>
          <span>Things to do</span>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-10 text-xs">
          {[
            "Holiday rentals",
            "Flat rentals",
            "Villa rentals",
            "Flat rentals",
            "Cottage rentals",
            "Flat rentals",
            "Cottage rentals",
            "Holiday rentals",
            "House rentals",
            "Flat rentals",
            "Holiday rentals",
            "Villa rentals",
            "Holiday rentals",
            "Flat rentals",
            "House rentals",
            "Cottage rentals",
            "Villa rentals",
            "House rentals",
          ].map((type, index) => (
            <div key={index}>
              <h3 className="font-semibold text-black">Aberfeldy</h3>
              <p>{type}</p>
            </div>
          ))}
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t pt-4">
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul  className="leading-6">
              <li>Help centre</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Hosting</h4>
            <ul className="leading-6">
              <li>Airbnb your home</li>
              <li>AirCover for hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Airbnb</h4>
            <ul className="leading-6">
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Gift cards</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-6 pt-4 flex justify-between items-center text-xs">
          <p>&copy; 2023 Airbnb, Inc. • Privacy • Terms • Sitemap • Company details</p>
          <div className="flex space-x-4">
            <span>English (GB)</span>
            <span>£ GBP</span>
            <span>🌍</span>
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 mx-4 my-4">
  {/* Contact Section */}
  <div className="space-y-4 text-gray-600 my-6 text-base md:text-xl font-bold pr-0 md:pr-8 border-b-2 md:border-b-0 md:border-r-2 border-gray-300">
    <h1>Contact: 09115429912</h1>
    <h1>Email: chrisphilip95@gmail.com</h1>
    <h1>Address: 1234, London, UK</h1>
  </div>

  {/* Social Media Section */}
  <div className="space-y-4 mt-6 md:mt-0 ml-0 md:ml-20">
    <h1>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </h1>
    <h1>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </h1>
    <h1>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </h1>
  </div>
</div>
      </div>
    </footer>
  )
}

export default MainFooter