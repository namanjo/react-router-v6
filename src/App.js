import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './ItemDetail'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop"  element={<Shop />} />
            <Route path="/shop/:id" element={<ItemDetail />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
