class Library {
  constructor (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist (playlist) {
    this.playlists.push(playlist);
  }
}

class Playlist {
  constructor (title) {
    this.title = title;
    this.tracks = [];
  }

  addTrack (track) {
    this.tracks.push(track);
  }

  overallRating () {
    let totalRating = 0;
    this.tracks.forEach((track) => {
      totalRating += track.rating;
    });
    return totalRating / this.tracks.length;
  }

  totalDuration () {
    let totalDuration = 0;
    this.tracks.forEach((track) => {
      totalDuration += track.length;
    });
    return totalDuration;
  }
}

class Track {
  constructor (title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const library0 = new Library('Library0', 'Creator0');

const playlist0 = new Playlist('Playlist0');
const playlist1 = new Playlist('Playlist1');
const playlist2 = new Playlist('Playlist2');

const track0 = new Track('Track0', 3, 1800);
const track1 = new Track('Track1', 4, 2200);
const track2 = new Track('Track2', 3, 2400);
const track3 = new Track('Track3', 2, 2000);
const track4 = new Track('Track4', 5, 1800);
const track5 = new Track('Track5', 3, 1800);
const track6 = new Track('Track6', 4, 2200);
const track7 = new Track('Track7', 3, 2400);
const track8 = new Track('Track8', 2, 2000);

playlist0.addTrack(track0);
playlist0.addTrack(track1);
playlist0.addTrack(track2);

playlist1.addTrack(track3);
playlist1.addTrack(track4);
playlist1.addTrack(track5);

playlist2.addTrack(track6);
playlist2.addTrack(track7);
playlist2.addTrack(track8);

library0.addPlaylist(playlist0);
library0.addPlaylist(playlist1);
library0.addPlaylist(playlist2);

library0.playlists.forEach((playlist) => {
  console.log();
  console.log(playlist.title);
  console.log(`Avegrate Rating: ${playlist.overallRating()}`);
  console.log(`Total Duration: ${playlist.totalDuration()}`);
})