---
title: Progress 进度条 path: /components/progress
---

# Progress

## 默认用法

```tsx
import React, { useEffect, useState } from 'react';
import { Progress, Button } from 'zero-ui-react';

export default () => {
  const [percent, setPetcent] = useState(10)

  return (
    <div>
      <Button onClick={() => {setPetcent(percent + 10)}}>+ 10%</Button>
      <Progress percent={percent} theme='danger'/>
    </div>
  );
};
```

<API></API>
