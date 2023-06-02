import { getInvestments } from "@/lib/airtable";
import { Metadata } from "next";
import Link from "next/link";
import Investment from "../components/Investment";

export const metadata: Metadata = {
  title: "Investments",
};

export const revalidate = 10;

const Investments = async () => {
  const investments = await getInvestments();
  return (
    <main className="content">
      <h1>Investments</h1>
      <p>
        I work at <Link href={"https://ascension.vc"}>Ascension</Link>,
        investing at pre-seed and seed in the UK. I have been fortunate to work
        with a number of incredible founders.
      </p>
      {/* <p> */}
      {/*   I worked at <Link href={"https://ascension.vc"}>Ascension</Link> for 5 */}
      {/*   years (2018-2023), investing at pre-seed and seed in the UK. I was */}
      {/*   fortunate to work with a number of incredible founders. */}
      {/* </p> */}
      <div className="mt-4">
        <div className="">
          {investments.map((investment) => (
            <Investment key={investment.id} investment={investment} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Investments;
