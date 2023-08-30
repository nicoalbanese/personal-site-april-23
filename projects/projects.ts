import { Project } from "@/types/project";
export const projectsData: Project[] = [
  {
    id: 0,
    title: "Kirimase (WIP)",
    description:
      "Rails-like CLI to quickly generate resources (models, controllers, views, etc.) for your Nextjs + Drizzle application. Quick commands to initialize Drizzle, TRPC, and NextAuth.",
    links: {
      github: "https://github.com/nicoalbanese/kirimase",
      loom: "https://www.loom.com/share/d36211cd28b74917a78c315599f518b7?sid=53f75acd-7fbd-4eb8-82a0-d7514941d963",
    },
  },
  {
    title: "Dealflow OS - Open Source",
    description:
      "Deal Flow OS is an open-source(ish) deal flow management system. This system was built to cover the deal flow management requirements of Ascension, an early-stage VC fund.",
    id: 1,
    links: {
      github: "https://github.com/nicoalbanese/df-hub-opensource",
      loom: "https://www.loom.com/share/8e2852c9e6874e80a1642dc1fb385bea?sid=ead1955d-66e7-46ba-b455-78d3bbd0fb76",
      article: "/writing/dealflow-os",
    },
  },
  {
    title: "Pitch to PDF",
    description: "Chrome extension to download pitch.com presentations to PDF.",
    id: 2,
    links: {
      loom: "https://www.loom.com/share/30341bdd041a4834aa9c7c933cd59c6e",
      github: "https://github.com/nicoalbanese/pitch-presentation-to-pdf",
    },
  },
  {
    title: "BasExtend",
    description: "Chrome extension to quickly query Airtable Base.",
    id: 3,
    links: {
      github: "https://github.com/nicoalbanese/basextend-mvp",
      loom: "https://twitter.com/nicoalbanese10/status/1385157904731361280",
    },
  },
];
