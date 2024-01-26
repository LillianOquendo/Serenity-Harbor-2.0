import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";

function AgencyList({ selectedCategory, agencies }) {
    const filteredAgencies = agencies.filter(
        (agency) => agency.category === selectedCategory
    );

    return (
        <Carousel className="agencies-list rounded-xl">
            {filteredAgencies.map((agency) => (
                <div key={agency.id} className="relative h-full w-full">
                    <img
                        src={agency.image} 
                        alt={agency.name}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {agency.name}
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                            <p><strong>Address: </strong>{agency.fulladdress}</p>
                            <p><strong>Phone: </strong>{agency.phone}</p>
                            <p><strong>Website: </strong>{agency.website}</p>
                            <p><strong>Hours: </strong>{agency.opening_hours}</p>
                            </Typography>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}




        // <div className="agencies-list">
        //     {filteredAgencies.map((agency) => (
        //         <div key={agency.id} className="agency">
        //             <h4>Name: {agency.name}</h4>
        //             <p>Address: {agency.fulladdress}</p>
        //             <p>Phone: {agency.phone}</p>
        //             <p>Website: <a href={agency.website}>{agency.website}</a></p>
        //             <p>Opening Hours: {agency.opening_hours}</p>
        //         </div>
        //     ))}
        // </div>

export default AgencyList