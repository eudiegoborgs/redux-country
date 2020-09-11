import React from "react"
import { render, wait } from "@testing-library/react"
import CountryList from "./index"
import { CountriesClient } from "../../../services/countries-client";

const countriesList = [{
  "name": "Brazil",
  "nativeName": "Brasil",
  "capital": "Brasília",
  "flag": {
    "emoji": "🇧🇷",
  },
  "name": "USA",
  "nativeName": "USA",
  "capital": "Washington",
  "flag": {
    "emoji": "🇺🇲",
  }
}]
describe("CountryList", () => {
  
  beforeEach(() => {
    CountriesClient.get = jest.fn().mockImplementation(() => countriesList);
  })

  it("renders correctly data", async () => {
    const props = {
      countries: countriesList,
      filter: undefined,
      loadCountries: jest.fn().mockImplementation(countries => {
        expect(countries).toEqual(countriesList)
      })
    }
    const { findByRole, findByText } = render(<CountryList {...props} />)
    findByRole('heading', {name: "Brazil 🇧🇷"})
    findByRole('heading', {name: "Brasil"})
    findByText("Capital: Brasília")
    await wait(() => expect(props.loadCountries).toHaveBeenCalledTimes(1))
    expect(props.loadCountries).toHaveBeenCalledWith(countriesList)
  })

  it("renders correctly data with filter", async () => {
    const props = {
      countries: countriesList,
      filter: 'Was',
      loadCountries: jest.fn().mockImplementation(countries => {
        expect(countries).toEqual(countriesList)
      })
    }
    const { findByRole, findByText } = render(<CountryList {...props} />)
    findByRole('heading', {name: "USA 🇺🇲"})
    findByRole('heading', {name: "USA"})
    findByText("Capital: Washington")
    await wait(() => expect(props.loadCountries).toHaveBeenCalledTimes(1))
    expect(props.loadCountries).toHaveBeenCalledWith(countriesList)
  })
})