import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";

function AgencyList(){
    return(<div></div>)
}
export default AgencyList;

// function AgencyList({ selectedCategory, agencies }) {
//     const filteredAgencies = agencies.filter(
//         (agency) => agency.category === selectedCategory
//     );

//     return (
//         <Carousel className="agencies-list rounded-xl">
//             {filteredAgencies.map((agency) => (
//                 <div key={agency.id} className="">
//                     <img
//                         src={agency.image} 
//                         alt={agency.name}
//                         className=""
//                     />
//                     <div className="">
//                         <div className="">
//                             <Typography
//                                 variant=""
//                                 color=""
//                                 className=""
//                             >
//                                 {agency.name}
//                             </Typography>
//                             <Typography
//                                 variant=""
//                                 color=""
//                                 className=""
//                             >
//                             <p><strong>Address: </strong>{agency.fulladdress}</p>
//                             <p><strong>Phone: </strong>{agency.phone}</p>
//                             <p><strong>Website: </strong>{agency.website}</p>
//                             <p><strong>Hours: </strong>{agency.opening_hours}</p>
//                             </Typography>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </Carousel>
//     );
// }




// export default AgencyList