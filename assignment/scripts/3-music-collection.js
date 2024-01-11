console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished, tracks) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  };
  collection.push(album);
  return album;
} // end addToCollection

// use and test addToCollection

console.log(addToCollection(myCollection, 'Rubber Soul', 'The Beatles', 1965, [{name: 'Drive My Car', duration: '2:25'},
  {name: 'Norwegian Wood (This Bird Has Flown)', duration: '2:05'},
  {name: "You Won't See Me", duration: '3:18'},
  {name: 'Nowhere Man', duration: '2:40'},
  {name: 'Think for Yourself', duration: '2:16'},
  {name: 'The Word', duration: '2:41'},
  {name: 'Michelle', duration: '2:40'},
  {name: 'What Goes On', duration: '2:47'},
  {name: 'Girl', duration: '2:30'},
  {name: "I'm Looking Through You", duration: '2:23'},
  {name: 'In My Life', duration: '2:24'},
  {name: 'Wait', duration: '2:12'},
  {name: 'If I Needed Someone', duration: '2:20'},
  {name: 'Run for Your Life', duration: '2:18'}]));
console.log(addToCollection(myCollection, "A Hard Day's Night", 'The Beatles', 1964, [{name: "A Hard Day's Night", duration: '2:34'},
  {name: 'I Should Have Known Better', duration: '2:43'},
  {name: 'If I Fell', duration: '2:19'},
  {name: "I'm Happy Just to Dance with You", duration: '1:56'},
  {name: 'And I Love Her', duration: '2:30'},
  {name: 'Tell Me Why', duration: '2:09'},
  {name: "Can't Buy Me Love", duration: '2:12'},
  {name: 'Any Time at All', duration: '2:11'},
  {name: "I'll Cry Instead", duration: '1:44'},
  {name: 'Things We Said Today', duration: '2:35'},
  {name: 'When I Get Home', duration: '2:17'},
  {name: "You Can't Do That", duration: '2:35'},
  {name: "I'll Be Back", duration: '2:24'}]));
console.log(addToCollection(myCollection, 'Help!', 'The Beatles', 1965, [{name: 'Help!', duration: '2:18'},
  {name: 'The Night Before', duration: '2:34'},
  {name: "You've Got to Hide Your Love Away", duration: '2:09'},
  {name: 'I Need You', duration: '2:28'},
  {name: 'Another Girl', duration: '2:05'},
  {name: "You're Going to Lose That Girl", duration: '2:18'},
  {name: 'Ticket to Ride', duration: '3:09'},
  {name: 'Act Naturally', duration: '2:30'},
  {name: "It's Only Love", duration: '1:56'},
  {name: 'You Like Me Too Much', duration: '2:36'},
  {name: 'Tell Me What You See', duration: '2:37'},
  {name: "I've Just Seen a Face", duration: '2:05'},
  {name: 'Yesterday', duration: '2:05'},
  {name: 'Dizzy Miss Lizzy', duration: '2:54'}]));
console.log(addToCollection(myCollection, 'The Other Side of Life', 'The Moody Blues', 1986, [{name: 'Your Wildest Dreams', duration: '4:52'},
  {name: "Talkin' Talkin'", duration: '3:56'},
  {name: "Rock 'n' Roll Over You", duration: '4:51'},
  {name: "I Just Don't Care", duration: '3:29'},
  {name: 'Running Out of Love', duration: '4:25'},
  {name: 'The Other Side of Life', duration: '6:53'},
  {name: 'The Spirit', duration: '4:19'},
  {name: 'Slings and Arrows', duration: '4:29'},
  {name: 'It May Be a Fire', duration: '4:57'}]));
console.log(addToCollection(myCollection, 'Yourself or Someone Like You', 'Matchbox Twenty', 1996, [{name: 'Real World', duration: '3:50'},
  {name: 'Long Day', duration: '3:45'},
  {name: '3AM', duration: '3:46'},
  {name: 'Push', duration: '3:59'},
  {name: 'Girl Like That', duration: '3:45'},
  {name: 'Back 2 Good', duration: '5:40'},
  {name: 'Damn', duration: '3:20'},
  {name: 'Argue', duration: '2:58'},
  {name: 'Kody', duration: '4:03'},
  {name: 'Busted', duration: '4:15'},
  {name: 'Shame', duration: '3:35'},
  {name: 'Hang', duration: '3:47'}]));
console.log(addToCollection(myCollection, 'Mad Season', 'Matchbox Twenty', 2000, [{name: 'Angry', duration: '3:44'},
  {name: 'Black & White People', duration: '3:45'},
  {name: 'Crutch', duration: '3:25'},
  {name: 'Last Beautiful Girl', duration: '4:03'},
  {name: "If You're Gone", duration: '4:34'},
  {name: 'Mad Season', duration: '5:02'},
  {name: 'Rest Stop', duration: '4:29'},
  {name: 'The Burn', duration: '3:27'},
  {name: 'Bent', duration: '4:16'},
  {name: 'Bed of Lies', duration: '5:22'},
  {name: 'Leave', duration: '4:33'},
  {name: 'Stop', duration: '3:49'},
  {name: "You Won't Be Mine", duration: '9:52'}]));
console.log('logging myCollection array:', myCollection);

function showCollection(collection) {
  for (let eachAlbum of collection) {
    console.log(eachAlbum.title + ' by ' + eachAlbum.artist + ', published in ' + eachAlbum.yearPublished + ':');
    for (let i = 0; i < eachAlbum.tracks.length; i++) {
      let tracknum = i + 1; // because JavaScript counts from zero but we don't
      console.log('  ' + tracknum + '. ' + eachAlbum.tracks[i].name + ': ' + eachAlbum.tracks[i].duration);
    } // end for loop for each track
  } // end for loop for each album
} // end showCollection

// test showCollection
showCollection(myCollection); // should result in 6 lines logged to console
                              // added tracks - should now result in MANY lines, 6 albums + all tracks from each album

function findByArtist(collection, artist) {
  let matchingAlbums = [];
  for (let eachAlbum of collection) {
    if (eachAlbum.artist === artist) {
      matchingAlbums.push(eachAlbum);
    }
  } // end for loop
  return matchingAlbums;
} // end findByArtist

// test findByArtist
console.log('The Beatles:', findByArtist(myCollection, 'The Beatles')); // should return an array with 3 items
console.log('The Moody Blues:', findByArtist(myCollection, 'The Moody Blues')); // should returnn an array with 1 item
console.log('Matchbox Twenty:', findByArtist(myCollection, 'Matchbox Twenty')); // should return an array with 2 items
console.log('Bob Dylan:', findByArtist(myCollection, 'Bob Dylan')); // should return an empty array

function searchByTrackName(collection, trackName) {
  let matchingAlbums = [];
  for (let eachAlbum of collection) {
    // in each album, check each track
    let trackInAlbum = false; // doing it with a flag so that I only push each album once
    // I've never heard of a track name being repeated on an album but it could happen
    for (eachTrack of eachAlbum.tracks) {
      if (eachTrack.name === trackName) {
        trackInAlbum = true;
      }
    } // end for loop for each track
    if (trackInAlbum) {
      matchingAlbums.push(eachAlbum);
    }
  } // end for loop for each album
  return matchingAlbums;
} // end searchByTrackName

function search(collection, searchCriteria) {
  if (!searchCriteria) {
    return collection;
  }
  if (searchCriteria.trackName) {
    return searchByTrackName(collection, searchCriteria.trackName);
  }
  let artistToSearch = searchCriteria.artist;
  let yearToSearch = searchCriteria.yearPublished;
  if (!(artistToSearch && yearToSearch)) {
    return collection;
  }
  let matchingAlbums = [];
  for (let eachAlbum of collection) {
    if (eachAlbum.artist === artistToSearch && eachAlbum.yearPublished === yearToSearch) {
      matchingAlbums.push(eachAlbum);
    }
  } // end for loop
  return matchingAlbums;
} // end search

// test search
console.log('test search:');
console.log('Ray Charles, 1957:', search(myCollection, {artist: 'Ray Charles', yearPublished: 1957})); // should return an empty array
console.log('The Beatles, 1965:', search(myCollection, {artist: 'The Beatles', yearPublished: 1965})); // should return 2 albums
console.log('The Moody Blues, 1986:', search(myCollection, {artist: 'The Moody Blues', yearPublished: 1986})); // should return 1 album
console.log('no search object', search(myCollection)); // should return all albums
console.log('empty search object', search(myCollection, {})); // should return all albums
console.log('missing artist', search(myCollection, {yearPublished: 1965})); // should return all albums
console.log('missing year', search(myCollection, {artist: 'The Beatles'})); // should return all albums

console.log('test searching by track');
console.log('Girl:', search(myCollection, {trackName: 'Girl'})); // should return Rubber Soul
console.log('Bent:', search(myCollection, {artist: 'The Beatles', yearPublished: '1965', trackName: 'Bent'})); // should return Mad Season, ignoring artist and year



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
