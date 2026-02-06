'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { useLanguage } from '../lib/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Donald237', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/donald-mbouhom-729321251/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:dmbouhom@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-lighter/50 border-t border-accent-blue/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-display tracking-tight mb-4 block">
              <span className="gradient-text">Donald Mbouhom</span>
            </Link>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="text-2xl text-gray-400 hover:text-accent-blue transition-colors duration-300 hover:scale-110 transform"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.getInTouch')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:dmbouhom@gmail.com"
                  className="hover:text-accent-blue transition-colors"
                >
                  dmbouhom@gmail.com
                </a>
              </li>
              <li>{t('footer.location')}</li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                  {t('footer.availableFor')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-blue/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              © {currentYear} Donald Mbouhom. {t('footer.rights')}
            </p>
            <p className="flex items-center gap-2">
              {t('footer.builtWith')} <FaHeart className="text-accent-blue" /> {t('footer.using')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}