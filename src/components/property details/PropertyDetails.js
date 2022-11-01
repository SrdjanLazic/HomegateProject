import React, {useState, useEffect} from 'react';
import './PropertyDetails.css';
import Header from "../header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import SinglePropertyCard from "../single property card/SinglePropertyCard";
const baseURL = "https://ebkqjitsgh.execute-api.eu-central-1.amazonaws.com";


function PropertyDetails(props) {

    const [currentListing, setCurrentListing] = useState({})
    const [listingImages, setListingImages] = useState([])

    let { id } = useParams();

    useEffect(() => {
        // Update the document title using the browser API
        axios.get(baseURL + `/prod/listings/${id}`).then((response) => {
            setCurrentListing(response.data[0])
            setListingImages(response.data[0].images)
            console.log(response.data[0])
        });
    });

    return (
        <div className={"layout-container"}>

            <div className={"images-slideshow"}>
{/*                <img*/}
{/*src={"https://media2.homegate.ch/f_auto/t_web_dp_small/listings/n070neuse/3002124817/image/6c2b8ef472c19d16d51f4bd33553a0de.jpg"}/>*/}
                <div className={"image-slideshow"}>
                    {listingImages.map(image => (
                        <div>
                            <img src={image}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"description"}>
                <h1>Description</h1>
                <h3>{currentListing.title}</h3>
                <div dangerouslySetInnerHTML={{__html: currentListing.description}}></div>

                {/*<div>*/}
                {/*    <p>Willkommen an der Segantinistrasse 166/174 in*/}
                {/*        Zürich-Höngg. Hier entsteht das moderne Neubauprojekt Segantini mit zwei identischen*/}
                {/*        Mehrfamilienhäusern, welches insgesamt acht Eigentumswohnungen der Grössen 2½-*/}
                {/*        bis &nbsp;6½-Zimmer umfasst.&nbsp;</p>*/}
                {/*    <p>Die exklusiven Wohnungen bestechen mit intelligenten*/}
                {/*        Raumkonzepten, durchdachten Grundrissen, grosszügigen Wohnflächen sowie mit hellen,*/}
                {/*        lichtdurchfluteten Wohnräumen.</p>*/}
                {/*    <p><strong>Lassen Sie sich von der 6½-Zimmer Eigentumswohnung überzeugen:</strong></p>*/}
                {/*    <ul>*/}
                {/*        <li><p>Verfügbar ab Winter 2024</p></li>*/}
                {/*        <li><p>Intelligentes Raumkonzept mit grosszügigen Wohnflächen</p></li>*/}
                {/*        <li><p>Moderne, hochwertige Küche mit Kücheninsel</p></li>*/}
                {/*        <li><p>Lichtdurchfluteter Wohn- und Essbereich</p></li>*/}
                {/*        <li><p>Schlafzimmer teils mit Ankleideraum oder direktem Anschluss an ein Badezimmer</p>*/}
                {/*        </li>*/}
                {/*        <li><p>Zwei edle Badezimmer mit Badewanne oder Dusche</p></li>*/}
                {/*        <li><p>Separate Gästetoilette</p></li>*/}
                {/*        <li><p>Entrée mit geräumigen Einbauschränken</p></li>*/}
                {/*        <li><p>Zwei Reduits mit integriertem Waschturm für zusätzlichen Stauraum</p></li>*/}
                {/*        <li><p>Grosser Balkon à 20.7 m²</p></li>*/}
                {/*        <li><p>Ein Parkplatz kann dazu erworben werden, pro Mehrfamilienhaus ist ein Rollstuhl- und*/}
                {/*            ein Besucherparkplatz vorhanden</p></li>*/}
                {/*        <li><p>Ein gemeinschaftlich nutzbarer Veloabstellplatz sowie die privaten Kellerabteile*/}
                {/*            befinden sich im Untergeschoss</p></li>*/}
                {/*    </ul>*/}
                {/*    <p><strong>Höngg ein Stadtquartier</strong></p>*/}
                {/*    <ul>*/}
                {/*        <li><p>Hervorragende und zentrumsnahe Lage</p></li>*/}
                {/*    </ul>*/}
                {/*    <ul>*/}
                {/*        <li><p>Das Zentrum ist zu Fuss erreichbar und bietet ein umfassendes Angebot an*/}
                {/*            Einkaufsmöglichkeiten, Detailhändlern, Dienstleistern, Restaurants</p></li>*/}
                {/*        <li><p>Ein breitgefächertes Kultur- und Freizeitangebot befindet sich direkt vor Ort</p>*/}
                {/*        </li>*/}
                {/*        <li><p>Mit den öffentlichen Verkehrsmitteln oder mit dem Auto erreichen Sie den zentral*/}
                {/*            gelegenen Escher-Wyss-Platz in wenigen Minuten</p></li>*/}
                {/*        <li><p>Das attraktiv ausgelegte Bildungsangebot mit diversen Schulen, der Kantonsschule*/}
                {/*            Zürich Nord und der staatlichen Universität ETH Hönggerberg, zieht zunehmend auch*/}
                {/*            jüngere Familien mit individualisiertem Lebensstil nach Höngg</p></li>*/}
                {/*        <li><p>Den benötigten Ausgleich mit viel Natur schaffen die nahegelegenen Wälder</p></li>*/}
                {/*    </ul>*/}
                {/*    <p>Ihr Interesse wurde geweckt?</p><p>Rufen Sie mich unverbindlich an oder melden Sie sich via*/}
                {/*    Formular auf der Projektwebsite.</p><p>Ich freue mich über Ihre Kontaktanfrage und stehe*/}
                {/*    Ihnen für eine persönliche Beratung gerne zur Verfügung.</p></div>*/}
            </div>
        </div>
    );
}

export default PropertyDetails;