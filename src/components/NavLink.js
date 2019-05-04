import React, { useCallback } from 'react';

const NavLink = ({id, target, isActive, onClick}) => {
  return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#"
        onClick={useCallback(() => onClick(id), [id, onClick])} 
        className={isActive ? 'active' : ''}>
        {target}
      </a>
  );
}

export default NavLink;
