import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

const StorageHome = ({ children, ...props }) => {
    // console.log("Context Data in StorageHome:", props); 

    const [isTrue, setisTrue] = useState(false);

    return (
        <ShopContext.Provider value={{ isTrue, setisTrue, ...props }}>
            {children}
        </ShopContext.Provider>
    );
};

export default StorageHome;
