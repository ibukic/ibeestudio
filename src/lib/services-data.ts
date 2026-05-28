export interface ServiceData {
  slug: string;
  number: string;
  iconName: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "web-design",
    number: "01",
    iconName: "Code2",
    title: "Website Development",
    shortDescription:
      "Custom, high-performance websites built to convert. Clean code, fast load times, and design that works.",
    longDescription:
      "Your website is often the first and most important touchpoint with potential clients. We design and build custom websites that combine premium aesthetics with solid technical foundations — fast load times, mobile-first design, and clean code that search engines love.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-first, fully responsive layout",
      "SEO-ready architecture from day one",
      "Fast Core Web Vitals performance",
      "CMS integration if needed",
      "Ongoing maintenance available",
    ],
    metaTitle: "Website Development | ibee studio",
    metaDescription:
      "Premium custom websites built for performance and conversion. ibee studio delivers fast, modern, SEO-ready websites for businesses.",
  },
  {
    slug: "seo-optimization",
    number: "02",
    iconName: "Search",
    title: "SEO Optimization",
    shortDescription:
      "Organic visibility that compounds over time. Technical SEO, on-page strategy, and performance tuning.",
    longDescription:
      "Search engine optimization that actually works starts with technical fundamentals — fast load times, clean markup, proper indexing — and grows through consistent on-page work and strategic content planning. We take a methodical, long-term approach to SEO.",
    features: [
      "Technical SEO audit and fixes",
      "On-page content optimization",
      "Core Web Vitals improvement",
      "Keyword research and strategy",
      "Content structure optimization",
      "Monthly performance reporting",
    ],
    metaTitle: "SEO Optimization Services | ibee studio",
    metaDescription:
      "Technical SEO, on-page optimization and performance tuning that builds lasting organic visibility. ibee studio SEO services for businesses.",
  },
  {
    slug: "ai-integrations",
    number: "03",
    iconName: "Brain",
    title: "AI Integrations",
    shortDescription:
      "Smart AI tools embedded directly into your workflows — from customer service to internal operations.",
    longDescription:
      "AI is a practical tool that can genuinely improve how your business operates. We identify the right opportunities and implement AI solutions that fit your existing workflows — whether that's automating customer interactions, streamlining content creation, or building intelligent internal tools.",
    features: [
      "AI chatbots and customer service automation",
      "Workflow AI integration",
      "Document and data processing with AI",
      "Custom AI tool development",
      "OpenAI, Anthropic and other AI APIs",
      "Team training and handover included",
    ],
    metaTitle: "AI Integration for Business | ibee studio",
    metaDescription:
      "Smart AI tools integrated directly into your business workflows. ibee studio AI integration services for small and medium businesses.",
  },
  {
    slug: "business-automation",
    number: "04",
    iconName: "Zap",
    title: "Business Automation",
    shortDescription:
      "Eliminate repetitive, time-consuming tasks with reliable automations built on modern platforms.",
    longDescription:
      "Every repetitive task in your business is an opportunity for automation. We map out your workflows, identify the friction points, and build reliable automated systems — so your team spends time on work that actually requires human judgment.",
    features: [
      "Workflow mapping and analysis",
      "No-code and custom automation",
      "Multi-system integrations",
      "Email and notification automation",
      "Reporting and data pipelines",
      "Make, Zapier, n8n and custom solutions",
    ],
    metaTitle: "Business Process Automation | ibee studio",
    metaDescription:
      "Automate repetitive business tasks and save hours every week. ibee studio business process automation services for SMBs.",
  },
  {
    slug: "it-consulting",
    number: "05",
    iconName: "Lightbulb",
    title: "IT Consulting",
    shortDescription:
      "Strategic technology guidance aligned with your goals. No jargon — just clear, actionable direction.",
    longDescription:
      "Technology decisions are business decisions. We help you navigate the landscape — evaluating tools, vendors, and architectures — without the conflicts of interest that come with large consultancies. You get honest, direct advice aligned with your actual goals and budget.",
    features: [
      "Technology stack assessment",
      "Vendor selection and evaluation",
      "IT roadmap planning",
      "Security and compliance review",
      "Cost optimization analysis",
      "Remote and on-site support available",
    ],
    metaTitle: "IT Consulting for Business | ibee studio",
    metaDescription:
      "Strategic IT consulting that helps businesses make smart technology decisions. Clear guidance, no jargon. ibee studio IT consulting.",
  },
  {
    slug: "digital-transformation",
    number: "06",
    iconName: "RefreshCw",
    title: "Digital Transformation",
    shortDescription:
      "End-to-end guidance through your digital evolution — from initial strategy to full implementation.",
    longDescription:
      "Digital transformation isn't about adopting the latest tools — it's about rethinking how your business operates in a connected world. We guide you through the full journey: identifying what needs to change, building the right solutions, and managing the transition so your team actually embraces it.",
    features: [
      "Current state assessment",
      "Digital strategy development",
      "Process redesign and optimization",
      "Technology implementation",
      "Change management support",
      "Post-transformation monitoring",
    ],
    metaTitle: "Digital Transformation Services | ibee studio",
    metaDescription:
      "End-to-end digital transformation for SMBs — from strategy to implementation. ibee studio digital transformation consulting.",
  },
  {
    slug: "custom-tools",
    number: "07",
    iconName: "Wrench",
    title: "Custom Business Tools",
    shortDescription:
      "Internal tools built specifically for how your business actually works. Not generic. Not off-the-shelf.",
    longDescription:
      "When existing software doesn't quite fit your workflows, the right solution is a custom tool built exactly for how your team works. We build lean, maintainable internal tools — dashboards, CRMs, calculators, reporting systems — that do exactly what you need and nothing more.",
    features: [
      "Custom admin dashboards",
      "Internal CRM and tracking tools",
      "Reporting and analytics systems",
      "Client-facing portals",
      "Database and API integrations",
      "Long-term maintenance support",
    ],
    metaTitle: "Custom Business Tools & Software | ibee studio",
    metaDescription:
      "Custom internal tools and software built specifically for your business workflows. ibee studio custom development services.",
  },
  {
    slug: "ai-cloud-automation",
    number: "08",
    iconName: "CloudCog",
    title: "AI & Cloud Automation",
    shortDescription:
      "Intelligent automation powered by modern cloud technology — scalable, fast, and remarkably effective.",
    longDescription:
      "Combining AI capabilities with cloud infrastructure creates automation systems that scale with your business. We build these systems from scratch — from data ingestion and processing to intelligent decision-making — using modern cloud platforms designed for reliability and cost efficiency.",
    features: [
      "Cloud workflow automation",
      "AI-powered data processing",
      "Serverless function architecture",
      "Scheduled and event-driven automation",
      "Cloud infrastructure setup",
      "AWS, GCP, Azure and more",
    ],
    metaTitle: "AI & Cloud Automation | ibee studio",
    metaDescription:
      "Intelligent automation powered by modern cloud technology. Scalable, reliable, effective. ibee studio AI and cloud automation.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
