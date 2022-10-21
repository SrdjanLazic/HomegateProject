import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import SinglePropertyCard from "./components/single property card/SinglePropertyCard";


function App() {
  return (
    <div className="App">
        <Header/>
        <hr/>
        <SinglePropertyCard/>
    </div>
  );
}

export default App;
