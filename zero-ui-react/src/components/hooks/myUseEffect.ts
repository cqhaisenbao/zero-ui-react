import {useEffect, useState} from "react";

const myUseEffect = (val: any, cb: Function) => {
  const [nUpdataecount, setNUpdateCount] = useState(0);
  useEffect(() => {
    setNUpdateCount(nUpdataecount + 1);
  }, [val]);
  useEffect(() => {
    if (nUpdataecount > 1) {
      cb && cb(val);
    }
  }, [nUpdataecount]);
};

export default myUseEffect;
