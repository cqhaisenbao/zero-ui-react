---
title: Layout 布局
path: /components/layout
---

# Layout

## 默认用法

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

<API></API>
