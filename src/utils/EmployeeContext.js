import React from 'react';

const UserContext = React.createContext({
    result: {},
    search: "",
    handleInputChange: () => {},
    handleFormSubmit: () => {},
});

export default UserContext;