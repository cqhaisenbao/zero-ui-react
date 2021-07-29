import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, MouseEventHandler } from 'react';
import './index.scss';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export interface BaseButtonProps {
  /**
   * @description       支持自定义class
   */
  className?: string;
  /**
   * @description       是否禁用状态
   */
  disabled?: boolean;
  /**
   * @description       按钮大小
   */
  size?: 'lg' | 'sm';
  /**
   * @description       按钮类型
   */
  btnType?: 'primary' | 'default' | 'danger' | 'link';
  /**
   * @description       按钮内容
   */
  children: React.ReactNode;
  /**
   * @description       link按钮必须传href
   */
  href?: string;
  /**
   * @description       加载状态
   */
  loading?: boolean;
  /**
   * @description       点击回调
   */
  onClick?: MouseEventHandler<HTMLElement>;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<BaseButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, loading, href, ...restProps } = props;

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'loading': loading,
    'disabled': (btnType === 'link') && disabled,
  });
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {loading && <span className='loading' />}
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  children: '按钮默认文字',
  btnType: 'default',
};

export default Button;
