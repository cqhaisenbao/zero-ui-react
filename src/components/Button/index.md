---
title: Button 按钮 
path: /components/button
---

# Button

## 默认按钮

```tsx
import React from 'react';
import {Button} from 'zero-ui-react';

export default () => <Button/>;
```

## 按钮类型

```tsx
import React from 'react';
import {Button} from 'zero-ui-react';

export default () => (
  <>
    <Button/>
    <Button btnType="danger"/>
    <Button btnType="primary"/>
    <Button btnType="link" href="www.baidu.com"/>
  </>
);
```

## 按钮大小

```tsx
import React from 'react';
import {Button} from 'zero-ui-react';

export default () => (
  <>
    <Button>默认大小</Button>
    <Button btnType="primary" size="lg">大按钮</Button>
    <Button btnType="primary" size='sm'>小按钮</Button>
  </>
);
```

## Loading 状态

```tsx
import React from 'react';
import {Button} from 'zero-ui-react';

export default () => {

  return (
    <>
      <Button loading btnType="primary">加载中</Button>
    </>
  )
};
```

## 禁用状态

```tsx
import React from 'react';
import {Button} from 'zero-ui-react';

export default () => {
  const fn = () => {
    console.log(1);
  };

  return (
    <>
      <Button disabled >禁用按钮</Button>
      <Button disabled btnType="primary">禁用按钮</Button>
      <Button disabled btnType="danger">禁用按钮</Button>
    </>
  )
};
```

<API></API>
