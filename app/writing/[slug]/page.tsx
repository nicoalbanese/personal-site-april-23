// import { getPostWithSlug } from "@/lib/airtable";
import Loom from "@/app/components/Loom";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import { Suspense } from "react";
import { getAllMDPosts, getPostBySlug } from "@/lib/writing";
import Youtube from "@/app/components/Youtube";
export const revalidate = 10;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
  };
}

const COMPONENTS: MDXComponents = {
  h1: ({ children }) => <h1 className="py-3">{children}</h1>,
  p: ({ children }) => <p className="mb-6">{children}</p>,
  ul: ({ children }) => (
    <ul className="list-disc pl-10 px-10 py-4">{children}</ul>
  ),
  Loom: ({ url = "Hello", caption }: { url: string; caption?: string }) => (
    <Loom url={url} caption={caption} />
  ),
  Youtube: ({ url = "Hello", caption }: { url: string; caption?: string }) => (
    <Youtube url={url} caption={caption} />
  ),
};

export async function generateStaticParams() {
  const allPosts = await getAllMDPosts();
  const paths = allPosts.map((post) => {
    return {
      slug: post.slug,
    };
  });
  return paths;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug);
  // console.log(post);

  return (
    <main className="max-w-5xl content">
      <Suspense fallback={<LoadingSkeleton />}>
        <div className="mb-4">
          <h1 className="mb-1">{post.title}</h1>
          <p className="text-slate-400 text-sm dark:text-slate-600">
            posted {post.relativeDate}
          </p>
        </div>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />
        <div className="mt-4">
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={post.markdown} components={COMPONENTS} />
        </div>
      </Suspense>
    </main>
  );
};
export default Page;

const LoadingSkeleton = () => {
  return (
    <>
      <h1 className="bg-slate-200 dark:bg-slate-800 rounded-lg  animate-pulse h-8 w-[200px]"></h1>
      <p className="bg-slate-200  dark:bg-slate-800 rounded-lg h-[100px] w-full animate-pulse mb-6"></p>
      <p className="bg-slate-200  dark:bg-slate-800 rounded-lg h-[50px] max-w-[500px] animate-pulse mb-6"></p>
      <p className="bg-slate-200  dark:bg-slate-800 rounded-lg h-[100px] w-full animate-pulse mb-6"></p>
      <p className="bg-slate-200  dark:bg-slate-800 rounded-lg h-[75px] w-full animate-pulse mb-6"></p>
    </>
  );
};
