'use strict';

const { song, animals, newAnimals, newSong} = require('../src/song.js');
const expectedSong = require('./mock/expectedSong.js');

describe('The song', function() {
  it('is sung', () => {
    expect(song).toEqual(expectedSong);
  });
});

describe('Initial number of animals', function() {
  it('is 7', () =>{
    expect(animals.length).toEqual(7);
  });
});

// describe('The song', function() {
//   it('is song with new animals', () =>{
//     expect(song).toContain(newAnimals);
//   });
// });