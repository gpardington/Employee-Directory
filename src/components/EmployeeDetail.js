import React, { useContext } from 'react';
import EmployeeContext from '../utils/EmployeeContext';
import SearchForm from './SearchForm';
import styled from 'styled-components';

const StyledEmployeeDetail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const EmployeeDetail = () => {

    const {
        result: { Picture, Name, Phone, Email, DOB },
    } = useContext(EmployeeContext);

    return (
    <StyledEmployeeDetail>
        <div className="card">
            {Name ? (
                <>
                <h1>{Name || "Search for an Employee to Begin"}</h1>
                <img alt={Name} src={Picture} />
                <h3>Phone: {Phone}</h3>
                <h3>EMail: {Email}</h3>
                <h3>DOB: {DOB}</h3>
                </>
            ) : (
                <h3>No Results to Display</h3>
            )}
            <SearchForm />
        </div>
    </StyledEmployeeDetail>
    );
};

export default EmployeeDetail;