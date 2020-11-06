import React, { useContext } from 'react';
import styled from 'styled-components';

const StyledSearchForm = styled.form`

`;

const SearchForm = () => {
    const {search, handleInputChange, handleFormSubmit} = useContext

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