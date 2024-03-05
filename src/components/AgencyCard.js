import React from "react";
//class="flex flex-row min-h-screen justify-center items-center"
function AgencyCard({ name, onClick }) {
    return (
        <div className="resize-y rounded-md">
        <div className="agency-card cursor-pointer" onClick={() => onClick(name)}>
            <h2 className="text-center text-xl text-white font-semibold mt-2">{name}</h2>
            
        </div>
        </div>
    );
}

export default AgencyCard;