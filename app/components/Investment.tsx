import { Investment } from "@/lib/airtable";
import Image from "next/image";
import Pill from "./Pill";
import Link from "next/link";

const Investment = ({ investment }: { investment: Investment }) => {
  return (
    <div className="py-4 border-b dark:border-b-slate-800">
      <h3 className="flex items-center">
        {investment.fields.name} <Link className="ml-2" href={investment.fields.website}>
          <GlobeIcon />
        </Link>
      </h3>
      <div className="">{investment.fields.one_line_desc}</div>
      <div className="text-xs mt-2">
        {investment.fields.co_investors ? (
          <>
            {investment.fields.co_investors.map((investor, i) => (
              <span key={investor}>
                <Pill text={investor} />
              </span>
            ))}
          </>
        ) : null}
        {investment.fields.subsequent_investors
          ? investment.fields.subsequent_investors.map((investor, i) => (
              <Pill text={investor} key={investor} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Investment;

const GlobeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
};
