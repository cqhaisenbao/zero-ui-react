---
title: Input 输入框 
path: /components/input
---

# Input

## 默认用法

```tsx
import React, { useState } from 'react';
import { Input } from 'zero-ui-react';

export default () => {
  return (
    <div style={{ width: '300px' }}>
      <Input />
    </div>
  );
};
```

## 带icon

```tsx
import React, { useState } from 'react';
import { Input } from 'zero-ui-react';

export default () => {
  return (
    <div style={{ width: '300px' }}>
      <Input icon="user" />
    </div>
  );
};
```

## 不同大小

```tsx
import React, { useState } from 'react';
import { Input } from 'zero-ui-react';

export default () => {
  return (
    <div style={{ width: '300px' }}>
      <Input />
      <Input size="lg" />
      <Input size="sm" />

    </div>
  );
};
```

## 带前后缀

```tsx
import React, { useState } from 'react';
import { Input } from 'zero-ui-react';

export default () => {
  const [value,setValue]=useState('')
  return (
    <div style={{ width: '300px' }}>
      <Input prepand="https://" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <Input append=".com"/>
    </div>
  );
};
```

<API></API>
