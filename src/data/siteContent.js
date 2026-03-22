import softwareIcdasDiagramImage from '../assets/images/software_ICDAS 3.1.png'
import softwareArchitectureImage from '../assets/images/Architecture.png'
import indexAboutImage from '../assets/images/index_about.png'
import rvasImage from '../assets/images/rvas.png'
import softwareSupportImage from '../assets/images/software_support.png'
import softwareHeroImage from '../assets/images/software_hero.png'

const palettes = {
  lilac: {
    base: '#d7c6e4',
    accent: '#8d4aa2',
    detail: '#f7f3fb',
    shade: '#b8a0cf',
  },
  steel: {
    base: '#cfd9de',
    accent: '#8d4aa2',
    detail: '#f7fafc',
    shade: '#98a7af',
  },
  brick: {
    base: '#49221a',
    accent: '#8d4aa2',
    detail: '#c58b7f',
    shade: '#732d23',
  },
  glass: {
    base: '#526373',
    accent: '#8d4aa2',
    detail: '#c8ced4',
    shade: '#2f3945',
  },
  lime: {
    base: '#dced95',
    accent: '#6c7a22',
    detail: '#f4fad2',
    shade: '#bfd45f',
  },
  green: {
    base: '#d7ebd7',
    accent: '#3c8744',
    detail: '#f3faf3',
    shade: '#9bc49d',
  },
  charcoal: {
    base: '#1b222c',
    accent: '#8d4aa2',
    detail: '#5d6a7d',
    shade: '#0f141b',
  },
  mist: {
    base: '#ece8e0',
    accent: '#3c8744',
    detail: '#faf7f1',
    shade: '#d8d0c4',
  },
}

function createPlaceholderImage({
  title,
  subtitle,
  palette = 'lilac',
  width = 1200,
  height = 800,
}) {
  const colors = palettes[palette] ?? palettes.lilac

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colors.base}" />
          <stop offset="100%" stop-color="${colors.shade}" />
        </linearGradient>
        <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colors.detail}" stop-opacity="0.88" />
          <stop offset="100%" stop-color="${colors.detail}" stop-opacity="0.22" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <g opacity="0.28" stroke="${colors.detail}" stroke-width="2" fill="none">
        <path d="M0 ${height * 0.18} H${width}" />
        <path d="M0 ${height * 0.36} H${width}" />
        <path d="M0 ${height * 0.54} H${width}" />
        <path d="M0 ${height * 0.72} H${width}" />
        <path d="M${width * 0.18} 0 V${height}" />
        <path d="M${width * 0.36} 0 V${height}" />
        <path d="M${width * 0.54} 0 V${height}" />
        <path d="M${width * 0.72} 0 V${height}" />
      </g>
      <circle cx="${width * 0.18}" cy="${height * 0.2}" r="${height * 0.12}" fill="${colors.detail}" opacity="0.18" />
      <circle cx="${width * 0.82}" cy="${height * 0.18}" r="${height * 0.08}" fill="${colors.detail}" opacity="0.12" />
      <rect x="${width * 0.07}" y="${height * 0.11}" width="${width * 0.16}" height="${height * 0.09}" rx="12" fill="${colors.accent}" />
      <text x="${width * 0.15}" y="${height * 0.168}" fill="${colors.detail}" font-size="${height * 0.046}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" letter-spacing="4">NE</text>
      <rect x="${width * 0.22}" y="${height * 0.18}" width="${width * 0.56}" height="${height * 0.48}" rx="26" fill="url(#panel)" stroke="${colors.detail}" stroke-opacity="0.48" />
      <rect x="${width * 0.3}" y="${height * 0.23}" width="${width * 0.18}" height="${height * 0.38}" rx="20" fill="${colors.accent}" opacity="0.9" />
      <rect x="${width * 0.46}" y="${height * 0.25}" width="${width * 0.18}" height="${height * 0.32}" rx="20" fill="${colors.detail}" opacity="0.72" />
      <rect x="${width * 0.64}" y="${height * 0.28}" width="${width * 0.08}" height="${height * 0.26}" rx="18" fill="${colors.accent}" opacity="0.38" />
      <rect x="${width * 0.09}" y="${height * 0.74}" width="${width * 0.42}" height="${height * 0.11}" rx="20" fill="${colors.accent}" opacity="0.88" />
      <text x="${width * 0.11}" y="${height * 0.79}" fill="${colors.detail}" font-size="${height * 0.064}" font-family="Arial, Helvetica, sans-serif" font-weight="700" letter-spacing="4">${title}</text>
      <text x="${width * 0.11}" y="${height * 0.86}" fill="${colors.detail}" font-size="${height * 0.034}" font-family="Arial, Helvetica, sans-serif" opacity="0.92" letter-spacing="2">${subtitle}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Software', path: '/software' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
]

export const footerPromos = [
  {
    eyebrow: 'Our Niche',
    title: 'Industries',
    path: '/products',
    tone: 'neutral',
  },
  {
    eyebrow: 'Articles',
    title: 'In The News',
    path: '/about',
    tone: 'lime',
  },
  {
    eyebrow: 'Software',
    title: 'Task Management',
    path: '/software',
    tone: 'lilac',
  },
]

export const footerKeywords = [
  'Cutting Edge Technology',
  'Innovative Products',
  '24 / 7 Support',
  'Documentation & Training',
  'Precision Control',
  'Validated Operations',
  'Global Installations',
]

export const contactDetails = {
  addresses: [
    {
      title: 'Head Office',
      lines: [
        'FF24, Sarjanam Resicom,',
        'Opposite to Shreeji Villa 1,',
        'Khodiyar nagar, New VIP road,',
        'Vadodara, Pin: 390019',
      ],
    },
    {
      title: 'Manufacturing',
      lines: [
        'A/168/1, Sardar Estate,',
        'Opposite Gopi Wafers,',
        'Road no: 05, Ajwa Road,',
        'Vadodara-390019',
      ],
    },
  ],
  phones: ['+91 8830561339', '+91 8141986167'],
  emails: [
    'info@indoclimatecare.com',
    'service@indoclimatecare.com',
    'sales@indoclimatecare.com',
  ],
}

export const homeContent = {
  heroImage: createPlaceholderImage({
    title: 'WALK IN',
    subtitle: 'Chambers',
    palette: 'lilac',
    width: 1100,
    height: 880,
  }),
  aboutImage: indexAboutImage,
  videoImage: createPlaceholderImage({
    title: 'WATCH',
    subtitle: 'Corporate Presentation',
    palette: 'glass',
    width: 1400,
    height: 780,
  }),
  technologies: [
    {
      badge: 'LAN',
      title: 'Ethernet Communication',
      description:
        'High-speed data transfer over plant networks for direct communication between chamber controllers and supervisory systems.',
    },
    {
      badge: 'PLC',
      title: 'I-Series Controllers',
      description:
        'Secure data logging, archived readings, and dependable control loops built for regulated laboratory environments.',
    },
    {
      badge: 'UI',
      title: 'Touch Screen Display',
      description:
        'A clean operator interface with layered access control, task visibility, and quick navigation for daily operations.',
    },
    {
      badge: 'AL',
      title: 'Complete Range Of Alarms',
      description:
        'Temperature, humidity, utilities, and door-event monitoring presented as clear alarm states with escalation rules.',
    },
    {
      badge: 'SMS',
      title: 'Alarm Transmissions',
      description:
        'Software notifications, on-device indicators, and remote escalation paths keep teams aware of critical events.',
    },
    {
      badge: 'RH',
      title: 'Humidity System',
      description:
        'Low-maintenance humidity control designed for repeatable conditioning across chambers of different capacities.',
    },
  ],
  productTabs: [
    'Stability Chambers',
    'Low Temperature Chambers',
    'Incubators',
    'Ovens',
  ],
  featuredProducts: [
    {
      title: 'Stability Chamber',
      subtitle: 'Validated environmental testing with precise control and long-duration reliability.',
      image: createPlaceholderImage({
        title: 'STABILITY',
        subtitle: 'Chamber',
        palette: 'steel',
        width: 900,
        height: 760,
      }),
    },
    {
      title: 'Photostability Chamber',
      subtitle: 'Consistent light exposure studies with integrated monitoring and protocol support.',
      image: createPlaceholderImage({
        title: 'PHOTO',
        subtitle: 'Stability',
        palette: 'lilac',
        width: 900,
        height: 760,
      }),
    },
    {
      title: 'Freeze Thaw Chamber',
      subtitle: 'Thermal cycling workflows for packaged products, formulations, and research programs.',
      image: createPlaceholderImage({
        title: 'FREEZE',
        subtitle: 'Thaw',
        palette: 'mist',
        width: 900,
        height: 760,
      }),
    },
  ],
}

export const aboutContent = {
  heroImage: indexAboutImage,
  metrics: [
    { value: '60K+', label: 'Sq.ft state of the art manufacturing facility' },
    { value: '50+', label: 'Global export destinations' },
    { value: '1000+', label: 'Trusted client relationships' },
    { value: '15K+', label: 'Successful chamber installations' },
  ],
  values: [
    {
      title: 'Mission',
      text: 'Enriching scientific operations with dependable products, disciplined engineering, and responsive service.',
    },
    {
      title: 'Vision',
      text: 'Becoming the preferred growth partner for laboratories through precision technology and thoughtful support.',
      featured: true,
    },
    {
      title: 'Value',
      text: 'Putting customers, reliability, and long-term performance at the center of every design and delivery decision.',
    },
  ],
  milestones: [
    {
      year: '1980',
      text: 'Indo Climatecare Pvt Ltd. began operations as a compact manufacturing unit focused on temperature-controlled solutions.',
    },
    {
      year: '1996',
      text: 'The portfolio expanded deeply into pharmaceutical stability systems and regulated chamber workflows.',
    },
    {
      year: '2007',
      text: 'Recognition for engineering excellence accelerated the next phase of exports, scale, and specialization.',
    },
  ],
  testimonials: [
    {
      quote:
        'The software-driven operation model has been a practical advantage for our compliance-heavy environment.',
      author: 'Mr. Sureshkumar, GSK Pharmaceuticals',
    },
    {
      quote:
        'The products align closely with our validation requirements and the support team is responsive when needed.',
      author: 'Mr. Alpesh Patel, Alkem Laboratories',
    },
    {
      quote:
        'Hosting international visitors at the manufacturing unit reflected the process discipline behind the brand.',
      author: 'Global Channel Partner, Southeast Asia',
    },
  ],
  clientLogos: ['Baxter', 'Biocon', 'HPL', 'msn', 'Sandoz'],
}

export const productsContent = {
  heroImage: createPlaceholderImage({
    title: 'PRODUCT',
    subtitle: 'Range Showcase',
    palette: 'steel',
    width: 1500,
    height: 900,
  }),
  categories: [
    'Stability Chambers',
    'Low Temperature Chambers',
    'Incubators',
    'Plant Growth Chambers',
    'Vacuum Ovens',
    'Autoclaves',
    'Photostability Chambers',
    'Laminar Air Flow',
  ],
  items: [
    {
      title: 'Stability Chambers',
      image: createPlaceholderImage({
        title: 'STABILITY',
        subtitle: 'Validated Control',
        palette: 'steel',
      }),
    },
    {
      title: 'Low Temperature Chambers',
      image: createPlaceholderImage({
        title: 'LOW TEMP',
        subtitle: 'Cold Storage',
        palette: 'mist',
      }),
    },
    {
      title: 'Incubators',
      image: createPlaceholderImage({
        title: 'INCUBATOR',
        subtitle: 'Uniform Heat',
        palette: 'lilac',
      }),
    },
    {
      title: 'Plant Growth Chambers',
      image: createPlaceholderImage({
        title: 'PLANT',
        subtitle: 'Growth Studies',
        palette: 'green',
      }),
    },
    {
      title: 'Vacuum Ovens',
      image: createPlaceholderImage({
        title: 'VACUUM',
        subtitle: 'Drying Systems',
        palette: 'lime',
      }),
    },
    {
      title: 'Autoclaves',
      image: createPlaceholderImage({
        title: 'AUTOCLAVE',
        subtitle: 'Sterilization',
        palette: 'steel',
      }),
    },
    {
      title: 'Photostability Chambers',
      image: createPlaceholderImage({
        title: 'PHOTO',
        subtitle: 'Light Exposure',
        palette: 'lilac',
      }),
    },
    {
      title: 'Laminar Air Flow',
      image: createPlaceholderImage({
        title: 'LAMINAR',
        subtitle: 'Clean Air Workstations',
        palette: 'mist',
      }),
    },
  ],
}

export const softwareContent = {
  heroImage: softwareHeroImage,
  tabs: [
    {
      key: 'icdas',
      label: 'ICDAS 3.1',
      title: 'ICDAS 3.1',
      subtitle: 'Access Anywhere Anytime.',
      description:
        'The ICDAS platform centralizes chamber management, improves operational visibility, and supports paperless monitoring across local and remote teams.',
      benefits: [
        'Server-based access from standard web browsers',
        'Plug-and-play Ethernet integration with plant networks',
        'Data log exports and alarm summaries through email workflows',
        'Historical trends, live values, and task management in one interface',
      ],
      diagramImage: softwareIcdasDiagramImage,
      diagramAlt: 'ICDAS 3.1 software diagram',
      features: {
        SYS: {
          title: 'Installation',
          icon: 'IN',
          text:
            'Streamlined setup guidance for chamber connectivity, controller onboarding, and operator readiness across new and existing installations.',
          bullets: [
            'Commissioning support for connected equipment',
            'Network setup and controller communication checks',
            'User onboarding and operational handover',
            'Documentation alignment for regulated workflows',
          ],
        },
        DATA: {
          title: 'Data Management',
          icon: 'DB',
          text:
            'Paperless reviews, audit trails, approval workflows, e-signatures, notifications, and runtime calculations are structured around a single operator console.',
          bullets: [
            'Alarm and activity histories remain searchable across connected equipment',
            'Email and SMS escalation can be tied to user-defined event rules',
            'Multi-level approvals support regulated documentation practices',
            'Daily supervisory summaries reduce manual follow-up effort',
          ],
        },
        CFG: {
          title: 'Configuration',
          icon: 'CF',
          text:
            'Configure chamber profiles, alarm thresholds, and user access to match site SOPs and day-to-day operational requirements.',
          bullets: [
            'Role-based access levels for operators and supervisors',
            'Recipe templates and reusable configuration baselines',
            'Alarm thresholds, delays, and escalation rules',
            'Validated settings snapshots for change control',
          ],
        },
        SAFE: {
          title: 'Safe & Secure',
          icon: 'SS',
          text:
            'Security and integrity controls designed for validated environments with traceable actions and protected records.',
          bullets: [
            'Access control with defined user permissions',
            'Audit trails for critical actions and changes',
            'Backup-ready records for retention policies',
            'Secure operating practices for multi-user teams',
          ],
        },
        OPS: {
          title: 'Other Features',
          icon: 'OP',
          text:
            'Practical tools that simplify monitoring, reporting, and daily follow-ups across multiple chambers and teams.',
          bullets: [
            'Scheduled summaries and export-ready reports',
            'Quick views for alarms, tasks, and trends',
            'Notification workflows for key events',
            'Reusable templates for consistent operations',
          ],
        },
      },
      featureGroups: {
        left: [
          { label: 'Installation', code: 'SYS' },
          { label: 'Data Management', code: 'DATA', active: true },
          { label: 'Configuration', code: 'CFG' },
        ],
        right: [
          { label: 'Safe & Secure', code: 'SAFE' },
          { label: 'Other Features', code: 'OPS' },
        ],
      },
      activeFeature: {
        title: 'Data Management',
        icon: 'DB',
        text:
          'Paperless reviews, audit trails, approval workflows, e-signatures, notifications, and runtime calculations are structured around a single operator console.',
        bullets: [
          'Alarm and activity histories remain searchable across connected equipment',
          'Email and SMS escalation can be tied to user-defined event rules',
          'Multi-level approvals support regulated documentation practices',
          'Daily supervisory summaries reduce manual follow-up effort',
        ],
      },
      architectureImage: softwareArchitectureImage,
      architectureAlt: 'Software architecture diagram',
    },
    {
      key: 'rvas',
      label: 'RVAS',
      title: 'REMOTE VIEW & ALARM SYSTEM (RVAS)',
      subtitle: null,
      description:
        'Take remote monitoring to an in-depth level of information-sharing with the Remote View & Alarm System (RVAS).',
      benefits: [
        'View & Acknowledge real-time T/RH reading of EACH sensor',
        'View status of each I/O Components (humidifier, heater, compressor, etc)',
        'View status of Utilities (Main Supply, Door, Water Level)',
      ],
      diagramImage: rvasImage,
      diagramAlt: 'Remote View & Alarm System (RVAS) diagram',
      features: {
        VAL: {
          title: 'Validation',
          icon: 'VR',
          text:
            'Structured validation flows combine task templates, evidence capture, and approval checkpoints so teams can execute and review work consistently.',
          bullets: [
            'Configurable task templates aligned to SOPs',
            'Evidence and attachment capture for every step',
            'Approval checkpoints and traceable sign-offs',
            'Export-ready validation summaries for audits',
          ],
        },
        RPT: {
          title: 'Reports',
          icon: 'RP',
          text:
            'Generate clear, shareable reports for alarms, trends, and system health to support faster decisions and documentation needs.',
          bullets: [
            'Alarm summaries and acknowledgements',
            'Trend exports for temperature and humidity',
            'Printable reports for review and filing',
            'Scheduled delivery to reduce manual effort',
          ],
        },
        ALRT: {
          title: 'Notifications',
          icon: 'AL',
          text:
            'Stay informed with event-driven alerts that help teams respond quickly to deviations across connected chambers.',
          bullets: [
            'Configurable alerts for critical events',
            'Escalation paths for after-hours coverage',
            'Clear status visibility for acknowledgements',
            'Reduced response time for deviations',
          ],
        },
        AUD: {
          title: 'Audit Ready',
          icon: 'AU',
          text:
            'Maintain traceable records and operational transparency for regulated environments and periodic reviews.',
          bullets: [
            'Event history with timestamps',
            'Acknowledgement logs for alarms',
            'Review-friendly record formatting',
            'Retention-ready exports when required',
          ],
        },
        API: {
          title: 'Integrations',
          icon: 'API',
          text:
            'Extend RVAS workflows with integrations that connect plant networks, monitoring utilities, and reporting systems.',
          bullets: [
            'Flexible connectivity for site requirements',
            'Data sharing for dashboards and analytics',
            'Export formats aligned to common tools',
            'Scalable setup for multi-chamber sites',
          ],
        },
      },
      featureGroups: {
        left: [
          { label: 'Validation', code: 'VAL', active: true },
          { label: 'Reports', code: 'RPT' },
          { label: 'Notifications', code: 'ALRT' },
        ],
        right: [
          { label: 'Audit Ready', code: 'AUD' },
          { label: 'Integrations', code: 'API' },
        ],
      },
      activeFeature: {
        title: 'Validation',
        icon: 'VR',
        text:
          'Structured validation flows combine task templates, evidence capture, and approval checkpoints so teams can execute and review work consistently.',
        bullets: [
          'Configurable task templates aligned to SOPs',
          'Evidence and attachment capture for every step',
          'Approval checkpoints and traceable sign-offs',
          'Export-ready validation summaries for audits',
        ],
      },
      architectureImage: softwareArchitectureImage,
      architectureAlt: 'Software architecture diagram',
    },
    {
      key: 'online-support',
      label: 'Online Software Support',
      title: 'Online Software Support',
      subtitle: null,
      description: [
        'The efficiency of systems and processes can be significantly increased via a comprehensive energy optimisation.',
        'Branch operations at below locations :',
      ],
      benefits: [
        'In collaboration with our technical specialists, we’ll select the most efficient system for your test applications.',
        'Customised equipment is developed and designed for specific user requirements.',
        'By considering the complete system on-site e.g. testing facility, measuring devices and heat exchangers, we can tap into the full potential.',
        'We will then determine the cost savings of your existing equipment.',
        'New equipment operates within the optimal range thanks to efficient components and smart control.',
      ],
      diagramImage: softwareSupportImage,
      diagramAlt: 'Online Software Support overview',
      features: {
        TKT: {
          title: 'Ticketing',
          icon: 'CS',
          text:
            'Track requests end-to-end with timestamps, ownership, and resolution notes so teams can coordinate support work across shifts and locations.',
          bullets: [
            'Priority queues and assignment visibility',
            'Remote diagnostics with guided steps',
            'Resolution notes and searchable history',
            'Auto-generated service summaries',
          ],
        },
        RMT: {
          title: 'Remote Access',
          icon: 'RM',
          text:
            'Enable faster troubleshooting through secure remote sessions and step-by-step guidance for on-site teams.',
          bullets: [
            'Guided troubleshooting for common issues',
            'Remote checks to reduce downtime',
            'Clear communication of next actions',
            'Faster turnaround for critical requests',
          ],
        },
        KB: {
          title: 'Knowledge Base',
          icon: 'KB',
          text:
            'Centralize repeatable fixes, SOP-aligned steps, and training references to improve consistency across teams.',
          bullets: [
            'Searchable articles for recurring scenarios',
            'Standardized workflows for common tasks',
            'Training references for new operators',
            'Continuous improvement through updates',
          ],
        },
        SLA: {
          title: 'SLA Coverage',
          icon: 'SLA',
          text:
            'Align response, resolution, and reporting with service expectations so stakeholders know what to expect and when.',
          bullets: [
            'Defined response windows by priority',
            'Clear status updates during resolution',
            'Service summaries for internal tracking',
            'Escalation paths for urgent cases',
          ],
        },
        LIVE: {
          title: 'Live Updates',
          icon: 'UP',
          text:
            'Keep teams informed with timely updates, progress visibility, and documented outcomes throughout the support lifecycle.',
          bullets: [
            'Status visibility for all open requests',
            'Progress checkpoints and action items',
            'Resolution confirmation and follow-up steps',
            'Clear closure notes for future reference',
          ],
        },
      },
      featureGroups: {
        left: [
          { label: 'Ticketing', code: 'TKT', active: true },
          { label: 'Remote Access', code: 'RMT' },
          { label: 'Knowledge Base', code: 'KB' },
        ],
        right: [
          { label: 'SLA Coverage', code: 'SLA' },
          { label: 'Live Updates', code: 'LIVE' },
        ],
      },
      activeFeature: {
        title: 'Ticketing',
        icon: 'CS',
        text:
          'Track requests end-to-end with timestamps, ownership, and resolution notes so teams can coordinate support work across shifts and locations.',
        bullets: [
          'Priority queues and assignment visibility',
          'Remote diagnostics with guided steps',
          'Resolution notes and searchable history',
          'Auto-generated service summaries',
        ],
      },
      architectureImage: softwareArchitectureImage,
      architectureAlt: 'Software architecture diagram',
    },
  ],
}

export const contactContent = {
  heroImage: createPlaceholderImage({
    title: 'CONTACT',
    subtitle: 'Global Support',
    palette: 'mist',
    width: 1200,
    height: 850,
  }),
  locations: [
    {
      title: 'Head Office',
      text: 'FF24, Sarjanam Resicom, Opposite to Shreeji Villa 1, Khodiyar nagar, New VIP road, Vadodara, Pin: 390019.',
    },
    {
      title: 'Manufacturing',
      text: 'A/168/1, Sardar Estate, Opposite Gopi Wafers, Road no: 05, Ajwa Road, Vadodara-390019.',
    },
    {
      title: 'Contact Info',
      text: 'Phone: +91 8830561339, +91 8141986167. Email: info@indoclimatecare.com, service@indoclimatecare.com, sales@indoclimatecare.com.',
    },
  ],
  mapImage: createPlaceholderImage({
    title: 'FACILITY',
    subtitle: 'Mumbai and Umbargaon',
    palette: 'green',
    width: 1500,
    height: 820,
  }),
}
