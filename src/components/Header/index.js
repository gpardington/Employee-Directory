import React from 'react';
/*{import styled from 'styled-components';

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
};}*/

function Header() {
    return (
      <nav className="navbar navbar-dark navbar-bg bg-dark">
        <span className="navbar-brand mx-auto h1">Employee Directory</span>
      </nav>
    );
  }


export default Header;