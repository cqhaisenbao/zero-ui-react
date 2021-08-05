import React, { ChangeEvent, useRef } from 'react';
import Button from '@/components/Button';
import axios from 'axios';

export interface UploadProps {
  action: string
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (arr: any, file: File) => void
  onChange?: (file: File) => void
}

export const Upload: React.FC<UploadProps> = (props) => {
  const { action, onError, onProgress, onChange, beforeUpload, onSuccess } = props;
  const fileInput = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then(processFile => {
            post(processFile);
          });
        } else if (result) {
          post(file);
        }
      }
    });
  };
  const post = (file: File) => {
    const formData = new FormData();
    formData.append(file.name, file);
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage < 100) {
          onProgress && onProgress(percentage, file);
        }
      },
    }).then(res => {
      console.log(res);
      onSuccess && onSuccess(res.data, file);
      onChange && onChange(file);
    }).catch(err => {
      console.log(err);
      onError && onError(err, file);
      onChange && onChange(file);
    });
  };
  return (
    <div className='zero-upload-wrapper'>
      <Button onClick={handleClick} btnType='primary'>Upload File</Button>
      <input onChange={handleFileChange} ref={fileInput} className='zero-file-input' style={{ display: 'none' }} type='file' />
    </div>
  );
};

export default Upload;
