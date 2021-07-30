---
title: Menu 菜单 
path: /components/menu
---

# Menu

## 基本用法

```tsx
import React, {useState} from 'react';
import {Menu, MenuItem} from 'zero-ui-react';

export default () => {

  return (
    <>
      <Menu onSelect={(ind)=>console.log(ind)}>
        <MenuItem> item</MenuItem>
        <MenuItem> item2</MenuItem>
        <MenuItem> item3</MenuItem>
      </Menu>
    </>
  )
};
```

## 竖向排列

```tsx
import React, {useState} from 'react';
import {Menu, MenuItem} from 'zero-ui-react';

export default () => {

  return (
    <>
      <Menu mode="vertical" >
        <MenuItem> item1</MenuItem>
        <MenuItem> item2</MenuItem>
        <MenuItem> item3</MenuItem>
      </Menu>
    </>
  )
};
```

## 支持禁选

```tsx
import React, {useState} from 'react';
import {Menu, MenuItem} from 'zero-ui-react';

export default () => {

  return (
    <>
      <Menu onSelect={(ind)=>console.log(ind)}>
        <MenuItem> item1</MenuItem>
        <MenuItem disabled> item2</MenuItem>
        <MenuItem> item3</MenuItem>
      </Menu>
    </>
  )
};
```

<API></API>
