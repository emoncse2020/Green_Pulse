import {
  Lightbulb,
  ShieldCheck,
  Sprout,
  Workflow,
  Users,
  Shield,
  BarChart3,
  Lock,
  UserPlus,
  Globe,
  TrendingUp,
  Leaf,
  Recycle,
  Droplets,
  Sun,
  Wheat,
} from "lucide-react";

export const howItWorksData = [
  {
    step: "01",
    title: "Plant the idea",
    desc: "Submit a clear problem, solution, and impact plan. Add images so the community can see the vision.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Let it grow",
    desc: "Members vote, comment, and help refine the proposal. Moderators review for real-world viability.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Make it real",
    desc: "Approved ideas can be funded, followed, and tracked as they move from concept to climate action.",
    icon: Sprout,
  },
];

export const coreFeaturesData = [
  {
    icon: Workflow,
    title: "From draft to launch",
    desc: "A simple review path: draft, community feedback, admin approval, then public impact.",
  },
  {
    icon: Users,
    title: "Community voting",
    desc: "The best climate ideas rise on merit — upvotes, comments, and transparent discussion.",
  },
  {
    icon: Shield,
    title: "Verified proposals",
    desc: "Every public idea is reviewed so supporters back work with a real ecological case.",
  },
  {
    icon: BarChart3,
    title: "Impact you can see",
    desc: "Track engagement, votes, and funding so progress is visible — not buried in a spreadsheet.",
  },
  {
    icon: Lock,
    title: "Secure by default",
    desc: "Authenticated sessions, role-based dashboards, and Stripe checkout for paid playbooks.",
  },
  {
    icon: Leaf,
    title: "Fund what matters",
    desc: "Free ideas stay open. Premium guides can be purchased so creators keep building.",
  },
];

export const testimonialsData = [
  {
    name: "Amira Rahman",
    role: "Climate researcher",
    text: "Green Pulse is the first place I send students who want their thesis ideas to become city pilots.",
    handle: "@amira.r",
  },
  {
    name: "Noah Bennett",
    role: "Community organizer",
    text: "We funded a compost network in six weeks. The voting and comments made the brief stronger than any workshop.",
    handle: "@noahbuilds",
  },
  {
    name: "Priya Nair",
    role: "Sustainability lead",
    text: "Clear categories, honest reviews, and a community that actually reads the problem statement.",
    handle: "@priyanair",
  },
  {
    name: "Luis Ortega",
    role: "City innovation officer",
    text: "We use approved ideas as a shortlist for municipal pilots. The verification step gives us confidence.",
    handle: "@luis.city",
  },
  {
    name: "Hannah Cole",
    role: "Green tech founder",
    text: "Our first hardware testers came from Green Pulse. People here show up with soil on their boots.",
    handle: "@hannahcole",
  },
  {
    name: "Kenji Sato",
    role: "Nonprofit director",
    text: "Reporting impact used to take a week. Now we point partners at the idea page and the numbers speak.",
    handle: "@ksato",
  },
];

export const pricingPlansData = [
  {
    name: "Starter",
    price: "Free",
    desc: "Explore the portal and publish your first ideas.",
    popular: false,
    features: ["Submit up to 3 ideas", "Community voting", "Browse all public ideas", "Standard support"],
  },
  {
    name: "Pro",
    price: "$15",
    desc: "For builders who ship more than one project a season.",
    popular: true,
    features: ["Unlimited idea submissions", "Priority review", "Advanced impact stats", "Creator messaging", "Priority email support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For cities, NGOs, and climate funds.",
    popular: false,
    features: ["Custom review workflows", "Dedicated partner manager", "API access", "Branded hub", "SLA & compliance"],
  },
];

export const impactStatsData = [
  { label: "Ideas published", value: 15, suffix: "+", icon: Lightbulb },
  { label: "Active members", value: 50, suffix: "k+", icon: UserPlus },
  { label: "CO₂ stories tracked", value: 85, suffix: "k", icon: Globe },
  { label: "Approval quality", value: 94, suffix: "%", icon: TrendingUp },
];

export const categoryHighlights = [
  { name: "Energy", href: "/ideas", icon: Sun, hint: "Solar, wind, storage" },
  { name: "Waste", href: "/ideas", icon: Recycle, hint: "Circular materials" },
  { name: "Water", href: "/ideas", icon: Droplets, hint: "Reuse & access" },
  { name: "Agriculture", href: "/ideas", icon: Wheat, hint: "Regenerative food" },
];
