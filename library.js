var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


var printPlaylists = function () {
  for (playlist in library.playlists) {
    var p = library.playlists[playlist].name;
    var tracks = library.playlists[playlist].tracks.length;
    console.log(playlist + ": " + p + " - " + tracks + " tracks");
  }
}
printPlaylists(library)


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (tracks in library.tracks) {
    var t = library.tracks[tracks].name;
    var art = library.tracks[tracks].artist;
    var alb = library.tracks[tracks].album;
    console.log(tracks + ": " + t + " by " + art + " (" + alb + ")")

  }
}
printTracks(library)



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
var printPlaylist = function (playlistId) {
  var p = library.playlists[playlistId].name;
  var tracks = library.playlists[playlistId].tracks.length;
  console.log(playlistId + ": " + p + " - " + tracks + " tracks");

  for (playlist of library.playlists[playlistId].tracks) {
    var t = library.tracks[playlist].name;
    var art = library.tracks[playlist].artist;
    var alb = library.tracks[playlist].album;
    if (library.tracks[playlist]) {
    console.log(library.tracks[playlist].id + ": " + t + " by " + art + " (" + alb + ")")
    }
  }
}

printPlaylist('p01')

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var addTrack = library.tracks[trackId].id;
  var playlist = library.playlists[playlistId].tracks
  playlist.push(addTrack);
}
addTrackToPlaylist('t03', 'p01')
console.log(library.playlists.p01)


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var newTrackId = uid()
  var newTrack = {
    id: newTrackId,
    name: name,
    artist: artist,
    album: album,
  }
  library.tracks[newTrackId] = newTrack
}
addTrack("Dope song", "Nathan Eyerley", "Lighthouse Labs")
console.log(library.tracks)


// adds a playlist to the library

var addPlaylist = function (name) {
  var newPlaylistId = uid()
  var NewPlaylist = {
    id: newPlaylistId,
    name: name,
    tracks: [],
  }
  library.playlists[newPlaylistId] = NewPlaylist
}
addPlaylist("week 1 playlist")
console.log(library.playlists)


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}