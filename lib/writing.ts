import fs from "fs";

type Post = {
  title: string;
  path: string;
  slug: string;
  id: number;
  publishDate: string;
};

import POSTS from "./POSTS.json";
import moment from "moment";
import path from "path";

export const getAllMDPosts = () => {
  return POSTS as Post[];
};

export const getPostBySlug = (slug: string) => {
  const foundPost = POSTS.find((post) => post.slug === slug);
  const relativeDate = moment(foundPost?.publishDate as string, "DD/MM/YYYY").fromNow();
  const fullPath = path.join(process.cwd(), 'posts', `${foundPost?.slug as string}.md`);
  const markdown = fs.readFileSync(fullPath as string, "utf-8");

  return { ...foundPost, markdown, relativeDate };
};
