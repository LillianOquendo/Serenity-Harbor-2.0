import React, { useEffect, useState } from "react";
import AgencyCard from "./AgencyCard";
import AgencyList from "./AgencyList";
import AgencyMaps from "./AgencyMaps";
import AgencyCarousel from "./AgencyCarousel";


function AgencyMain() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [agencies, setAgencies] =useState([]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(()=>{
        fetch ('/agencies')
        .then (response => response.json())
        .then (agencies =>setAgencies(agencies))
    }, []);



    const categories = [
        { name: 'Legal services'},
        { name: 'Health'},
        { name: 'Housing'},
        { name: 'Food'},
    ];

    return (
        <div>
            <br></br>
            <br></br>
        <div><h3 id="heading-1" className="text-lg font-bold text-black leading-6 lg:text-5xl text-center">
            Agency Locator</h3></div>
            <br></br>
            <div><p id="heading-1" className="text-sm text-black leading-6 lg:text-2xl text-center">
            Select a category to get started:</p></div>
        <div className="agencyContainer">
            <div>
                
            <AgencyMaps selectedCategory={selectedCategory} />
            <div className="category-cards">
                {categories.map((category) => (
                    <AgencyCard
                        key={category.name}
                        name={category.name}
                        onClick={handleCategoryClick}
                    />
                ))}
            </div>
            {selectedCategory && (
                <div className="carousel-container">
                    <AgencyList selectedCategory={selectedCategory} agencies={agencies}/> 
                    </div>
            ) }
        </div>
        <AgencyCarousel/>
        </div>
        </div>
    );
}

export default AgencyMain;

