import React, {useState, useEffect} from "react";
import classNames from "classnames";
import myUseEffect from '../hooks/myUseEffect';
import './index.scss';

interface SwitchProps {
  /**
   * @description       当前选中状态
   */
  checked: boolean,
  /**
   * @description       选中状态改变时执行的回调
   */
  onChange: (checked: boolean) => void,
  /**
   * @description       是否禁用
   */
  disabled?: boolean,
  /**
   * @description       开关大小
   */
  size?: 'default' | 'sm'
}

export const Switch: React.FC<SwitchProps> = (props) => {
  const {checked, disabled, onChange, size} = props;
  const [value, setValue] = useState(false);

  const classes = classNames({'zero-checked': value}, 'zero-switch');
  const switchWrapperClasses = classNames({[`switch-${size}`]: size}, 'switchWrapper');

  useEffect(() => {
    setValue(checked);
  }, []);

  myUseEffect(value, onChange);

  return (
    <div className={switchWrapperClasses}>
      <button disabled={disabled} className={classes} onClick={() => setValue(!value)}>
        <span/>
      </button>
    </div>
  );
};

Switch.defaultProps = {
  size: 'default',
  disabled: false
};

export default Switch;
