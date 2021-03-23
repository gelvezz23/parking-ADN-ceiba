import { LeftSideblock } from './style';
import { NavItem } from './../../NavigationHeader/NavItem';
import PropTypes from 'prop-types';
import React from 'react';

interface Routers {
  routers: { text: string; url: string }[];
}

const LeftSide: React.FC<Routers> = ({ routers }) => {
  return (
    <LeftSideblock>
      {routers?.map(({ text, url }) => {
        return <NavItem key={url} label={text} to={url} />;
      })}
    </LeftSideblock>
  );
};

export default LeftSide;

LeftSide.propTypes = {
  routers: PropTypes.array.isRequired,
};
