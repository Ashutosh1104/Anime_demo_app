import React from "react";

function Expand({ anime , activeExpand }){
    return (
        <>
        <div className="expand-details">
            <span>{anime.plot}</span>
        </div>
        </>
    )
};

export default Expand;