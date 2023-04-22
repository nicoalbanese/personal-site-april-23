import Link from "next/link";
import Image from "next/image";
import { getNowPlaying } from "@/lib/spotify";

export const revalidate = 1;

const Music = async () => {
  const data = await getNowPlaying();
  return (
    <main className="content">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Music</h1>
      <p>
        I used to dj and make music under the name Guac (long story 😂). I{" "}
        {"don't"} make music much anymore but am an avid listener.
      </p>
      <Image
        src={"/images/djing.JPG"}
        alt={""}
        width={600}
        height={500}
        className={"py-8"}
      />
      <div className="mt-4">
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-slate-900 dark:text-gray-50 px-3 text-lg font-medium text-gray-900">
              Select Songs
            </span>
          </div>
        </div>
        <ul className="">
          <li className="mb-4">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/637FSOGxwwnmU0zFJeKzQ4?utm_source=generator"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </li>
          <li className="mb-4">
            <iframe
              width="100%"
              height="152"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/421487529&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: 100,
              }}
            >
              <Link
                href="https://soundcloud.com/guacmusic"
                title="GUAC"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                GUAC
              </Link>{" "}
              ·{" "}
              <Link
                href="https://soundcloud.com/guacmusic/theres-nothing-holding-me-back-guac-remix-shawn-mendes"
                title="There&#x27;s Nothing Holding Me Back (Guac Remix)"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                There&#x27;s Nothing Holding Me Back (Guac Remix)
              </Link>
            </div>
          </li>
          <li className="my-4">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/4GOOUY6Rf9XcW882O1lKK8?utm_source=generator"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              width="100%"
              height="152"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/397475394&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: 100,
              }}
            >
              <Link
                href="https://soundcloud.com/guacmusic"
                title="GUAC"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                GUAC
              </Link>{" "}
              ·{" "}
              <Link
                href="https://soundcloud.com/guacmusic/young-dumb-broke-guac-remix-khalid"
                title="Young Dumb &amp; Broke (Guac Remix) - Khalid"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                Young Dumb &amp; Broke (Guac Remix) - Khalid
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Music;
