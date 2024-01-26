import React from "react";

function AgencyCard({ name, image, onClick }) {
    return (
        <div className="agency-card cursor-pointer" onClick={() => onClick(name)}>
            <h2 className="text-center text-lg font-semibold mt-2">{name}</h2>
            
        </div>
    );
}

export default AgencyCard;
