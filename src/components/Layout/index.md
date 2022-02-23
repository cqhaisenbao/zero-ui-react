---
title: Layout 布局
path: /components/layout
---

# Layout

## 默认用法

```tsx
import React, { useState } from 'react';
import { Icon } from 'zero-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  return <Icon icon="angle-down" theme="primary" size="10x" />;
};
```

<API></API>
