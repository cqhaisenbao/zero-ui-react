import React, { useEffect, useState } from 'react';

export interface ProgressProps {
  /**
   * @description       当前进度
   */
  percent: number
  /**
   * @description       容器高度
   */
  strokeHeight?: number
  /**
   * @description       容器内是否展示进度
   */
  showText?: boolean
  /**
   * @description       自定义style
   */
  styles?: React.CSSProperties
  /**
   * @description       主题
   */
  theme?:  'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
}

const Progress: React.FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, styles, showText, theme } = props;
  const [myPercent, setMyPercent] = useState(percent);
  useEffect(() => {
    if (percent > 100) return;
    setMyPercent(percent);
  }, [percent]);

  return (
    <div className='zero-progress-bar' style={styles}>
      <div className='zero-progress-bar-outer' style={{ height: `${strokeHeight}px` }}>
        <div className={`zero-progress-bar-inner color-${theme}`} style={{ width: `${myPercent}%` }}>
          {showText && <span className='inner-text'>{`${myPercent}%`}</span>}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
};

export default Progress;
