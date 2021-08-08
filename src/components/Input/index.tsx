import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames';
import Icon from '@/components/Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**
   * @description       是否禁用
   */
  disabled?: boolean
  /**
   * @description       输入框大小
   */
  size?: 'lg' | 'sm'
  /**
   * @description       icon名称
   */
  icon?: IconProp
  /**
   * @description       带前缀
   */
  prepand?: string | ReactElement
  /**
   * @description       带后缀
   */
  append?: string | ReactElement
  /**
   * @description       输入框change回调
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {
  const { disabled, size, icon, prepand, append, ...restProps } = props;
  const classes = classNames('zero-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepand || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepand,
  });

  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value
  };
  if ('value' in props) {
    restProps.value = fixControlledValue(props.value);
  }

  return (
    <div className={classes}>
      {prepand && <div className='zero-input-group-prepend'>{prepand}</div>}
      {icon && <div className='icon-wrapper'><Icon icon={icon} title={`title-${icon}`} /></div>}
      <input className='zero-input-inner' {...restProps} disabled={disabled} />
      {append && <div className='zero-input-group-append'>{append}</div>}
    </div>
  );
};

export default Input;
