import React from 'react';
import './SimilarPropertyCard.css'

function SimilarPropertyCard(props) {

    const listing = props.listing

    return (

        <div className={"similar-card"}>
            <div className={"sim-img-container"}><img className={"similar-property-image"}
                    src={listing.images || "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"}/></div>
            <div className={"sim-desc-container"}><p className={"similar-property-title"}>{listing.title}</p></div>
        </div>
    );
}

export default SimilarPropertyCard;