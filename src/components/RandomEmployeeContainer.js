import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import EmployeeContext from '../utils/EmployeeContext';
import Header from './Header';
import Main from './Main';
import EmployeeDetail from './EmployeeDetail';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
`;

const RandomEmployeeContainer = () => {
    const [result, setResult] = useState({});
    const [search, setSearch] = useState("");

    useEffect(() => {
        searchEmployees('Bob Miller');
    }, []);

    const searchEmployees = async (query) => {
        try {
            const res = await API.search(query);
            console.log("RandomEmployeeContainer -> res", res.data)
            setResult(res.data);
        } catch (error) {
            console.log("There was an error processing your results.");
        }
    };

    const handleInputChange = event => {
        const { value } = event.target;
        setSearch(value);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        searchEmployees(search);
    }
  

return (
    <EmployeeContext.Provider value={{
        search,
        result,
        handleInputChange,
        handleFormSubmit,
        }}
    >
        <Layout>
            <Header />
            <Main>
                <EmployeeDetail />
            </Main>
            <Footer />
        </Layout>
    </EmployeeContext.Provider>
    );
};

export default RandomEmployeeContainer;