import React, { useContext } from 'react';
import EmployeeContext from '../utils/EmployeeContext';
import styled from 'styled-components';

const StyledSearchForm = styled.form`
    display: flex;
`;

const SearchForm = () => {
    const {search, handleInputChange, handleFormSubmit} = useContext
    (EmployeeContext);

    return (
        <StyledSearchForm>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    value={search}
                    name="search"
                    placeholder="Search for an Employee"
                    id="search"
                    onChange={handleInputChange}
                />
                <br />
            {/*Enter click functionality*/}

            </div>
        </StyledSearchForm>
    );
};

export default SearchForm;