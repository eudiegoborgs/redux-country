import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import FilterInput from "./index"
import { addFilter } from '../../../services/storage/actions'
 
const mockStore = configureStore([])

describe("FilterInput", () => {
  let store;
  
  beforeEach(() => {
    store = mockStore({
      filter: 'sample text',
    });
 
    store.dispatch = jest.fn();
  })

  it("renders correctly data", () => {
    const { getByRole, getByText } = render(
      <Provider store={store}>
        <FilterInput />
      </Provider>
    );
    const input = getByRole('textbox', {name: "search countries"})
    fireEvent.change(input, { target: { value: 'Brasil' } })
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      addFilter('Brasil')
    );
  })
})