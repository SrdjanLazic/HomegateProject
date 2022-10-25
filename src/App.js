import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import SinglePropertyCard from "./components/single property card/SinglePropertyCard";
import PropertyDetails from "./components/property details/PropertyDetails";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";



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
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/search"} element={<SinglePropertyCard/>}/>
              <Route path={"/details"} element={<PropertyDetails/>}/>
          </Routes>
      </div>
  );
}

export default App;
