import React from 'react';

const EmployeeContext = React.createContext({
    results: {},
    search: "",
    handleInputChange: () => {},
    handleFormSubmit: () => {},
});

export default EmployeeContext;