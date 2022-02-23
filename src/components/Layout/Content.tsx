import React from 'react';
import classNames from 'classnames';

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const Content: React.FC<ContentProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames('zero-layout-content', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Content;
