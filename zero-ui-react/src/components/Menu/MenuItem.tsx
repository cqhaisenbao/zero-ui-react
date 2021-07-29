import React, {useContext} from 'react';
import classNames from 'classnames';
import {MenuContext} from './Menu';

interface MenuItemProps {
  index: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {index, disabled, className, style, children} = props;
  const {index: ctxIndex, onSelect} = useContext(MenuContext);
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': index === ctxIndex
  });
  const handleClick = () => {
    onSelect && !disabled && onSelect(index);
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
