import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = () => {
    return (
        <StyledFooter>
            &copy;{new Date().getFullYear()} Employee Directory
        </StyledFooter>
    ); 
};

export default Footer;