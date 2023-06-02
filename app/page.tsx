import Link from "next/link";

export default function Home() {
  return (
    <main className="content">
      <h1>👋 Hello 👋</h1>
      {/* <div className="callout"> */}
      {/*   <span className="mr-4 text-2xl">👨🏻‍💻</span> {"I'm"} currently building */}
      {/*   something new! */}
      {/* </div> */}
      {/* <p> */}
      {/*   Previously spent 5 years as an investor at{" "} */}
      {/*   <Link href="https://ascension.vc">Ascension</Link> where I focused on */}
      {/*   pre-Seed and Seed <Link href={"/investments"}>investments</Link>. */}
      {/* </p> */}
      <p>
        I am an investor at <Link href="https://ascension.vc">Ascension</Link>{" "}
        where I focus on pre-Seed and Seed{" "}
        <Link href={"/investments"}>investments</Link>.
      </p>
      <p>
        Aside from work, I am an avid football fan (COYG) and{" "}
        <Link href={"/projects"}>love building things</Link> that make my life a
        little easier. I also love and used to{" "}
        <Link href={"/music"}>make music</Link> and always love to talk music.
      </p>
      <div>
        <h3>Find me on</h3>
        <ul>
          <li>
            <Link href={"https://twitter.com/nicoalbanese10"}>Twitter</Link>
          </li>
          <li>
            <Link href={"https://linkedin.com/in/nicoalbanese"}>LinkedIn</Link>
          </li>
          <li>
            <Link href={"mailto:gcalbanese96@gmail.com"}>Email</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
