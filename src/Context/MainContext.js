import { createContext, useState } from 'react';
import React from 'react';

export const MainContext = createContext();

function MainContextProvider(props) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const [serviceType, setServiceType] = useState([]);
    const [foundAppointment, setFoundAppointment] = useState([]);

    return (
        <MainContext.Provider
            value={{
                modalVisible,
                setModalVisible,
                filteredItems,
                setFilteredItems,
                serviceType,
                setServiceType,
                foundAppointment,
                setFoundAppointment,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}
export default MainContextProvider;
