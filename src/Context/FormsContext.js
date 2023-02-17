import { createContext, useState } from 'react';
import React from 'react';

export const FormsContext = createContext();

function FormsContextProvider(props) {
 const [inputs, setInputs] = React.useState({
     firstName: '',
     lastName: '',
 });

    return (
        <FormsContext.Provider
            value={{
                inputs,
                setInputs
            }}
        >
            {props.children}
        </FormsContext.Provider>
    );
}
export default FormsContextProvider;
