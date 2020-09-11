import fetch from 'isomorphic-unfetch';

const BASE_URL = 'https://countries-274616.ew.r.appspot.com';

export class CountriesClient {
  static async get() {
    try {
      const response =  await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
          query {
            Country {
              name
              nativeName
              capital
              flag {
                emoji
                emojiUnicode
                svgFile
              }
            }
          }
      ` }),
      }).then(res => res.json())
        .then(res => res.data.Country);

      return response; 
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}