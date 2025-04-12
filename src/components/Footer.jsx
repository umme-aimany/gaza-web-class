import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-red-800 text-center text-sm text-white py-6 mt-12">
      <p>© {new Date().getFullYear()} Voices of Gaza. All rights reserved.</p>
      <p>Made with ❤️ to support peace and humanity.</p>
    </footer>
  )
}

export default Footer
