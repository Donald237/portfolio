'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { useState, useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { t } = useLanguage()
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      // Vos clés EmailJS configurées
      const result = await emailjs.sendForm(
        'service_ftwu0ct',
        'template_kihtmsc',
        form.current!,
        '14g98qHM1HuugkMt2'
      )
      
      console.log('Email sent:', result.text)
      setStatus('success')
      
      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setStatus('idle')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
    } catch (error: any) {
      console.error('Email error:', error)
      setStatus('error')
      setErrorMessage(error.text || 'Failed to send message')
      
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'dmbouhom@gmail.com',
      link: 'mailto:dmbouhom@gmail.com',
      gradient: 'from-accent-blue to-accent-purple'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: '@Donald237',
      link: 'https://github.com/Donald237',
      gradient: 'from-accent-purple to-pink-500'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Donald Mbouhom',
      link: 'https://www.linkedin.com/in/donald-mbouhom-729321251/',
      gradient: 'from-accent-green to-accent-blue'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: t('footer.location'),
      gradient: 'from-blue-500 to-accent-blue'
    },
  ]

  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display mb-6">
            {t('contact.title')} <span className="gradient-text">{t('contact.titleTouch')}</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="gradient-border"
          >
            <div className="gradient-border-content">
              <h2 className="text-3xl font-display mb-6">{t('contact.sendMessage')}</h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-colors resize-none"
                    placeholder={t('contact.message') + '...'}
                  />
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-accent-green/10 border border-accent-green/30 rounded-lg text-accent-green"
                  >
                    {t('contact.success')}
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500"
                  >
                    Erreur: {errorMessage}. Veuillez réessayer ou m'envoyer un email directement.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg text-white font-semibold hover:shadow-xl hover:shadow-accent-blue/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Envoi en cours...' : t('contact.send')}
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="gradient-border">
              <div className="gradient-border-content">
                <h2 className="text-3xl font-display mb-6">{t('contact.info')}</h2>
                <p className="text-gray-400 mb-8">
                  {t('contact.infoSubtitle')}
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-accent-blue/30 hover:border-accent-blue transition-all hover:translate-x-2 group shadow-md"
                        >
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center text-xl text-white group-hover:scale-110 transition-transform`}>
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-gray-400 mb-1">{info.title}</h3>
                            <p className="text-white font-medium">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-accent-blue/30 shadow-md">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center text-xl text-white`}>
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-gray-400 mb-1">{info.title}</h3>
                            <p className="text-white font-medium">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="gradient-border"
            >
              <div className="gradient-border-content">
                <h3 className="text-2xl font-display mb-4">{t('contact.availability')}</h3>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                    <span>{t('contact.availableText')}</span>
                  </div>
                  <p>{t('contact.availableDesc')}</p>
                </div>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="gradient-border"
            >
              <div className="gradient-border-content">
                <h3 className="text-2xl font-display mb-4">{t('contact.responseTime')}</h3>
                <p className="text-gray-400">
                  {t('contact.responseDesc')}
                </p>
              </div>
            </motion.div>

            {/* Social Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="gradient-border"
            >
              <div className="gradient-border-content">
                <h3 className="text-2xl font-display mb-4">{t('contact.preferPlatform')}</h3>
                <p className="text-gray-400 mb-4">
                  {t('contact.connectSocial')}
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Donald237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-card rounded-lg border border-accent-blue/20 hover:border-accent-blue/50 transition-all hover:scale-110 text-2xl text-gray-400 hover:text-accent-blue"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/donald-mbouhom-729321251/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-card rounded-lg border border-accent-blue/20 hover:border-accent-blue/50 transition-all hover:scale-110 text-2xl text-gray-400 hover:text-accent-blue"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="mailto:dmbouhom@gmail.com"
                    className="p-3 bg-dark-card rounded-lg border border-accent-blue/20 hover:border-accent-blue/50 transition-all hover:scale-110 text-2xl text-gray-400 hover:text-accent-blue"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}