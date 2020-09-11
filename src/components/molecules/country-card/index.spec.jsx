import React from "react"
import { render } from "@testing-library/react"
import CountryCard from "./index"
describe("CountryCard", () => {
  it("renders correctly data", () => {
    const props = {
      "name": "Brazil",
      "nativeName": "Brasil",
      "capital": "Brasília",
      "flag": {
        "emoji": "🇧🇷",
        "emojiUnicode": "U+1F1E7 U+1F1F7",
        "svgFile": "https://restcountries.eu/data/bra.svg"
      }
    }
    const { getByRole, getByText } = render(<CountryCard {...props} />)
    getByRole('heading', {name: "Brazil 🇧🇷"})
    getByRole('heading', {name: "Brasil"})
    getByText("Capital: Brasília")
  })
})