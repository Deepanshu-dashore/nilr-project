export interface UnitFeature {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  category?: string;
  badge?: string;
}

export interface UnitStat {
  value: string;
  label: string;
  detail?: string;
}

export interface SpecializedUnitData {
  id: string;
  title: string;
  shortTitle: string;
  ctaTitle?: string;
  tag: string;
  tagline: string;
  heroDescription: string;
  heroImage: string;
  affiliation?: string;
  stats: UnitStat[];
  overview: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    keyPoints: string[];
  };
  features: UnitFeature[];
  eligibilityOrProcess?: {
    title: string;
    description: string;
    items: string[];
  };
  benefits: {
    title: string;
    items: { title: string; desc: string; iconName?: string }[];
  };
  contactInfo: {
    email: string;
    phone: string;
    location: string;
  };
}

export const specializedUnitsData: Record<string, SpecializedUnitData> = {
  acbc: {
    id: "acbc",
    title: "Agri-Clinics & Agri-Business Centres (AC&ABC)",
    shortTitle: "AC&ABC (Agri-Clinics & Agri-Business Centres)",
    ctaTitle: "Ready to Connect with the AC&ABC Nodal Training Cell?",
    tag: "MANAGE AUTHORIZED NODAL TRAINING INSTITUTE",
    tagline: "Empowering Agri-Graduates to Become Self-Reliant Agripreneurs & Rural Extension Leaders",
    heroDescription:
      "NLRI Ratlam is an officially designated Nodal Training Institute (NTI) under the AC&ABC scheme by MANAGE Hyderabad (Ministry of Agriculture & Farmers Welfare, Govt. of India). We deliver 45 days of residential training and financial linkage mentorship for establishing viable agri-ventures.",
    heroImage: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1600&q=80",
    affiliation: "Implemented by MANAGE Hyderabad | Supported by Ministry of Agriculture & Farmers Welfare & NABARD",
    stats: [
      { value: "45 Days", label: "Residential Training", detail: "Comprehensive hands-on curriculum" },
      { value: "MANAGE", label: "Official NTI Partner", detail: "National Institute of Extension Mgt." },
      { value: "100%", label: "Bank Loan Guidance", detail: "NABARD credit & subsidy linkage" },
      { value: "1,200+", label: "Entrepreneurs Mentored", detail: "Across MP and Central India" },
    ],
    overview: {
      title: "Pioneering Agri-Entrepreneurship in Central India",
      paragraph1:
        "The Agri-Clinics & Agri-Business Centres (AC&ABC) scheme was launched by the Ministry of Agriculture & Farmers Welfare, Government of India, in association with MANAGE Hyderabad and NABARD. It aims to supplement public extension services while generating sustainable self-employment opportunities for agriculture graduates.",
      paragraph2:
        "As a recognized Nodal Training Institute (NTI), NLRI Ratlam provides 45 days of intensive residential training covering market identification, business plan formulation, managerial skills, banking norms, and field exposures. Graduates gain eligibility to access bank loans with attractive NABARD subsidy components.",
      keyPoints: [
        "Government-backed 45-day residential training with free boarding & lodging facilities",
        "Comprehensive guidance on project report preparation and bank loan approvals",
        "Up to 36% to 44% capital subsidy under NABARD norms for eligible categories",
        "Expert mentorship from agri-business leaders, extension specialists, and bankers",
      ],
    },
    features: [
      {
        title: "Agri-Clinics & Diagnostic Services",
        subtitle: "Soil Testing, Pest Care & Advisory",
        description:
          "Training agripreneurs to establish soil health laboratories, crop disease diagnostic centers, and integrated pest management advisory hubs directly serving farming clusters.",
        highlights: [
          "Soil & water testing lab setup guidelines",
          "Digital farm advisory and crop health monitoring",
          "Customized fertilizer & micro-nutrient prescription",
        ],
        image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80",
        category: "Clinical Services",
        badge: "Technical Hub",
      },
      {
        title: "Agri-Business Supply Chain & Inputs",
        subtitle: "Quality Seeds, Fertilizers & Implements",
        description:
          "Equipping trainees to set up quality seed distribution centers, organic input production units, farm machinery custom hiring centers, and bio-pesticide supply chains.",
        highlights: [
          "Custom Hiring Centres (CHC) for modern implements",
          "Bio-fertilizer and vermicompost production units",
          "Certified seed and nursery management distribution",
        ],
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
        category: "Commercial Ventures",
        badge: "Market Enterprise",
      },
      {
        title: "Post-Harvest & Value Addition",
        subtitle: "Storage, Processing & Market Linkage",
        description:
          "Specialized modules on primary processing, solar drying, grading, cold chain management, and connecting local farmer producer organizations (FPOs) to national markets.",
        highlights: [
          "Grain cleaning, grading & packaging units",
          "Farmer Producer Company (FPC) incubation",
          "Direct B2B and e-NAM market access strategies",
        ],
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
        category: "Value Chain",
        badge: "Agri-Logistics",
      },
    ],
    eligibilityOrProcess: {
      title: "Eligibility & Enrollment Criteria",
      description:
        "The AC&ABC scheme is open to passionate individuals with qualifications in agriculture and allied sectors seeking to launch their own agri-venture.",
      items: [
        "Graduates / Post Graduates in Agriculture and Allied Sciences (Horticulture, Dairy, Veterinary, Forestry, Sericulture, Agri-Engineering, etc.)",
        "Diploma holders in Agriculture / Allied subjects (minimum 50% marks) or Post-Graduate Diploma holders",
        "Biological Science graduates with Post Graduation in Agriculture-related subjects",
        "Minimum Age: 18 Years | Open to candidates from across Madhya Pradesh & neighboring states",
      ],
    },
    benefits: {
      title: "Why Choose AC&ABC Training at NLRI Ratlam?",
      items: [
        {
          title: "MANAGE Certification",
          desc: "Receive an official certificate issued by MANAGE Hyderabad upon successful completion of 45-day training.",
        },
        {
          title: "NABARD Subsidy Linkage",
          desc: "Assistance in securing bank credit up to ₹20 Lakhs (individual) or ₹1 Crore (group of 5) with NABARD subsidy.",
        },
        {
          title: "Residential Campus",
          desc: "Full boarding, library access, IT lab, and hands-on demonstration plots on our 10+ hectare Ratlam campus.",
        },
        {
          title: "Lifetime Mentorship Network",
          desc: "Ongoing business incubation support, regulatory compliance guidance, and alumni networking.",
        },
      ],
    },
    contactInfo: {
      email: "acbc@nlri.edu.in",
      phone: "+91 94251 00000",
      location: "AC&ABC Nodal Cell, NLRI Campus, Bhadwasa, Ratlam (M.P.)",
    },
  },

  smu: {
    id: "smu",
    title: "Seed Manufacturing & Multiplication Unit (SMU)",
    shortTitle: "SMU (Seed Manufacturing Unit)",
    ctaTitle: "Ready to Connect with the Seed Manufacturing Unit?",
    tag: "QUALITY SEED & PRODUCTION CELL",
    tagline: "Enhancing Agricultural Yield Through Superior Certified Seeds & Sustainable Seed Systems",
    heroDescription:
      "The Seed Manufacturing & Multiplication Unit (SMU) at NLRI Ratlam produces and distributes over 4,500 quintals of high-yield certified soybean and crop seeds annually, supporting thousands of small and marginal farmers across Madhya Pradesh.",
    heroImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80",
    affiliation: "Supported by Gramin Vikas Trust (GVT) & MP State Seed Certification Agency",
    stats: [
      { value: "4,500+", label: "Quintals Produced Annually", detail: "Certified soybean & cereal seeds" },
      { value: "10+ Ha", label: "Demonstration Plots", detail: "Advanced seed breeder fields" },
      { value: "15,000+", label: "Farmers Benefited", detail: "Yield improvements up to 25%" },
      { value: "100%", label: "Lab Quality Verified", detail: "Germination & purity tested" },
    ],
    overview: {
      title: "Powering Seed Sovereignty & High Crop Productivity",
      paragraph1:
        "Quality seed is the foundation of profitable agriculture. The Seed Manufacturing Unit (SMU) was established at NLRI Ratlam to address the regional shortage of high-germination, disease-resistant certified seeds suited for the agro-climatic conditions of Malwa and Central India.",
      paragraph2:
        "Operating on over 10 hectares of dedicated seed multiplication plots, SMU engages in seed breeder selection, foundation seed multiplication, rigorous rogueing, seed processing, treatment, and certified distribution to farmers and FPOs.",
      keyPoints: [
        "Annual seed production and distribution exceeding 4,500 quintals of certified soybean and wheat varieties",
        "State-of-the-art seed processing plant featuring air-screen cleaners, gravity separators, and seed treaters",
        "Hands-on seed production training modules for rural youth, farmer groups, and seed enterprise managers",
        "Integrated organic farming cell and bio-seed priming techniques for sustainable soil vitality",
      ],
    },
    features: [
      {
        title: "Seed Multiplication & Breeder Plots",
        subtitle: "High-Yield Variety Cultivation",
        description:
          "Scientific cultivation of foundation seed under expert agronomic supervision, maintaining isolation distance, genetic purity, and stringent field inspection.",
        highlights: [
          "Foundation & certified soybean seed varieties (JS 9560, JS 2034, etc.)",
          "Field inspections by Seed Certification Officers",
          "Breeder seed sourcing from ICAR & State Agri Universities",
        ],
        image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
        category: "Agronomy & Production",
        badge: "Breeder Standard",
      },
      {
        title: "Modern Seed Processing & Packaging",
        subtitle: "Grading, Cleaning & Quality Testing",
        description:
          "Advanced seed processing facility equipped with grading machinery, seed moisture testing, germination testing laboratory, and protective seed treatment.",
        highlights: [
          "Automated air-screen seed cleaning & grading",
          "Certified seed lab testing for 98%+ physical purity",
          "Moisture-proof tamper-evident packaging & tagging",
        ],
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
        category: "Processing Facility",
        badge: "Quality Assured",
      },
      {
        title: "Farmer Seed Village Movement",
        subtitle: "Community Seed Banks & Distribution",
        description:
          "Organizing decentralized Seed Village programs where trained progressive farmers produce certified seeds locally, ensuring affordability and seed security.",
        highlights: [
          "Community seed bank setup & management",
          "Fair-price direct seed distribution to SHGs & FPOs",
          "Technological guidance on seed treatment & storage",
        ],
        image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80",
        category: "Community Outreach",
        badge: "Seed Bank",
      },
    ],
    eligibilityOrProcess: {
      title: "SMU Services & Farmer Support",
      description:
        "Farmers, seed producers, and rural institutions can access a wide spectrum of specialized seed services at SMU NLRI Ratlam.",
      items: [
        "Procurement of Certified Soybean, Wheat, and Gram seeds at government-subsidized rates",
        "Custom seed processing, cleaning, grading, and chemical/bio-treatment for local growers",
        "Short-term Certificate Training in Seed Production, Processing and Marketing Management",
        "Soil and Seed Quality Testing Services at nominal diagnostic charges",
      ],
    },
    benefits: {
      title: "Key Highlights of SMU NLRI Ratlam",
      items: [
        {
          title: "Certified Yield Boost",
          desc: "Using SMU certified seeds delivers 15–25% higher productivity compared to uncertified farm-saved seeds.",
        },
        {
          title: "Drought & Disease Tolerance",
          desc: "Selection of climate-resilient varieties tailored for Central India's rainfall patterns.",
        },
        {
          title: "Seed Processing Plant",
          desc: "Industrial-grade cleaning machinery accessible to local farmers and producer cooperatives.",
        },
        {
          title: "Integrated Training",
          desc: "Practical field training for agriculture students, extension agents, and rural entrepreneurs.",
        },
      ],
    },
    contactInfo: {
      email: "smu@nlri.edu.in",
      phone: "+91 94251 00001",
      location: "Seed Manufacturing Unit, NLRI Campus, Ratlam (M.P.)",
    },
  },

  "mission-happy-ratlam": {
    id: "mission-happy-ratlam",
    title: "Mission Happy Ratlam",
    shortTitle: "Mission Happy Ratlam",
    ctaTitle: "Ready to Support & Partner with Mission Happy Ratlam?",
    tag: "GRAMIN VIKAS TRUST (GVT) & KRIBHCO INITIATIVE",
    tagline: "Building Resilient, Empowered & Happy Rural Communities Through Integrated Livelihood Models",
    heroDescription:
      "Mission Happy Ratlam is the flagship rural transformation campaign spearheaded by Gramin Vikas Trust (GVT) — established by KRIBHCO — and administered from NLRI Ratlam. It integrates water security, women empowerment, sustainable farming, health, and smart education.",
    heroImage: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1600&q=80",
    affiliation: "Pioneered by Gramin Vikas Trust (GVT - Established by KRIBHCO) | Executed by NLRI Ratlam",
    stats: [
      { value: "50+", label: "Model Happy Villages", detail: "Across Ratlam & Malwa Region" },
      { value: "12,000+", label: "Women Empowered", detail: "Through 950+ Active SHGs" },
      { value: "150+", label: "Water Structures", detail: "Check dams & farm ponds" },
      { value: "35,000+", label: "Lives Transformed", detail: "Direct rural impact" },
    ],
    overview: {
      title: "Creating Self-Sustaining, Prosperous & Happy Villages in Central India",
      paragraph1:
        "Mission Happy Ratlam is the flagship rural transformation campaign spearheaded by Gramin Vikas Trust (GVT) — an organization established in 1999 by KRIBHCO (Krishak Bharati Cooperative Limited) — and headquartered at the National Livelihood Resource Institute (NLRI) in Bhadwasa, Ratlam.",
      paragraph2:
        "The mission adopts a holistic 360-degree village development framework targeting 5 core dimensions: watershed water security, women empowerment SHGs, sustainable natural farming, community health & sanitation, and smart education. By establishing active Village Development Committees (VDCs), the mission ensures long-term community ownership.",
      keyPoints: [
        "Government & CSR partnership model backed by KRIBHCO and local district administration",
        "Community-first participatory planning through Village Development Committees (VDCs)",
        "Full integration with NLRI Ratlam campus demonstration plots and field research labs",
        "Long-term sustainability framework ensuring villages self-manage projects after 36 months",
      ],
    },
    features: [
      {
        title: "Watershed Management & Water Security",
        subtitle: "Check Dams, Rainwater & RO Kiosks",
        description:
          "Building year-round water resilience across drought-prone Ratlam farming clusters through check dams, solar pumping, groundwater recharge, and village RO drinking kiosks.",
        highlights: [
          "Constructed 150+ check dams & farm ponds",
          "Irrigating 3,500+ hectares of cropland",
          "25 RO clean drinking water kiosks installed",
        ],
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
        category: "Water & Environment",
        badge: "Environmental Security",
      },
      {
        title: "Women Empowerment & SHG Enterprises",
        subtitle: "Micro-Credit & Rural Leadership",
        description:
          "Mobilizing rural women into Self-Help Groups (SHGs) and guiding micro-enterprise ventures in dairy, food processing, organic bio-inputs, and handloom stitching.",
        highlights: [
          "950+ active Self-Help Groups with bank linkages",
          "₹4.5 Crore+ cumulative credit linkage",
          "12,000+ women achieving financial independence",
        ],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        category: "Social Inclusion",
        badge: "Women Leadership",
      },
      {
        title: "Sustainable Farming & Seed Banks",
        subtitle: "Organic Inputs & Crop Resilience",
        description:
          "Promoting natural farming, vermicomposting, certified seed multiplication, high-density orchards (WADI model), and bio-pesticide production.",
        highlights: [
          "5,000+ farmers trained in bio-fertilizers",
          "200+ organic farming demonstration plots",
          "Seed bank support linked with NLRI Ratlam plots",
        ],
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
        category: "Sustainable Agriculture",
        badge: "Natural Farming",
      },
    ],
    eligibilityOrProcess: {
      title: "5-Phase Model Village Transformation Roadmap",
      description:
        "Mission Happy Ratlam implements a structured 36-month methodology taking a village from initial appraisal to full self-reliance.",
      items: [
        "Phase 01: Participatory Rural Appraisal (PRA) & household baseline mapping with community members",
        "Phase 02: Infrastructure & Water Security (Constructing check dams, farm ponds & solar RO kiosks)",
        "Phase 03: Women SHG Mobilization & Micro-Enterprise Credit Linkages with regional banks",
        "Phase 04: Health Camps, Sanitation Drives & Upgrading Primary Schools to Smart Classrooms",
        "Phase 05: Project Handover to Self-Sustaining Village Development Committees (VDCs)",
      ],
    },
    benefits: {
      title: "Key Impact Factors & Institutional Advantages",
      items: [
        {
          title: "KRIBHCO & GVT Heritage",
          desc: "Backed by national-level cooperative leadership and 25+ years of rural development expertise.",
        },
        {
          title: "NLRI Ratlam Campus Hub",
          desc: "Direct research, capacity building, and technical supervision from our Bhadwasa Ratlam campus.",
        },
        {
          title: "Reduced Distress Migration",
          desc: "Local employment avenues and double-cropping have reduced seasonal migration by over 40%.",
        },
        {
          title: "Women Financial Autonomy",
          desc: "Over 12,000 women manage their own micro-banks and rural enterprise collectives.",
        },
      ],
    },
    contactInfo: {
      email: "happyratlam@nlri.edu.in",
      phone: "+91 94251 00002",
      location: "Mission Happy Ratlam Secretariat, NLRI Campus, Bhadwasa, Ratlam (M.P.)",
    },
  },
};
