---
title: Layout 布局
path: /components/layout
---

# Layout

## 布局一

```tsx
import React, { useState } from 'react';
import '/exampleStyle/layout.example.scss';
import { Layout, Header, Footer, Content } from 'zero-ui-react';

export default () => {
  return (
    <Layout style={{ height: '500px' }}>
      <Header className={'x'}>
        <div>Header</div>
      </Header>
      <Content className={'y'}>
        <div>Content</div>
      </Content>
      <Footer className={'x'}>
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
      <Header className="x">
        <div>Header</div>
      </Header>
      <Layout>
        <Aside className="z">
          <div>Aside</div>
        </Aside>
        <Content className="y">
          <div>Content</div>
        </Content>
      </Layout>
      <Footer className="x">
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
      <Aside className="z">
        <div>Aside</div>
      </Aside>
      <Layout>
        <Header className="x">
          <div>Header</div>
        </Header>
        <Content className="y">
          <div>Content</div>
        </Content>
        <Footer className="x">
          <div>Footer</div>
        </Footer>
      </Layout>
    </Layout>
  );
};
```

<API></API>
