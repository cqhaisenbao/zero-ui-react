import React from 'react';
import classNames from 'classnames';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames('zero-layout-header', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Header;
