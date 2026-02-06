'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaBrain, FaRocket } from 'react-icons/fa'
import { SiPython, SiReact, SiTensorflow, SiDocker, SiNextdotjs, SiFastapi } from 'react-icons/si'
import { useLanguage } from '@/lib/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const featuredProjects = [
    {
      title: 'Avila Vision',
      description: 'Industrial computer vision system with 99.5% detection accuracy. Full-stack solution from AI models to cloud deployment.',
      tech: ['YOLOv8', 'FastAPI', 'Next.js', 'Azure', 'PostgreSQL'],
      demo: 'https://drive.google.com/file/d/1rtWDnsSJT7tID8VLFBS-0WChe1AaN6uz/view?usp=sharing',
      highlight: 'Production System',
      gradient: 'from-accent-blue to-accent-purple'
    },
    {
      title: 'RAG Document System',
      description: 'AI-powered regulatory document consultation system using RAG and LLM for GDPR/CNIL compliance.',
      tech: ['Langchain', 'LLM', 'Chainlit', 'Python'],
      highlight: 'Enterprise AI',
      gradient: 'from-accent-purple to-pink-500'
    },
    {
      title: 'Climate Research AI',
      description: 'ENSO teleconnections analysis using MERRA-2 data on supercomputer. Advanced ML for climate prediction.',
      tech: ['PyTorch', 'PCMCI', 'HPC', 'GNN'],
      highlight: 'Research',
      gradient: 'from-accent-green to-accent-blue'
    }
  ]

  const skills = [
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiReact />, name: 'React' },
    { icon: <SiTensorflow />, name: 'TensorFlow' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiFastapi />, name: 'FastAPI' },
    { icon: <SiDocker />, name: 'Docker' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="px-4 py-2 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-accent-blue text-sm font-semibold">
              {t('home.available')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display mb-6 leading-tight"
          >
            {t('home.title')}
            <br />
            <span className="gradient-text">{t('home.titleAI')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {t('home.subtitle')} <span className="text-accent-blue font-semibold">{t('home.subtitleAI')}</span> {t('home.subtitleTo')}{' '}
            <span className="text-accent-purple font-semibold">{t('home.subtitleProduction')}</span>
            {t('home.subtitleEnd')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link
              href="/projects"
              className="group px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full text-white font-semibold hover:shadow-xl hover:shadow-accent-blue/50 transition-all duration-300 flex items-center gap-2"
            >
              {t('home.viewProjects')}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-accent-blue rounded-full text-gray-700 font-semibold hover:bg-accent-blue/10 transition-all duration-300"
            >
              {t('home.getInTouch')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-6 text-3xl"
          >
            <a
              href="https://github.com/Donald237"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-colors duration-300 hover:scale-110 transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/donald-mbouhom-729321251/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-colors duration-300 hover:scale-110 transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:dmbouhom@gmail.com"
              className="text-gray-400 hover:text-accent-blue transition-colors duration-300 hover:scale-110 transform"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent-blue/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-accent-blue rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              {t('whatido.title')} <span className="gradient-text">{t('whatido.titleBuild')}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t('whatido.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBrain className="text-5xl" />,
                title: t('whatido.ai.title'),
                description: t('whatido.ai.desc')
              },
              {
                icon: <FaCode className="text-5xl" />,
                title: t('whatido.fullstack.title'),
                description: t('whatido.fullstack.desc')
              },
              {
                icon: <FaRocket className="text-5xl" />,
                title: t('whatido.cloud.title'),
                description: t('whatido.cloud.desc')
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="gradient-border card-hover spotlight"
              >
                <div className="gradient-border-content">
                  <div className="text-accent-blue mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-dark-lighter/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              {t('featured.title')} <span className="gradient-text">{t('featured.titleProjects')}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              {t('featured.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="gradient-border card-hover spotlight"
              >
                <div className="gradient-border-content">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-display">{project.title}</h3>
                        <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs font-semibold`}>
                          {project.highlight}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4 text-lg">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-accent-blue text-sm font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-purple transition-colors font-semibold"
                        >
                          View Demo <FaArrowRight />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full text-white font-semibold hover:shadow-xl hover:shadow-accent-blue/50 transition-all duration-300"
            >
              {t('featured.viewAll')}
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              {t('tech.title')} <span className="gradient-text">{t('tech.titleStack')}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              {t('tech.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeIn}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center gap-3 p-6 bg-dark-card rounded-2xl border border-accent-blue/20 hover:border-accent-blue/50 transition-all cursor-pointer"
              >
                <div className="text-5xl text-accent-blue">{skill.icon}</div>
                <span className="text-gray-300 font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-dark-lighter/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              {t('cta.title')}
              <br />
              <span className="gradient-text">{t('cta.titleAmazing')}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full text-white font-semibold hover:shadow-xl hover:shadow-accent-blue/50 transition-all duration-300"
            >
              {t('cta.button')}
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}