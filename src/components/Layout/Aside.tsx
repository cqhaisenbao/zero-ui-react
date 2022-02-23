import React from 'react';
import classNames from 'classnames';

interface AsideProps extends React.HTMLAttributes<HTMLDivElement> {}

const Aside: React.FC<AsideProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames('zero-layout-aside', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Aside;
