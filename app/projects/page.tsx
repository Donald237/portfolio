'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaRocket, FaBrain, FaIndustry, FaLeaf, FaCloudSun } from 'react-icons/fa'
import { useLanguage } from '@/lib/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()
  const projects = [
    {
      title: 'Avila Vision',
      category: 'Production System',
      icon: <FaIndustry />,
      description: 'Industrial computer vision system achieving 99.5% detection accuracy for automated object counting on production lines. Complete full-stack solution from AI models to cloud deployment.',
      longDescription: [
        'Developed end-to-end industrial computer vision system for real-time object detection and tracking',
        'Implemented YOLOv8 and ByteTrack algorithms for multi-object tracking',
        'Built FastAPI backend with WebSocket for real-time communication',
        'Created Next.js dashboard for production monitoring and system control',
        'Designed dual-line counting algorithms with state machine management',
        'Deployed on Azure VMs with CI/CD pipeline and monitoring',
      ],
      tech: ['YOLOv8', 'ByteTrack', 'OpenCV', 'FastAPI', 'Next.js', 'React', 'PostgreSQL', 'Azure', 'Docker', 'WebSocket'],
      results: [
        '99.5% detection accuracy',
        'Real-time processing (30+ FPS)',
        'Deployed in production environment',
        'Automated counting for wood planks and produce boxes'
      ],
      demo: 'https://drive.google.com/file/d/1rtWDnsSJT7tID8VLFBS-0WChe1AaN6uz/view?usp=sharing',
      gradient: 'from-accent-blue to-accent-purple',
      year: '2025 - Present',
      role: 'Full Stack AI Developer',
    },
    {
      title: 'RAG Document Consultation System',
      category: 'Enterprise AI',
      icon: <FaBrain />,
      description: 'AI-powered regulatory document consultation system using Retrieval-Augmented Generation (RAG) and Large Language Models for GDPR and CNIL compliance.',
      longDescription: [
        'Designed and developed AI application for regulatory document consultation',
        'Implemented RAG architecture with vector database for efficient retrieval',
        'Fine-tuned LLM models for context-specific regulatory responses',
        'Created intuitive user interface using Chainlit framework',
        'Modeled database schema for structured information access',
      ],
      tech: ['Langchain', 'LLM', 'RAG', 'Chainlit', 'Python', 'Elasticsearch', 'Ollama', 'Vector DB'],
      results: [
        'Accurate regulatory compliance answers',
        'Fast document retrieval',
        'Deployed for French companies',
        'Reduced consultation time by 70%'
      ],
      gradient: 'from-accent-purple to-pink-500',
      year: '2024',
      role: 'AI Engineer',
    },
    {
      title: 'Climate Research - ENSO Teleconnections',
      category: 'Research',
      icon: <FaCloudSun />,
      description: 'Analysis of El Niño-Southern Oscillation teleconnections using MERRA-2 climate data (1980-2018) on Santos Dumont II supercomputer.',
      longDescription: [
        'Analyzed 38 years of MERRA-2 climate data on supercomputer',
        'Implemented PCMCI algorithms for causal discovery',
        'Applied Graph Neural Networks for climate pattern modeling',
        'Investigated ENSO effects on global climate patterns',
        'Developed machine learning approaches for climate prediction',
      ],
      tech: ['PyTorch', 'PCMCI', 'GNN', 'HPC', 'Python', 'Deep Learning', 'Time Series Analysis'],
      results: [
        'Published research findings',
        'Identified key teleconnection patterns',
        'Advanced understanding of ENSO impacts',
        'Supercomputer-scale data processing'
      ],
      gradient: 'from-accent-green to-accent-blue',
      year: '2024-2025',
      role: 'PhD Researcher',
    },
    {
      title: 'AI Branding Support System',
      category: 'Enterprise AI',
      icon: <FaRocket />,
      description: 'Innovative AI system transforming traditional branding processes through Playbook-based data collection and AI-driven Brand Brain for SMEs.',
      longDescription: [
        'Developed AI system to streamline branding processes',
        'Created Playbook-based system for efficient data collection',
        'Built AI-driven Brand Brain (2nd Brain) for data analysis',
        'Enabled real-time insights for SME branding decisions',
        'Reduced traditional branding timeline from 6-12 months',
      ],
      tech: ['Python', 'LLM', 'NLP', 'Data Analysis', 'ML Pipeline'],
      results: [
        'Reduced branding process time by 60%',
        'Real-time brand insights for SMEs',
        'Cost-effective branding solution',
        'Sustained brand relevance'
      ],
      gradient: 'from-purple-500 to-accent-purple',
      year: '2024',
      role: 'Data AI Developer',
    },
    {
      title: 'African Sign Language Recognition',
      category: 'Social Impact',
      icon: <FaBrain />,
      description: 'Deep learning system for recognizing Congolese sign language, translating gestures into text to improve accessibility for deaf communities.',
      longDescription: [
        'Developed neural network models for gesture recognition',
        'Trained on Congolese sign language dataset',
        'Implemented real-time gesture-to-text translation',
        'Created accessible interface for deaf users',
        'Contributed to improved communication accessibility',
      ],
      tech: ['TensorFlow', 'CNN', 'Computer Vision', 'OpenCV', 'Python', 'Deep Learning'],
      results: [
        'High accuracy gesture recognition',
        'Real-time translation capability',
        'Improved accessibility for deaf community',
        'Expandable to other sign languages'
      ],
      gradient: 'from-green-500 to-accent-green',
      year: '2023',
      role: 'ML Engineer',
    },
    {
      title: 'Fall Armyworm Detection System',
      category: 'Agriculture Tech',
      icon: <FaLeaf />,
      description: 'Computer vision system for detecting and recognizing pest insects (Fall Armyworm) in maize crops for automated crop monitoring.',
      longDescription: [
        'Developed CNN-based pest detection system',
        'Implemented image analysis for insect classification',
        'Created automated monitoring for crop protection',
        'Optimized model for field deployment',
        'Contributed to agricultural automation',
      ],
      tech: ['CNN', 'Computer Vision', 'OpenCV', 'TensorFlow', 'Python', 'Image Processing'],
      results: [
        'Accurate pest detection',
        'Early warning system for farmers',
        'Reduced crop damage',
        'Automated field monitoring'
      ],
      gradient: 'from-yellow-500 to-green-500',
      year: '2023',
      role: 'Computer Vision Engineer',
    },
    {
      title: 'Autonomous Navigation with RL',
      category: 'Robotics',
      icon: <FaRocket />,
      description: 'Robot capable of autonomous navigation in domestic environments using Deep Double Q-Network (D3QN) algorithm with ROS2.',
      longDescription: [
        'Developed autonomous navigation system using reinforcement learning',
        'Implemented D3QN algorithm for adaptive learning',
        'Used ROS2 for simulation and robot control',
        'Trained robot to navigate various obstacles and room configurations',
        'Integrated sensor fusion for environment mapping',
      ],
      tech: ['ROS2', 'D3QN', 'Reinforcement Learning', 'Python', 'Gazebo', 'SLAM'],
      results: [
        'Successful autonomous navigation',
        'Adaptive obstacle avoidance',
        'Robust in various environments',
        'Real-time decision making'
      ],
      gradient: 'from-blue-500 to-purple-500',
      year: '2023',
      role: 'Robotics Engineer',
    },
    {
      title: 'Water Flow Prediction System',
      category: 'Research',
      icon: <FaCloudSun />,
      description: 'Statistical forecasting system for Lake Anka water flow using SARIMAX model for flood prevention.',
      longDescription: [
        'Analyzed historical water flow data from Lake Anka',
        'Applied SARIMAX model for time series forecasting',
        'Developed predictive models for flood prevention',
        'Collaborated with team for system integration',
        'Documented methods and results for research',
      ],
      tech: ['SARIMAX', 'Python', 'Time Series Analysis', 'Statistical Modeling', 'Data Analysis'],
      results: [
        'Accurate water flow predictions',
        'Integrated into flood prevention system',
        'Early warning capabilities',
        'Improved disaster preparedness'
      ],
      gradient: 'from-cyan-500 to-blue-500',
      year: '2023-2024',
      role: 'Research Intern',
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
            {t('projects.title')} <span className="gradient-text">{t('projects.titleProjects')}</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="gradient-border card-hover spotlight"
            >
              <div className="gradient-border-content">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon and Category */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-3xl text-white mb-4`}>
                      {project.icon}
                    </div>
                    <span className="text-sm text-gray-400 font-semibold">{project.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-3xl font-display mb-2">{project.title}</h2>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs font-semibold`}>
                            {project.category}
                          </span>
                          <span className="text-gray-400 text-sm">{project.role}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/80 transition-colors flex items-center gap-2 font-semibold"
                            title="View Demo"
                          >
                            <FaExternalLinkAlt />
                            <span>{t('projects.viewDemo')}</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-400 text-lg mb-6">{project.description}</p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-accent-blue mb-3">{t('projects.keyFeatures')}</h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.longDescription.map((feature, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-accent-blue mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-accent-purple mb-3">{t('projects.results')}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.results.map((result) => (
                          <span
                            key={result}
                            className="px-3 py-1 bg-accent-purple/10 border border-accent-purple/30 rounded-full text-accent-purple text-sm"
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-sm font-semibold text-accent-green mb-3">{t('projects.technologies')}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 text-sm font-mono hover:border-accent-blue/50 hover:bg-accent-blue/5 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-display mb-4">
            {t('projects.interested')} <span className="gradient-text">{t('projects.collaborating')}</span>?
          </h3>
          <p className="text-gray-400 mb-6">
            {t('projects.discuss')}
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