import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`;

const Header = () => {
    return (
        <StyledHeader>
                <h1>Employee Directory</h1>
        </StyledHeader>
    )
};

export default Header;