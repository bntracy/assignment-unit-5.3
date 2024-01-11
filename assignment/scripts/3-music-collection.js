console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
} // end addToCollection

// use and test addToCollection
console.log(addToCollection(myCollection, 'Rubber Soul', 'The Beatles', '1965'));
console.log(addToCollection(myCollection, "A Hard Day's Night", 'The Beatles', '1964'));
console.log(addToCollection(myCollection, 'Help!', 'The Beatles', '1965'));
console.log(addToCollection(myCollection, 'The Other Side of Life', 'The Moody Blues', '1986'));
console.log(addToCollection(myCollection, 'Yourself or Someone Like You', 'Matchbox Twenty', '1996'));
console.log(addToCollection(myCollection, 'Mad Season', 'Matchbox Twenty', '2000'));
console.log('logging myCollection array:', myCollection);

function showCollection(collection) {
  for (let eachAlbum of collection) {
    console.log(eachAlbum.title + ' by ' + eachAlbum.artist + ', published in ' + eachAlbum.yearPublished + '.');
  } // end for loop
} // end showCollection

// test showCollection
showCollection(myCollection); // should result in 6 lines logged to console

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
