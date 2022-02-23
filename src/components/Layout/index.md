---
title: Layout 布局
path: /components/layout
---

# Layout

## 布局一

```tsx
import React, { useState } from 'react';
import { Layout, Header, Footer, Content } from 'zero-ui-react';

export default () => {
  return (
    <Layout className={'xxx'} style={{ height: '500px' }}>
      <Header>
        <div>Header</div>
      </Header>
      <Content>
        <div>Content</div>
      </Content>
      <Footer>
        <div>Footer</div>
      </Footer>
    </Layout>
  );
};
```

## 布局二

```tsx
import React, { useState } from 'react';
import { Layout, Header, Footer, Content, Aside } from 'zero-ui-react';

export default () => {
  return (
    <Layout className={'xxx'} style={{ height: '500px' }}>
      <Header>
        <div>Header</div>
      </Header>
      <Layout>
        <Aside>
          <div>Aside</div>
        </Aside>
        <Content>
          <div>Content</div>
        </Content>
      </Layout>
      <Footer>
        <div>Footer</div>
      </Footer>
    </Layout>
  );
};
```

## 布局三

```tsx
import React, { useState } from 'react';
import { Layout, Header, Footer, Content, Aside } from 'zero-ui-react';

export default () => {
  return (
    <Layout style={{ height: '500px' }}>
      <Aside>
        <div>Aside</div>
      </Aside>
      <Layout>
        <Header>
          <div>Header</div>
        </Header>
        <Content>
          <div>Content</div>
        </Content>
        <Footer>
          <div>Footer</div>
        </Footer>
      </Layout>
    </Layout>
  );
};
```

<API></API>
