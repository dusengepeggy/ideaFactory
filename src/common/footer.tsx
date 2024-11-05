import React from 'react'
import { FiInstagram, FiMail, FiYoutube } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="py-8 bg-[#001446] text-gray-300 flex justify-between px-10">
    <p>&copy; 2024 Idea factory. All rights reserved.</p>
    <div className="flex gap-3">

      <FiInstagram size={23} />
      <FiMail size={25} />
      <FiYoutube size={26} />

    </div>
  </footer>
  )
}
