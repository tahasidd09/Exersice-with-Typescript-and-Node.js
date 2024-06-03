function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums and print the return values
var album1 = make_album('Taylor Swift', 'Evermore');
var album2 = make_album('Ed Sheeran', 'Divide');
var album3 = make_album('Adele', '30', 12);
console.log(album1);
console.log(album2);
console.log(album3);
// Create an album with the number of tracks
var album4 = make_album('BTS', 'Map of the Soul: 7', 20);
console.log(album4);
