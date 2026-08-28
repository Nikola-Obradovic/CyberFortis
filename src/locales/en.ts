import type { hr } from './hr';

export const en: typeof hr = {
  nav: {
    home: 'Home',
    services: 'Services',
    solutions: 'Our solutions',
    about: 'About us',
    careers: 'Careers',
    contact: 'Contact',
    assessment: 'NIS2 assessment',
    toggleMenu: 'Toggle menu',
    language: 'Language',
  },

  home: {
    seo: {
      title: 'CyberFortis | Cyber security in Croatia',
      description:
        'CyberFortis - your trusted partner in protecting digital assets. NIS2 compliance, penetration testing, SOC services and security assessments for companies in Croatia.',
    },
  },

  hero: {
    badge: 'Reliable protection for your business',
    title: 'Protect your digital assets',
    subtitle:
      'Proactive cyber security and NIS2 compliance for your business. Our team of experts protects your digital assets and ensures regulatory readiness.',
    ctaPrimary: 'NIS2 security assessment',
    ctaSecondary: 'Learn more',
    statCompanies: 'Protected companies',
    statDetection: 'Detection accuracy',
    statYears: 'Years of experience',
  },

  whyUs: {
    eyebrow: 'Why us',
    title: 'Your security is our mission',
    subtitle: 'Here is what sets us apart from other security service providers.',
    badge: 'Success rate in preventing attacks',
    imageAlt: 'Cyber security operations',
    features: [
      {
        title: 'Certified experts',
        description:
          'Our team consists of certified professionals holding CISSP, CEH, OSCP and other recognised certifications.',
      },
      {
        title: 'Proactive approach',
        description:
          'We do not wait for an incident to happen. We continuously hunt down and neutralise threats before they cause damage.',
      },
      {
        title: 'Fast support',
        description:
          'Our team is always available. In case of an incident, we respond within minutes.',
      },
    ],
    benefits: [
      'Tailored solutions for your industry',
      'Transparent reporting and communication',
      'No hidden costs',
      'A partnership, not just a service',
      'Continuous monitoring of emerging threats',
      'Fast implementation of protective measures',
      'Expertise in NIS2, DORA and GDPR compliance',
    ],
  },

  services: {
    eyebrow: 'What we do',
    title: 'Comprehensive protection for your digital business',
    subtitle:
      'From risk assessment to active defence - we cover every aspect of cyber security.',
    viewAll: 'View all services',
    pageEyebrow: 'Services',
    pageTitle: 'Comprehensive security services',
    pageSubtitle:
      'From risk assessment to active defence - we cover every aspect of cyber security. Solutions tailored to your specific needs.',
    requestQuote: 'Request a quote',
    seo: {
      title: 'Services',
      description:
        'Comprehensive cyber security services - penetration testing, SOC, NIS2 compliance, database protection, EDR and network security.',
    },
    items: {
      uskladjenost: {
        title: 'NIS2 and regulatory compliance',
        description:
          'Gap analysis and readiness assessment for NIS2, DORA and GDPR. Development of security policies and ongoing support for regulatory compliance.',
        features: [
          'NIS2 gap analysis',
          'DORA readiness assessment',
          'GDPR audit and compliance',
          'Development of security policies and procedures',
          'Preparation for regulatory audits',
        ],
      },
      pentest: {
        title: 'Penetration testing',
        description:
          'Simulated attacks on your systems to uncover weaknesses and test your defences under controlled conditions.',
        features: [
          'Web application testing',
          'Network infrastructure testing',
          'Social engineering',
          'Wireless network testing',
          'Red team operations',
        ],
      },
      soc: {
        title: 'SOC services',
        description:
          'Continuous monitoring of your network and systems. Our Security Operations Center detects and responds to threats in real time.',
        features: [
          'Continuous security event monitoring',
          'SIEM implementation and management',
          'Threat analysis',
          'Automated anomaly detection',
          'Regular reporting',
        ],
      },
      'baze-podataka': {
        title: 'Database protection',
        description:
          'Complete monitoring, blocking and protection of structured data in your databases, with faster audit and compliance turnaround (NIS2, DORA).',
        features: [
          'Real-time database monitoring',
          'Blocking of unauthorised access',
          'Protection of structured data',
          'Accelerated audit and compliance',
          'Support for NIS2 and DORA regulations',
        ],
      },
      pam: {
        title: 'Privileged access management (PAM)',
        description:
          'Protection of administrator roles, password management and complete monitoring.',
        features: [
          'Protection of privileged accounts',
          'Centralised password management',
          'Session monitoring and recording',
          'Just-in-time access',
          'Detailed audit trails',
        ],
      },
      ranjivosti: {
        title: 'Vulnerability management',
        description:
          'A solution for vulnerability management and proactive patching of critical systems.',
        features: [
          'Continuous vulnerability scanning',
          'Risk-based prioritisation',
          'Proactive patching',
          'Integration with ITSM tools',
          'Reporting and progress tracking',
        ],
      },
      edr: {
        title: 'Endpoint protection (EDR)',
        description:
          'A complete solution for managing servers and workstations. Proactive defence against cyber threats.',
        features: [
          'Real-time threat detection',
          'Automatic isolation of infected devices',
          'Forensic analysis',
          'Centralised management',
          'Integration with SIEM systems',
        ],
      },
      'mrezna-zastita': {
        title: 'Network security',
        description:
          'Working with leading network infrastructure security vendors, we can offer you the best solutions available.',
        features: [
          'Next-gen firewall solutions',
          'Network segmentation',
          'IDS/IPS implementation',
          'DDoS attack protection',
          'VPN and secure remote access',
        ],
      },
      incident: {
        title: 'Incident response',
        description:
          'Fast and effective response to security incidents. We minimise damage and help you recover your systems.',
        features: [
          'Emergency incident response',
          'Forensic analysis',
          'Threat containment',
          'System recovery',
          'Post-incident reporting',
        ],
      },
      procjene: {
        title: 'Security assessments',
        description:
          'A thorough analysis of your IT infrastructure to identify vulnerabilities and security gaps before attackers exploit them.',
        features: [
          'Network infrastructure analysis',
          'Security policy review',
          'System vulnerability assessment',
          'Configuration analysis',
          'Detailed report with recommendations',
        ],
      },
    },
  },

  partners: {
    eyebrow: 'Partners',
    title: 'Companies that trust us',
    prev: 'Previous partner',
    next: 'Next partner',
    goTo: 'Go to partner',
  },

  process: {
    eyebrow: 'Our process',
    title: 'How we work',
    subtitle: 'A structured approach that ensures thorough protection of your business.',
    steps: [
      {
        title: 'Initial consultation',
        description:
          'We analyse your business, identify critical systems and define protection priorities.',
      },
      {
        title: 'Security assessment',
        description:
          'We carry out a detailed analysis of your infrastructure, looking for vulnerabilities and potential threats.',
      },
      {
        title: 'Protection rollout',
        description:
          'We put security measures in place, configure systems and activate continuous monitoring.',
      },
      {
        title: 'Continuous monitoring',
        description:
          'Regular reporting, optimisation of your defences and adaptation to new threats.',
      },
    ],
  },

  industries: {
    eyebrow: 'Industries',
    title: 'Industries we protect',
    subtitle:
      'Specialised security services tailored to the specific requirements of your industry.',
    names: {
      finance: 'Finance and banking',
      healthcare: 'Healthcare',
      publicSector: 'Public sector',
      manufacturing: 'Manufacturing',
      retail: 'Retail',
      transport: 'Transport and logistics',
    },
  },

  careersSection: {
    eyebrow: 'Careers',
    title: 'Join our team',
    text: 'We are looking for motivated experts who want to work on the most challenging security projects. If you want to build a career in cyber security, get in touch.',
    openPositions: 'Open positions: 6',
    fullTime: 'Full-time',
    viewAll: 'View all positions',
    cards: {
      'junior-cyber-security': 'Junior Cyber Security Engineer (m/f)',
      'medior-cyber-security': 'Medior Cyber Security Engineer (m/f)',
    },
  },

  cta: {
    title: 'Ready for a safer business?',
    subtitle:
      'Book a free NIS2, DORA or GDPR assessment with our experts. We will analyse your needs and propose the optimal solution for your organisation’s compliance.',
    button: 'Book a NIS2 assessment',
    orCall: 'or call',
  },

  footer: {
    description:
      'Your trusted partner in protecting digital assets. We deliver proactive cyber security against modern threats.',
    servicesHeading: 'Services',
    companyHeading: 'Company',
    contactHeading: 'Contact',
    serviceLinks: {
      procjene: 'Security assessments',
      pentest: 'Penetration testing',
      soc: 'SOC services',
      incident: 'Incident response',
      uskladjenost: 'NIS2 compliance',
    },
    address: 'Trnjanska cesta 59, 10000 Zagreb, Croatia',
    rights: 'All rights reserved.',
  },

  about: {
    seo: {
      title: 'About us',
      description:
        'CyberFortis - a Croatian cyber security company. Meet our expert team, our values and our mission to protect digital assets.',
    },
    eyebrow: 'About us',
    title: 'Leaders in cyber security in Croatia',
    intro:
      'CyberFortis is a Croatian cyber security company. We were founded with a mission to protect the digital assets of Croatian companies and institutions from increasingly sophisticated threats.',
    storyEyebrow: 'Our story',
    storyTitle:
      'Cyberfortis – a Croatian company combining local industry experience with cyber security projects across the region',
    storyParagraphs: [
      'Our team is split into defensive (blue team) and offensive (red team) cyber security experts, covering the full spectrum of protection - from prevention and detection to attack simulation.',
      'Our engineers have worked on the most complex security projects in the region, collaborating with leading banks, energy companies and healthcare institutions. We hold the most prestigious certifications in cyber security and have extensive experience working with leading vendors such as IBM, Check Point, Qualys and CrowdStrike.',
      'Our vision is to build a new, local team of cyber security specialists who will shape a safer digital future for the region through knowledge, experience and dedication.',
    ],
    teamImageAlt: 'CyberFortis team',
    yearsBadge: 'Years of experience',
    valuesEyebrow: 'Our values',
    valuesTitle: 'The principles behind every decision we make',
    values: [
      {
        title: 'Integrity',
        description:
          'We act ethically and transparently. Your trust is the foundation of our business.',
      },
      {
        title: 'Excellence',
        description:
          'We strive for perfection in everything we do. We keep improving and follow the latest trends.',
      },
      {
        title: 'Proactivity',
        description:
          'We do not wait for problems - we anticipate them and act preventively to keep you protected.',
      },
      {
        title: 'Partnership',
        description:
          'Your success is our success. We build long-term relationships based on mutual trust.',
      },
    ],
    teamEyebrow: 'Our team',
    teamTitle: 'Meet the experts protecting your business',
    team: [
      {
        role: 'Director and founder',
        bio: '20+ years of experience in cyber security. Former head of security at a national bank.',
      },
      {
        role: 'Head of the SOC team',
        bio: 'CISSP certified expert. Specialised in attack detection and response.',
      },
      {
        role: 'Head of penetration testing',
        bio: 'OSCP and CEH certified. Discovered vulnerabilities in Fortune 500 systems.',
      },
      {
        role: 'Head of compliance',
        bio: 'Expert in GDPR, NIS2 and ISO 27001. Helps companies achieve regulatory compliance.',
      },
    ],
  },

  contact: {
    seo: {
      title: 'Contact',
      description:
        'Contact CyberFortis - your cyber security partner. Address: Trnjanska cesta 59, Zagreb. Email: info@cyberfortis.hr.',
    },
    eyebrow: 'Contact',
    title: 'Get in touch',
    subtitle:
      'We are ready to answer your questions and help you protect your business. Reach out - the first step towards safer operations.',
    infoHeading: 'Information',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    addressLine1: 'Trnjanska cesta 59',
    addressLine2: '10000 Zagreb, Croatia',
    hours: 'Working hours',
    hoursValue: 'Mon - Fri: 08:00 - 17:00',
    socHours: 'SOC: 24/7',
    illustrationAlt: 'Defensive cyber security shield illustration',
    mapTitle: 'CyberFortis location',
  },

  solutions: {
    seo: {
      title: 'Our solutions',
      description:
        'Cyberfortis SIEM provides a reliable and efficient way to improve security monitoring in any organisation.',
    },
    eyebrow: 'Our solutions',
    title: 'In-house cyber security solutions',
    subtitle:
      'We build our own tools, shaped by the real needs of security teams.',
    items: [
      {
        title: 'Cyberfortis SIEM',
        paragraphs: [
          'Cyberfortis SIEM provides a reliable and efficient way to improve security monitoring in any organisation. Our SIEM offers clear insight into key events and potential risks, enabling fast reaction and quicker decision-making. The system identifies suspicious activity and alerts security teams before an incident escalates. By integrating data from different sources on a single platform, it consolidates and presents every security-relevant event across your IT infrastructure and beyond. Its scalability supports uninterrupted growth and adaptation to your business environment. Integrations with a wide range of services and incident triage capabilities make it an indispensable tool for security teams.',
        ],
      },
      {
        title: 'Cyberfortis Asset Management',
        paragraphs: [
          'The Cyberfortis Asset Management platform is a software solution that lets organisations centrally manage, track and optimise their digital and physical assets. With a single platform, companies get one place to oversee their IT infrastructure, equipment, applications and digital content.',
          'Platforms like this help control costs, increase security and manage resources more efficiently throughout their entire lifecycle - from procurement to replacement or retirement. Automatic change tracking and detailed reports allow management to make informed decisions and optimise business processes.',
        ],
      },
      {
        title: 'Cyberfortis Data Protection',
        paragraphs: [
          'The Cyberfortis database monitoring and hardening solution allows organisations to protect their most valuable data through continuous activity monitoring and stronger database security settings. The platform monitors database access in real time, recognises suspicious activity and helps prevent unauthorised access or data misuse.',
          'Beyond monitoring, the solution enables database hardening - automated review of security configurations and recommendations for improving them in line with security standards and best practices. This way organisations can reduce security risks, improve regulatory compliance and ensure a stable and secure environment for their applications.',
        ],
      },
    ],
  },

  careers: {
    seo: {
      title: 'Careers',
      description:
        'Join the CyberFortis team - open positions for cyber security engineers. Build your career in cyber security in Croatia.',
    },
    badge: 'Careers',
    title: 'Join our team',
    subtitle:
      'We are looking for motivated experts who want to work on the most challenging security projects. Build your career in cyber security with us.',
    openPositions: 'Open positions: 6',
    fullTime: 'Full-time',
    location: 'Croatia / Remote',
    deadlineLabel: 'Deadline',
    tasksHeading: 'Job description',
    qualificationsHeading: 'Required qualifications',
    preferredHeadingJunior: 'Nice to have (not required)',
    preferredHeadingMedior: 'Preference is given to candidates with',
    benefitsHeading: 'We offer',
    interested: 'Interested?',
    applyText: 'Send your application (CV + short cover letter) to:',
    bottomTitle: 'Cannot find the right position?',
    bottomText:
      'We are always open to a conversation with talented experts. Send us your CV and we will get in touch when an opportunity opens up.',
    bottomCta: 'Contact us',
    jobs: {
      'junior-cyber-security': {
        title: 'Junior Cyber Security Engineer',
        level: 'Junior',
        description:
          'As our team grows, we are looking for a Junior Cyber Security Engineer who wants to start or develop a career in information and cyber security through hands-on work, mentorship and continuous learning.',
        tasks: [
          'Monitoring security events and supporting incident analysis',
          'Participating in the implementation and maintenance of security solutions (firewall, endpoint protection, SIEM, DB hardening)',
          'Basic system security checks (hardening, patching, vulnerability scanning)',
          'Helping to create and maintain security documentation and procedures',
          'Working with senior engineers on security projects',
          'Following current cyber threats and learning through real-world scenarios',
        ],
        qualifications: [
          'Completed IT education (computing, informatics, networking or similar)',
          'Basic understanding of networks and network security (TCP/IP, DNS, firewall)',
          'Basic understanding of operating systems (Windows and/or Linux)',
          'Basic knowledge of cyber security concepts and practices',
          'Willingness to learn and grow professionally',
          'Responsibility, analytical thinking and team spirit',
          'Basic knowledge of English',
        ],
        preferred: [
          'Basic experience with security tools (SIEM, antivirus, vulnerability scanner)',
          'Certifications or preparation for them (Security+, CEH – junior level)',
          'Knowledge of scripting basics (Python, Bash, PowerShell)',
          'Interest in SOC, incident response or cloud security',
        ],
        benefits: [
          'Mentorship and structured onboarding',
          'Work on real security projects',
          'Continuous education and career development',
          'Support for certifications and training',
          'A pleasant and professional working environment',
          'The opportunity to grow into a Medior Cyber Security Engineer',
          'Flexible working hours / hybrid or remote work (by agreement)',
        ],
      },
      'medior-cyber-security': {
        title: 'Medior Cyber Security Engineer',
        level: 'Medior',
        description:
          'As our team grows and develops, we are looking for a Medior Cyber Security Engineer to take part in protecting information systems, improving security processes and responding to security incidents.',
        tasks: [
          'Implementing and maintaining security solutions (SIEM, EDR, firewall, DLP and similar)',
          'Monitoring, analysing and responding to security incidents',
          'Participating in risk assessments and security analyses (vulnerability assessment, hardening)',
          'Contributing to internal and external security testing (penetration testing, together with the team)',
          'Creating and maintaining security documentation, policies and procedures',
          'Following new threats, vulnerabilities and trends in cyber security',
          'Working with IT teams and clients to improve their security posture',
        ],
        qualifications: [
          'At least 2–4 years of experience in cyber security',
          'Good knowledge of network protocols and security (TCP/IP, DNS, VPN, firewall)',
          'Good knowledge of operating systems (Linux, Windows)',
          'Good knowledge of security tools (SIEM, IDS/IPS, endpoint protection)',
          'Understanding of standards and frameworks (ISO 27001, NIST, CIS)',
          'Analytical thinking and the ability to work independently',
          'Good knowledge of English (written and spoken)',
        ],
        preferred: [
          'Relevant certifications (CEH, Security+, CySA+, OSCP, ISO 27001 LI/LA)',
          'Experience in incident response or a SOC environment',
          'Knowledge of automation and scripting tools (Python, Bash, PowerShell)',
          'Experience working with regulations (GDPR, NIS2)',
        ],
        benefits: [
          'Work in a skilled and motivated team',
          'Work on interesting and challenging security projects',
          'Continuous learning and professional development',
          'Support for certifications and education',
        ],
      },
    },
  },
};
