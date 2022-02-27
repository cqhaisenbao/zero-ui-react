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
      <Button onClick={() => setVisible(!visible)}>toggle Dialog</Button>
      <Dialog
        title="dialog title"
        visible={visible}
        setVisible={setVisible}
        okText="知道了"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Dialog>
    </>
  );
};
```

## 自定义 footer

```tsx
import React, { useState } from 'react';
import { Dialog } from 'zero-ui-react';
import { Button } from 'zero-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const footer = (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Button btnType={'danger'} onClick={() => setVisible(false)}>
        cancel
      </Button>
      <Button onClick={() => setVisible(false)}>OK</Button>
    </div>
  );

  return (
    <>
      <Button onClick={() => setVisible(!visible)}>自定义footer Dialog</Button>
      <Dialog
        title="dialog title"
        visible={visible}
        setVisible={setVisible}
        footer={footer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Dialog>
    </>
  );
};
```

<API></API>
