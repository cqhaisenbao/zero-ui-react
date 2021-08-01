---
title: Switch 开关 
path: /components/switch
---

# Switch

## 基本用法

```tsx
import React, {useState} from 'react';
import {Switch} from 'zero-ui-react';

export default () => {
  const [checked, setChecked] = useState(false);

  const checkedChange = (val: boolean) => {
    console.log(val)
  }

  return (
    <>
      <Switch checked={checked} onChange={checkedChange}/>
    </>
  )
};
```

## 禁用状态

```tsx
import React, {useState} from 'react';
import {Switch} from 'zero-ui-react';

export default () => {
  const [checked1] = useState(false);
  const [checked2] = useState(true);

  return (
    <>
      <Switch checked={checked1} disabled/>
      <Switch checked={checked2} disabled/>
    </>
  )
};
```

## 不同尺寸

```tsx
import React, {useState} from 'react';
import {Switch} from 'zero-ui-react';

export default () => {
  const [checked1] = useState(false);
  const [checked2] = useState(true);

  return (
    <>
      <Switch checked={checked1}/>
      <Switch size='sm' checked={checked2}/>
    </>
  )
};
```

<API></API>
