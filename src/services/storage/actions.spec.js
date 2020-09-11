import nock from "nock";
import {addFilter, setCountries} from "./actions";

describe("Test addFilter function", () => {
  it("test", async () => {
    const result = addFilter('Brasil');

    expect(result).toEqual({
      type: 'ADD_FILTER',
      data: 'Brasil'
    });
  });
});

describe("Test setCountries function", () => {
  it("test", async () => {
    const result = setCountries('Brasil');

    expect(result).toEqual({
      type: 'SET_COUNTRIES',
      data: 'Brasil'
    });
  });
});
