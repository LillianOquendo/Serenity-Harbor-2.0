import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

function AgencyList({ selectedCategory, agencies }) {

    const filteredAgencies = agencies.filter(
        (agency) => agency.category === selectedCategory
    );

    return (
        <Carousel className="rounded-xl">
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
                            <span><strong>Address: </strong>{agency.fulladdress}</span><br></br>
                            <span><strong>Phone: </strong>{agency.phone}</span><br></br>
                            <span><strong>Website: </strong>{agency.website}</span><br></br>
                            <span><strong>Hours: </strong>{agency.opening_hours}</span><br></br>
                            </Typography>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
export default AgencyList;