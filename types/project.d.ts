export interface Project {
  title: string;
  description: string;
  coverImage?: string;
  links: {
    github?: string;
    article?: string;
    twitter?: string;
    loom?: string;
  };
  technology?: string[];
  id: number;
}
