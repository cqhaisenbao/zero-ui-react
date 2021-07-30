import React from 'react';
import './index.scss';
import Button from '@/components/Button';

interface DialogProps {
  title: string;
  visible?: boolean;
  closeOnClickOverlay?: boolean;
  onOk: () => void;
  onCancel: () => void;
  cancelText?: string;
  okText?: string;
  width?: number;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    title,
    visible,
    onCancel,
    onOk,
    okText,
    cancelText,
    width,
    closeOnClickOverlay,
    children,
  } = props;

  const onClickOverlay = () => {};

  const Title = () => {
    return <header>{title}</header>;
  };

  const Footer = () => {
    return (
      <footer>
        <Button>{cancelText ? cancelText : '取消'}</Button>
        <Button btnType="primary">{okText ? okText : '确认'}</Button>
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
            {Footer()}
          </div>
        </div>
      </div>
    );
  };
  return <>{visible ? Dialog() : ''}</>;
};

Dialog.defaultProps = {
  visible: false,
  closeOnClickOverlay: false,
  cancelText: '取消',
  okText: '确认',
  width: 30,
};

export default Dialog;
