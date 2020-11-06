import React from 'react';

const EmployeeContext = React.createContext({
    result: {},
    search: "",
    handleInputChange: () => {},
    handleFormSubmit: () => {},
});

export default EmployeeContext;