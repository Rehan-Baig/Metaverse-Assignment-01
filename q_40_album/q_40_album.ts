interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
    artist,
    title,
  };

  if (tracks) {
    album.tracks = tracks;
  }

  return album;
}


const album1 = make_album("Nusrat Fateh Ali", "Goonj");
const album2 = make_album("Abrar Ul Haq", "Awazain");
const album3 = make_album("Atif", "Udeekan", 12);


console.log(album1);
console.log(album2);
console.log(album3);