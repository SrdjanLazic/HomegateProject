import React from 'react';
import { useSelector } from 'react-redux'
import SinglePropertyCard from "../single property card/SinglePropertyCard";
import store from '../../../src/app/store'


function Favourites(props) {

    const state = store.getState();


    return (
        <div className={"layout-container"}>
            <div>
                {state.favourites.value.map(listing => (
                    <div className={"layout-container"}>
                        <SinglePropertyCard listing={listing}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favourites;