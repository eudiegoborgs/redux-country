import React from "react"
import { render } from "@testing-library/react"
import nock from "nock"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import VisibleCountriesList from "./index"
import { setCountries } from '../../../services/storage/actions'
 
const mockStore = configureStore([])

describe("VisibleCountriesList", () => {
  let store;
  
  beforeEach(() => {
    store = mockStore({
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
        },
      ],
      filter: undefined,
    });
 
    store.dispatch = jest.fn();
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
  })

  it("renders correctly data", () => {
    const { findByRole, findByText } = render(
      <Provider store={store}>
        <VisibleCountriesList />
      </Provider>
    );
    findByRole('heading', {name: "Brazil 🇧🇷"})
    findByRole('heading', {name: "Brasil"})
    findByText("Capital: Brasília")
  })
})