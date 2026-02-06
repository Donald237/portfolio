'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'fr' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.letsTalk': "Let's Talk",
    
    // Home Page
    'home.available': 'Available for opportunities',
    'home.title': 'Full Stack',
    'home.titleAI': 'AI Developer',
    'home.subtitle': 'Building intelligent systems from',
    'home.subtitleAI': 'AI models',
    'home.subtitleTo': 'to',
    'home.subtitleProduction': 'production deployment',
    'home.subtitleEnd': '. Specializing in Computer Vision, ML, and Industrial Automation.',
    'home.viewProjects': 'View Projects',
    'home.getInTouch': 'Get in Touch',
    
    // What I Do
    'whatido.title': 'What I',
    'whatido.titleBuild': 'Build',
    'whatido.subtitle': 'End-to-end AI solutions that solve real-world problems',
    'whatido.ai.title': 'AI/ML Development',
    'whatido.ai.desc': 'Custom models, computer vision systems, and deep learning solutions optimized for production.',
    'whatido.fullstack.title': 'Full Stack Development',
    'whatido.fullstack.desc': 'Modern web applications with React/Next.js frontends and FastAPI/Python backends.',
    'whatido.cloud.title': 'Cloud Deployment',
    'whatido.cloud.desc': 'Scalable deployments on Azure with Docker, CI/CD, and production monitoring.',
    
    // Featured Projects
    'featured.title': 'Featured',
    'featured.titleProjects': 'Projects',
    'featured.subtitle': 'Showcasing real-world impact and technical excellence',
    'featured.viewAll': 'View All Projects',
    
    // Tech Stack
    'tech.title': 'Tech',
    'tech.titleStack': 'Stack',
    'tech.subtitle': 'Technologies I use to build exceptional products',
    
    // CTA
    'cta.title': "Let's Build Something",
    'cta.titleAmazing': 'Amazing Together',
    'cta.subtitle': "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.",
    'cta.button': 'Get in Touch',
    
    // Projects Page
    'projects.title': 'My',
    'projects.titleProjects': 'Projects',
    'projects.subtitle': 'A collection of AI and full-stack projects showcasing innovation, technical excellence, and real-world impact.',
    'projects.keyFeatures': 'KEY FEATURES',
    'projects.results': 'RESULTS & IMPACT',
    'projects.technologies': 'TECHNOLOGIES',
    'projects.interested': 'Interested in',
    'projects.collaborating': 'Collaborating',
    'projects.discuss': "Let's discuss how we can work together on your next project",
    'projects.viewDemo': 'View Demo',
    
    // About Page
    'about.title': 'About',
    'about.titleMe': 'Me',
    'about.subtitle': 'Full Stack AI Developer passionate about building intelligent systems that solve real-world problems',
    'about.journey': 'My Journey',
    'about.skills': 'Technical',
    'about.skillsTitle': 'Skills',
    'about.education': 'Education',
    'about.achievements': 'Achievements',
    'about.languages': 'Languages',
    'about.connect': "Let's",
    'about.connectTitle': 'Connect',
    'about.connectSubtitle': 'Interested in working together or just want to say hi?',
    'about.journey1': "I'm a Full Stack AI Developer with a passion for creating end-to-end intelligent systems. My expertise spans from designing and training AI models to deploying complete web applications in production environments.",
    'about.journey2': 'Currently pursuing my Ph.D. in Artificial Intelligence at UNIFESP in São José dos Campos, Brazil, where I research climate phenomena modeling using satellite data, Graph Neural Networks, and explainable AI techniques.',
    'about.journey3': 'At Avila Tech, I developed "Avila Vision," an industrial computer vision system achieving 99.5% detection accuracy. I handled everything from training YOLOv8 models to building FastAPI backends, creating Next.js dashboards, and deploying on Azure cloud infrastructure.',
    'about.journey4': 'My approach combines deep technical expertise in AI/ML with full-stack development skills, allowing me to deliver complete, production-ready solutions. I believe in writing clean code, following best practices, and building systems that are both powerful and maintainable.',
    'about.journey5': "When I'm not coding or researching, I enjoy exploring new AI technologies, contributing to open-source projects, and sharing knowledge with the developer community.",
    
    // Contact Page
    'contact.title': 'Get in',
    'contact.titleTouch': 'Touch',
    'contact.subtitle': "Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together!",
    'contact.sendMessage': 'Send a Message',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    'contact.infoSubtitle': 'Feel free to reach out through any of these channels. I typically respond within 24 hours.',
    'contact.availability': 'Availability',
    'contact.availableText': 'Currently available for new opportunities',
    'contact.availableDesc': "I'm open to full-time positions, freelance projects, and consulting opportunities in Full Stack AI Development, Computer Vision, and ML Engineering.",
    'contact.responseTime': 'Response Time',
    'contact.responseDesc': 'I typically respond to emails and messages within 24 hours. For urgent matters, please mention "URGENT" in the subject line.',
    'contact.preferPlatform': 'Prefer a different platform?',
    'contact.connectSocial': 'Connect with me on social media',
    'contact.success': "Message sent successfully! I'll get back to you soon.",
    
    // Footer
    'footer.description': 'Full Stack AI Developer specializing in Computer Vision and Industrial Automation.',
    'footer.quickLinks': 'Quick Links',
    'footer.getInTouch': 'Get in Touch',
    'footer.location': 'São José dos Campos, SP, Brazil',
    'footer.availableFor': 'Available for opportunities',
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with',
    'footer.using': 'using Next.js, TypeScript & Framer Motion',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Discutons',
    
    // Home Page
    'home.available': 'Disponible pour opportunités',
    'home.title': 'Développeur',
    'home.titleAI': 'IA Full Stack',
    'home.subtitle': 'Créer des systèmes intelligents depuis les',
    'home.subtitleAI': 'modèles IA',
    'home.subtitleTo': "jusqu'au",
    'home.subtitleProduction': 'déploiement en production',
    'home.subtitleEnd': '. Spécialisé en Vision par Ordinateur, ML et Automatisation Industrielle.',
    'home.viewProjects': 'Voir les Projets',
    'home.getInTouch': 'Me Contacter',
    
    // What I Do
    'whatido.title': 'Ce que je',
    'whatido.titleBuild': 'Développe',
    'whatido.subtitle': 'Solutions IA complètes qui résolvent des problèmes réels',
    'whatido.ai.title': 'Développement IA/ML',
    'whatido.ai.desc': 'Modèles personnalisés, systèmes de vision par ordinateur et solutions de deep learning optimisées pour la production.',
    'whatido.fullstack.title': 'Développement Full Stack',
    'whatido.fullstack.desc': 'Applications web modernes avec frontends React/Next.js et backends FastAPI/Python.',
    'whatido.cloud.title': 'Déploiement Cloud',
    'whatido.cloud.desc': 'Déploiements évolutifs sur Azure avec Docker, CI/CD et monitoring en production.',
    
    // Featured Projects
    'featured.title': 'Projets',
    'featured.titleProjects': 'Principaux',
    'featured.subtitle': 'Démonstration d\'impact réel et d\'excellence technique',
    'featured.viewAll': 'Voir Tous les Projets',
    
    // Tech Stack
    'tech.title': 'Technologies',
    'tech.titleStack': 'Utilisées',
    'tech.subtitle': 'Technologies que j\'utilise pour créer des produits exceptionnels',
    
    // CTA
    'cta.title': 'Créons Quelque Chose',
    'cta.titleAmazing': 'd\'Incroyable Ensemble',
    'cta.subtitle': 'Je suis toujours intéressé par de nouvelles opportunités et collaborations. Que vous ayez un projet en tête ou que vous souhaitiez simplement discuter, n\'hésitez pas à me contacter.',
    'cta.button': 'Me Contacter',
    
    // Projects Page
    'projects.title': 'Mes',
    'projects.titleProjects': 'Projets',
    'projects.subtitle': 'Une collection de projets IA et full-stack démontrant innovation, excellence technique et impact réel.',
    'projects.keyFeatures': 'FONCTIONNALITÉS CLÉS',
    'projects.results': 'RÉSULTATS & IMPACT',
    'projects.technologies': 'TECHNOLOGIES',
    'projects.interested': 'Intéressé par une',
    'projects.collaborating': 'Collaboration',
    'projects.discuss': 'Discutons de la façon dont nous pouvons travailler ensemble sur votre prochain projet',
    'projects.viewDemo': 'Voir la Démo',
    
    // About Page
    'about.title': 'À',
    'about.titleMe': 'Propos',
    'about.subtitle': 'Développeur IA Full Stack passionné par la création de systèmes intelligents résolvant des problèmes réels',
    'about.journey': 'Mon Parcours',
    'about.skills': 'Compétences',
    'about.skillsTitle': 'Techniques',
    'about.education': 'Formation',
    'about.achievements': 'Réalisations',
    'about.languages': 'Langues',
    'about.connect': 'Restons',
    'about.connectTitle': 'Connectés',
    'about.connectSubtitle': 'Intéressé par une collaboration ou simplement envie de dire bonjour ?',
    'about.journey1': "Je suis un Développeur IA Full Stack passionné par la création de systèmes intelligents de bout en bout. Mon expertise couvre la conception et l'entraînement de modèles IA jusqu'au déploiement d'applications web complètes en production.",
    'about.journey2': "Actuellement en doctorat en Intelligence Artificielle à l'UNIFESP à São José dos Campos, Brésil, où je recherche la modélisation des phénomènes climatiques à l'aide de données satellitaires, de réseaux de neurones graphiques et de techniques d'IA explicable.",
    'about.journey3': 'Chez Avila Tech, j\'ai développé "Avila Vision", un système de vision industrielle par ordinateur atteignant 99,5% de précision de détection. J\'ai géré tout, de l\'entraînement des modèles YOLOv8 à la construction de backends FastAPI, la création de tableaux de bord Next.js et le déploiement sur l\'infrastructure cloud Azure.',
    'about.journey4': 'Mon approche combine une expertise technique approfondie en IA/ML avec des compétences de développement full-stack, me permettant de livrer des solutions complètes et prêtes pour la production. Je crois en l\'écriture de code propre, en suivant les meilleures pratiques et en construisant des systèmes à la fois puissants et maintenables.',
    'about.journey5': "Quand je ne code pas ou ne fais pas de recherche, j'aime explorer de nouvelles technologies IA, contribuer à des projets open-source et partager mes connaissances avec la communauté des développeurs.",
    
    // Contact Page
    'contact.title': 'Me',
    'contact.titleTouch': 'Contacter',
    'contact.subtitle': 'Vous avez un projet en tête ou voulez simplement discuter ? J\'aimerais beaucoup avoir de vos nouvelles. Créons quelque chose d\'incroyable ensemble !',
    'contact.sendMessage': 'Envoyer un Message',
    'contact.name': 'Votre Nom',
    'contact.email': 'Adresse Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.info': 'Informations de Contact',
    'contact.infoSubtitle': 'N\'hésitez pas à me contacter par l\'un de ces canaux. Je réponds généralement dans les 24 heures.',
    'contact.availability': 'Disponibilité',
    'contact.availableText': 'Actuellement disponible pour de nouvelles opportunités',
    'contact.availableDesc': 'Je suis ouvert aux postes à temps plein, projets freelance et opportunités de conseil en Développement IA Full Stack, Vision par Ordinateur et Ingénierie ML.',
    'contact.responseTime': 'Temps de Réponse',
    'contact.responseDesc': 'Je réponds généralement aux emails et messages dans les 24 heures. Pour les questions urgentes, veuillez mentionner "URGENT" dans le sujet.',
    'contact.preferPlatform': 'Vous préférez une autre plateforme ?',
    'contact.connectSocial': 'Connectez-vous avec moi sur les réseaux sociaux',
    'contact.success': 'Message envoyé avec succès ! Je vous répondrai bientôt.',
    
    // Footer
    'footer.description': 'Développeur IA Full Stack spécialisé en Vision par Ordinateur et Automatisation Industrielle.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.getInTouch': 'Me Contacter',
    'footer.location': 'São José dos Campos, SP, Brésil',
    'footer.availableFor': 'Disponible pour opportunités',
    'footer.rights': 'Tous droits réservés.',
    'footer.builtWith': 'Créé avec',
    'footer.using': 'utilisant Next.js, TypeScript & Framer Motion',
  },
  
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.letsTalk': 'Vamos Conversar',
    
    // Home Page
    'home.available': 'Disponível para oportunidades',
    'home.title': 'Desenvolvedor',
    'home.titleAI': 'IA Full Stack',
    'home.subtitle': 'Construindo sistemas inteligentes desde',
    'home.subtitleAI': 'modelos de IA',
    'home.subtitleTo': 'até',
    'home.subtitleProduction': 'implantação em produção',
    'home.subtitleEnd': '. Especializado em Visão Computacional, ML e Automação Industrial.',
    'home.viewProjects': 'Ver Projetos',
    'home.getInTouch': 'Entre em Contato',
    
    // What I Do
    'whatido.title': 'O que eu',
    'whatido.titleBuild': 'Desenvolvo',
    'whatido.subtitle': 'Soluções de IA completas que resolvem problemas do mundo real',
    'whatido.ai.title': 'Desenvolvimento IA/ML',
    'whatido.ai.desc': 'Modelos personalizados, sistemas de visão computacional e soluções de deep learning otimizadas para produção.',
    'whatido.fullstack.title': 'Desenvolvimento Full Stack',
    'whatido.fullstack.desc': 'Aplicações web modernas com frontends React/Next.js e backends FastAPI/Python.',
    'whatido.cloud.title': 'Implantação Cloud',
    'whatido.cloud.desc': 'Implantações escaláveis no Azure com Docker, CI/CD e monitoramento de produção.',
    
    // Featured Projects
    'featured.title': 'Projetos',
    'featured.titleProjects': 'Destacados',
    'featured.subtitle': 'Demonstrando impacto real e excelência técnica',
    'featured.viewAll': 'Ver Todos os Projetos',
    
    // Tech Stack
    'tech.title': 'Tecnologias',
    'tech.titleStack': 'Utilizadas',
    'tech.subtitle': 'Tecnologias que uso para criar produtos excepcionais',
    
    // CTA
    'cta.title': 'Vamos Construir Algo',
    'cta.titleAmazing': 'Incrível Juntos',
    'cta.subtitle': 'Estou sempre interessado em novas oportunidades e colaborações. Se você tem um projeto em mente ou só quer conversar, entre em contato.',
    'cta.button': 'Entre em Contato',
    
    // Projects Page
    'projects.title': 'Meus',
    'projects.titleProjects': 'Projetos',
    'projects.subtitle': 'Uma coleção de projetos de IA e full-stack demonstrando inovação, excelência técnica e impacto real.',
    'projects.keyFeatures': 'RECURSOS PRINCIPAIS',
    'projects.results': 'RESULTADOS & IMPACTO',
    'projects.technologies': 'TECNOLOGIAS',
    'projects.interested': 'Interessado em',
    'projects.collaborating': 'Colaborar',
    'projects.discuss': 'Vamos discutir como podemos trabalhar juntos no seu próximo projeto',
    'projects.viewDemo': 'Ver Demo',
    
    // About Page
    'about.title': 'Sobre',
    'about.titleMe': 'Mim',
    'about.subtitle': 'Desenvolvedor IA Full Stack apaixonado por criar sistemas inteligentes que resolvem problemas reais',
    'about.journey': 'Minha Jornada',
    'about.skills': 'Habilidades',
    'about.skillsTitle': 'Técnicas',
    'about.education': 'Educação',
    'about.achievements': 'Conquistas',
    'about.languages': 'Idiomas',
    'about.connect': 'Vamos',
    'about.connectTitle': 'Conectar',
    'about.connectSubtitle': 'Interessado em trabalhar juntos ou só quer dizer oi?',
    'about.journey1': 'Sou um Desenvolvedor IA Full Stack com paixão por criar sistemas inteligentes de ponta a ponta. Minha expertise abrange desde o design e treinamento de modelos IA até a implantação de aplicações web completas em ambientes de produção.',
    'about.journey2': 'Atualmente cursando meu Doutorado em Inteligência Artificial na UNIFESP em São José dos Campos, Brasil, onde pesquiso modelagem de fenômenos climáticos usando dados de satélite, Redes Neurais Gráficas e técnicas de IA explicável.',
    'about.journey3': 'Na Avila Tech, desenvolvi "Avila Vision", um sistema industrial de visão computacional alcançando 99,5% de precisão de detecção. Gerenciei tudo, desde o treinamento de modelos YOLOv8 até a construção de backends FastAPI, criação de dashboards Next.js e implantação na infraestrutura de nuvem Azure.',
    'about.journey4': 'Minha abordagem combina profunda expertise técnica em IA/ML com habilidades de desenvolvimento full-stack, permitindo-me entregar soluções completas e prontas para produção. Acredito em escrever código limpo, seguir as melhores práticas e construir sistemas que sejam poderosos e manuteníveis.',
    'about.journey5': 'Quando não estou codando ou pesquisando, gosto de explorar novas tecnologias de IA, contribuir para projetos de código aberto e compartilhar conhecimento com a comunidade de desenvolvedores.',
    
    // Contact Page
    'contact.title': 'Entre em',
    'contact.titleTouch': 'Contato',
    'contact.subtitle': 'Tem um projeto em mente ou só quer conversar? Adoraria ouvir de você. Vamos criar algo incrível juntos!',
    'contact.sendMessage': 'Enviar uma Mensagem',
    'contact.name': 'Seu Nome',
    'contact.email': 'Endereço de Email',
    'contact.subject': 'Assunto',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.info': 'Informações de Contato',
    'contact.infoSubtitle': 'Sinta-se à vontade para entrar em contato através de qualquer um desses canais. Eu geralmente respondo dentro de 24 horas.',
    'contact.availability': 'Disponibilidade',
    'contact.availableText': 'Atualmente disponível para novas oportunidades',
    'contact.availableDesc': 'Estou aberto a posições em tempo integral, projetos freelance e oportunidades de consultoria em Desenvolvimento IA Full Stack, Visão Computacional e Engenharia ML.',
    'contact.responseTime': 'Tempo de Resposta',
    'contact.responseDesc': 'Eu geralmente respondo a emails e mensagens dentro de 24 horas. Para assuntos urgentes, por favor mencione "URGENTE" no assunto.',
    'contact.preferPlatform': 'Prefere uma plataforma diferente?',
    'contact.connectSocial': 'Conecte-se comigo nas redes sociais',
    'contact.success': 'Mensagem enviada com sucesso! Retornarei em breve.',
    
    // Footer
    'footer.description': 'Desenvolvedor IA Full Stack especializado em Visão Computacional e Automação Industrial.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.getInTouch': 'Entre em Contato',
    'footer.location': 'São José dos Campos, SP, Brasil',
    'footer.availableFor': 'Disponível para oportunidades',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.builtWith': 'Criado com',
    'footer.using': 'usando Next.js, TypeScript & Framer Motion',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}