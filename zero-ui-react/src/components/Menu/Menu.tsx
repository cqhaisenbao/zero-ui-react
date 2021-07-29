import React from 'react';
import classNames from 'classnames';

export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
  onSelect?: (selectedIndex: number) => void
}

const Menu: React.FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex} = props;
  const classes = classNames('zero-menu', className, {
    'menu-vertical': mode === 'vertical'
  });
  return (
    <ul className={className} style={style}>
      {children}
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
};

export default Menu;
