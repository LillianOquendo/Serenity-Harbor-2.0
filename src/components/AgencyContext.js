import React, { createContext, useContext, useState } from 'react';

// Create a new context
const AgencyContext = createContext();

// Create a provider component
export function AgencyProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [agencies, setAgencies] = useState([]);

    const contextValue = {
        selectedCategory,
        setSelectedCategory,
        agencies,
        setAgencies,
    };

    return (
        <AgencyContext.Provider value={contextValue}>
            {children}
        </AgencyContext.Provider>
    );
}

// Hook to access the context
export function useAgencyContext() {
    return useContext(AgencyContext);
}
