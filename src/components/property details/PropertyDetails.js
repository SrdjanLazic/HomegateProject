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
    const [similarListings, setSimilarListings] = useState([])

    let { id } = useParams();

    useEffect(() => {
        // Update the document title using the browser API
        axios.get(baseURL + `/prod/listings/${id}`).then((response) => {
            setCurrentListing(response.data[0])
            setListingImages(response.data[0].images)
        });

        axios
            .get(baseURL + `/prod/listings/${id}/similar`)
            .then(response => {
                const results = response.data

                console.log("Results length " + results.length)

                results.forEach(element =>
                {
                    console.log("Similar ID received: " + element)
                    axios.get(baseURL + `/prod/listings/${element}`)
                        .then(result => {
                            console.log("Similar listing received: " + result.data[0].title)
                            similarListings.push(result.data[0]);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                })
            })
            .then(()=>setSimilarListings(similarListings))
            .catch(err => {
                console.log(err);
            });
    }, []);




    return (
        <div className={"layout-container"}>

            <div className={"images-slideshow"}>
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
            </div>
            <div className={"similar-listings"}>
                {
                    similarListings.map(
                        listing => (
                            <div>
                                <p>{listing.title}</p>
                                <p>{listing.description}</p>
                            </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PropertyDetails;