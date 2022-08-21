import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import { Switch, Route } from 'react-router-dom'
import ItemDetail from './ItemDetail'


function App() {
  return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
