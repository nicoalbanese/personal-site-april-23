import { Project } from "@/types/project";
export const projectsData: Project[] = [
  {
    id: 0,
    title: "Kirimase",
    description:
      "Rails-like CLI to quickly generate resources (models, controllers, views, etc.) for your Nextjs application. Quick commands to initialize Drizzle, TRPC, and NextAuth.",
    links: {
      github: "https://github.com/nicoalbanese/kirimase",
      loom: "https://www.loom.com/share/Build-Full-Stack-Nextjs-Apps-Faster-with-Kirimase-cb329939c83b4c9eb6a56abfd2638bd4?sid=18d970c9-83a3-4b22-9301-ca5ebd8fa741",
      article: "https://twitter.com/nicoalbanese10/status/1700901382444749001",
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
  {
    title: "Ascension Website",
    description:
      "Nextjs app that dynamically pulls data from our portfolio management system on Airtable saving hours of manual data entry.",
    id: 4,
    links: {
      github: "https://github.com/nicoalbanese/ascension-site-rebrand",
      loom: "https://twitter.com/nicoalbanese10/status/1385157904731361280",
    },
  },
  {
    title: "Debut Sessions",
    description:
      "During COVID, launched a live interactive pitch competition powered by the community with Kieran Hill.",
    id: 5,
    links: {
      loom: "https://www.youtube.com/channel/UCqpYTWbwTmvIMQoUAMZ39Mg/videos",
      github: "https://debutsessions.co.uk",
    },
  },
  {
    title: "Portfolio Management System",
    description:
      "Open Source Airtable Base for tracking VC investments and communicating with LPs.",
    id: 6,
    links: {
      loom: "https://www.youtube.com/watch?v=Is60Iji0tZw&",
      github:
        "https://www.airtable.com/universe/expoadDDTsK4qWIzz/vc-portfolio-database-template",
      article: "/writing/managing-vc-portfolio-airtable",
    },
  },
];
