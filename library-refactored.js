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
             },

  printPlaylists: function() {
  for (playlist in this.playlists) {
    var p = this.playlists[playlist].name;
    var tracks = this.playlists[playlist].tracks.length;
    console.log(playlist + ": " + p + " - " + tracks + " tracks");
  }
},
  printTracks: function () {
  for (tracks in this.tracks) {
    var t = this.tracks[tracks].name;
    var art = this.tracks[tracks].artist;
    var alb = this.tracks[tracks].album;
    console.log(tracks + ": " + t + " by " + art + " (" + alb + ")")
  }
},
  printPlaylist: function (playlistId) {
  var p = this.playlists[playlistId].name;
  var tracks = this.playlists[playlistId].tracks.length;
  console.log(playlistId + ": " + p + " - " + tracks + " tracks");

  for (playlist of this.playlists[playlistId].tracks) {
    var t = this.tracks[playlist].name;
    var art = this.tracks[playlist].artist;
    var alb = this.tracks[playlist].album;
    if (this.tracks[playlist]) {
    console.log(this.tracks[playlist].id + ": " + t + " by " + art + " (" + alb + ")")
    }
  }
},
  addTrackToPlaylist: function (trackId, playlistId) {
  var addTrack = this.tracks[trackId].id;
  var playlist = this.playlists[playlistId].tracks
  playlist.push(addTrack);
},
  addTrackToPlaylist: function (trackId, playlistId) {
  var addTrack = this.tracks[trackId].id;
  var playlist = this.playlists[playlistId].tracks
  playlist.push(addTrack);
},
  addTrack: function (name, artist, album) {
  var newTrackId = uid()
  var newTrack = {
    id: newTrackId,
    name: name,
    artist: artist,
    album: album,
  }
  this.tracks[newTrackId] = newTrack
},
  addPlaylist: function (name) {
  var newPlaylistId = uid()
  var NewPlaylist = {
    id: newPlaylistId,
    name: name,
    tracks: [],
  }
  this.playlists[newPlaylistId] = NewPlaylist
},


}
library.printPlaylists()

library.printTracks()

library.printPlaylist('p01')

library.addTrackToPlaylist('t03', 'p01')
console.log(library.playlists.p01)

library.addTrackToPlaylist('t03', 'p01')
console.log(library.playlists.p01)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

library.addTrack("Dope song", "Nathan Eyerley", "Lighthouse Labs")
console.log(library.tracks)


library.addPlaylist("week 1 playlist")
console.log(library.playlists)


