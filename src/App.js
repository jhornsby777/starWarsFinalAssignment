import logo from './logo.svg';
import CharacterPage from './Pages/CharacterPage.js'
import MoviePage from './Pages/MoviePage'
import {Switch , Route , Link} from 'react-router-dom'
import ReviewPage from './Pages/ReviewPage'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path = '/characters'>
            <CharacterPage></CharacterPage>
        </Route>
        <Route path = '/reviews'>
          <ReviewPage></ReviewPage>
        </Route>
        <Route path = '/'>
          <MoviePage></MoviePage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
