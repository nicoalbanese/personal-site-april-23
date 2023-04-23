// export type Post = {
//   id: string;
//   createdTime: string;
//   fields: {
//     title: string;
//     content: string;
//     slug: string;
//     publishDate: string;
//     id: number;
//   };
// };
export type Investment = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    description: string;
    one_line_desc: string;
    logo: [
      {
        id: string;
        width: number;
        height: number;
        url: string;
        filename: "3.png";
        size: number;
        type: "image/png";
        thumbnails: {
          small: {
            url: string;
            width: number;
            height: number;
          };
          large: {
            url: string;
            width: number;
            height: number;
          };
          full: {
            url: string;
            width: number;
            height: number;
          };
        };
      }
    ];
    id: number;
    year_of_investment: string;
    round_invested_in: string;
    company_status: string;
    acquirer: string;
    website: string;
    co_investors: string[];
    subsequent_investors: string[];
  };
};

const airtableBaseURL =
  "https://api.airtable.com/v0/appKlrQzQVRAvO0ID/Investments?view=INVESTMENTS_API&maxRecords=100";
const headers = { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` };

export const getInvestments = async () => {
  const res = await fetch(airtableBaseURL, { headers });
  const data = await res.json();
  // console.log(data);
  return data.records as Investment[];
};

// export const getPostWithSlug = async (slug: string) => {
//   // console.log(slug);
//   const res = await fetch(
//     airtableBaseURL.concat("&filterByFormula=", encodeURI(`{slug}="${slug}"`)),
//     { headers }
//   );
//   const data = await res.json();

//   return { raw: data.records[0] as Post };
// };
