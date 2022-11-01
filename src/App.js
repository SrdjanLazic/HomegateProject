import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import SinglePropertyCard from "./components/single property card/SinglePropertyCard";
import PropertyDetails from "./components/property details/PropertyDetails";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Favourites from "./components/favourites/Favourites";



function App() {
  return (
    // <div className="App">
    //     <Header/>
    //     <hr/>
    //     <div className={"layout-container"}>
    //         <SinglePropertyCard/>
    //         <br></br>
    //         <PropertyDetails></PropertyDetails>
    //     </div>
    // </div>
      <div>
          <Header/>
          <hr/>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/search"} element={<Search/>}/>
              <Route path={"/details/:id"} element={<PropertyDetails/>}/>
              <Route path={"/favourites"} element={<Favourites/>}/>
          </Routes>
      </div>
  );
}

export default App;
