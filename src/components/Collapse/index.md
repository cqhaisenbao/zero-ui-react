---
title: Collapse 折叠面板
path: /components/collapse
---

# Collapse

## 默认用法

```tsx
import React, { useState } from 'react';
import { Collapse, CollapseItem } from 'zero-ui-react';

export default () => {
  return (
    <Collapse defaultSpread={[0]}>
      <CollapseItem title="this is header 1">
        The best preparation for tomorrow is doing your best today
      </CollapseItem>
      <CollapseItem title="this is header 2">
        Quitters never win and winners never quit.
      </CollapseItem>
      <CollapseItem title="this is header 3">
        Knowlegde can change your fate and English can accomplish your future.
      </CollapseItem>
    </Collapse>
  );
};
```

## 手风琴模式

```tsx
import React, { useState } from 'react';
import { Collapse, CollapseItem } from 'zero-ui-react';

export default () => {
  return (
    <Collapse defaultSpread={[0]} accordion>
      <CollapseItem title="this is header 1">
        The best preparation for tomorrow is doing your best today
      </CollapseItem>
      <CollapseItem title="this is header 2">
        Quitters never win and winners never quit.
      </CollapseItem>
      <CollapseItem title="this is header 3">
        Knowlegde can change your fate and English can accomplish your future.
      </CollapseItem>
    </Collapse>
  );
};
```

## disabled

```tsx
import React, { useState } from 'react';
import { Collapse, CollapseItem } from 'zero-ui-react';

export default () => {
  return (
    <Collapse defaultSpread={[0]}>
      <CollapseItem title="this is header 1" disabled>
        The best preparation for tomorrow is doing your best today
      </CollapseItem>
      <CollapseItem title="this is header 2">
        Quitters never win and winners never quit.
      </CollapseItem>
      <CollapseItem title="this is header 3">
        Knowlegde can change your fate and English can accomplish your future.
      </CollapseItem>
    </Collapse>
  );
};
```

<API></API>
