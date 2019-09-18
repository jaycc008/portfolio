import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

import Styles from '../Styles';
import linkedin from '../icons/linkedin.svg';
import NavLink from './NavLink';

const menuItems = [
  { id: 0, target: 'Home' },
  { id: 1, target: 'About' },
  { id: 2, target: 'Work' },
  { id: 3, target: 'Contact' },
];

const Header = () => {
  const [activeId, setActiveId] = useState(0);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight * 3) {
      setActiveId(3);
    } else if (window.scrollY >= window.innerHeight * 2) {
      setActiveId(2);
    } else if (window.scrollY >= window.innerHeight) {
      setActiveId(1);
    } else {
      setActiveId(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (id) => {
    scroll.scrollTo(id * window.innerHeight);
  };

  return (
    <Wrapper>
      <nav>
        <Menu>
          <Logo>
            JA
          </Logo>
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                item={item}
                isActive={activeId === item.id}
                onClick={navigate}
              />
            </li>
          ))}
        </Menu>
      </nav>
      <Icons>
        <Icon className="icon-li" href="https://www.linkedin.com/in/jayce-ardon/" target="_blank" />
      </Icons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${Styles.colors.header};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${Styles.colors.primary};

  li {
    margin: 0 0 0.8rem 2.4rem;
    font-size: ${Styles.fontSizes.XS};
    
    &:first-child{
      font-family: 'Gugi', cursive;
      font-size: ${Styles.fontSizes.Logo};
      margin: 2.4rem;
    }
  }
`;

const Logo = styled.li`
  user-select: none;
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
