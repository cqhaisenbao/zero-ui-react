import React, { useState, DragEvent } from 'react';
import classNames from 'classnames';

interface DraggerProps {
  onFIle: (files: FileList) => void
}

const Dragger: React.FC<DraggerProps> = (props) => {
  const { onFIle, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const classes = classNames('zero-uploader-dragger', {
    'is-dragover': dragOver,
  });
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
    onFIle(e.dataTransfer.files);
  };

  return (
    <div className={classes} onDragOver={e => handleDrag(e, true)} onDragLeave={e => handleDrag(e, false)} onDrop={handleDrop}>
      {children}
    </div>
  );
};

export default Dragger;
