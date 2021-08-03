import React, { InputHTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames';
import Icon from '@/components/Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean
  size?: 'lg' | 'sm'
  icon?: IconProp
  prepand?: string | ReactElement
  append?: string | ReactElement
}


const Input: React.FC<InputProps> = (props) => {
  const { disabled, size, icon, prepand, append } = props;
  const classes = classNames('zero-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepand || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepand,
  });

  return (
    <div className={classes}>
      {prepand && <div className='zero-input-group-prepend'>{prepand}</div>}
      {icon && <div className='icon-wrapper'><Icon icon={icon} title={`title-${icon}`} /></div>}
      <input className='zero-input-inner' disabled={disabled} />
      {append && <div className='zero-input-group-append'>{append}</div>}
    </div>
  );
};

export default Input;
