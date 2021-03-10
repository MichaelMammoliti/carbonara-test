import React from 'react';

import { Button } from '@/components';

const KebabMenu = ({ theme }) => {
  const handleClick = () => {};

  const newTheme = theme === 'white' ? 'transparent-white' : 'transparent-gray';

  return (
    <Button theme={newTheme} type="icon-button" size="medium" icon="kebabMenu" onClick={handleClick} />
  );
};

export default KebabMenu;
