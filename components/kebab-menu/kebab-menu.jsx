import React, { useState } from 'react';

import { Button } from '@/components';

const KebabMenu = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const theme = isActive ? 'dark-gray-white' : 'transparent-dark-gray';

  const handleButtonClick = () => {
    setIsActive(!isActive);
    onClick(!isActive);
  };

  return (
    <Button
      type="icon-button"
      size="30"
      shape="round-square"
      icon={{ name: 'hamburger-menu', size: '24' }}
      theme={theme}
      onClick={handleButtonClick}
    />
  );
};

export default KebabMenu;
