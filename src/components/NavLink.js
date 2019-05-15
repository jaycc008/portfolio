import React, { useCallback } from 'react';
import styled from 'styled-components'

const NavLink = ({item, isActive, onClick}) => {
  return (
      <Tag
        onClick={useCallback(() => onClick(item.id), [item.id, onClick])} 
        className={isActive ? 'active' : ''}>
        {item.target}
      </Tag>
  );
}

const Tag = styled.p`
  cursor: pointer;
`;

export default NavLink;
