import nock from "nock";
import reducer from "./reducers";

let state = [];

describe("Test reducer function", () => {
  it("test SET_COUNTRIES option", async () => {
    state = reducer(state, {
      type: 'SET_COUNTRIES',
      data: [
        {
          "name": "Brazil",
          "nativeName": "Brasil",
          "capital": "Brasília",
          "flag": {
            "emoji": "🇧🇷",
            "emojiUnicode": "U+1F1E7 U+1F1F7",
            "svgFile": "https://restcountries.eu/data/bra.svg"
          }
        }
      ]
    });

    expect(state).toEqual({
      countries: [
        {
          "name": "Brazil",
          "nativeName": "Brasil",
          "capital": "Brasília",
          "flag": {
            "emoji": "🇧🇷",
            "emojiUnicode": "U+1F1E7 U+1F1F7",
            "svgFile": "https://restcountries.eu/data/bra.svg"
          }
        }
      ]
    })

    state = reducer(state, {
      type: 'ADD_FILTER',
      data: 'test'
    });

    expect(state).toEqual({
      countries: [
        {
          "name": "Brazil",
          "nativeName": "Brasil",
          "capital": "Brasília",
          "flag": {
            "emoji": "🇧🇷",
            "emojiUnicode": "U+1F1E7 U+1F1F7",
            "svgFile": "https://restcountries.eu/data/bra.svg"
          }
        }
      ],
      filter: 'test'
    })

    state = reducer(state, {
      type: 'ERROR',
      data: 'test'
    });

    expect(state).toEqual({
      countries: [
        {
          "name": "Brazil",
          "nativeName": "Brasil",
          "capital": "Brasília",
          "flag": {
            "emoji": "🇧🇷",
            "emojiUnicode": "U+1F1E7 U+1F1F7",
            "svgFile": "https://restcountries.eu/data/bra.svg"
          }
        }
      ],
      filter: 'test'
    })
  });
});
