import React, {createContext, useState} from 'react';
import classNames from 'classnames';

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

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
};

export default Menu;
