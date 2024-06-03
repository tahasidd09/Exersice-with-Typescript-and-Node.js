interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Create three albums and print the return values
let album1 = make_album('Taylor Swift', 'Evermore');
let album2 = make_album('Ed Sheeran', 'Divide');
let album3 = make_album('Adele', '30', 12);

console.log(album1);
console.log(album2);
console.log(album3);

// Create an album with the number of tracks
let album4 = make_album('BTS', 'Map of the Soul: 7', 20);
console.log(album4);
