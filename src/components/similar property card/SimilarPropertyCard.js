import React from 'react';

function SimilarPropertyCard(props) {

    const listing = props.listing

    return (

        <div className={"similar-card"}>
            <img src={listing.images || "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}/>
            <p>{listing.title}</p>
        </div>
    );
}

export default SimilarPropertyCard;