/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import styled from 'styled-components';
import Styles from '../Styles';
import linkedin from '../assets/icons/linkedin.svg';
import NavLink from './NavLink';

const menuItems = [
  {id: 0, target: "Home"}, 
  {id: 1, target: "About"}, 
  {id: 2, target: "Work"}, 
  {id: 3, target: "Skills"}, 
  {id: 4, target: "Contact"}
];

const Header = () => {
  const [activeId, setActiveId] = useState(0);

  const navigate = (id) => {
    setActiveId(id);
  };

  return (
    <Wrapper>
        <nav>
            <Menu>
              <li>
                <a href="#">JA</a>
              </li>
              {menuItems.map((item) => (
                <li key={item.id} >
                  <NavLink 
                    {...item}
                    isActive={activeId === item.id}
                    onClick={navigate} />
                </li>
              ))}
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

    li {
      margin: 0 0 0.8rem 2.4rem;
      font-size: ${Styles.fontSizes.default};
      
      &:first-child{
        font-family: 'Gugi', cursive;
        font-size: 5.2rem;
        margin: 2.4rem;
      }
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
