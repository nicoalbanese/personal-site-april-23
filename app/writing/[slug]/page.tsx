// "use client";
import { getPostWithSlug } from "@/lib/airtable";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
export const revalidate = 60;

const COMPONENTS: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="py-3">{children}</h1>
  ),
  p: ({ children }) => <p className="mb-8">{children}</p>,
  ul: ({children}) => <ul className="list-disc pl-10 px-10 py-4">{children}</ul>
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostWithSlug(params.slug);
  return (
    <main className="max-w-5xl">
      <h1>{post.raw.fields.title}</h1>
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={post.raw.fields.content} components={COMPONENTS} />
    </main>
  );
};
export default Page;
