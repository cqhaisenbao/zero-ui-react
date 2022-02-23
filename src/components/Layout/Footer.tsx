import React from 'react';
import classNames from 'classnames';

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames('zero-layout-footer', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Footer;
