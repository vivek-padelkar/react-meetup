import { Route, Switch } from 'react-router-dom'
import MainNavigation from './components/Layout/mainnavigation.component'
import AllMeetups from './pages/all-meetup/AllMeetups.page'
import Favourites from './pages/favourite/Favouites.page'
import NewMeetups from './pages/newMeetup/NewMeetups.page'

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Switch>
        <Route exact path={'/'}>
          <AllMeetups />
        </Route>
        <Route exact path={'/newmeetups'}>
          <NewMeetups />
        </Route>
        <Route exact path={'/favourite'}>
          <Favourites />
        </Route>
      </Switch>
    </div>
  )
}

export default App
