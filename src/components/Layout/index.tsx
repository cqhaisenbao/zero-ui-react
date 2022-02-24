import React from 'react';
import classNames from 'classnames';

interface LayoutProps {
  className?: string;
  style?: React.CSSProperties;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { className, children, ...rest } = props;

  const hasAside = React.Children.toArray(children).find((child) => {
    const childrenElement = child as React.FunctionComponentElement<{}>;
    const { displayName } = childrenElement.type;
    return displayName === 'Aside';
  });

  const classes = classNames('zero-layout', className, {
    hasAside,
  });
  return (
    <div className={classes} {...rest} data-testid={'layout'}>
      {children}
    </div>
  );
};

export default Layout;
