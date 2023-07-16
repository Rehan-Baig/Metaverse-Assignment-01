"use strict";
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Nusrat Fateh Ali", "Goonj");
var album2 = make_album("Abrar Ul Haq", "Awazain");
var album3 = make_album("Atif", "Udeekan", 12);
console.log(album1);
console.log(album2);
console.log(album3);
