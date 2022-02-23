import React from 'react';
import classNames from 'classnames';

interface LayoutProps {
  className?: string;
  style?: React.CSSProperties;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { className, children, ...rest } = props;
  const classes = classNames('zero-layout', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Layout;
