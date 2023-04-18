import { useState } from 'react';
import Child from './Child';

function Parent() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <Child total={total} setTotal={setTotal} />
    </>
  );
}

export default Parent;
//parent傳給child
