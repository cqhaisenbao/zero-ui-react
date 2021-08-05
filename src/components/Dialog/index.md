---
title: Dialog 弹窗
path: /components/dialog
---

# Dialog

## 默认用法

```tsx
import React, { useState } from 'react';
import { Dialog } from 'zero-ui-react';
import { Button } from 'zero-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>toggle Dialog</Button>
      <Dialog title="dialog title" visible={visible} okText="知道了">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Dialog>
    </>
  );
};
```

<API></API>
