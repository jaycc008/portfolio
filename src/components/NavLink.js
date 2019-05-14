import React, { useCallback } from 'react';

const NavLink = ({item, isActive, onClick}) => {
  return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#"
        onClick={useCallback(() => onClick(item.id), [item.id, onClick])} 
        className={isActive ? 'active' : ''}>
        {item.target}
      </a>
  );
}

export default NavLink;
