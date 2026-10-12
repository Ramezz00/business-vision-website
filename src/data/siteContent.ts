export interface PublicProduct {
  slug: string
  name: string
  categoryLabel: string
  summary: string
  businessOutcome: string
  businessProblem: string
  capabilities: string[]
  idealFor: string[]
  proofBoundary: string
  integrationContext: string
  governanceNote: string
}

export interface IndustryInsight {
  headline: string
  typicalChallenges: string[]
  relevantCapabilities: string[]
  exampleNamedCustomers: string[]
  exampleAnonymousUseCases: string[]
}

export interface IndustryPageModel {
  slug: string
  name: string
  insightBlock?: IndustryInsight
}

const publicProducts: PublicProduct[] = [
  {
    slug: 'finsight',
    name: 'FinSight',
    categoryLabel: 'Finance Intelligence',
    summary:
      'Finance intelligence for anomaly visibility, variance understanding, benchmark context, and executive-ready decision support.',
    businessOutcome: 'Faster, clearer financial decisions backed by explainable analytics.',
    businessProblem:
      'Finance teams spend more time reconciling numbers than understanding them, which delays decisions and hides anomalies.',
    capabilities: ['AI-powered analytics', 'Financial reporting', 'Anomaly detection', 'Variance analysis'],
    idealFor: ['CFO', 'Finance Teams', 'Financial Analysts'],
    proofBoundary:
      'Scope is defined per engagement around the finance decisions to improve, the data available today, and the reporting cadence required.',
    integrationContext:
      'Connects to ERP, finance, and planning systems so analysis runs on governed, reconciled data.',
    governanceNote: 'Role-based access, audit trails, and review checkpoints are agreed before rollout.',
  },
  {
    slug: 'findisclosure',
    name: 'FinDisclosure',
    categoryLabel: 'Disclosure & Reporting',
    summary:
      'Controlled disclosure and reporting support for cleaner governance, review readiness, and defensible financial reporting cycles.',
    businessOutcome: 'Shorter reporting cycles with a clear, defensible review trail.',
    businessProblem:
      'Disclosure and reporting cycles rely on manual hand-offs, which makes reviews slow and evidence hard to defend.',
    capabilities: ['Financial reporting', 'Workflow automation', 'Compliance management', 'Review and approval trails'],
    idealFor: ['Reporting Teams', 'Compliance'],
    proofBoundary:
      'Scope is defined per engagement around the reporting obligations, review owners, and governance level required.',
    integrationContext: 'Fits alongside existing finance, document, and approval systems used in the reporting cycle.',
    governanceNote: 'Every change and approval is recorded to support internal and external review.',
  },
  {
    slug: 'eagle-eye',
    name: 'Eagle Eye',
    categoryLabel: 'Monitoring & Alerts',
    summary:
      'Real-time monitoring and alerting that gives executives a single view of operational and performance signals.',
    businessOutcome: 'Earlier awareness of issues and a shared, current view of performance.',
    businessProblem:
      'Leaders learn about operational and performance issues too late because signals are spread across systems.',
    capabilities: ['Real-time monitoring', 'Alerts & notifications', 'AI-powered analytics', 'Executive dashboards'],
    idealFor: ['Executives', 'COOs', 'Strategy & Performance Teams'],
    proofBoundary:
      'Scope is defined per engagement around the signals to monitor, alert thresholds, and decision owners.',
    integrationContext: 'Draws on operational and business systems through governed integrations.',
    governanceNote: 'Alert rules, ownership, and escalation paths are agreed with the business before go-live.',
  },
]

const industryPages: IndustryPageModel[] = [
  {
    slug: 'banking',
    name: 'Banking & Financial Services',
    insightBlock: {
      headline: 'Regulatory-grade data and AI for reporting, risk, and fraud detection.',
      typicalChallenges: ['Regulatory compliance and reporting pressure', 'Fragmented risk data', 'Fraud detection at scale'],
      relevantCapabilities: ['Financial reporting', 'Risk analytics', 'Fraud detection', 'Data governance', 'Business intelligence', 'Integration services'],
      exampleNamedCustomers: [],
      exampleAnonymousUseCases: [],
    },
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    insightBlock: {
      headline: 'Trusted patient and operational data for better care and performance reporting.',
      typicalChallenges: ['Patient data spread across systems', 'Compliance requirements', 'Operational efficiency'],
      relevantCapabilities: ['Patient data management', 'Performance reporting', 'Data governance', 'Business intelligence', 'Integration services', 'AI-assisted forecasting'],
      exampleNamedCustomers: [],
      exampleAnonymousUseCases: [],
    },
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    insightBlock: {
      headline: 'Production and supply chain visibility that supports quality and efficiency.',
      typicalChallenges: ['Limited production visibility', 'Supply chain disruption', 'Quality control'],
      relevantCapabilities: ['Operational dashboards', 'Supply chain analytics', 'Predictive quality', 'Data management', 'Integration services', 'Enterprise software'],
      exampleNamedCustomers: [],
      exampleAnonymousUseCases: [],
    },
  },
  {
    slug: 'retail',
    name: 'Retail & E-Commerce',
    insightBlock: {
      headline: 'Customer, sales, and inventory insight across every channel.',
      typicalChallenges: ['Understanding customer behavior', 'Sales forecasting accuracy', 'Inventory optimization'],
      relevantCapabilities: ['Customer analytics', 'Demand forecasting', 'Inventory optimization', 'Business intelligence', 'Integration services', 'Enterprise AI'],
      exampleNamedCustomers: [],
      exampleAnonymousUseCases: [],
    },
  },
  {
    slug: 'government',
    name: 'Government & Public Sector',
    insightBlock: {
      headline: 'Digital transformation with governed data and transparent performance.',
      typicalChallenges: ['Digital transformation at scale', 'Data governance', 'Performance transparency'],
      relevantCapabilities: ['Data governance', 'Performance dashboards', 'Citizen service analytics', 'Integration services', 'Enterprise software', 'Digital transformation'],
      exampleNamedCustomers: [],
      exampleAnonymousUseCases: [],
    },
  },
  {
    slug: 'energy',
    name: 'Energy & Utilities',
    insightBlock: {
      headline: 'Asset monitoring and performance optimization for energy operations.',
      typicalChallenges: ['Asset monitoring', 'Regulatory reporting', 'Energy management'],
      relevantCapabilities: ['Asset analytics', 'Regulatory reporting', 'Performance optimization', 'Data management', 'Integration services', 'Business intelligence'],
      exampleNamedCustomers: [],
      exampleAnonymousUseCases: [],
    },
  },
  {
    slug: 'telecom',
    name: 'Telecommunication',
    insightBlock: {
      headline: 'Network and customer insight that improves service quality.',
      typicalChallenges: ['Network performance', 'Customer experience', 'Fault prediction'],
      relevantCapabilities: ['Service monitoring', 'Customer analytics', 'Predictive maintenance', 'Data management', 'Integration services', 'Enterprise AI'],
      exampleNamedCustomers: [],
      exampleAnonymousUseCases: [],
    },
  },
  {
    slug: 'education',
    name: 'Education',
    insightBlock: {
      headline: 'Institutional reporting and learning analytics for better outcomes.',
      typicalChallenges: ['Student performance visibility', 'Resource management', 'Institutional reporting'],
      relevantCapabilities: ['Learning analytics', 'Institutional reporting', 'Resource planning', 'Data management', 'Integration services', 'Digital transformation'],
      exampleNamedCustomers: [],
      exampleAnonymousUseCases: [],
    },
  },
  {
    slug: 'food-and-beverage',
    name: 'Food and Beverage',
    insightBlock: {
      headline: 'Smart inventory and demand planning across the supply chain.',
      typicalChallenges: ['Inventory waste', 'Demand forecasting', 'Quality assurance'],
      relevantCapabilities: ['Demand forecasting', 'Inventory optimization', 'Supply optimization', 'Quality analytics', 'Integration services', 'Business intelligence'],
      exampleNamedCustomers: [],
      exampleAnonymousUseCases: [],
    },
  },
]

export const getPublicProducts = () => publicProducts

export const getPublicProductBySlug = (slug: string) => publicProducts.find((p) => p.slug === slug)


export const getIndustryPageModels = () => industryPages
