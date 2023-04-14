import { getPosts } from "@/lib/airtable";
import Link from "next/link";

export const revalidate = 60;


const Writing = async () => {
  const articles = await getPosts();

  return (
    <main>
      <h1>Writing</h1>
      <ul className="mt-4">
        {articles.map((article) => (
          <li key={article.id} className="underline">
            <Link href={`/writing/${article.fields.slug}`}>{article.fields.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Writing;
