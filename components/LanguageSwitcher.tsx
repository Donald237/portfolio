'use client'

import { useState } from 'react'
import { FaGlobe } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../lib/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700 font-medium"
      >
        <FaGlobe />
        <span>{currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-2xl overflow-hidden z-50 min-w-[200px]"
            style={{ 
              backgroundColor: '#ffffff',
              backdropFilter: 'blur(10px)'
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-5 py-3 flex items-center gap-3 hover:bg-gray-100 transition-colors text-left border-b border-gray-200 last:border-b-0 ${
                  language === lang.code ? 'bg-accent-blue/10 text-accent-blue font-semibold' : 'text-gray-800'
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}