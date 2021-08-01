---
title: Icon 图标
path: /components/icon
---

# Icon

## 默认用法

```tsx
import React, { useState } from 'react';
import { Icon } from 'zero-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
      <Icon icon="angle-up" theme="danger" size="10x" />
  );
};
```

<API></API>
