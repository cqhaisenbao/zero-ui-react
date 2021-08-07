import React, { ChangeEvent, useRef, useState } from 'react';
import Button from '@/components/Button';
import axios from 'axios';
import UploadList from '@/components/Upload/UploadList';
import './index.scss';

export interface UploadFile {
  uid: string
  size: number
  name: string
  status?: 'ready' | 'uploading' | 'success' | 'error'
  percent?: number
  raw?: File
  response?: any
  error?: any
}

export interface UploadProps {
  action: string
  defaultFileList?: UploadFile[]
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (arr: any, file: File) => void
  onChange?: (file: File) => void
  onRemove?: (file: UploadFile) => void
  headers?: { [key: string]: any }
  name?: string
  data?: { [key: string]: any }
  withCredentials?: boolean
}

export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    onError,
    onProgress,
    onChange,
    beforeUpload,
    onSuccess,
    defaultFileList,
    onRemove,
    name,
    headers,
    data,
    withCredentials,
  } = props;
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

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
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid);
    });
    onRemove && onRemove(file);
  };
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList([_file, ...fileList]);
    const formData = new FormData();
    formData.append(name || 'file', file);
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data',
      },
      withCredentials,
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage < 100) {
          updateFileList(_file, { percent: percentage, status: 'uploading' });
          onProgress && onProgress(percentage, file);
        }
      },
    }).then(res => {
      updateFileList(_file, { status: 'success', response: res.data });
      onSuccess && onSuccess(res.data, file);
      onChange && onChange(file);
    }).catch(err => {
      updateFileList(_file, { status: 'error', error: err });
      onError && onError(err, file);
      onChange && onChange(file);
    });
  };
  console.log(fileList);
  return (
    <div className='zero-upload-wrapper'>
      <Button onClick={handleClick} btnType='primary'>Upload File</Button>
      <input onChange={handleFileChange} ref={fileInput} className='zero-file-input' style={{ display: 'none' }} type='file' />
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

Upload.defaultProps = {
  name: 'file',
};

export default Upload;
