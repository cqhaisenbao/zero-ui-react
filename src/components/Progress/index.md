---
title: Progress 进度条 
path: /components/progress
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
      <Progress percent={percent} />
    </div>
  );
};
```

## 隐藏文本

```tsx
import React, { useEffect, useState } from 'react';
import { Progress, Button } from 'zero-ui-react';

export default () => {
  const [percent, setPetcent] = useState(10)

  return (
    <div>
      <Button onClick={() => {setPetcent(percent + 10)}}>+ 10%</Button>
      <Progress showText={false} percent={percent} />
    </div>
  );
};
```

## 不同主题

```tsx
import React, { useEffect, useState } from 'react';
import { Progress, Button } from 'zero-ui-react';

export default () => {
  const [percent, setPetcent] = useState(10)

  return (
    <div>
      <Button onClick={() => {setPetcent(percent + 10)}}>+ 10%</Button>
      <Progress showText={false} percent={percent} theme='danger'/>
      <Progress showText={false} percent={percent} theme='success'/>
      <Progress showText={false} percent={percent} theme='warning'/>
    </div>
  );
};
```

## 不同高度

```tsx
import React, { useEffect, useState } from 'react';
import { Progress, Button } from 'zero-ui-react';

export default () => {
  const [percent, setPetcent] = useState(10)

  return (
    <div>
      <Button onClick={() => {setPetcent(percent + 10)}}>+ 10%</Button>
      <Progress showText={false} percent={percent} theme='danger'/>
      <Progress showText={false} strokeHeight={5} percent={percent} theme='warning'/>
      <Progress showText={false} strokeHeight={20} percent={percent} theme='dark'/>
    </div>
  );
};
```

<API></API>
