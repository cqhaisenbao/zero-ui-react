import React, {createContext, useState} from 'react';
import classNames from 'classnames';
import {MenuItemProps} from './MenuItem';

type SelectedCallback = (selectedIndex: number) => void

export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: 'horizontal' | 'vertical'
  style?: React.CSSProperties
  onSelect?: SelectedCallback
}

interface MenuContext {
  index: number
  onSelect?: SelectedCallback
}

export const MenuContext = createContext<MenuContext>({index: 0});

const Menu: React.FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex, onSelect} = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames('zero-menu', className, {
    'menu-vertical': mode === 'vertical'
  });

  const handleClick = (index: number) => {
    setActive(index);
    onSelect && onSelect(index);
  };

  const passedContext: MenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  };

  const renderChidren = () => {
    return React.Children.map(children, (child, index) => {
      const childrenElement = child as React.FunctionComponentElement<MenuItemProps>;
      const {displayName} = childrenElement.type;
      if (displayName === 'MenuItem') {
        //这样就可以不用给item传index了
        return React.cloneElement(childrenElement, {
          index,
        });
      } else {
        console.error('Menu has a child which is not a MenuItem component');
      }
    });
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChidren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
};

export default Menu;
