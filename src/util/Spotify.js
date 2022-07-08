const clientID = "d5872995816a4caaa9030ff6663ffc5d";
const redirectURI = "http://localhost:3000";

// Contains all the functions I need for accessing the Spotify API

// Spotify.search("phish", token)
// Spotify.getAccessToken()
// Spotify.save("My Playlist Name", token, playlist)

const Spotify = {
  search(term, token) {
    return fetch(
      `https://api.spotify.com/v1/search?q=${term}&type=track&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.tracks.items) {
          return jsonResponse.tracks.items.map((track) => ({
            id: track.uri,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
          }));
        }
      });
  },

  save(name, token, playlist) {
    return fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        return jsonResponse.id;
      })
      .then((id) => {
        return fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            public: false,
          }),
        });
      })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        return jsonResponse.id;
      })
      .then((id) => {
        return fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uris: playlist,
          }),
        });
      })
      .catch((error) => console.error("Error: ", error));
  },

  getAccessToken() {
    const tokenFromURL = window.location.href.match(/access_token=([^&]*)/);
    if (tokenFromURL) {
      return tokenFromURL[1];
    } else {
      const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-private&redirect_uri=${redirectURI}`;
      window.location = url;
    }
  },
};

export default Spotify;
