
import './App.css';
import AboutUs from './Components/AboutUs';
// import Footer from './Components/Footer';
import Home from './Components/Home';
import Movies from './Components/Movies';
// import Movies_items from './Components/Movies_items';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="" element={<Movies categoryName={"Popular"}></Movies>}></Route>

          <Route path="/Popular" element={<Movies categoryName={"Popular"}></Movies>}></Route>

          <Route path="/Top_Rated" element={<Movies genresId="100" categoryName={"Top Rated"}></Movies>}></Route>

          <Route path="/Upcoming" element={<Movies genresId="101" categoryName={"Upcoming"}></Movies>}></Route>

          <Route exact path='/Home' element={<Movies genresId="NULL" key="home" categoryName={"Popular"}></Movies>}></Route>

          <Route exact path='/Action' element={<Movies genresId="28" key="Action" categoryName={"Action"}></Movies>}></Route>

          <Route exact path='/Adventure' element={<Movies genresId="12" key="Adventure" categoryName={"Adventure"}></Movies>}></Route>

          <Route exact path='/Animation' element={<Movies genresId="16" key="Animation" categoryName={"Animation"}></Movies>}></Route>

          <Route exact path='/Comedy' element={<Movies genresId="35" key="Comedy" categoryName={"Comedy"}></Movies>}></Route>

          <Route exact path='/Crime' element={<Movies genresId="80" key="Crime" categoryName={"Crime"}></Movies>}></Route>

          <Route exact path='/Documentary' element={<Movies genresId="99" key="Documentary" categoryName={"Documentary"}></Movies>}></Route>

          <Route exact path='/Drama' element={<Movies genresId="18" key="Drama" categoryName={"Drama"}></Movies>}></Route>

          <Route exact path='/Family' element={<Movies genresId="10751" key="Family" categoryName={"Family"}></Movies>}></Route>

          <Route exact path='/Horror' element={<Movies genresId="27" key="Horror" categoryName={"Horror"}></Movies>}></Route>

          <Route exact path='/Romance' element={<Movies genresId="10749" key="Romance" categoryName={"Romance"}></Movies>}></Route>

          <Route exact path='/Science Fiction' element={<Movies genresId="878" key="Science Fiction" categoryName={"Science Fiction"}></Movies>}></Route>

          <Route exact path='/Thriller' element={<Movies genresId="53" key="Thriller" categoryName={"Thriller"}></Movies>}></Route>

        </Routes>

        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
