/**
 * Sails-music.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 // EXAMPLE:
 // "first_name": "Johnny",
 // "last_name": "Rotten",
 // "description": "John Joseph Lydon (born 31 January 1956), also known by his former stage name Johnny Rotten, is an  English singer, songwriter, and musician. He is best known as the lead singer of the late 1970s punk band the Sex Pistols, which lasted from 1975 until 1978, and again for various revivals during the 1990s and 2000s. He is also the lead singer of post-punk band Public Image Ltd (PiL), which he founded and fronted from 1978 until 1993, and again since 2009",
 // "dob": "January 31, 1956",
 // "dod": "",
 // "artist_wiki": "https://en.wikipedia.org/wiki/John_Lydon"

module.exports = {

  attributes: {

    first_name: {
      type: 'string',
      minLength: 2,
      maxLength: 25,
      required: true
    },

    last_name: {
      type: 'string'
    },

    description: {
      type: 'string',
      minLength: 1,
      maxLength: 1000,
      required: true
    },

    dob: {
      type: 'string'
    },

    dod: {
      type: 'string'
    },

    artist_wiki: {
      type: 'string',
      url: true
    }

  }
};
