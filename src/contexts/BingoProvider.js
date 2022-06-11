import React, { useState } from 'react';
import BingoContext from './BingoContext';

function BingoProvider({ children }) {
    const [idTable, setIdTable] = useState();
    const contextTables = {
        idTable,
        setIdTable,
    }
    return (
        <BingoContext.Provider value={ contextTables }>
            { children }
        </BingoContext.Provider>
    );
}

export default BingoProvider;