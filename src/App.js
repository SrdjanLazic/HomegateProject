import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import SinglePropertyCard from "./components/single property card/SinglePropertyCard";
import PropertyDetails from "./components/property details/PropertyDetails";


function App() {
  return (
    <div className="App">
        <Header/>
        <hr/>
        <div className={"layout-container"}>
            <SinglePropertyCard/>
            <br></br>
            <PropertyDetails></PropertyDetails>
        </div>
    </div>
  );
}

export default App;
