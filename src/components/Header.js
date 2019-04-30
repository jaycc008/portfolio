import React from 'react';
import styled from 'styled-components';
import Styles from '../Styles';

function Header() {
  return (
    <Wrapper>
        <nav>
            <Menu>
                <MenuItem><a href="#">JA</a></MenuItem>
                <MenuItem><a href="#">About</a></MenuItem>
                <MenuItem><a href="#">Work</a></MenuItem>
                <MenuItem><a href="#">Skills</a></MenuItem>
                <MenuItem><a href="#">Contact</a></MenuItem>
            </Menu>
        </nav>
        <Icons>
            <Icon><a href="#">FB</a></Icon>
            <Icon><a href="#">Insta</a></Icon>
        </Icons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    background-color: #1E2424;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    color: ${Styles.colors.secondary};
`;

const MenuItem = styled.li`
    margin: 0 0 0.8rem 2.4rem;
    font-size: ${Styles.fontSizes.default};

    &:first-child{
        font-family: 'Gugi', cursive;
        font-size: 5.2rem;
        margin: 2.4rem;
    }
`;

const Icons = styled.ul`
    position: absolute;
    bottom: 2.4rem;
    left: 2.4rem;
    display: flex;
    flex-direction: row;
    color: ${Styles.colors.secondary};
`;

const Icon = styled.li`
    margin-right: 8px;
`;

export default Header;
