export type Post = {
  id: string;
  createdTime: string;
  fields: {
    title: string;
    content: string;
    slug: string;
    publishDate: string;
    id: number;
  };
};

const airtableBaseURL =
  "https://api.airtable.com/v0/appKlrQzQVRAvO0ID/Posts?view=POSTS_API&maxRecords=100";
const headers = { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` };

export const getPosts = async () => {
  const res = await fetch(airtableBaseURL, { headers });
  const data = await res.json();
  // console.log(data);
  return data.records as Post[];
};

export const getPostWithSlug = async (slug: string) => {
  // console.log(slug);
  const res = await fetch(
    airtableBaseURL.concat("&filterByFormula=", encodeURI(`{slug}="${slug}"`)),
    { headers }
  );
  const data = await res.json();

  return { raw: data.records[0] as Post };
};
