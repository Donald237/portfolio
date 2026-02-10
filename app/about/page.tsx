'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaAward, FaCode, FaBrain, FaRocket, FaLanguage, FaCloud } from 'react-icons/fa'
import { SiPython, SiReact, SiTensorflow, SiDocker, SiNextdotjs, SiFastapi, SiPostgresql, SiPytorch, SiOpencv } from 'react-icons/si'
import { useLanguage } from '@/lib/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const skillCategories = [
    {
      title: 'AI/ML & Computer Vision',
      icon: <FaBrain />,
      gradient: 'from-accent-blue to-accent-purple',
      skills: [
        { name: 'YOLOv8', level: 95, icon: <FaBrain /> },
        { name: 'PyTorch', level: 90, icon: <SiPytorch /> },
        { name: 'TensorFlow', level: 88, icon: <SiTensorflow /> },
        { name: 'OpenCV', level: 92, icon: <SiOpencv /> },
        { name: 'ByteTrack', level: 90, icon: <FaBrain /> },
        { name: 'Langchain', level: 85, icon: <FaBrain /> },
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaCode />,
      gradient: 'from-accent-purple to-pink-500',
      skills: [
        { name: 'Python', level: 95, icon: <SiPython /> },
        { name: 'FastAPI', level: 92, icon: <SiFastapi /> },
        { name: 'PostgreSQL', level: 88, icon: <SiPostgresql /> },
        { name: 'RESTful APIs', level: 90, icon: <FaCode /> },
        { name: 'WebSocket', level: 85, icon: <FaCode /> },
      ]
    },
    {
      title: 'Frontend Development',
      icon: <FaRocket />,
      gradient: 'from-accent-green to-accent-blue',
      skills: [
        { name: 'Next.js', level: 90, icon: <SiNextdotjs /> },
        { name: 'React', level: 92, icon: <SiReact /> },
        { name: 'TypeScript', level: 88, icon: <FaCode /> },
        { name: 'Tailwind CSS', level: 90, icon: <FaCode /> },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaRocket />,
      gradient: 'from-purple-500 to-accent-purple',
      skills: [
        { name: 'Azure', level: 88, icon: <FaCloud /> },
        { name: 'Docker', level: 90, icon: <SiDocker /> },
        { name: 'CI/CD', level: 85, icon: <FaRocket /> },
        { name: 'Linux', level: 88, icon: <FaCode /> },
      ]
    }
  ]

  const education = [
    {
      degree: 'Ph.D. in Artificial Intelligence',
      institution: 'Federal University of São Paulo (UNIFESP)',
      location: 'São José dos Campos, Brazil',
      period: 'March 2025 - Present',
      description: 'Thesis: Modeling Climate Phenomena from Satellite Data (GNN, Deep Learning, XAI)',
      gradient: 'from-accent-blue to-accent-purple',
    },
    {
      degree: 'Master in Computer Science',
      institution: 'National University of Vietnam / Université La Rochelle',
      location: 'Vietnam / France',
      period: 'March 2023 - Present',
      description: 'Specializing in Intelligent Systems and Multimedia. Double degree program.',
      gradient: 'from-accent-purple to-pink-500',
    },
    {
      degree: 'Bachelor of ICT4D',
      institution: 'University of Yaoundé 1',
      location: 'Cameroon',
      period: 'September 2016 - August 2019',
      description: 'Information and Communication Technology for Development',
      gradient: 'from-accent-green to-accent-blue',
    },
  ]

  const achievements = [
    {
      title: 'Symposium International ISSCEI 2023',
      description: 'Won three prizes at "Smart City: Experiences and Innovations"',
      icon: <FaAward />,
    },
    {
      title: 'Francophone Universities Football',
      description: 'First Prize in Football at Vietnam 2023',
      icon: <FaAward />,
    },
    {
      title: 'Asia-Pacific Speech Contest',
      description: 'Second Speaker Prize organized by AUF',
      icon: <FaAward />,
    },
  ]

  const languages = [
    { name: 'French', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Proficient', proficiency: 90 },
    { name: 'Portuguese', level: 'Intermediate', proficiency: 70 },
    { name: 'German', level: 'B2 Level', proficiency: 65 },
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
            {t('about.title')} <span className="gradient-text">{t('about.titleMe')}</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="gradient-border">
            <div className="gradient-border-content">
              <h2 className="text-3xl font-display mb-6">{t('about.journey')}</h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t('about.journey1').replace('Full Stack AI Developer', '<span class="text-accent-blue font-semibold">Full Stack AI Developer</span>').replace('Développeur IA Full Stack', '<span class="text-accent-blue font-semibold">Développeur IA Full Stack</span>').replace('Desenvolvedor IA Full Stack', '<span class="text-accent-blue font-semibold">Desenvolvedor IA Full Stack</span>') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.journey2').replace('Ph.D. in Artificial Intelligence', '<span class="text-accent-purple font-semibold">Ph.D. in Artificial Intelligence</span>').replace('doctorat en Intelligence Artificielle', '<span class="text-accent-purple font-semibold">doctorat en Intelligence Artificielle</span>').replace('Doutorado em Inteligência Artificial', '<span class="text-accent-purple font-semibold">Doutorado em Inteligência Artificial</span>') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.journey3').replace('Avila Tech', '<span class="text-accent-green font-semibold">Avila Tech</span>').replace('99.5% detection accuracy', '<span class="text-accent-green font-semibold">99.5% detection accuracy</span>').replace('99,5% de précision de détection', '<span class="text-accent-green font-semibold">99,5% de précision de détection</span>').replace('99,5% de precisão de detecção', '<span class="text-accent-green font-semibold">99,5% de precisão de detecção</span>') }} />
                <p>{t('about.journey4')}</p>
                <p>{t('about.journey5')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-display mb-8 text-center">
            {t('about.skills')} <span className="gradient-text">{t('about.skillsTitle')}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="gradient-border card-hover"
              >
                <div className="gradient-border-content">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center text-xl text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-accent-blue text-sm">{skill.icon}</span>
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                          </div>
                          <span className="text-accent-blue text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-dark-card rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-display mb-8 text-center">
            <FaGraduationCap className="inline mr-3" />
            <span className="gradient-text">{t('about.education')}</span>
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="gradient-border card-hover"
              >
                <div className="gradient-border-content">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-accent-blue font-semibold mb-1">{edu.institution}</p>
                      <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                    <span className={`px-4 py-2 bg-gradient-to-r ${edu.gradient} rounded-full text-white text-sm font-semibold whitespace-nowrap`}>
                      {edu.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-display mb-8 text-center">
            <FaAward className="inline mr-3" />
            <span className="gradient-text">{t('about.achievements')}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="gradient-border card-hover"
              >
                <div className="gradient-border-content text-center">
                  <div className="text-5xl text-accent-blue mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-display mb-8 text-center">
            <FaLanguage className="inline mr-3" />
            <span className="gradient-text">{t('about.languages')}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="gradient-border card-hover"
              >
                <div className="gradient-border-content text-center">
                  <h3 className="text-2xl font-bold mb-2">{language.name}</h3>
                  <p className="text-accent-blue font-semibold mb-3">{language.level}</p>
                  <div className="h-2 bg-dark-card rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-display mb-4">
            {t('about.connect')} <span className="gradient-text">{t('about.connectTitle')}</span>
          </h3>
          <p className="text-gray-400 mb-6 text-lg">
            {t('about.connectSubtitle')}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full text-white font-semibold hover:shadow-xl hover:shadow-accent-blue/50 transition-all duration-300"
          >
            {t('home.getInTouch')}
          </a>
        </motion.div>
      </div>
    </div>
  )
}