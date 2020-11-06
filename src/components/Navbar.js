import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
    display: flex;
    height: 100px;
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <nav className="navbar-dark">
                <span className="navbar-brand">Employee Directory</span>
            </nav>
        </StyledNavbar>
    )
};

export default Navbar;