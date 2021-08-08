---
title: AutoComplete 自动补全 
path: /components/autocomplete
---

# AutoComplete

## 默认用法
你可以输入字母c，将会出现候选项，此外支持键盘上下键切换，enter键选择，esc退出

```tsx
import React, { useState } from 'react';
import { Input, AutoComplete } from 'zero-ui-react';

export default () => {
  const citys = [{ value: 'wuhan', label: '武汉' },
    { value: 'chongqing', label: '重庆' },
    { value: 'changchun', label: '长春' },
    { value: 'chengdu', label: '成都' },
    { value: 'beijing', label: '北京' }
  ]
  const handleFetch = (query: string) => {
    return citys.filter(name => name.value.includes(query))
  }

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete fetchSuggestions={handleFetch} onSelect={(item) => console.log(item)} />
    </div>
  );
};
```

## 自定义options

```tsx
import React, { useState } from 'react';
import { Input, AutoComplete } from 'zero-ui-react';

export default () => {
  const citys = ['wuhan', 'wuxi', 'wuwei', 'xian', 'shanghai', 'beijing', 'shenzhen', 'chongqing']
  const handleFetch = (query: string) => {
    return citys.filter(name => name.includes(query)).map(name => ({ value: name }))
  }
  const renderOption = (item) => {
    return (
      <>
        <strong style={{ color: 'blue' }}>{item.value}</strong>
      </>
    )
  }

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete fetchSuggestions={handleFetch} renderOption={renderOption} onSelect={(item) => console.log(item)} />
    </div>
  );
};
```

## 异步搜索

支持异步搜索，比如你可以在输入框输入a，同时支持防抖

```tsx
import React, { useState } from 'react';
import { Input, AutoComplete } from 'zero-ui-react';

export default () => {
  const handleFetch = async (query: string) => {
    const data = await fetch(`https://api.github.com/search/users?q=${query}`)
    return data.json().then(({ items }) => {
      return items.slice(0, 10).map(item => ({
        value: item.login,
        ...item
      }))
    })
  }
  const renderOption = (item) => {
    return (
      <>
        <h2>Name:{item.login}</h2>
        <p>url:{item.url}</p>
      </>
    )
  }

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete fetchSuggestions={handleFetch} delay={500} renderOption={renderOption} onSelect={(item) => console.log(item)} />
    </div>
  );
};
```

<API></API>
