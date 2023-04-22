import { getPosts } from "@/lib/airtable";
import { getAllMDPosts } from "@/lib/writing";
import Link from "next/link";
import { Suspense } from "react";

export const revalidate = 60;

const Writing = async () => {
  const articles = await getPosts();
  const posts = getAllMDPosts();
  console.log(posts)

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
      <li className="bg-slate-200 h-7 w-64 animate-pulse mb-2"></li>
      <li className="bg-slate-200 h-7 w-36 animate-pulse mb-2"></li>
      <li className="bg-slate-200 h-7 w-64 animate-pulse mb-2"></li>
      <li className="bg-slate-200 h-7 w-48 animate-pulse mb-2"></li>
      <li className="bg-slate-200 h-7 w-64 animate-pulse mb-2"></li>
    </ul>
  );
};
