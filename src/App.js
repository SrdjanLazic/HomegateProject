import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
        <header>
            <div class="block1">
                <ul>
                    <li>Homegate</li>
                    <li>Submit ad</li>
                    <li>Rent</li>
                    <li>Buy</li>
                    <li>Mortgages</li>
                    <li>Moving</li>
                    <li>Advisor</li>
                    <li class="right">Favourites</li>
                    <li class="right">User account</li>
                    <li class="right">EN</li>
                </ul>
            </div>
        </header>
        <hr></hr>
        <div class="card">
            <div class="images">
                <div class="main-image">

                    <img
                        src="https://media2.homegate.ch/f_auto/t_web_dp_large/listings/hgonif/3002141007/image/42d0289f48469599ab639d066bb3d9b4.jpg"></img>
                </div>
                <div class="other-images">
                    <img src="https://media2.homegate.ch/f_auto/t_web_320/listings/hgonif/3002141007/image/56a1f6ef9af4ef235de2cce09afc9ab3.jpg"></img>
                    <img src="https://media2.homegate.ch/f_auto/t_web_320/listings/hgonif/3002141007/image/22e6d9d9f917a7acaa7c743a347613ce.jpg"></img>
                    <img src="https://media2.homegate.ch/f_auto/t_web_320/listings/hgonif/3002141007/image/882580fa7da510c9bbd90c7d30abfb87.jpg"></img>
                </div>
            </div>
            <div class="info">
                <div class="title">
                    <h4>CHF3,500,000.–</h4>
                    <h4>150m2</h4>
                    <h4>5.5rm</h4>
                    <p>Premium</p>
                </div>
                <hr></hr>
                <div class="description">
                    <p>8047 Zürich</p>
                    <p>***********Details zur Liegenschaft (inkl. Dokumentation) finden Sie in der beigelegten
                        Broschüre.********An der ruhigen Spiserstrasse im Zürcher Trendquartier Albisrieden (Stadtkreis
                        9) unweit vom
                        Stadtzentrum befindet sich das 1929 erbaute Doppeleinfamilienhaus auf einem sonnigen, 387m2
                        grossen Grundstück. Perfekt gelegen zur Stadt und zum Naherholungsgebiet bietet es den
                        idealen Ausgleich zwischen Stadtleben und Natur.Schon der 239 m2 grosse Vorgarten mit seiner
                        sonnigen Terrasse lädt die Liegenschafts-Besucher zum</p>
                    <button>Contact the advertiser</button>
                </div>
                <hr></hr>
                <div class="footer">
                    <p>Save</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
