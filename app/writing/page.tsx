import { getAllMDPosts } from "@/lib/writing";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Writing',
};

export const revalidate = 10;

const Writing = async () => {
  const posts = await getAllMDPosts();

  return (
    <main>
      <h1>Writing</h1>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <Suspense fallback={<LoadingSkeleton />}>
        <ul className="mt-4">
          {posts.map((article) => (
            <li key={article.id} className="underline">
              <Link href={`/writing/${article.slug}`}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </Suspense>
    </main>
  );
};

export default Writing;

const LoadingSkeleton = () => {
  return (
    <ul>
      <li className="bg-slate-100 dark:bg-slate-700 h-7 w-64 animate-pulse mb-2 rounded-lg"></li>
      <li className="bg-slate-100 dark:bg-slate-700 h-7 w-36 animate-pulse mb-2 rounded-lg"></li>
      <li className="bg-slate-100 dark:bg-slate-700 h-7 w-64 animate-pulse mb-2 rounded-lg"></li>
      <li className="bg-slate-100 dark:bg-slate-700 h-7 w-48 animate-pulse mb-2 rounded-lg"></li>
      <li className="bg-slate-100 dark:bg-slate-700 h-7 w-64 animate-pulse mb-2 rounded-lg"></li>
    </ul>
  );
};
