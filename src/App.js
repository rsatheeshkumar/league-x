import { Switch, Route } from 'react-router-dom'

import MatchPage from './pages/match-page'
import SquadPage from './pages/squad-page'

import './App.css'

function App() {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-row">
        <Switch>
          <Route exact path="/" component={MatchPage} />
          <Route path="/squad/:id" component={SquadPage} />
        </Switch>
      </div>
    </div>
  )
}

export default App
