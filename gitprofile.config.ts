// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'nishantg98', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/nishantg98/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['nishantg98/my-project1', 'nishantg98/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['nishantg98/task-master-pro', 'nishantg98/Boardgame'], // List of repository names to display. example: ['nishantg98/my-project1', 'nishantg98/my-project2']
      },
    },
    external: {
      header: 'Featured DevOps Projects',
      projects: [
        {
          title: 'Enterprise Kubernetes Platform',
          description:
            'Architected production Kubernetes clusters across AWS EKS, GCP GKE, and Azure AKS. Implemented auto-scaling, service mesh with Istio, and monitoring with Prometheus/Grafana. Managed 100+ microservices with 99.9% uptime.',
          imageUrl:
            'https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png',
          link: 'https://github.com/nishantg98',
        },
        {
          title: 'Zero-Downtime CI/CD Pipeline',
          description:
            'Built enterprise CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 70%. Integrated automated testing, security scanning, and blue-green deployments for 1M+ users.',
          imageUrl:
            'https://www.jenkins.io/images/logos/jenkins/jenkins.png',
          link: 'https://github.com/nishantg98',
        },
        {
          title: 'Multi-Cloud IaC Framework',
          description:
            'Created reusable Terraform modules and Ansible playbooks for AWS, GCP, and Azure. Standardized deployment across 50+ environments, reducing provisioning time from days to hours.',
          imageUrl:
            'https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg',
          link: 'https://github.com/nishantg98',
        },
        {
          title: 'Unified Observability Platform',
          description:
            'Designed observability solution with Prometheus, Grafana, ELK Stack, and Jaeger. Built custom dashboards for SLA monitoring. Reduced MTTR by 60% through intelligent alerting.',
          imageUrl:
            'https://grafana.com/static/img/logos/grafana_logo.svg',
          link: 'https://github.com/nishantg98',
        },
      ],
    },
  },
  seo: {
    title: 'Nishant Gupta - Senior DevOps Engineer | GCP Professional Cloud Architect',
    description: 'Senior DevOps Engineer with 5+ years building enterprise cloud infrastructure. GCP Professional Cloud Architect. Expert in Kubernetes, AWS, Azure, Terraform, and CI/CD automation at scale.',
    imageURL: '',
  },
  social: {
    linkedin: 'nishantgupta27',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'nishantg2798',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'nishantg2798@gmail.com',
  },
  resume: {
    fileUrl: '/portfolio/Resume.pdf', // Resume available for download
  },
  skills: [
    'Kubernetes',
    'Docker',
    'AWS',
    'Google Cloud Platform',
    'Microsoft Azure',
    'Terraform',
    'Ansible',
    'Jenkins',
    'GitHub Actions',
    'GitLab CI',
    'CI/CD',
    'ArgoCD',
    'Helm',
    'Prometheus',
    'Grafana',
    'ELK Stack',
    'Python',
    'Bash',
    'Go',
    'Git',
    'Linux',
    'Nginx',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'MongoDB',
  ],
  experiences: [
    {
      company: 'UKG',
      position: 'Senior DevOps Engineer',
      from: 'June 2025',
      to: 'Present',
      companyLink: 'https://www.ukg.com/',
    },
    {
      company: 'Successive Digital',
      position: 'Associate DevOps Engineer',
      from: 'October 2020',
      to: 'May 2025',
      companyLink: 'https://successive.tech',
    },
  ],
  certifications: [
    {
      name: 'GCP - Professional Cloud Architect',
      body: 'Design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives.',
      year: 'Feb 2026',
      link: 'https://www.credly.com/badges/ab415edd-64dc-442a-909f-265e11f39a2e/public_url',
      badge: '/portfolio/professional-cloud-architect-certification.png',
    },
    {
      name: 'GCP - Associate Cloud Engineer',
      body: 'Deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform.',
      year: 'Feb 2025',
      link: 'https://www.credly.com/badges/d27e0eff-41d7-4701-a7e3-3a42903bd859/public_url',
      badge: '/portfolio/associate-cloud-engineer-certification.png',
    },
    {
      name: 'GCP - Cloud Digital Leader',
      body: 'Understand cloud computing basics, Google Cloud products and services, and their business value.',
      year: 'Jan 2026',
      link: 'https://www.credly.com/badges/b8f5ef7f-2c50-4cc6-a4c9-bb791b906a05/public_url',
      badge: '/portfolio/cloud-digital-leader-certification.png',
    },
    {
      name: 'HashiCorp Certified - Terraform Associate (003)',
      body: 'Understand Infrastructure as Code (IaC) concepts and Terraform fundamentals for cloud provisioning.',
      year: 'Jul 2024',
      link: 'https://www.credly.com/badges/6a5713e7-4b19-4b8f-b76b-c5bec22cd324/public_url',
      badge: '/portfolio/hashicorp-certified-terraform-associate-003.png',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      body: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
      year: 'Apr 2024',
      link: 'https://www.credly.com/badges/527bf7b0-2888-4413-9773-dc414524a3fd/public_url',
      badge: '/portfolio/aws-certified-cloud-practitioner.png',
    },
    {
      name: 'GitHub Foundations',
      body: 'Foundational knowledge of GitHub products, collaboration features, and development workflows.',
      year: 'Nov 2024',
      link: 'https://www.credly.com/badges/5a3a93f6-eb08-4258-8d3e-eee124d77ee0/public_url',
      badge: '/portfolio/github-foundations.png',
    },
    {
      name: 'Microsoft Azure Fundamentals (AZ-900)',
      body: 'Understanding of cloud concepts and core Azure services, security, privacy, compliance, and trust.',
      year: 'Feb 2023',
      link: 'https://www.credly.com/badges/2377fc5e-0b92-42ef-83fc-324637d5a102/public_url',
      badge: '/portfolio/microsoft-certified-azure-fundamentals.png',
    },
  ],
  educations: [
    {
      institution: 'University of Nottingham',
      degree: 'MSc Information Systems and Operations Management',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Guru Gobind Singh Indraprastha University',
      degree: 'BTech Computer Science and Engineering',
      from: '2016',
      to: '2020',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'nishantg2798', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'business',
      'corporate',
      'dracula',
      'night',
      'luxury',
      'dim',
      'nord',
      'sunset',
      'cyberpunk',
      'synthwave',
      'procyon',
    ],

    // Custom theme for DevOps professional look, applied to `procyon` theme
    customTheme: {
      primary: '#0EA5E9', // Sky blue - representing cloud
      secondary: '#10B981', // Green - representing success/automation
      accent: '#F59E0B', // Amber - representing alerts/monitoring
      neutral: '#1F2937', // Dark gray
      'base-100': '#FFFFFF', // White background
      '--rounded-box': '0.5rem',
      '--rounded-btn': '0.375rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
