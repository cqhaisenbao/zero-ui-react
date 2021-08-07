---
title: Upload 上传 path: /components/upload
---

# Upload

## 默认用法

```tsx
import React, { useState } from 'react';
import { Upload } from 'zero-ui-react';

export default () => {
  const onProgressHandle = (percentage, file) => {
    console.log(percentage, file)
  }

  return (
    <div>
      <Upload action='https://www.fastmock.site/mock/091f0dd8445dd1bc86c0498bad219fa5/api/upload'
              onProgress={onProgressHandle}
      />
    </div>
  );
};
```

## 上传前校验

```tsx
import React, { useState } from 'react';
import { Upload } from 'zero-ui-react';

export default () => {
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('文件不能大于10kb')
      return false
    }
    return true
  }

  const changeHandle = (file) => {
    console.log(file)
  }

  return (
    <div>
      <Upload action='https://www.fastmock.site/mock/091f0dd8445dd1bc86c0498bad219fa5/api/upload'
              beforeUpload={checkFileSize}
              onChange={changeHandle}
      />
    </div>
  );
};
```

## 上传前处理

```tsx
import React, { useState } from 'react';
import { Upload } from 'zero-ui-react';

export default () => {
  const changeHandle = (file) => {
    console.log(file)
  }
  const filePromise = (file: File) => {
    const newFile = new File([file], '处理过的文件.xxx', { type: file.type })
    return Promise.resolve(newFile)
  }

  return (
    <div>
      <Upload action='https://www.fastmock.site/mock/091f0dd8445dd1bc86c0498bad219fa5/api/upload'
              beforeUpload={filePromise}
              onChange={changeHandle}
      />
    </div>
  );
};
```

## 显示上传数据

```tsx
import React, { useState } from 'react';
import { Upload } from 'zero-ui-react';

export default () => {
  const defaultFileList = [
    { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
    { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
    { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
  ]
  const filePromise = (file: File) => {
    const newFile = new File([file], '处理过的文件.xxx', { type: file.type })
    return Promise.resolve(newFile)
  }

  return (
    <div>
      <Upload action='https://www.fastmock.site/mock/091f0dd8445dd1bc86c0498bad219fa5/api/upload'
              beforeUpload={filePromise}
              defaultFileList={defaultFileList}
      />
    </div>
  );
};
```

<API></API>
