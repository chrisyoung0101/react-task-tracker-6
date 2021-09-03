import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* text says "when showAdd is true btn text is Close else Add" */}
      {/* conditional reads the same for color */}
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Traversy Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
