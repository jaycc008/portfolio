import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavLink = ({ item, isActive, onClick }) => (
  <Tag
    onClick={useCallback(() => onClick(item.id), [item.id, onClick])}
    className={isActive ? 'active' : ''}
  >
    {item.target}
  </Tag>
);

NavLink.propTypes = {
  item: PropTypes.shape({}),
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

const Tag = styled.p`
  cursor: pointer;
`;

export default NavLink;
