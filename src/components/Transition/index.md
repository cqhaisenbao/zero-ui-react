---
title: Transition 动画 
path: /components/transition
---

# Transition

## zoom-in-top 动效

```tsx
import React, { useState } from 'react';
import { Transition, Button } from 'zero-ui-react';

export default () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button onClick={() => setShow(!show)}>zoom-in-top</Button>
      <Transition wrapper='false' in={show} timeout={250} animation='zoom-in-top'>
        <div style={{ width: '100%', background: '#17a2b8', height: '300px' }}>
        </div>
      </Transition>
    </>
  );
};
```

## zoom-in-left 动效

```tsx
import React, { useState } from 'react';
import { Transition, Button } from 'zero-ui-react';

export default () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button onClick={() => setShow(!show)}>zoom-in-left</Button>
      <Transition wrapper='false' in={show} timeout={250} animation='zoom-in-left'>
        <div style={{ width: '100%', background: '#17a2b8', height: '300px' }}>
        </div>
      </Transition>
    </>
  );
};
```

## zoom-in-bottom 动效

```tsx
import React, { useState } from 'react';
import { Transition, Button } from 'zero-ui-react';

export default () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button onClick={() => setShow(!show)}>zoom-in-bottom</Button>
      <Transition wrapper='false' in={show} timeout={250} animation='zoom-in-bottom'>
        <div style={{ width: '100%', background: '#17a2b8', height: '300px' }}>
        </div>
      </Transition>
    </>
  );
};
```

## zoom-in-right 动效

```tsx
import React, { useState } from 'react';
import { Transition, Button } from 'zero-ui-react';

export default () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button onClick={() => setShow(!show)}>zoom-in-right</Button>
      <Transition wrapper='false' in={show} timeout={250} animation='zoom-in-right'>
        <div style={{ width: '100%', background: '#17a2b8', height: '300px' }}>
        </div>
      </Transition>
    </>
  );
};
```

<API></API>
