import React from 'react';
import VisibleCountriesList from './components/organisms/visible-countries-list';
import Filter from './components/molecules/filter';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container fixed className="App">
      <Filter />
      <VisibleCountriesList />
    </Container>
  );
}

export default App;
