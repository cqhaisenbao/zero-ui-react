import React, { ChangeEvent, useRef, useState } from 'react';
import Button from '@/components/Button';
import axios from 'axios';
import UploadList from '@/components/Upload/UploadList';
import Dragger from '@/components/Upload/Dragger';

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
  /**
   * @description       文件上传地址
   */
  action: string
  /**
   * @description       默认文件列表
   */
  defaultFileList?: UploadFile[]
  /**
   * @description       文件上传前的回调
   */
  beforeUpload?: (file: File) => boolean | Promise<File>
  /**
   * @description       上传进度变化的回调
   */
  onProgress?: (percentage: number, file: File) => void
  /**
   * @description       文件上传成功的回调
   */
  onSuccess?: (data: any, file: File) => void
  /**
   * @description       文件上传失败的回调
   */
  onError?: (arr: any, file: File) => void
  /**
   * @description       文件改变的回调
   */
  onChange?: (file: File) => void
  /**
   * @description       移除文件的回调
   */
  onRemove?: (file: UploadFile) => void
  /**
   * @description       自定义headers
   */
  headers?: { [key: string]: any }
  /**
   * @description       自定义发到后台的文件名参数
   */
  name?: string
  /**
   * @description       上传所需的额为参数
   */
  data?: { [key: string]: any }
  /**
   * @description       上传是否携带cookie
   */
  withCredentials?: boolean
  /**
   * @description       限制允许文件类型
   */
  accept?: string
  /**
   * @description       支持多文件上传
   */
  multiple?: boolean
  /**
   * @description       自定义上传触发元素
   */
  children?: React.ReactNode
  /**
   * @description       是否支持拖拽上传
   */
  drag?: boolean
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
    accept,
    multiple,
    children,
    drag,
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
    setFileList(prevList => {
      return [_file, ...prevList];
    });
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
  const Children = children ? children : <Button onClick={handleClick} btnType='primary'>Upload File</Button>;
  return (
    <div className='zero-upload-wrapper'>
      <div className='zero-upload-input' style={{ display: 'inline-block' }} onClick={handleClick}>
        {drag ? <Dragger onFIle={(files) => {uploadFiles(files);}}>{children}</Dragger> : Children}
        <input onChange={handleFileChange} accept={accept} multiple={multiple} ref={fileInput} className='zero-file-input' style={{ display: 'none' }} type='file' />
      </div>
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

Upload.defaultProps = {
  name: 'file',
};

export default Upload;
