// lib/spotify.js

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=short_term`;
const TOP_SONGS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refresh_token as string);

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // body: JSON.stringify({
    //   grant_type: "refresh_token",
    //   refresh_token,
    // }),
    body: params,
  });

  return await response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();
  try {
    const nowPlaying = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return await nowPlaying.json();
  } catch (e) {
    return {};
  }
};

export const getTopTracksAndArtist = async () => {
  const { access_token } = await getAccessToken();
  try {
    const topArtists = await fetch(TOP_ARTISTS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const topSongs = await fetch(TOP_SONGS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const songs = await topSongs.json();
    const artists = await topArtists.json();
    return { songs, artists };
  } catch (e) {
    console.log(e)
    return {};
  }
};
