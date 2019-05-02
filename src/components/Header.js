import React from 'react';
import styled from 'styled-components';
import Styles from '../Styles';
import linkedin from '../assets/icons/linkedin.svg'

function Header() {
  return (
    <Wrapper>
        <nav>
            <Menu>
                <MenuItem><a href="#">JA</a></MenuItem>
                <MenuItem><a href="#">Home</a></MenuItem>
                <MenuItem><a href="#">About</a></MenuItem>
                <MenuItem><a href="#">Work</a></MenuItem>
                <MenuItem><a href="#">Skills</a></MenuItem>
                <MenuItem><a href="#">Contact</a></MenuItem>
            </Menu>
        </nav>
        <Icons>
            <Icon className="icon-li" href="https://www.linkedin.com/in/jayce-ardon/" target="_blank"></Icon>
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

const Icon = styled.a`
    margin-right: 8px;
    &.icon-li{
        background-image: url(${linkedin});
        width: 2.4rem;
        height: 2.4rem;
    }
`;

export default Header;
