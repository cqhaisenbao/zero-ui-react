---
title: Menu 菜单 
path: /components/menu
---

# Menu

## 基本用法

```tsx
import React, {useState} from 'react';
import {Menu,MenuItem} from 'zero-ui-react';

export default () => {

  return (
    <>
      <Menu>
        <MenuItem key={1}> item1</MenuItem>
        <MenuItem key={2}> item2</MenuItem>
        <MenuItem key={3}> item3</MenuItem>
      </Menu>
    </>
  )
};
```

<API></API>
