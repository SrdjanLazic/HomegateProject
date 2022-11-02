import './SinglePropertyCard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from 'react-redux'
import { addToFavourites, removeFromFavourites } from '../../features/favourites/favouritesSlice'
import {Link} from "react-router-dom";
import PropertyDetails from "../property details/PropertyDetails";

function changeButtonValue(favourited){


}


function SinglePropertyCard(props) {

    const favourites = useSelector((state) => state.favourites.value)
    const dispatch = useDispatch()
    let favourited = false

    let listing = props.listing

    return (
        <div class={"layout-container"}>
            <Link to={`/details/${listing.id}`} component={PropertyDetails} class={"card-link"}>
                <div class="card">
                    <div className={"images"}>
                        <div class="main-image">
                            {/*<img*/}
                            {/*    src="https://media2.homegate.ch/f_auto/t_web_dp_large/listings/hgonif/3002141007/image/42d0289f48469599ab639d066bb3d9b4.jpg"/>*/}
                            <img src={listing.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"}/>
                        </div>
                        <div class="other-images">
                            <img
                                src="https://media2.homegate.ch/f_auto/t_web_320/listings/hgonif/3002141007/image/56a1f6ef9af4ef235de2cce09afc9ab3.jpg"/>
                            <img
                                src="https://media2.homegate.ch/f_auto/t_web_320/listings/hgonif/3002141007/image/22e6d9d9f917a7acaa7c743a347613ce.jpg"/>
                            <img
                                src="https://media2.homegate.ch/f_auto/t_web_320/listings/hgonif/3002141007/image/882580fa7da510c9bbd90c7d30abfb87.jpg"/>
                        </div>
                    </div>

                    <div class="info">
                        <div class="title">
                            {/*<h3>3,500,000.–</h3>*/}
                            {/*<h3>150<span>m<sup>2</sup></span></h3>*/}
                            {/*<h3>5.5rm</h3>*/}
                            {/*<p>Premium</p>*/}
                            <h3>{listing.title}</h3>
                        </div>
                        <hr className={"first-hr"}/>
                        <div class="description">
                            <strong>8047 Zürich</strong>
                            <p>Details zur Liegenschaft (inkl. Dokumentation) finden Sie in der beigelegten
                                Broschüre.An der ruhigen Spiserstrasse im Zürcher Trendquartier Albisrieden
                                (Stadtkreis
                                9) unweit vom
                                Stadtzentrum befindet sich das 1929 erbaute Doppeleinfamilienhaus auf einem
                                sonnigen,
                                387m2
                                grossen Grundstück. Perfekt gelegen zur Stadt und zum Naherholungsgebiet bietet es
                                den
                                idealen Ausgleich zwischen Stadtleben und Natur.Schon der 239 m2 grosse Vorgarten
                                mit
                                seiner
                                sonnigen Terrasse lädt die Liegenschafts-Besucher zum</p>
                            <button className={"contact-button"}>Contact the advertiser</button>
                        </div>
                        <hr/>
                        <div class="footer">
                            {/*<span className={"save-icon"}><FavoriteBorderIcon/><span>Save</span></span>*/}

                            {
                                favourited === false ?
                                    <span
                                        className={"save-icon"}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            dispatch(addToFavourites(listing));
                                            favourited = true;
                                            changeButtonValue(favourited)
                                        }}
                                    ><FavoriteBorderIcon/>Save</span>

                                    :

                                    <span
                                        className={"save-icon"}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            dispatch(removeFromFavourites);
                                            favourited = false;
                                            changeButtonValue(favourited)
                                        }}
                                    ><FavoriteIcon/>Save</span>
                            }

                            
                            <button className={"contact-button"}>Contact</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SinglePropertyCard;