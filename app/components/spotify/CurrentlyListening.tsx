import { NowPlaying } from "@/types/spotify";
import Image from "next/image";

const CurrentlyListening = ({ data }: { data: NowPlaying }) => {
  if (data) {
    if (data.is_playing) {
      return (
        <div>
          <h3>Currently Listening</h3>

          <div className="grid grid-cols-8 items-center mt-2">
            <div className="col-span-1 mr-2">
              <Image
                src={data.item.album.images[0].url}
                height={100}
                width={100}
                alt={`currently playing album cover`}
                className="rounded-lg"
              />
            </div>
            <div className="col-span-7">
              <div className="">{data.item.name}</div>
              <div className="text-sm dark:text-slate-400 text-slate-600">
                {data.item.artists.map((artist: any) => (
                  <span key={artist.id}>{artist.name}</span>
                ))}
              </div>
              <div className="text-sm dark:text-slate-400 text-slate-600">{data.item.album.name}</div>
              {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export default CurrentlyListening;

const NotListening = () => {
  return <>Not listenining right now...{"it's"} very quiet 🥺</>;
};
