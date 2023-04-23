import { TopArtist, TopArtists } from "@/types/spotify";

const TopArtists = ({ data }: { data: TopArtists }) => {
  if (data) {
    return (
      <div className="mt-2">
        <ol className="list-inside list-decimal">
          {data.items.map((artist: TopArtist) => (
            <li key={artist.id}> {artist.name}</li>
          ))}
        </ol>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    );
  } else {
    return <NotListening />;
  }
};

export default TopArtists;

const NotListening = () => {
  return <>Not listenining right now...{"it's"} very quiet 🥺</>;
};
