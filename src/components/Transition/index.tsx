import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import React from 'react';

interface BaseTransitionProps {
  /**
   * @description       动画效果
   */
  animation?: 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right',
  /**
   * @description       是否添加包裹容器避免动画冲突
   */
  wrapper?: boolean,
}

type TransitionProps = BaseTransitionProps & CSSTransitionProps

const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, wrapper, animation, ...restProps } = props;
  return (
    <CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  unmountOnExit: true,
  wrapper: true,
  timeout: 200,
};

export default Transition;
