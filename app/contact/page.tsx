'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    // For now, we'll just simulate a successful submission
    setStatus('success')
    setTimeout(() => {
      setStatus('idle')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
      value: 'São José dos Campos, SP, Brazil',
      link: null,
      gradient: 'from-purple-500 to-accent-purple'
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-accent-blue/20 rounded-lg text-white focus:outline-none focus:border-accent-blue transition-colors"
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-accent-blue/20 rounded-lg text-white focus:outline-none focus:border-accent-blue transition-colors"
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
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-accent-blue/20 rounded-lg text-white focus:outline-none focus:border-accent-blue transition-colors"
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
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-card border border-accent-blue/20 rounded-lg text-white focus:outline-none focus:border-accent-blue transition-colors resize-none"
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

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg text-white font-semibold hover:shadow-xl hover:shadow-accent-blue/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {t('contact.send')}
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
                          className="flex items-center gap-4 p-4 bg-dark-card rounded-lg border border-accent-blue/20 hover:border-accent-blue/50 transition-all hover:translate-x-2 group"
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
                        <div className="flex items-center gap-4 p-4 bg-dark-card rounded-lg border border-accent-blue/20">
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
                  <p>
                    I'm open to full-time positions, freelance projects, and consulting opportunities
                    in Full Stack AI Development, Computer Vision, and ML Engineering.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="gradient-border"
            >
              <div className="gradient-border-content">
                <h3 className="text-2xl font-display mb-4">Response Time</h3>
                <p className="text-gray-400">
                  I typically respond to emails and messages within <span className="text-accent-blue font-semibold">24 hours</span>.
                  For urgent matters, please mention "URGENT" in the subject line.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="gradient-border inline-block">
            <div className="gradient-border-content">
              <h3 className="text-2xl font-display mb-3">
                Prefer a different platform?
              </h3>
              <p className="text-gray-400 mb-6">
                Connect with me on social media
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/Donald237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-dark-card rounded-lg border border-accent-blue/20 hover:border-accent-blue/50 hover:scale-110 transition-all text-2xl text-accent-blue"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/donald-mbouhom-729321251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-dark-card rounded-lg border border-accent-blue/20 hover:border-accent-blue/50 hover:scale-110 transition-all text-2xl text-accent-blue"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:dmbouhom@gmail.com"
                  className="p-4 bg-dark-card rounded-lg border border-accent-blue/20 hover:border-accent-blue/50 hover:scale-110 transition-all text-2xl text-accent-blue"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}