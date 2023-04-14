import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="content">
      <h1>Nico Albanese</h1>
      {/* <p>👋 Hello 👋</p> */}
      <p>Currently: Building something new 😊</p>
      <p>
        Previously: spent 5 years as an investor at <Link href="https://ascension.vc">Ascension</Link> where I focused on
        pre-Seed and Seed <Link href={"/investments"}>investments</Link>.
      </p>
      <p>
        Aside from work, I am an avid football fan (COYG) and <Link href={"/projects"}>
          love building
          things
        </Link> that make my life a little easier. I also love and used to <Link href={"/music"}>
          make
          music
        </Link> and always love to talk music.
      </p>
    </main>
  );
}
