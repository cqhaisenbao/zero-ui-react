import React from 'react';
import { ThemeProps } from '@/components/Icon';

export interface ProgressProps {
  percent: number
  strokeHeight?: number
  showText?: boolean
  styles?: React.CSSProperties
  theme?: ThemeProps
}

const Progress: React.FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, styles, showText, theme } = props;
  return (
    <div className='zero-progress-bar' style={styles}>
      <div className='zero-progress-bar-outer' style={{ height: `${strokeHeight}px` }}>
        <div className={`zero-progress-bar-inner color-${theme}`} style={{ width: `${percent}%` }}>
          {showText && <span className='inner-text'>{`${percent}%`}</span>}
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
