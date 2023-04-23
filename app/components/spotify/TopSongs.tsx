import { TopSong, TopSongs } from "@/types/spotify";

const TopSongs = ({ data }: { data: TopSongs }) => {
  if (data) {
    return (
      <div className="pr-2 mt-2">
        <ol className="list-inside list-decimal">
          {data.items.map((song: TopSong) => (
            <li key={song.id} className="">
              <span>{song.name}</span> -{" "}
              {song.artists.map((artist, i) => (
                <span key={artist.id} className="text-slate-600 dark:text-slate-400 text-sm">{artist.name}{i+1 < song.artists.length ? ", " : "" }</span>
              ))}
            </li>
          ))}
        </ol>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    );
  } else {
    return <NotListening />;
  }
};

export default TopSongs;

const NotListening = () => {
  return <>Not listenining right now...{"it's"} very quiet 🥺</>;
};
