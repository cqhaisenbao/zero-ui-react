---
title: AutoComplete 自动补全 
path: /components/autocomplete
---

# AutoComplete

## 默认用法

```tsx
import React, { useState } from 'react';
import { Input,AutoComplete } from 'zero-ui-react';

export default () => {
  const citys=['wuhan','xian','shanghai','beijing','shenzhen','chongqing']
  const handleFetch=(query:string)=>{
    return citys.filter(name=>name.includes(query))
  }
  
  return (
    <div style={{ width: '300px' }}>
      <AutoComplete fetchSuggestions={handleFetch} onSelect={(item)=>console.log(item)}/>
    </div>
  );
};
```

<API></API>
