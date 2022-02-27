import React, { useEffect, useState } from 'react';
import Button from '@/components/Button';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

interface DialogProps {
  /**
   * @description       弹窗标题
   */
  title: string;
  /**
   * @description       弹窗是否可见
   */
  visible?: boolean;
  /**
   * @description       切换弹窗可见性
   */
  setVisible: (visible: boolean) => void;
  /**
   * @description       点击遮罩是否可关闭
   */
  closeOnClickOverlay?: boolean;
  /**
   * @description       点击确定回调
   */
  onOk?: () => void;
  /**
   * @description       关闭弹窗回调
   */
  onCancel?: () => void;
  /**
   * @description       取消按钮文字
   */
  cancelText?: string;
  /**
   * @description       确定按钮文字
   */
  okText?: string;
  /**
   * @description       弹窗宽度
   */
  width?: number;
  /**
   * @description       自定义footer，为空传null
   */
  footer?: React.ReactNode | null;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    title,
    visible,
    setVisible,
    onCancel,
    footer,
    onOk,
    okText,
    cancelText,
    width,
    closeOnClickOverlay,
    children,
  } = props;

  const [myVisible, setMyVisible] = useState(visible);

  useEffect(() => {
    setMyVisible(visible);
  }, [visible]);

  const close = () => {
    setVisible(false);
    setMyVisible(false);
  };

  const onClickOverlay = () => {
    if (closeOnClickOverlay) close();
  };

  const [hoverClose, setHoverClose] = useState(false);
  const closeIconClasses = classNames('zero-dialog-close', {
    'zero-dialog-close-hover': hoverClose,
  });

  const Title = () => {
    return (
      <header>
        {title}
        <div
          onMouseEnter={() => setHoverClose(true)}
          onMouseLeave={() => setHoverClose(false)}
          onClick={() => setMyVisible(false)}
          className={closeIconClasses}
        />
      </header>
    );
  };

  const cancelHandler = () => {
    if (onCancel) {
      onCancel();
    }
    close();
  };

  const okHandler = () => {
    if (onOk) {
      onOk();
    }
    close();
  };

  const MyFooter = () => {
    return (
      <footer>
        <Button onClick={cancelHandler}>
          {cancelText ? cancelText : '取消'}
        </Button>
        <Button btnType="primary" onClick={okHandler}>
          {okText ? okText : '确认'}
        </Button>
      </footer>
    );
  };

  const Dialog = () => {
    return (
      <div>
        <div className="zero-dialog-overlay" onClick={onClickOverlay} />
        <div className="zero-dialog-wrapper">
          <div className="zero-dialog">
            {Title()}
            <main>{children}</main>
            {footer || footer === null ? footer : <MyFooter />}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>{myVisible ? ReactDOM.createPortal(<Dialog />, document.body) : null}</>
  );
};

Dialog.defaultProps = {
  visible: false,
  closeOnClickOverlay: false,
  cancelText: '取消',
  okText: '确认',
  width: 30,
};

export default Dialog;
