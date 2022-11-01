import React, {useState, useEffect} from 'react';
import axios from "axios";
import SinglePropertyCard from "../single property card/SinglePropertyCard";
const baseURL = "https://ebkqjitsgh.execute-api.eu-central-1.amazonaws.com";

function Search(props) {

    const [listingData, setListingsData] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        axios.get(baseURL + "/prod/listings").then((response) => {
            setListingsData(response.data)
        });
    });


    return (
        <div>
            {listingData.map(listing => (
                <div className={"layout-container"}>
                    <SinglePropertyCard listing={listing}/>
                </div>
            ))}
        </div>
    );
}

export default Search;