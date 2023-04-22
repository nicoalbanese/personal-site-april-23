"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ROUTES = [
  { name: "Home", href: "/", id: 0 },
  { name: "Projects", href: "/projects", id: 1 },
  { name: "Investments", href: "/investments", id: 2 },
  { name: "Writing", href: "/writing", id: 3 },
  { name: "Music", href: "/music", id: 4 },
];

function extractBaseRoute(input: string): string | null {
  if (input == "/") {
    return "/";
  } else {
    const regex = /^\/([^\/]+)/;
    const match = input.match(regex);

    if (match && match[1]) {
      return "/".concat(match[1]);
    }
  }

  return null;
}

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="md:mr-10 mb-3 md:mb-0 md:px-10">
      <ul className="text-right flex md:block">
        {ROUTES.map((route) => (
          <li
            key={route.id}
            className={`${
              extractBaseRoute(pathname) == route.href
                ? "active-route"
                : undefined
            } mr-2 md:mr-0`}
          >
            <Link href={route.href}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
