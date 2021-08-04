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
  const citys=[{ value:'wuhan', label:'武汉' },
    { value:'chongqing', label:'重庆' },
    { value:'beijing', label:'北京' }
  ]
  const handleFetch=(query:string)=>{
    return citys.filter(name=>name.value.includes(query))
  }
  
  return (
    <div style={{ width: '300px' }}>
      <AutoComplete fetchSuggestions={handleFetch} onSelect={(item)=>console.log(item)}/>
    </div>
  );
};
```

## 自定义options

```tsx
import React, { useState } from 'react';
import { Input,AutoComplete } from 'zero-ui-react';

export default () => {
  const citys=['wuhan','xian','shanghai','beijing','shenzhen','chongqing']
  const handleFetch=(query:string)=>{
    return citys.filter(name=>name.includes(query)).map(name=>({value:name}))
  }
  const renderOption=(item)=>{
    return(
      <>
        <h3>{item.value}</h3>
      </>
    )
  }
  
  return (
    <div style={{ width: '300px' }}>
      <AutoComplete fetchSuggestions={handleFetch} renderOption={renderOption} onSelect={(item)=>console.log(item)}/>
    </div>
  );
};
```

<API></API>
