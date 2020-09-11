import nock from "nock";
import { CountriesClient } from "./";

describe("Test Countries Client Class", () => {
  it("Testing get method", async () => {
    nock("https://countries-274616.ew.r.appspot.com")
      .defaultReplyHeaders({ "access-control-allow-origin": "*" })
      .post("/")
      .reply(200, {
        data: {
          Country: [
            {
              "name": "Brazil",
              "nativeName": "Brasil",
              "capital": "Brasília",
              "flag": {
                "emoji": "🇧🇷",
                "emojiUnicode": "U+1F1E7 U+1F1F7",
                "svgFile": "https://restcountries.eu/data/bra.svg"
              }
            },
          ],
        },
      });

    const result = await CountriesClient.get();
    expect(result).toEqual(
      [
        {
          "name": "Brazil",
          "nativeName": "Brasil",
          "capital": "Brasília",
          "flag": {
            "emoji": "🇧🇷",
            "emojiUnicode": "U+1F1E7 U+1F1F7",
            "svgFile": "https://restcountries.eu/data/bra.svg"
          }
        },
      ]
    );
  });
});
